# Professional Profile (GitHub Pages)

React + Vite personal/professional site, hosted separately from the academic Astro site on Cloudflare.

- **This site:** https://mwazakd.github.io/professional-profile/
- **Academic site:** Cloudflare Pages (`mwazakd/mwazakd.github.io`)

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

## Deployment

Pushes to `main` deploy via GitHub Actions (`.github/workflows/deploy.yml`).

1. Repo **Settings → Pages → Source: GitHub Actions** (one-time)
2. Push to `main`
3. Site: https://mwazakd.github.io/professional-profile/

`vite.config.ts` uses `base: '/professional-profile/'` to match the project Pages path.

## Project Structure

```
├── components/          # React components
├── public/              # Static assets
│   └── assets/         # Images and PDFs
├── .github/
│   └── workflows/      # GitHub Pages deploy
├── index.html
├── index.tsx
├── vite.config.ts
└── package.json
```

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS (CDN)
- GitHub Pages via Actions

## License

Private and personal.
