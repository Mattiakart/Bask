import { Reveal } from "@/components/Reveal";

type FeatureSectionProps = {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  points?: string[];
  visual: React.ReactNode;
  flip?: boolean;
};

export function FeatureSection({
  index,
  eyebrow,
  title,
  body,
  points,
  visual,
  flip = false,
}: FeatureSectionProps) {
  return (
    <section className="border-t border-line/70">
      <div className="mx-auto grid max-w-6xl items-center gap-y-12 px-6 py-20 lg:grid-cols-2 lg:gap-x-16 lg:py-28">
        <Reveal className={`min-w-0 ${flip ? "lg:order-2" : ""}`}>
          <p className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-muted">
            <span className="font-display text-accent-ink">{index}</span>
            <span className="h-px w-8 bg-line" />
            {eyebrow}
          </p>
          <h2 className="text-balance-display font-display mt-6 text-[1.95rem] leading-[1.18] text-ink sm:text-[2.4rem]">
            {title}
          </h2>
          <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-ink-soft">{body}</p>
          {points ? (
            <ul className="mt-8 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex gap-3 text-[0.9375rem] text-ink-soft">
                  <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>

        <Reveal
          shift={6}
          className={`flex min-w-0 justify-center ${flip ? "lg:order-1 lg:justify-start" : "lg:justify-end"}`}
        >
          {visual}
        </Reveal>
      </div>
    </section>
  );
}
