# Bask in Wardrobe

Landing page per il webapp in arrivo: armadio digitale, outfit legati agli eventi, memoria di cosa hai indossato.

**Tagline:** A different outfit for every occasion.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Waitlist via `POST /api/waitlist` (persistenza in `data/waitlist.json`, gitignored)

## Sviluppo

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Script

| Comando | Descrizione |
| --- | --- |
| `npm run dev` | Server di sviluppo |
| `npm run build` | Build di produzione |
| `npm run start` | Avvia la build |
| `npm run lint` | ESLint |

## Waitlist

Le iscrizioni vengono salvate in `data/waitlist.json` (creato al primo submit). In produzione conviene sostituire con un database o un provider email.
