/**
 * Typographic half of the lockup. Sizing is driven by the container's
 * font-size so the second line always keeps its ratio.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`font-display inline-block leading-[0.95] ${className ?? ""}`}>
      <span className="-mr-[0.26em] block tracking-[0.26em]">BASK</span>
      <span className="-mr-[0.4em] mt-[0.24em] block text-[0.4em] font-normal tracking-[0.4em] text-ink-soft">
        IN WARDROBE
      </span>
    </span>
  );
}
