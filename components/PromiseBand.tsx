import { CatPeek } from "@/components/LogoMark";
import { Reveal } from "@/components/Reveal";

export function PromiseBand() {
  return (
    <section className="relative overflow-hidden bg-ink text-bg">
      <div className="mx-auto max-w-3xl px-6 pb-16 pt-24 text-center">
        <Reveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-accent">
            La promessa
          </p>
          <h2 className="text-balance-display font-display mt-8 text-[2rem] leading-[1.2] sm:text-[2.85rem]">
            Non ripeti mai due volte lo stesso outfit per la stessa occasione.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-bg/65">
            Ogni look che indossi resta registrato con la sua data e la sua occasione.
            Alla prossima cena con le stesse persone, Bask se ne ricorda al posto tuo.
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
