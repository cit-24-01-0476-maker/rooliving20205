# Academic Landscape Coordination Platform (Vite + React + TypeScript)

This repo contains the full front-end code for the **Academic Landscape Coordination Platform**.

## Requirements
- Node.js 18+ (recommended: Node 20/22)
- npm (comes with Node)

## Run locally
```bash
npm install
npm run dev
```
Then open the URL shown in the terminal (default: http://localhost:3000).

## Build (production)
```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)
This repo already includes a GitHub Actions workflow that builds and deploys to GitHub Pages on every push to `main`.

1. Create a new GitHub repository and push this code.
2. In GitHub: **Settings → Pages**
   - **Build and deployment**: select **GitHub Actions**.
3. Push to `main`. The workflow will publish the site.

Your site URL will be:
`https://<your-username>.github.io/<your-repo-name>/`

> Note: This project uses `HashRouter` so client-side routes work on GitHub Pages without extra rewrite rules.

## Deploy (Netlify / Vercel)
- **Build command:** `npm run build`
- **Publish directory:** `dist`

If you switch back to `BrowserRouter`, make sure your host is configured for SPA route rewrites.

## Project notes
- UI components are under `src/components/ui/`
- Pages are under `src/pages/`
