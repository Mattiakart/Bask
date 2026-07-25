# Bask — testing

This branch is the **built website** (HTML/CSS/JS only). No `npm install` or
`npm run build` is required — shared hosts like OVH can serve it as-is.

## OVH setup

1. Deploy / pull this branch: `cursor/test-site-2cf4`
2. Set the **document root** to the repository root **or** `public_html/`
3. Sync git, then hard-refresh the browser

You should see `index.html` / `index.php` at the document root — never
`package.json`, `app/`, or `components/`.
