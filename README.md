# Minerva Studio

Six-section responsive website built with React, Vite and Motion for React. Official supplied logo, original Earth artwork, authentic NextPeriod screenshots, interactive screenshot controls, and support/privacy pages.

## Run locally

Requires Node 22.12+ (Node 24 also supported).

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:5173/. Loopback only.

## Production validation

```sh
npm run build
npm run check
npm run preview
```

Production preview: http://127.0.0.1:4173/. `dist/` is the complete static output. No backend, credentials, database or external runtime fonts.

## Cloudflare Pages — prepared, not deployed

Create a separate Minerva Studio Pages project only after owner approval. Never select or overwrite the existing NextPeriod project.

- Framework: React / Vite
- Build command: `npm run build`
- Output: `dist`
- Node: 22.12+ (`.node-version` selects 22)
- No environment variables required
- `public/_headers` is copied into the output

For direct upload, upload the contents of `dist` after approval. No deployment or remote Git write was performed. Add canonical and absolute social-image metadata when the final domain is known.

## Files

- `src/App.jsx`: sections, product explorer, navigation, support and privacy
- `src/style.css`: responsive styles and locally hosted fonts
- `public/assets/`: production images and fonts
- `vite.config.js`: three HTML entry points
- `docs/design-research.md`: research, asset provenance and image prompt
- `docs/qa.md`: browser checks and limits

Legacy `assets/`, `styles.css`, `main.js` and original helper scripts remain as source history; they are not shipped by Vite. NextPeriod is an external destination and was not modified.

