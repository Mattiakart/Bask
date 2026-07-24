export function PromiseSection() {
  return (
    <section
      id="promessa"
      className="border-y border-line px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          La promessa
        </p>
        <div
          className="mx-auto mt-5 h-px w-16 bg-line-accent"
          aria-hidden="true"
        />
        <h2 className="mt-8 font-serif text-3xl font-medium leading-snug tracking-tight sm:text-4xl md:text-5xl">
          Non ripeti mai due volte lo stesso outfit per la stessa occasione.
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-muted sm:text-lg">
          Una memoria elegante di cosa hai indossato — e dove. Così ogni uscita
          ha il suo look, senza ripensamenti.
        </p>
      </div>
    </section>
  );
}
