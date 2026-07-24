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
- No image assets: the monogram, garment silhouettes and app screens are all
  hand-authored SVG and markup, so everything stays sharp at any size

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
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

The store defaults to `data/waitlist.json` (git-ignored) and can be pointed
elsewhere with `WAITLIST_STORE`. It is deliberately the smallest thing that
works: a file write, with concurrent writes serialised in `lib/waitlist.ts`.
**A file store does not survive on serverless or multi-instance hosting** —
before launch, replace the body of `addToWaitlist` with a database insert or an
email-provider call. Nothing else needs to change.

### Environment

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | Canonical URL for metadata and Open Graph tags |
| `WAITLIST_STORE` | `data/waitlist.json` | Path to the waitlist file |

## Layout

```
app/
  layout.tsx            fonts, metadata
  page.tsx              section composition
  globals.css           design tokens, grain, keyframes
  icon.svg              favicon
  api/waitlist/route.ts signup endpoint
components/
  LogoMark.tsx          monogram (door + B + cats), small-size glyph, cat peek
  Garment.tsx           garment silhouettes by kind and tone
  AppIcons.tsx          UI icons used in the mockups
  phone/                phone frame and the four app screens
  vignettes.tsx         archive and boutique-sync illustrations
lib/waitlist.ts         store
scripts/shoot.mjs       Playwright screenshot pass, for eyeballing changes
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
