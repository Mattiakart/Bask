# AGENTS.md

## Cursor Cloud specific instructions

### What this is

Single service: the **Bask in Wardrobe** coming-soon landing page — a Next.js 16
(App Router) + TypeScript app with one server route (`POST /api/waitlist`).
There is no database or external dependency; the app runs standalone.

Standard commands (install / dev / build / start / lint / typecheck) and the
waitlist API contract are already documented in `README.md` — use it as the
source of truth rather than re-deriving them.

### Tooling notes

- Package manager is **npm** (`package-lock.json`). Node 22 works fine.
- Dev server: `npm run dev` serves on `http://localhost:3000` (Turbopack).
- Lint: `npm run lint`. Typecheck: `npx tsc --noEmit`. Build: `npm run build`.
  All pass clean on a fresh install.

### Non-obvious gotchas

- No environment variables are required to run. `NEXT_PUBLIC_SITE_URL`
  (metadata) and `WAITLIST_STORE` (waitlist file path) both have working
  defaults, so the app boots with zero config.
- The waitlist is a **local git-ignored JSON file** at `data/waitlist.json`
  (override with `WAITLIST_STORE`). Signups made during dev/testing persist
  there in the working tree — expect it to grow as you test, and don't be
  surprised that it's untracked. It is deliberately not production-grade
  (won't survive serverless/multi-instance); see `README.md` "Waitlist".
- A "hello world" smoke test is a waitlist signup: submit the hero email form
  (or `curl -X POST http://localhost:3000/api/waitlist -H 'Content-Type: application/json' -d '{"email":"you@example.com"}'`)
  and confirm the entry lands in `data/waitlist.json`.
