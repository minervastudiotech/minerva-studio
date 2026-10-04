# Minerva Studio website

A static, responsive website for Minerva Studio. It includes the home, support, and privacy pages. There is no app server, database, or build dependency.

## Preview locally

Run `npm run dev` to preview at `http://127.0.0.1:4173`, or open `index.html` in a browser. The local preview uses only Node.js built-ins; no package installation is needed. All internal paths are relative, so the site works both at a GitHub Pages project URL (`/repository-name/`) and at a root domain.

## Publish with GitHub Pages

1. Push this folder to a public GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**. Choose the branch containing the site and **/(root)** as the folder.
4. Save. GitHub will provide the public `github.io` URL once publishing finishes.

The `.nojekyll` file makes GitHub Pages serve the static files directly. No workflow or package installation is needed.

## Before launch

- Replace the labeled NextPeriod screenshot spaces in `index.html` with genuine product screenshots when available.
- Confirm the public support address `minervastudio.tech@gmail.com` remains current.
- Review `privacy.html` against the final hosting setup and publish a separate app privacy notice if NextPeriod handles personal data.
- Add a canonical URL and absolute social preview image URLs when the final domain is known.

## Structure

- `index.html` — homepage
- `support.html` — support guidance
- `privacy.html` — website privacy information
- `styles.css` — shared styles and responsive layouts
- `main.js` — mobile navigation and header behavior
- `assets/` — original visual assets
