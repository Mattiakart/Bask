/**
 * Decorative tone-of-voice cat: peers over a hairline with its tail curling up.
 * Not a brand logo — illustration only.
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
