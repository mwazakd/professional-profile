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

Pushes to `main` deploy via GitHub Actions (`.github/workflows/deploy.yml`) to project **`kdmwaza-portfolio`**.

Required GitHub Actions secrets on this repo:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

(Same values as on `mwazakd/mwazakd.github.io`.)

Site URL: https://kdmwaza-portfolio.pages.dev

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
