# Bask in Wardrobe — landing page

Marketing site for **Bask in Wardrobe**, a stunning AI companion for what you
wear. It remembers every look, reads your calendar and the weather, and helps
you dress with intention. The page walks through the product and collects email
addresses for people who want to get started.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) + TypeScript
- Tailwind CSS 4 — design tokens live in `@theme` inside `app/globals.css`
- Bodoni Moda (display) and Manrope (UI) via `next/font`
- Brand logos live in `public/brand/` (official mark + lockup); garment silhouettes and app screens
  are all hand-authored SVG and markup, so everything stays sharp at any size.
  Favicon and social card live in `public/` alongside the brand assets

## Running it

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000
```

```bash
npm run build && npm run start   # Node production server (includes /api/waitlist)
npm run build:static             # Plain files in out/ for any static host
npm run lint
npx tsc --noEmit                 # typecheck
```

## Deploying

### Why a domain showed “Index of /”

Pointing a domain at the GitHub repository (or at a folder of source files) only
lists those files. This project is a Next.js app — the browser needs the
**built** site, not `app/`, `components/`, or `package.json`.

Build once, then publish only the result:

| Mode | Command | Publish |
| --- | --- | --- |
| Static (GitHub Pages, Netlify, Cloudflare Pages, S3, any file host) | `npm run build:static` | the `out/` folder |
| Node server (Vercel, Railway, a VPS) | `npm run build` then `npm start` | the running process |

### Static hosting (recommended for a coming-soon page)

1. Create a free form endpoint (Formspree, Getform, Basin, …) and copy its URL.
2. Set environment variables (locally in `.env.local`, or as host / Actions vars):

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | yes | Canonical origin for links, Open Graph, `robots.txt`, sitemap |
| `NEXT_PUBLIC_WAITLIST_ENDPOINT` | yes on static | Where the form POSTs; static hosts cannot run `/api/waitlist` |
| `NEXT_PUBLIC_BASE_PATH` | only for project Pages | e.g. `/Bask` when the site lives at `user.github.io/Bask` |

3. Build and upload the contents of `out/`:

```bash
NEXT_PUBLIC_SITE_URL=https://your.domain \
NEXT_PUBLIC_WAITLIST_ENDPOINT=https://formspree.io/f/xxxxxxxx \
npm run build:static
```

A static build leaves the waitlist API out on purpose (`route.node.ts` is
excluded via `pageExtensions`). The form posts to
`NEXT_PUBLIC_WAITLIST_ENDPOINT` instead.

### GitHub Pages from this repo

A workflow at `.github/workflows/deploy-pages.yml` builds on every push to
`main` and publishes `out/`.

1. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Repo → **Settings → Secrets and variables → Actions → Variables**, add the
   three `NEXT_PUBLIC_*` values above.
3. Merge to `main` (or run the workflow manually). Point the custom domain at
   GitHub Pages — **do not** point it at the raw repository.

### Node hosting

```bash
NEXT_PUBLIC_SITE_URL=https://your.domain npm run build
npm start
```

`/api/waitlist` is included and writes to `data/waitlist.json`. That file store
does not survive serverless or multi-instance hosting — replace the body of
`addToWaitlist` with a database insert or email-provider call before launch.

## Waitlist

### Node build (`/api/waitlist`)

`POST /api/waitlist` takes `{ "email": "..." }` and appends
`{ email, createdAt }` to a JSON file. Responses:

| Status | Body | Meaning |
| --- | --- | --- |
| `201` | `{ "status": "added" }` | New signup stored |
| `200` | `{ "status": "duplicate" }` | Already on the list |
| `422` | `{ "error": "invalid_email" }` | Failed validation |
| `400` | `{ "error": "invalid_body" }` | Body was not JSON |
| `503` | `{ "error": "store_unavailable" }` | Write failed |

Writes are serialised in `lib/waitlist.ts` so concurrent submissions cannot
clobber each other.

### Static build

The form POSTs JSON `{ "email": "..." }` to `NEXT_PUBLIC_WAITLIST_ENDPOINT`.
Any service that accepts that shape and returns 2xx works. Duplicates are not
reported separately by those services, so a 2xx is treated as success.

## Layout

```
app/
  layout.tsx              fonts, metadata
  page.tsx                section composition
  globals.css             design tokens, grain, keyframes
  icon.png/route.tsx      favicon, 64px PNG
  og.png/route.tsx        1200x630 social card
  robots.ts               robots.txt
  sitemap.ts              sitemap.xml
  api/waitlist/route.node.ts   signup endpoint (Node builds only)
components/
  LogoMark.tsx            official mark + lockup image components
  Garment.tsx             garment silhouettes by kind and tone
  AppIcons.tsx            UI icons used in the mockups
  phone/                  phone frame and the four app screens
  vignettes.tsx           archive and boutique-sync illustrations
lib/
  site.ts                 canonical URL and shared copy
  waitlist.ts             store
assets/fonts/             TrueType copies for the social card, plus licences
.github/workflows/        GitHub Pages deploy
scripts/shoot.mjs         Playwright screenshot pass, for eyeballing changes
```

## Motion and accessibility

Three intentional movements: the hero rising on load, sections fading up as they
enter the viewport, and the brand cat popping up over its rule. Scroll reveals
use CSS `animation-timeline: view()` rather than JavaScript, so browsers without
support simply render the final state — content is never hidden behind a script.
Everything collapses under `prefers-reduced-motion: reduce`.

Phone mockups are marked `aria-hidden` and described by a caption, so screen
readers get one sentence instead of a pile of decorative labels. Body and
accent text meet WCAG AA against the stone background; `--color-accent` is
reserved for rules, dots and icons, with `--color-accent-ink` for text.

## Screenshots

`scripts/shoot.mjs` walks the page at desktop and mobile widths, captures each
viewport, exercises the waitlist form and fails on console errors:

```bash
npm run build && npm run start -- --port 3100
npm install --no-save playwright && npx playwright install chromium
node scripts/shoot.mjs        # writes to /tmp/shots
```
