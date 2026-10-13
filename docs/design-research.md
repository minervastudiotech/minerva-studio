# Design research — October 10, 2026

The six-section brief in the conversation is the implementation specification. No separate complete v1.0 plan file was found in the workspace.

## References visited before implementation

- [SpaceX](https://www.spacex.com/): dark restrained header, large mission panels, concise copy and outlined directional actions. Some hero media was initially blank while loading. Applied cinematic section scale and spare hierarchy.
- [Anthropic](https://www.anthropic.com/): warm neutral ground, editorial serif copy and generous negative space. Applied warm interludes and serif emphasis.
- [Tesla](https://www.tesla.com/): live Model Y L Premium panel foregrounded large product photography, short headline and direct CTAs. Applied product-first composition.
- [Ferrari](https://www.ferrari.com/en-TH): cinematic moving imagery, centered brand language, fine directional details and dark navigation. Applied the concluding identity reveal.

No reference branding, copy or image assets were reused. Creative emphasis follows the requested 35/30/25/10 priorities.

## NextPeriod evidence

Inspected the live timetable and settings. Four genuine 390 × 844 screenshots were captured October 10, 2026. No product data or preferences were edited. The timetable shows existing Friday classes. These are neither reconstructed nor AI-generated screens.

Visible settings confirmed reminders requiring an open browser tab; class duration; optional Class Breaks with suggestions and automatic modes; light/dark/automatic appearance; language control; signed-in account. English/Thai and cloud synchronization are included from the owner's specification. Cross-device synchronization was not exercised. Google Calendar was marked temporarily unavailable and is not promoted as working. Additional language strings exist, so copy does not claim English and Thai are the only languages.

## Assets

- `public/assets/minerva-logo.jpg`: unchanged supplied official artwork; CSS inverts it on dark surfaces.
- `public/assets/nextperiod-*.jpg`: authentic live browser captures.
- `public/assets/earth-hero.jpg`: original built-in imagegen output, converted to a 178 KB JPEG. Atmospheric artwork only.
- DM Sans and Instrument Serif: locally hosted Google Fonts distributions. Licenses in `docs/licenses/`.

Imagegen prompt: Use case: photorealistic-natural. Asset type: cinematic website hero background, wide landscape 16:9. Earth seen from orbit at night, enormous curved planetary horizon rising across the lower half, delicate electric blue atmospheric rim, subtle amber city lights, natural detailed cloud systems in shadow. Upper half deep near-black space with sparse tiny stars. Composition: Earth strongest at right and bottom, left and upper center dark negative space for white website typography. Refined, awe-inspiring and quiet, believable orbital photography, high contrast but no excessive lens flares. No text, no logos, no spacecraft, no UI. Original background for Minerva Studio.

## Technical references

- https://motion.dev/docs/react-use-scroll
- https://motion.dev/docs/react-motion-config
- https://vite.dev/guide/static-deploy.html
- https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/

Transforms/opacity, once-only viewport reveals and one Earth parallax value; no video or WebGL. Reduced motion removes spatial movement, smooth scrolling and CSS transitions. Manual screenshot buttons expose pressed state. Only NextPeriod is listed.
