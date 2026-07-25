import { LogoLockup } from "@/components/LogoMark";

export function Footer() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <LogoLockup className="h-auto w-full max-w-[16rem]" />
          <p className="max-w-[17rem] text-sm leading-relaxed text-muted">
            A wardrobe with more memory than you — and the discretion not to make a fuss about it.
          </p>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Bask in Wardrobe</p>
          <p className="text-center sm:text-right">Your AI companion for what you wear.</p>
        </div>
      </div>
    </footer>
  );
}
