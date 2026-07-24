import { LogoMark } from "@/components/LogoMark";
import { Wordmark } from "@/components/Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div className="flex items-end gap-4">
            <LogoMark className="h-20 w-auto text-ink" />
            <Wordmark className="pb-1 text-[1.5rem]" />
          </div>
          <p className="max-w-[17rem] text-sm leading-relaxed text-muted">
            Un armadio con più memoria di te. E la discrezione di non farlo pesare.
          </p>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Bask in Wardrobe</p>
          <p className="text-center sm:text-right">
            Prima la webapp, poi l&apos;app per il telefono.
          </p>
        </div>
      </div>
    </footer>
  );
}
