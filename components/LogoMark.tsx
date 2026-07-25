import { ACCENT, MONOGRAM } from "@/lib/monogram";

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
    <MonogramSvg className={className} title={title}>
      {MONOGRAM.cat.centres.map((x) => (
        <CatHead key={x} x={x} baseline={MONOGRAM.cat.baseline} />
      ))}
    </MonogramSvg>
  );
}

/**
 * Small-size lockup: the cats fall below legibility under ~40px, so the
 * monogram drops to door and B only.
 */
export function LogoGlyph({ className, title }: LogoMarkProps) {
  return <MonogramSvg className={className} title={title} />;
}

function MonogramSvg({
  className,
  title,
  children,
}: LogoMarkProps & { children?: React.ReactNode }) {
  const { handle, spine } = MONOGRAM;

  return (
    <svg
      viewBox={MONOGRAM.viewBox}
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      fill="none"
    >
      <g fill="currentColor">
        <path d={MONOGRAM.door} />
        <rect x={spine.x} y={spine.y} width={spine.width} height={spine.height} />
        <path d={MONOGRAM.upperBowl} />
        <path d={MONOGRAM.lowerBowl} />
      </g>
      <rect
        x={handle.x}
        y={handle.y}
        width={handle.width}
        height={handle.height}
        rx={handle.rx}
        fill={ACCENT}
      />
      {children}
    </svg>
  );
}

function CatHead({ x, baseline }: { x: number; baseline: number }) {
  const { head, eye } = MONOGRAM.cat;

  return (
    <g transform={`translate(${x} ${baseline})`}>
      <path
        d={head}
        fill="#ffffff"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {[-1, 1].map((side) => (
        <g key={side}>
          <ellipse
            cx={side * eye.dx}
            cy={eye.cy}
            rx={eye.rx}
            ry={eye.ry}
            fill="#ffffff"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <ellipse
            cx={side * eye.dx}
            cy={eye.cy}
            rx={eye.pupilRx}
            ry={eye.pupilRy}
            fill="currentColor"
          />
        </g>
      ))}
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
