import { readFile, readdir, stat } from 'node:fs/promises';
import assert from 'node:assert/strict';
import path from 'node:path';
const root = path.resolve('dist');
for (const page of ['index.html', 'support.html', 'privacy.html']) {
  const html = await readFile(path.join(root, page), 'utf8');
  for (const [, url] of html.matchAll(/(?:src|href)="(\/assets\/[^"#]+)"/g)) assert.ok((await stat(path.join(root, url))).size > 0);
  assert.ok(!html.includes('/src/'), `${page} has an unbuilt reference`);
}
for (const name of ['earth-hero.jpg','minerva-logo.jpg','nextperiod-timetable.jpg','nextperiod-breaks.jpg','nextperiod-reminders.jpg','nextperiod-appearance.jpg']) {
  const bytes = await readFile(path.join(root, 'assets', name));
  assert.equal(bytes.readUInt16BE(0), 0xffd8, `${name} is not JPEG`);
  assert.ok(bytes.length < 500000, `${name} exceeds image budget`);
}
for (const name of (await readdir(path.join(root,'assets'))).filter(n=>n.endsWith('.css'))) {
  const css=await readFile(path.join(root,'assets',name),'utf8');
  assert.ok(!css.includes('fonts.googleapis.com'));
  for(const [,url] of css.matchAll(/url\(["']?(\/assets\/[^)'" ]+)/g)) await stat(path.join(root,url));
}
assert.ok((await readFile(path.join(root,'_headers'),'utf8')).includes('X-Content-Type-Options'));
console.log('Production pages, local assets, fonts, image budgets and Cloudflare headers verified.');
