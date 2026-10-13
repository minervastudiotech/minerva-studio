# Browser QA — October 10, 2026

## Passed

- Production Vite build and `npm run check`: all three pages, bundled entry references, genuine screenshot files, local fonts, image size budgets and Cloudflare headers.
- Desktop visual inspection at 1440 × 1000 and mobile at 390 × 844.
- Hero image and supplied logo load; editorial sections and product screens render.
- Mobile menu opens, exposes links, and closes after navigation.
- Hero CTA navigates to NextPeriod section.
- Screenshot controls change descriptive copy, pressed state and authentic screenshot path.
- Support FAQ expands and displays reminder requirements.
- Privacy and support routes load directly with correct page titles.
- No horizontal overflow at the inspected desktop/mobile widths.
- Reduced-motion support reviewed in code: MotionConfig user policy, conditional parallax and entrance transforms, CSS smooth-scroll/transition overrides.

## Limits

No physical-device testing, cross-browser suite or runtime reduced-motion emulation was performed. No Lighthouse score is claimed. NextPeriod cross-device synchronization and notifications were not exercised. Screenshot content reflects the live app on the capture date.

## Evidence

`docs/screenshots/` contains desktop and mobile browser captures. Original references and asset provenance are documented in `docs/design-research.md`.

The site is local only. No public deployment, remote push, NextPeriod code change, or app data mutation was performed.

Final correction: enforced the official logo's square aspect ratio in the identity section. Rebuilt and reran production checks successfully. Also verified 320px width has no horizontal overflow, all local anchors resolve, no loaded images are broken, and production browser logs contain no errors.
