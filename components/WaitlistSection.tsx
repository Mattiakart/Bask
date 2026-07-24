import { Reveal } from "@/components/Reveal";
import { WaitlistForm } from "@/components/WaitlistForm";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="relative overflow-hidden border-t border-line/70">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(48rem_28rem_at_50%_0%,rgba(176,118,63,0.16),transparent_70%)]"
      />
      <div className="mx-auto max-w-2xl px-6 py-24 text-center lg:py-32">
        <Reveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
            Accesso anticipato
          </p>
          <h2 className="text-balance-display font-display mt-7 text-[2.1rem] leading-[1.16] text-ink sm:text-[2.75rem]">
            La webapp sta arrivando.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-ink-soft">
            Prima del telefono, il tuo armadio apre le porte sul browser. Lascia la mail:
            ti avvisiamo per prime, senza fare rumore.
          </p>
          <div className="mx-auto mt-10 max-w-xl text-left">
            <WaitlistForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
