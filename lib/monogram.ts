/**
 * Geometry for the Bask monogram: an open door standing beside the thin spine
 * of a Bodoni "B", with two cats peeking out from under the lower bowl.
 *
 * Kept as data rather than markup because three renderers need it — the React
 * components, the favicon and the social card, the last two going through
 * Satori, which only takes SVG as an image source.
 */
export const MONOGRAM = {
  viewBox: "0 0 106 136",
  width: 106,
  height: 136,
  door: "M2 9 L11 2 V134 L2 127 Z",
  handle: { x: 5.4, y: 63, width: 2.6, height: 14, rx: 1.3 },
  spine: { x: 22, y: 2, width: 5, height: 132 },
  upperBowl:
    "M27 2 H56 C79 2 91 15 91 30 C91 45 79 59 56 59 H27 V52 H54 C69 52 77 43 77 30 C77 17 69 9 54 9 H27 Z",
  lowerBowl:
    "M27 59 H62 C90 59 104 74 104 96 C104 118 90 134 62 134 H27 V127 H60 C81 127 90 115 90 96 C90 77 81 66 60 66 H27 Z",
  cat: {
    baseline: 134,
    centres: [28, 50],
    head: "M-9.5 0 V-10 C-9.5 -12.5 -9 -14 -8 -15.5 L-8.8 -22.5 L-3.4 -17.2 C-2.3 -17.6 -1.2 -17.8 0 -17.8 C1.2 -17.8 2.3 -17.6 3.4 -17.2 L8.8 -22.5 L8 -15.5 C9 -14 9.5 -12.5 9.5 -10 V0 Z",
    eye: { dx: 4, cy: -8, rx: 2.7, ry: 3.7, pupilRx: 0.85, pupilRy: 2.6 },
  },
} as const;

export const INK = "#15161a";
export const ACCENT = "#b0763f";

type MonogramSvgOptions = {
  ink?: string;
  accent?: string;
  background?: string;
  withCats?: boolean;
  /** Extra room around the artwork, in viewBox units. */
  padding?: number;
};

/**
 * Standalone SVG markup for the monogram, for renderers that cannot take JSX.
 */
export function monogramSvg({
  ink = INK,
  accent = ACCENT,
  background,
  withCats = true,
  padding = 0,
}: MonogramSvgOptions = {}): string {
  const { handle, spine, cat } = MONOGRAM;
  const width = MONOGRAM.width + padding * 2;
  const height = MONOGRAM.height + padding * 2;

  const cats = withCats
    ? cat.centres
        .map((x) => {
          const { dx, cy, rx, ry, pupilRx, pupilRy } = cat.eye;
          const eye = (side: -1 | 1) =>
            `<ellipse cx="${side * dx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#ffffff" stroke="${ink}" stroke-width="1.5"/>` +
            `<ellipse cx="${side * dx}" cy="${cy}" rx="${pupilRx}" ry="${pupilRy}" fill="${ink}"/>`;
          return (
            `<g transform="translate(${x} ${cat.baseline})">` +
            `<path d="${cat.head}" fill="#ffffff" stroke="${ink}" stroke-width="2" stroke-linejoin="round"/>` +
            eye(-1) +
            eye(1) +
            `</g>`
          );
        })
        .join("")
    : "";

  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-padding} ${-padding} ${width} ${height}" width="${width}" height="${height}">` +
    (background
      ? `<rect x="${-padding}" y="${-padding}" width="${width}" height="${height}" fill="${background}"/>`
      : "") +
    `<g fill="${ink}">` +
    `<path d="${MONOGRAM.door}"/>` +
    `<rect x="${spine.x}" y="${spine.y}" width="${spine.width}" height="${spine.height}"/>` +
    `<path d="${MONOGRAM.upperBowl}"/>` +
    `<path d="${MONOGRAM.lowerBowl}"/>` +
    `</g>` +
    `<rect x="${handle.x}" y="${handle.y}" width="${handle.width}" height="${handle.height}" rx="${handle.rx}" fill="${accent}"/>` +
    cats +
    `</svg>`
  );
}

/** The same markup as a data URI, for `<img src>` inside Satori. */
export function monogramDataUri(options?: MonogramSvgOptions): string {
  return `data:image/svg+xml;base64,${Buffer.from(monogramSvg(options)).toString("base64")}`;
}
