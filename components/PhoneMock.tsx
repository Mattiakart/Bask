/** Decorative phone UI vignette — home screen vibe from the brand boards. */
export function PhoneMock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto w-[min(100%,280px)] sm:w-[300px] ${className}`}
      aria-hidden="true"
    >
      <div className="rounded-[2rem] border border-ink/20 bg-phone p-2.5 shadow-[0_40px_80px_-30px_rgba(20,20,20,0.45)]">
        <div className="overflow-hidden rounded-[1.55rem] bg-phone-screen text-ink">
          <div className="flex items-center justify-between px-4 pb-1 pt-3">
            <div className="flex items-center gap-1.5">
              <span className="inline-block h-3.5 w-3.5 rounded-full border border-ink/40" />
              <span className="font-sans text-[10px] font-medium tracking-wide">
                Buongiorno
              </span>
            </div>
            <span className="font-sans text-[9px] uppercase tracking-[0.14em] text-muted">
              Oggi
            </span>
          </div>

          <div className="px-4 pt-3">
            <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
              Prossimo evento
            </p>
            <p className="mt-1 font-serif text-lg leading-tight">Team meeting</p>
            <p className="mt-0.5 font-sans text-[10px] text-muted">
              10:00 – 12:00 · Milano · 18°
            </p>
          </div>

          <div className="mx-4 mt-4 border-t border-line pt-3">
            <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
              Suggerimenti outfit
            </p>
            <p className="mt-1 font-serif text-base italic">Smart &amp; polished.</p>
            <div className="mt-3 flex gap-2">
              <div className="h-14 flex-1 rounded-sm bg-ink/90" />
              <div className="h-14 flex-1 rounded-sm bg-ink/25" />
              <div className="h-14 flex-1 rounded-sm bg-ink/55" />
            </div>
            <div className="mt-3 mb-4 flex gap-2">
              <span className="flex-1 border border-ink/20 py-1.5 text-center font-sans text-[10px] font-semibold tracking-wide">
                Salva
              </span>
              <span className="flex-1 bg-ink py-1.5 text-center font-sans text-[10px] font-semibold tracking-wide text-bg-elevated">
                Indossa
              </span>
            </div>
          </div>

          <div className="flex items-center justify-around border-t border-line px-2 py-2.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${i === 0 ? "bg-accent" : "bg-ink/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function WardrobeStrip({ className = "" }: { className?: string }) {
  const items = [
    "bg-ink",
    "bg-ink/15",
    "bg-ink/70",
    "bg-accent/70",
    "bg-ink/35",
    "bg-ink/90",
  ];
  return (
    <div className={`grid grid-cols-3 gap-2 ${className}`} aria-hidden="true">
      {items.map((bg, i) => (
        <div key={i} className={`aspect-[3/4] rounded-sm ${bg}`} />
      ))}
    </div>
  );
}

export function ChatMock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-line bg-bg-elevated/80 p-4 sm:p-5 ${className}`}
      aria-hidden="true"
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="font-serif text-lg font-semibold">B</span>
        <div>
          <p className="font-sans text-sm font-semibold">Bask Shopper</p>
          <p className="font-sans text-[10px] uppercase tracking-wider text-accent">
            Online
          </p>
        </div>
      </div>
      <div className="space-y-3">
        <p className="max-w-[90%] rounded-2xl rounded-tl-sm bg-ink/[0.06] px-3.5 py-2.5 font-sans text-sm leading-relaxed text-ink">
          Ciao! Hai un matrimonio il 24 maggio alle 18. Ti suggerisco qualche outfit?
        </p>
        <p className="ml-auto max-w-[55%] rounded-2xl rounded-tr-sm bg-ink px-3.5 py-2.5 font-sans text-sm text-bg-elevated">
          Certo!
        </p>
        <div className="flex gap-2 pt-1">
          <div className="h-20 flex-1 rounded-sm bg-accent/40" />
          <div className="h-20 flex-1 rounded-sm bg-ink/85" />
          <div className="h-20 flex-1 rounded-sm bg-ink/30" />
        </div>
      </div>
    </div>
  );
}
