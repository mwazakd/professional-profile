# Professional Portfolio

React + Vite professional portfolio, hosted on **Cloudflare Pages**.

- **This site:** https://kdmwaza-portfolio.pages.dev
- **Academic site:** https://mwazakd-github-io.pages.dev (`mwazakd/mwazakd.github.io`)

## Local Development

**Prerequisites:** Node.js 18+ and npm

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deployment (Cloudflare Pages)

**Target URL:** https://kdmwaza-portfolio.pages.dev  
**Project name:** `kdmwaza-portfolio`

### Recommended: Connect Git in Cloudflare Dashboard

(Same approach as the academic site.)

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages**
2. Open project **`kdmwaza-portfolio`** (or **Create** → **Pages** → **Connect to Git** if it does not exist)
3. Set the Git repo to **`mwazakd/professional-profile`**, branch **`main`**
4. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
   - Environment variable: `NODE_VERSION` = `20`
5. Save and deploy

If `kdmwaza-portfolio` is still linked to `mwazakd.github.io`, disconnect that repo first — academic hosting belongs on **`mwazakd-github-io`**.

### Optional: GitHub Actions deploy

`.github/workflows/deploy.yml` can deploy with Direct Upload if these repo secrets are set:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Project Structure

```
├── components/          # React components
├── public/              # Static assets
│   └── assets/         # Images and PDFs
├── .github/
│   └── workflows/      # Cloudflare Pages deploy
├── index.html
├── index.tsx
├── vite.config.ts
└── package.json
```

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS (CDN)
- Cloudflare Pages via Actions

## License

Private and personal.
