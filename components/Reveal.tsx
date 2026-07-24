type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Shifts the scroll range so paired columns don't land at once. */
  shift?: number;
  /** "peek" drives the cat animation instead of the default fade-and-rise. */
  variant?: "reveal" | "peek";
};

/**
 * Marks a block for the scroll-driven reveal defined in globals.css. The
 * animation is pure CSS, so the content stays visible on browsers without
 * scroll-driven animation support.
 */
export function Reveal({ children, className, shift = 0, variant = "reveal" }: RevealProps) {
  return (
    <div
      className={className}
      style={shift ? ({ "--reveal-shift": `${shift}%` } as React.CSSProperties) : undefined}
      {...(variant === "peek" ? { "data-peek": "" } : { "data-reveal": "" })}
    >
      {children}
    </div>
  );
}
