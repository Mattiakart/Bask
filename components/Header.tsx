import { LogoMark } from "@/components/LogoMark";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center" aria-label="Bask in Wardrobe, back to top">
          <LogoMark className="h-10 w-auto" />
        </a>
        <a
          href="#join"
          className="group flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink transition-colors hover:text-accent-ink"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Join
        </a>
      </div>
    </header>
  );
}
