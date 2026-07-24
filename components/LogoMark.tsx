type LogoMarkProps = {
  className?: string;
  title?: string;
};

/**
 * The Bask monogram: an open door stands beside the thin spine of a Bodoni
 * "B", with two cats peeking out from under the lower bowl.
 */
export function LogoMark({ className, title }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 106 136"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      fill="none"
    >
      <Monogram />
      <CatHead x={28} baseline={134} />
      <CatHead x={50} baseline={134} />
    </svg>
  );
}

/**
 * Small-size lockup: the cats fall below legibility under ~40px, so the
 * monogram drops to door and B only.
 */
export function LogoGlyph({ className, title }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 106 136"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      fill="none"
    >
      <Monogram />
    </svg>
  );
}

function Monogram() {
  return (
    <g fill="currentColor">
      {/* Door leaf, standing ajar beside the frame */}
      <path d="M2 9 L11 2 V134 L2 127 Z" />
      <rect x="5.4" y="63" width="2.6" height="14" rx="1.3" fill="#b0763f" />

      {/* Frame line doubling as the spine of the B */}
      <rect x="22" y="2" width="5" height="132" />

      {/* Upper bowl */}
      <path d="M27 2 H56 C79 2 91 15 91 30 C91 45 79 59 56 59 H27 V52 H54 C69 52 77 43 77 30 C77 17 69 9 54 9 H27 Z" />

      {/* Lower bowl */}
      <path d="M27 59 H62 C90 59 104 74 104 96 C104 118 90 134 62 134 H27 V127 H60 C81 127 90 115 90 96 C90 77 81 66 60 66 H27 Z" />
    </g>
  );
}

function CatHead({ x, baseline }: { x: number; baseline: number }) {
  return (
    <g transform={`translate(${x} ${baseline})`}>
      <path
        d="M-9.5 0 V-10 C-9.5 -12.5 -9 -14 -8 -15.5 L-8.8 -22.5 L-3.4 -17.2 C-2.3 -17.6 -1.2 -17.8 0 -17.8 C1.2 -17.8 2.3 -17.6 3.4 -17.2 L8.8 -22.5 L8 -15.5 C9 -14 9.5 -12.5 9.5 -10 V0 Z"
        fill="#ffffff"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <ellipse cx="-4" cy="-8" rx="2.7" ry="3.7" fill="#ffffff" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="4" cy="-8" rx="2.7" ry="3.7" fill="#ffffff" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="-4" cy="-8" rx="0.85" ry="2.6" fill="currentColor" />
      <ellipse cx="4" cy="-8" rx="0.85" ry="2.6" fill="currentColor" />
    </g>
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
