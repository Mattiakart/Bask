import { LogoGlyph } from "@/components/LogoMark";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Bask in Wardrobe, torna in cima">
          <LogoGlyph className="h-7 w-auto text-ink" />
          <span className="font-display text-[13px] leading-none tracking-[0.3em] text-ink">
            BASK
            <span className="ml-2.5 hidden text-[9px] tracking-[0.36em] text-muted sm:inline">
              IN WARDROBE
            </span>
          </span>
        </a>
        <a
          href="#waitlist"
          className="group flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink transition-colors hover:text-accent-ink"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Waitlist
        </a>
      </div>
    </header>
  );
}
