# Fonts for social card generation

Latin subsets used by `app/opengraph-image.tsx`. Satori — the renderer behind
`next/og` — cannot read WOFF2, so these are TrueType copies of the same two
faces the site loads through `next/font`.

They are read at build time and never served to the browser; the page itself
still gets its fonts from `next/font/google`.

| File | Face | Source |
| --- | --- | --- |
| `BodoniModa-Regular.ttf` | Bodoni Moda 400 | Google Fonts (`fonts.gstatic.com`) |
| `Manrope-Medium.ttf` | Manrope 500 | Google Fonts (`fonts.gstatic.com`) |

Both are licensed under the SIL Open Font License 1.1. Copyright notices and
the full licence text are in `OFL-BodoniModa.txt` and `OFL-Manrope.txt`.
