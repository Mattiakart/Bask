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

## Deploying on OVH (no npm / nvm on the host)

OVH cannot run Node, npm, or nvm. So **`main` is the prebuilt production site**
you point OVH at — not the Next.js source.

| Branch | Contents | Point OVH here? |
| --- | --- | --- |
| `main` | Prebuilt HTML/CSS/JS (production) | **Yes — production** |
| `cursor/test-site-2cf4` | Prebuilt HTML/CSS/JS (test) | Yes — test / staging |
| `cursor/source-2cf4` | Next.js source code | **No** |

Push to `cursor/source-2cf4` and GitHub Actions builds the site, then force-updates
`main` and `cursor/test-site-2cf4` (`.github/workflows/publish-ovh-branches.yml`).

### One-time OVH setup

1. Create a free form endpoint (Formspree, Getform, Basin, …).
2. In GitHub → **Settings → Secrets and variables → Actions → Variables**:

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | yes | Production origin (baked into `main`) |
| `NEXT_PUBLIC_WAITLIST_ENDPOINT` | yes | Where the email form POSTs |
| `NEXT_PUBLIC_TEST_SITE_URL` | optional | Origin baked into the test branch |

3. In OVH, attach:
   - the **production** domain → branch `main`
   - the **test** domain → branch `cursor/test-site-2cf4`
4. Set each site’s **document root** to the repo root **or** `public_html/`.
5. Sync / redeploy git, then hard-refresh.

You must see `index.html` / `index.php` at the document root — never
`package.json`, `app/`, or `components/`. That is what causes “Index of /”.

### Manual publish (from a machine that has Node)

```bash
git checkout cursor/source-2cf4
NEXT_PUBLIC_SITE_URL=https://your.domain \
NEXT_PUBLIC_WAITLIST_ENDPOINT=https://formspree.io/f/xxxxxxxx \
npm run publish:ovh
```

Or publish one environment:

```bash
npm run build:hosting
npm run publish:main     # → main (production for OVH)
npm run publish:test     # → cursor/test-site-2cf4
```

### Why a domain showed “Index of /”

Pointing a domain at the **source** branch lists files like `app/` and
`package.json`. Point OVH at **`main`** (or the test branch) instead.

### GitHub Pages (optional)

A workflow at `.github/workflows/deploy-pages.yml` can also publish `out/` to
GitHub Pages if you enable Pages → Source: GitHub Actions.

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
