# Bask in Wardrobe — landing page

Coming-soon landing page for the **Bask in Wardrobe** webapp: a digital wardrobe
that remembers what you wore, when and where. The page announces the webapp,
walks through the product, and collects email addresses for the launch waitlist.

Copy is Italian-first with the English brand tagline (*A different outfit for
every occasion*), matching the concept boards the design came from.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) + TypeScript
- Tailwind CSS 4 — design tokens live in `@theme` inside `app/globals.css`
- Bodoni Moda (display) and Manrope (UI) via `next/font`
- No image assets in the page: the monogram, garment silhouettes and app screens
  are all hand-authored SVG and markup, so everything stays sharp at any size.
  The favicon and social card are generated from the same geometry at build time

## Running it

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000
```

```bash
npm run build && npm run start   # production
npm run lint
npx tsc --noEmit                 # typecheck
```

## Waitlist

`POST /api/waitlist` takes `{ "email": "..." }` and appends
`{ email, createdAt }` to a JSON file. Responses:

| Status | Body | Meaning |
| --- | --- | --- |
| `201` | `{ "status": "added" }` | New signup stored |
| `200` | `{ "status": "duplicate" }` | Already on the list |
| `422` | `{ "error": "invalid_email" }` | Failed validation |
| `400` | `{ "error": "invalid_body" }` | Body was not JSON |
| `503` | `{ "error": "store_unavailable" }` | Write failed |

The store is `data/waitlist.json` (git-ignored), resolved against the working
directory the server runs in. It is deliberately the smallest thing that works:
a file write, with concurrent writes serialised in `lib/waitlist.ts`. The path
is a literal rather than a setting, both because Turbopack can only trace the
route's dependencies when it is, and because relocating the file is not the
upgrade anyone actually needs.

**A file store does not survive on serverless or multi-instance hosting** —
before launch, replace the body of `addToWaitlist` with a database insert or an
email-provider call. Nothing else needs to change.

### Environment

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | Canonical origin for the canonical link, Open Graph tags, `robots.txt` and the sitemap |

Set this before deploying, or shared links and the sitemap will point at
localhost. See `.env.example`.

## Layout

```
app/
  layout.tsx            fonts, metadata
  page.tsx              section composition
  globals.css           design tokens, grain, keyframes
  icon.tsx              favicon, 64px PNG
  opengraph-image.tsx   1200x630 social card
  robots.ts             robots.txt
  sitemap.ts            sitemap.xml
  api/waitlist/route.ts signup endpoint
components/
  LogoMark.tsx          monogram, small-size glyph, cat peek
  Garment.tsx           garment silhouettes by kind and tone
  AppIcons.tsx          UI icons used in the mockups
  phone/                phone frame and the four app screens
  vignettes.tsx         archive and boutique-sync illustrations
lib/
  monogram.ts           monogram geometry, shared by all three renderers
  site.ts               canonical URL and shared copy
  waitlist.ts           store
assets/fonts/           TrueType copies for the social card, plus licences
scripts/shoot.mjs       Playwright screenshot pass, for eyeballing changes
```

The monogram lives as data in `lib/monogram.ts` because three renderers need
it: the React components draw it as JSX, while the favicon and social card go
through Satori, which only accepts SVG as an image source.

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
