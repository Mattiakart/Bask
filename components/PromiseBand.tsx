import { CatPeek } from "@/components/CatPeek";
import { Reveal } from "@/components/Reveal";

export function PromiseBand() {
  return (
    <section className="relative overflow-hidden bg-ink text-bg">
      <div className="mx-auto max-w-3xl px-6 pb-16 pt-24 text-center">
        <Reveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-accent">
            The promise
          </p>
          <h2 className="text-balance-display font-display mt-8 text-[2rem] leading-[1.2] sm:text-[2.85rem]">
            Never wear the same outfit twice for the same occasion.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-bg/65">
            Every look you wear is logged with its date and occasion. Next dinner with
            the same people, Bask remembers so you don’t have to.
          </p>
        </Reveal>
      </div>

      <Reveal variant="peek" className="mx-auto max-w-2xl px-6">
        <CatPeek className="w-full text-bg/55" />
      </Reveal>
      <div className="h-14" />
    </section>
  );
}
