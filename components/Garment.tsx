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

const TONES: Record<GarmentTone, { fill: string; stroke: string }> = {
  dark: { fill: "#23252b", stroke: "rgba(21,22,26,0.5)" },
  light: { fill: "#eae7e1", stroke: "rgba(21,22,26,0.3)" },
  denim: { fill: "#a6b3c1", stroke: "rgba(21,22,26,0.28)" },
  blush: { fill: "#e0c5be", stroke: "rgba(21,22,26,0.26)" },
  gold: { fill: "#cdac7d", stroke: "rgba(21,22,26,0.26)" },
  copper: { fill: "#b0763f", stroke: "rgba(21,22,26,0.28)" },
};

type Painted = { fill: string; stroke: string };

const SHAPES: Record<GarmentKind, (p: Painted) => React.ReactNode> = {
  blazer: ({ fill, stroke }) => (
    <>
      <path d="M27 8 L13 15 L9 31 L16 34 V57 H31 V21 Z" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M37 8 L51 15 L55 31 L48 34 V57 H33 V21 Z" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M27 8 L32 14 L37 8" fill="none" stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
    </>
  ),
  trousers: ({ fill, stroke }) => (
    <>
      <path d="M20 7 H44 L46 24 L40 57 H34 L32 31 L30 57 H24 L18 24 Z" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M19 13 H45" fill="none" stroke={stroke} strokeWidth="1.1" />
    </>
  ),
  shirt: ({ fill, stroke }) => (
    <>
      <path d="M24 9 L32 15 L40 9 L50 13 L54 26 L47 29 V57 H17 V29 L10 26 L14 13 Z" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M24 9 L32 15 L40 9 L36 7 L32 10 L28 7 Z" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M32 15 V57" fill="none" stroke={stroke} strokeWidth="1.1" />
    </>
  ),
  sweater: ({ fill, stroke }) => (
    <path
      d="M23 11 C26 15.5 38 15.5 41 11 L53 17 L51 30 L46 28 V56 H18 V28 L13 30 L11 17 Z"
      fill={fill}
      stroke={stroke}
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
  ),
  jeans: ({ fill, stroke }) => (
    <>
      <path d="M20 7 H44 L46 24 L40 57 H34 L32 31 L30 57 H24 L18 24 Z" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M19 13 H45 M23 15 L27 21 M41 15 L37 21" fill="none" stroke={stroke} strokeWidth="1.1" />
    </>
  ),
  dress: ({ fill, stroke }) => (
    <>
      <path d="M22 12 L32 18 L42 12 L40 30 L50 57 L14 57 L24 30 Z" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M22 12 L26 5 M42 12 L38 5" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  gown: ({ fill, stroke }) => (
    <>
      <path
        d="M25 9 L32 14 L39 9 L42 12 L38 28 C48 36 52 46 53 57 H11 C12 46 16 36 26 28 L22 12 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path d="M25 9 L28 3 M39 9 L36 3" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
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
      <path d="M12 48 C12 34 22 26 38 21 L50 17 L52 27 L40 31 C28 35 22 41 20 48 Z" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M48 27 L52 49 L47 49 L43 29 Z" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M12 49 H44" fill="none" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
    </>
  ),
  sneaker: ({ fill, stroke }) => (
    <>
      <path
        d="M9 42 C9 36 13 32 18 32 H25 L33 38 L47 41 C52 42 55 44 55 48 V51 H11 C9.9 51 9 50.1 9 49 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path d="M20 34 L25 39 M25 33 L31 39 M11 47 H55" fill="none" stroke={stroke} strokeWidth="1.1" />
    </>
  ),
  boot: ({ fill, stroke }) => (
    <path
      d="M20 10 H36 V34 L50 38 C52 38.6 53 40 53 42 V48 H27 V54 H20 Z"
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
