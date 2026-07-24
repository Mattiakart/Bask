export type GarmentKind =
  | "blazer"
  | "trousers"
  | "shirt"
  | "sweater"
  | "jeans"
  | "dress"
  | "gown"
  | "bag"
  | "pump"
  | "sneaker"
  | "boot"
  | "sunglasses"
  | "belt"
  | "earrings";

export type GarmentTone = "dark" | "light" | "denim" | "blush" | "gold" | "copper";

type Painted = {
  /** Body colour. */
  fill: string;
  /** Outline, a shade of the fill. */
  stroke: string;
  /** Interior seams and plackets, legible against the fill. */
  detail: string;
};

const TONES: Record<GarmentTone, Painted> = {
  dark: { fill: "#23252b", stroke: "rgba(21,22,26,0.5)", detail: "rgba(255,255,255,0.34)" },
  light: { fill: "#eae7e1", stroke: "rgba(21,22,26,0.32)", detail: "rgba(21,22,26,0.24)" },
  denim: { fill: "#a6b3c1", stroke: "rgba(21,22,26,0.3)", detail: "rgba(255,255,255,0.55)" },
  blush: { fill: "#e0c5be", stroke: "rgba(21,22,26,0.26)", detail: "rgba(21,22,26,0.2)" },
  gold: { fill: "#cdac7d", stroke: "rgba(21,22,26,0.26)", detail: "rgba(21,22,26,0.2)" },
  copper: { fill: "#b0763f", stroke: "rgba(21,22,26,0.28)", detail: "rgba(255,255,255,0.4)" },
};

const SHAPES: Record<GarmentKind, (p: Painted) => React.ReactNode> = {
  blazer: ({ fill, stroke, detail }) => (
    <>
      <path
        d="M22 8 L32 13 L42 8 L52 13 L56 43 L48 45.5 L47 57 H17 L16 45.5 L8 43 L12 13 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path d="M23 9 L31 29 M41 9 L33 29 M32 29 V57" fill="none" stroke={detail} strokeWidth="1.3" strokeLinejoin="round" />
    </>
  ),
  trousers: ({ fill, stroke, detail }) => (
    <>
      <path d="M20 7 H44 L46 24 L40 57 H34 L32 31 L30 57 H24 L18 24 Z" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M19 13 H45 M32 13 V31" fill="none" stroke={detail} strokeWidth="1.2" />
    </>
  ),
  shirt: ({ fill, stroke, detail }) => (
    <>
      <path d="M24 9 L32 15 L40 9 L50 13 L54 26 L47 29 V57 H17 V29 L10 26 L14 13 Z" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M24 9 L32 15 L40 9 L36 7 L32 10 L28 7 Z" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M32 15 V57" fill="none" stroke={detail} strokeWidth="1.2" />
    </>
  ),
  sweater: ({ fill, stroke, detail }) => (
    <>
      <path
        d="M23 11 C26 15.5 38 15.5 41 11 L53 17 L51 30 L46 28 V56 H18 V28 L13 30 L11 17 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path d="M18 51 H46" fill="none" stroke={detail} strokeWidth="1.2" />
    </>
  ),
  jeans: ({ fill, stroke, detail }) => (
    <>
      <path d="M20 7 H44 L46 24 L40 57 H34 L32 31 L30 57 H24 L18 24 Z" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M19 13 H45 M23.5 15 L27 21 M40.5 15 L37 21 M32 13 V31" fill="none" stroke={detail} strokeWidth="1.2" />
    </>
  ),
  dress: ({ fill, stroke }) => (
    <>
      <path d="M22 12 L32 18 L42 12 L40 30 L50 57 L14 57 L24 30 Z" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M22 12 L26 5 M42 12 L38 5" fill="none" stroke={fill} strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  gown: ({ fill, stroke, detail }) => (
    <>
      <path
        d="M25 9 L32 14 L39 9 L42 12 L38 28 C48 36 52 46 53 57 H11 C12 46 16 36 26 28 L22 12 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path d="M25 9 L28 3 M39 9 L36 3" fill="none" stroke={fill} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M26 28 C31 30 33 30 38 28" fill="none" stroke={detail} strokeWidth="1.2" />
    </>
  ),
  bag: ({ fill, stroke }) => (
    <>
      <path d="M23 28 C23 15 41 15 41 28" fill="none" stroke={fill} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M14 26 H50 L47 55 H17 Z" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M29.5 24 h5 v5 h-5 z" fill="#b0763f" />
    </>
  ),
  pump: ({ fill, stroke }) => (
    <>
      <path
        d="M9 51 C9 42 15 35 26 31 L44 24 L47 33 L29 40 C22 43 18 47 17 51 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path d="M42 34 L46.5 32 L50 51 H46.5 Z" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M10 52.5 H30" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  sneaker: ({ fill, stroke, detail }) => (
    <>
      <path
        d="M55 42 C55 36 51 32 46 32 H39 L31 38 L17 41 C12 42 9 44 9 48 V51 H53 C54.1 51 55 50.1 55 49 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path d="M44 34 L39 39 M38.5 33 L33 39 M9.5 47 H54" fill="none" stroke={detail} strokeWidth="1.2" />
    </>
  ),
  boot: ({ fill, stroke }) => (
    <path
      d="M53 10 H37 V34 L23 38 C21 38.6 20 40 20 42 V48 H46 V54 H53 Z"
      fill={fill}
      stroke={stroke}
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
  ),
  sunglasses: ({ fill, stroke }) => (
    <>
      <path d="M7 25 H29 C29 35 25 39 18 39 C11 39 7 34 7 26 Z" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M57 25 H35 C35 35 39 39 46 39 C53 39 57 34 57 26 Z" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M29 26 C31 23.5 33 23.5 35 26 M7 25 L2 21 M57 25 L62 21" fill="none" stroke={fill} strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  belt: ({ fill, stroke }) => (
    <>
      <path d="M4 27 H46 V38 H4 Z" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
      <rect x="43" y="23" width="16" height="19" rx="3" fill="none" stroke="#b0763f" strokeWidth="2.4" />
      <path d="M40 32.5 H52" fill="none" stroke="#b0763f" strokeWidth="2.4" strokeLinecap="round" />
    </>
  ),
  earrings: ({ fill }) => (
    <>
      <circle cx="23" cy="39" r="8" fill="none" stroke={fill} strokeWidth="2.6" />
      <path d="M23 31 V24" stroke={fill} strokeWidth="2" strokeLinecap="round" />
      <circle cx="23" cy="22" r="2.2" fill={fill} />
      <circle cx="42" cy="39" r="8" fill="none" stroke={fill} strokeWidth="2.6" />
      <path d="M42 31 V24" stroke={fill} strokeWidth="2" strokeLinecap="round" />
      <circle cx="42" cy="22" r="2.2" fill={fill} />
    </>
  ),
};

type GarmentProps = {
  kind: GarmentKind;
  tone?: GarmentTone;
  className?: string;
};

export function Garment({ kind, tone = "dark", className }: GarmentProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      {SHAPES[kind](TONES[tone])}
    </svg>
  );
}
