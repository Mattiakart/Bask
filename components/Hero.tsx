import { LogoGlyph, LogoMark } from "@/components/LogoMark";
import { PhoneFrame } from "@/components/phone/PhoneFrame";
import { HomeScreen } from "@/components/phone/HomeScreen";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Wordmark } from "@/components/Wordmark";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-[18%] top-1/2 hidden -translate-y-1/2 lg:block">
          <LogoGlyph className="h-[46rem] w-auto text-ink/[0.04]" />
        </div>
        <div className="absolute left-1/2 top-[-30%] h-[70rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.7),transparent_60%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-y-16 px-6 pb-24 pt-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-x-14 lg:pb-32 lg:pt-20">
        <div>
          <p className="animate-rise flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
            <span className="hairline h-px w-10" />
            Presto su web
          </p>

          <h1 className="animate-rise mt-7 flex items-end gap-5 [animation-delay:120ms] sm:gap-7">
            <LogoMark className="h-[5.5rem] w-auto shrink-0 text-ink sm:h-[7rem]" />
            <Wordmark className="pb-1 text-[2.5rem] sm:text-[3.25rem]" />
          </h1>

          <div className="animate-rise mt-9 max-w-lg [animation-delay:220ms]">
            <p lang="en" className="font-display text-[1.85rem] leading-[1.15] text-ink sm:text-[2.3rem]">
              A different outfit
              <br />
              for every occasion.
            </p>
            <div className="hairline mt-7 h-px w-16" />
            <p className="mt-7 text-[1.0625rem] leading-relaxed text-ink-soft">
              Bask in Wardrobe ricorda cosa hai indossato, quando e dove. Il tuo armadio
              diventa digitale, si collega al calendario e ti suggerisce il look giusto
              prima che tu apra l&apos;anta.
            </p>
          </div>

          <div className="animate-rise mt-10 max-w-xl [animation-delay:320ms]">
            <WaitlistForm variant="hero" />
          </div>
        </div>

        <div className="animate-rise flex justify-center [animation-delay:420ms] lg:justify-end">
          <PhoneFrame label="Anteprima della schermata Armadio: saluto, meteo di Milano, prossimo evento e outfit suggerito.">
            <HomeScreen />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
