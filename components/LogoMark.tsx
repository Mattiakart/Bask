import { type SVGProps } from "react";

type LogoMarkProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

/** Stylized B: door-stem with two peeking cats in the lower bowl. */
export function LogoMark({ title = "Bask in Wardrobe", className, ...props }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 80 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      {/* Door stem */}
      <path
        d="M14 8v80"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="square"
      />
      {/* Door gap hint */}
      <path
        d="M17.5 18h5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M17.5 48h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.35"
      />
      {/* Upper B bowl */}
      <path
        d="M17.5 12h22c12.5 0 22 8.2 22 18.5S52 49 39.5 49H17.5"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      {/* Lower B bowl */}
      <path
        d="M17.5 49h26c13.5 0 24 9 24 20.5S57 90 43.5 90H17.5"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      {/* Peeking cats */}
      <g fill="currentColor">
        <path d="M28 78c0-4.2 2.8-7 6-7s6 2.8 6 7v4H28v-4Z" />
        <path d="M30.2 72.2 28 68.5l3.4 1.6 2.8-3.8 1.2 4.2Z" />
        <path d="M39.8 72.2 42 68.5l-3.4 1.6-2.8-3.8-1.2 4.2Z" />
        <circle cx="31.6" cy="78.2" r="0.9" fill="var(--bg, #e9ebed)" />
        <circle cx="36.4" cy="78.2" r="0.9" fill="var(--bg, #e9ebed)" />

        <path d="M44 80c0-3.6 2.4-6 5.2-6s5.2 2.4 5.2 6v3.2H44V80Z" />
        <path d="M45.8 75.2 44 72l2.9 1.3 2.3-3.2 1 3.5Z" />
        <path d="M53.6 75.2 55.4 72l-2.9 1.3-2.3-3.2-1 3.5Z" />
        <circle cx="47.2" cy="80" r="0.8" fill="var(--bg, #e9ebed)" />
        <circle cx="51.2" cy="80" r="0.8" fill="var(--bg, #e9ebed)" />
      </g>
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-auto shrink-0 text-ink" />
      <span className="leading-none">
        <span className="block font-serif text-lg font-semibold tracking-[0.08em]">
          BASK
        </span>
        <span className="block font-sans text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted">
          in Wardrobe
        </span>
      </span>
    </span>
  );
}

/** Horizontal line with a cat peeking over it — footer motif. */
export function CatPeek({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <line
        x1="0"
        y1="36"
        x2="200"
        y2="36"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.35"
      />
      <g fill="currentColor">
        <path d="M88 36c0-10 7-17 14-17s14 7 14 17v2H88v-2Z" />
        <path d="M93 20.5 90 12l7 4 5-8 3 9Z" />
        <path d="M111 20.5 114 12l-7 4-5-8-3 9Z" />
        <circle cx="97" cy="28" r="1.6" fill="var(--bg, #e9ebed)" />
        <circle cx="107" cy="28" r="1.6" fill="var(--bg, #e9ebed)" />
        <path
          d="M116 34c6 2 14 1 20-4"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
