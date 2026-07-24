import { type ReactNode } from "react";
import { ChatMock, PhoneMock, WardrobeStrip } from "./PhoneMock";

type Feature = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  visual: ReactNode;
  reverse?: boolean;
};

const features: Feature[] = [
  {
    id: "armadio",
    eyebrow: "Armadio",
    title: "Il tuo guardaroba, sempre a portata di mano.",
    body: "Fotografa i capi, organizza per categorie e stagioni, cerca in un attimo. L’armadio smette di essere un mistero.",
    visual: <WardrobeStrip className="max-w-sm" />,
  },
  {
    id: "eventi",
    eyebrow: "Eventi e meteo",
    title: "L’outfit giusto, per l’ora e il posto giusti.",
    body: "Collega il calendario: meeting, cene, matrimoni. Il meteo locale entra nella scelta — niente blazer sotto la pioggia a Milano.",
    visual: <PhoneMock className="scale-95" />,
    reverse: true,
  },
  {
    id: "memoria",
    eyebrow: "Memoria",
    title: "Ricorda cosa hai indossato — così non lo rifai.",
    body: "Una timeline discreta di look e occasioni. Elegante, mai eccessiva: solo ciò che ti serve per restare impeccabile.",
    visual: (
      <div className="max-w-sm space-y-3" aria-hidden="true">
        {["Team meeting · Maggio", "Cena con amici · Maggio", "Weekend · Aprile"].map(
          (label, i) => (
            <div
              key={label}
              className="flex items-center gap-3 border-b border-line pb-3"
            >
              <div className="flex gap-1.5">
                <span className="h-10 w-8 rounded-sm bg-ink/80" />
                <span className="h-10 w-8 rounded-sm bg-ink/25" />
              </div>
              <p className="font-sans text-sm text-muted">{label}</p>
              <span
                className="ml-auto h-1.5 w-1.5 rounded-full bg-accent"
                style={{ opacity: 1 - i * 0.25 }}
              />
            </div>
          ),
        )}
      </div>
    ),
  },
  {
    id: "negozio",
    eyebrow: "Dal negozio all’armadio",
    title: "Gli acquisti entrano da soli.",
    body: "Nelle boutique partner, i nuovi pezzi arrivano direttamente nel guardaroba virtuale. Meno foto, più stile.",
    visual: (
      <div
        className="flex max-w-sm items-center gap-4 border border-line bg-bg-elevated/60 px-5 py-6"
        aria-hidden="true"
      >
        <div className="flex h-16 w-16 items-center justify-center border border-ink/20 font-serif text-xs tracking-widest">
          BOUTIQUE
        </div>
        <div className="h-px flex-1 bg-line-accent" />
        <div className="relative flex h-14 w-14 items-center justify-center border border-ink/25">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-wider">
            Bag
          </span>
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-bg-elevated">
            ↑
          </span>
        </div>
      </div>
    ),
    reverse: true,
  },
  {
    id: "shopper",
    eyebrow: "Bask Shopper",
    title: "Una chat che sa già cosa hai in programma.",
    body: "Il tuo stylist personale propone look per le prossime occasioni — ironico quel tanto che basta, utile sempre.",
    visual: <ChatMock className="max-w-md" />,
  },
];

export function FeatureSections() {
  return (
    <div className="px-5 sm:px-8">
      {features.map((feature) => (
        <section
          key={feature.id}
          id={feature.id}
          className="mx-auto grid max-w-6xl items-center gap-10 border-b border-line py-16 last:border-b-0 sm:gap-14 sm:py-24 lg:grid-cols-2 lg:gap-20"
        >
          <div className={feature.reverse ? "lg:order-2" : undefined}>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              {feature.eyebrow}
            </p>
            <h2 className="mt-4 max-w-md font-serif text-3xl font-medium leading-snug tracking-tight sm:text-4xl">
              {feature.title}
            </h2>
            <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-muted sm:text-lg">
              {feature.body}
            </p>
          </div>
          <div
            className={`flex justify-center lg:justify-start ${
              feature.reverse ? "lg:order-1 lg:justify-end" : ""
            }`}
          >
            {feature.visual}
          </div>
        </section>
      ))}
    </div>
  );
}
