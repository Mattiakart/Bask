import { LogoLockup, LogoMark } from "@/components/LogoMark";
import { PhoneFrame } from "@/components/phone/PhoneFrame";
import { HomeScreen } from "@/components/phone/HomeScreen";
import { WaitlistForm } from "@/components/WaitlistForm";

export function Hero() {
  return (
    <section id="top" className="relative scroll-mt-16 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-[18%] top-1/2 hidden -translate-y-1/2 opacity-[0.06] [mask-image:linear-gradient(to_left,black_25%,transparent_85%)] lg:block">
          <LogoMark className="h-[42rem] w-auto" title="" />
        </div>
        <div className="absolute left-1/2 top-[-30%] h-[70rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.7),transparent_60%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-y-16 px-6 pb-24 pt-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-x-14 lg:pb-32 lg:pt-20">
        <div>
          <p className="animate-rise flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent-ink">
            <span className="hairline h-px w-10" />
            Your AI companion
          </p>

          <h1 className="animate-rise mt-7 [animation-delay:120ms]">
            <LogoLockup className="h-auto w-full max-w-[22rem] sm:max-w-[28rem]" />
          </h1>

          <div className="animate-rise mt-9 max-w-lg [animation-delay:220ms]">
            <p className="font-display text-[1.85rem] leading-[1.15] text-ink sm:text-[2.3rem]">
              A different outfit
              <br />
              for every occasion.
            </p>
            <div className="hairline mt-7 h-px w-16" />
            <p className="mt-7 text-[1.0625rem] leading-relaxed text-ink-soft">
              Bask in Wardrobe remembers what you wore, when and where. Your wardrobe
              becomes intelligent — it reads your calendar, watches the weather, and
              suggests the right look before you open the door.
            </p>
          </div>

          <div className="animate-rise mt-10 max-w-xl [animation-delay:320ms]">
            <WaitlistForm variant="hero" />
          </div>
        </div>

        <div className="animate-rise flex min-w-0 justify-center [animation-delay:420ms] lg:justify-end">
          <PhoneFrame label="Wardrobe home preview: greeting, Milan weather, next event, and a suggested outfit.">
            <HomeScreen />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
