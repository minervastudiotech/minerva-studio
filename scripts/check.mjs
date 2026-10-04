import { access, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('../', import.meta.url)));
const pages = ['index.html', 'support.html', 'privacy.html'];
const failures = [];

for (const page of pages) {
  const html = await readFile(resolve(root, page), 'utf8');
  if (!/<title>[^<]+<\/title>/.test(html)) failures.push(`${page}: missing title`);
  if (!/<meta name="description" content="[^"]+">/.test(html)) failures.push(`${page}: missing description`);
  if ((html.match(/<h1\b/g) ?? []).length !== 1) failures.push(`${page}: expected one h1`);

  for (const [, raw] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(?:https?:|mailto:)/.test(raw)) continue;
    const [path, fragment] = raw.split('#');
    const targetPage = path || page;
    const target = resolve(root, targetPage);
    if (!target.startsWith(root)) {
      failures.push(`${page}: path escapes site: ${raw}`);
      continue;
    }
    try {
      await access(target);
      if (fragment && /\.html$/.test(targetPage)) {
        const targetHtml = path ? await readFile(target, 'utf8') : html;
        if (!targetHtml.includes(`id="${fragment}"`)) failures.push(`${page}: missing anchor ${raw}`);
      }
    } catch {
      failures.push(`${page}: missing file ${raw}`);
    }
  }
}

const css = await readFile(resolve(root, 'styles.css'), 'utf8');
for (const [, asset] of css.matchAll(/url\("([^"]+)"\)/g)) {
  try { await access(resolve(root, asset)); }
  catch { failures.push(`styles.css: missing asset ${asset}`); }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Static pages, metadata, links, anchors, and assets passed.');
}
