# oskaripessinen.com

Personal portfolio built with [Astro](https://astro.build).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

All content (links, experience, education, projects) lives in `src/data/site.ts`.

## Deploy

Hosted on Cloudflare Workers (static assets), see `wrangler.jsonc`.

```bash
npm run deploy   # astro build && wrangler deploy
```

## Resume

The resume source is `resume/resume.tex` (XeLaTeX, Noto Sans). Build it and copy the PDF into the site:

```bash
tectonic -X compile --outdir resume resume/resume.tex
cp resume/resume.pdf public/assets/resume.pdf
```
