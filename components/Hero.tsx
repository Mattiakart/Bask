import { LogoMark } from "./LogoMark";
import { PhoneMock } from "./PhoneMock";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-10 pt-24 sm:justify-center sm:pb-16 sm:pt-28"
    >
      {/* Full-bleed visual plane */}
      <div
        className="pointer-events-none absolute inset-0 -z-0"
        aria-hidden="true"
      >
        <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-ink/[0.07] via-transparent to-transparent sm:w-[58%]" />
        <div className="absolute right-[2%] top-1/2 hidden -translate-y-[42%] opacity-95 sm:block md:right-[4%] lg:right-[6%]">
          <PhoneMock className="scale-100 lg:scale-110" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl lg:max-w-2xl">
          <div className="animate-rise flex items-end gap-4 sm:gap-5">
            <LogoMark className="h-16 w-auto text-ink sm:h-24" />
            <div>
              <p className="font-serif text-4xl font-semibold leading-[0.9] tracking-[0.04em] sm:text-6xl md:text-7xl">
                BASK
              </p>
              <p className="mt-1 font-sans text-xs font-medium uppercase tracking-[0.28em] text-muted sm:text-sm sm:tracking-[0.32em]">
                in Wardrobe
              </p>
            </div>
          </div>

          <h1 className="animate-rise animate-rise-delay-1 mt-8 max-w-lg font-serif text-3xl font-medium leading-[1.15] tracking-tight sm:mt-10 sm:text-4xl md:text-5xl">
            A different outfit for every occasion.
          </h1>

          <p className="animate-rise animate-rise-delay-2 mt-4 max-w-md font-sans text-base leading-relaxed text-muted sm:text-lg">
            Bask in Wardrobe ricorda cosa hai indossato, quando e dove.
          </p>

          <div className="animate-rise animate-rise-delay-3 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
            <a
              href="#waitlist"
              className="inline-flex h-12 items-center justify-center bg-ink px-7 font-sans text-sm font-semibold tracking-wide text-bg-elevated transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Unisciti alla waitlist
            </a>
            <a
              href="#promessa"
              className="inline-flex h-12 items-center justify-center px-2 font-sans text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              Scopri la promessa
            </a>
          </div>
        </div>

        {/* Mobile phone — below copy so first viewport stays brand-first */}
        <div className="animate-rise animate-rise-delay-4 mt-12 flex justify-center sm:hidden">
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}
