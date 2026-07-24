type LogoMarkProps = {
  className?: string;
  title?: string;
};

/**
 * The Bask monogram: an open door forms the spine of a Bodoni "B",
 * with two cats peeking out from the bottom of the lower bowl.
 */
export function LogoMark({ className, title }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 130 150"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      fill="none"
    >
      {/* Door leaf, swung open toward the viewer */}
      <path d="M12 4 L34 18 V132 L12 146 Z" fill="currentColor" />
      <rect x="24" y="70" width="3.6" height="13" rx="1.8" fill="#b0763f" />

      {/* Door frame doubles as the thin spine of the B */}
      <rect x="34" y="18" width="5" height="114" fill="currentColor" />

      {/* Upper bowl */}
      <path
        d="M39 18 H66 C88 18 100 30 100 44 C100 58 88 70 66 70 H39 V64 H64 C78 64 86 56 86 44 C86 32 78 24 64 24 H39 Z"
        fill="currentColor"
      />

      {/* Lower bowl */}
      <path
        d="M39 70 H72 C98 70 112 84 112 101 C112 118 98 132 72 132 H39 V126 H70 C90 126 98 116 98 101 C98 86 90 76 70 76 H39 Z"
        fill="currentColor"
      />

      <CatHead x={54} baseline={132} />
      <CatHead x={76} baseline={132} />
    </svg>
  );
}

function CatHead({ x, baseline }: { x: number; baseline: number }) {
  return (
    <g transform={`translate(${x} ${baseline})`}>
      <path
        d="M-10 0 V-9 L-8.6 -19.5 L-2.2 -13.8 C-1.5 -14 -0.8 -14.1 0 -14.1 C0.8 -14.1 1.5 -14 2.2 -13.8 L8.6 -19.5 L10 -9 V0 Z"
        fill="#ffffff"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <ellipse cx="-4.1" cy="-7" rx="2.7" ry="3.5" fill="#ffffff" stroke="currentColor" strokeWidth="1.3" />
      <ellipse cx="4.1" cy="-7" rx="2.7" ry="3.5" fill="#ffffff" stroke="currentColor" strokeWidth="1.3" />
      <ellipse cx="-4.1" cy="-7" rx="0.95" ry="2.4" fill="currentColor" />
      <ellipse cx="4.1" cy="-7" rx="0.95" ry="2.4" fill="currentColor" />
    </g>
  );
}

/**
 * Small-size lockup: the cats fall below legibility under ~40px, so the
 * monogram drops to door + B only.
 */
export function LogoGlyph({ className, title }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 130 150"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      fill="currentColor"
    >
      <path d="M12 4 L34 18 V132 L12 146 Z" />
      <rect x="24" y="70" width="3.6" height="13" rx="1.8" fill="#b0763f" />
      <rect x="34" y="18" width="5" height="114" />
      <path d="M39 18 H66 C88 18 100 30 100 44 C100 58 88 70 66 70 H39 V64 H64 C78 64 86 56 86 44 C86 32 78 24 64 24 H39 Z" />
      <path d="M39 70 H72 C98 70 112 84 112 101 C112 118 98 132 72 132 H39 V126 H70 C90 126 98 116 98 101 C98 86 90 76 70 76 H39 Z" />
    </svg>
  );
}

/**
 * The tone-of-voice cat: peers over a hairline with its tail curling up.
 */
export function CatPeek({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 58" className={className} fill="none" aria-hidden="true">
      <g className="peek-cat">
        <path
          d="M64 56 V32 L67.5 6 L83.5 20 C85.3 19.5 87.1 19.2 89 19.2 C90.9 19.2 92.7 19.5 94.5 20 L110.5 6 L114 32 V56 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <ellipse cx="79" cy="38" rx="4.6" ry="6" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="99" cy="38" rx="4.6" ry="6" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="79" cy="38" rx="1.5" ry="3.9" fill="currentColor" />
        <ellipse cx="99" cy="38" rx="1.5" ry="3.9" fill="currentColor" />
        <path
          d="M150 56 C150 40 162 34 168 40 C173 45 168 52 163 49"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <line x1="0" y1="56" x2="240" y2="56" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
