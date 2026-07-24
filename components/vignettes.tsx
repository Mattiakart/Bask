import { ClockIcon, CloudBagIcon, SparkleIcon, StorefrontIcon } from "@/components/AppIcons";
import { Garment, type GarmentKind, type GarmentTone } from "@/components/Garment";

const PANEL =
  "w-full max-w-[27rem] rounded-3xl border border-line bg-surface/70 shadow-[0_36px_70px_-45px_rgba(21,22,26,0.45)] backdrop-blur";

const WORN: {
  day: string;
  month: string;
  occasion: string;
  place: string;
  items: { kind: GarmentKind; tone: GarmentTone }[];
}[] = [
  {
    day: "12",
    month: "Mag",
    occasion: "Cena di lavoro",
    place: "Milano, Brera",
    items: [
      { kind: "blazer", tone: "dark" },
      { kind: "trousers", tone: "light" },
      { kind: "pump", tone: "dark" },
    ],
  },
  {
    day: "03",
    month: "Mag",
    occasion: "Aperitivo",
    place: "Milano, Navigli",
    items: [
      { kind: "dress", tone: "dark" },
      { kind: "boot", tone: "dark" },
      { kind: "bag", tone: "dark" },
    ],
  },
  {
    day: "27",
    month: "Apr",
    occasion: "Matrimonio",
    place: "Como",
    items: [
      { kind: "gown", tone: "blush" },
      { kind: "pump", tone: "gold" },
      { kind: "earrings", tone: "copper" },
    ],
  },
];

export function MemoryVignette() {
  return (
    <div className={`${PANEL} p-6 sm:p-7`}>
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted">
          <ClockIcon className="h-4 w-4 text-accent" />
          Archivio
        </p>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted">Ultimi look</p>
      </div>

      <ul className="mt-5 divide-y divide-line">
        {WORN.map((look) => (
          <li key={`${look.day}-${look.month}`} className="flex items-center gap-4 py-4">
            <div className="w-11 shrink-0">
              <p className="font-display text-[1.375rem] leading-none text-ink">{look.day}</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-muted">{look.month}</p>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink">{look.occasion}</p>
              <p className="mt-0.5 truncate text-xs text-muted">{look.place}</p>
            </div>
            <div className="flex shrink-0 gap-1.5">
              {look.items.map((item) => (
                <span
                  key={item.kind}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f1f0ee] ring-1 ring-line"
                >
                  <Garment kind={item.kind} tone={item.tone} className="h-[76%] w-[76%]" />
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-5 flex items-start gap-2.5 rounded-2xl bg-accent-soft px-4 py-3 text-xs leading-relaxed text-ink-soft">
        <SparkleIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
        Questo blazer l&apos;hai già portato a cena il 12 maggio. Con le stesse persone.
      </p>
    </div>
  );
}

export function BoutiqueVignette() {
  return (
    <div className={`${PANEL} p-6 sm:p-8`}>
      <div className="flex items-center gap-4">
        <StorefrontIcon className="h-[5.5rem] w-auto shrink-0 text-ink" />
        <DashedArrow className="h-auto w-full min-w-8 flex-1 text-accent" />
        <CloudBagIcon className="h-16 w-16 shrink-0 text-ink" />
      </div>

      <div className="mt-7 border-t border-line pt-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted">
          Sincronizzazione
        </p>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
          Il negozio carica direttamente i nuovi acquisti nel guardaroba virtuale.
        </p>
      </div>

      <div className="mt-6 flex items-center gap-4 rounded-2xl bg-[#e7e3dc] px-4 py-3.5">
        <div className="min-w-0">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink">
            Nuovi acquisti
          </p>
          <p className="mt-1 truncate text-xs text-ink-soft">3 capi aggiunti · Boutique Milano</p>
        </div>
        <span className="ml-auto shrink-0 text-[9px] font-semibold uppercase tracking-[0.2em] text-accent">
          Vedi nuovi
        </span>
      </div>
    </div>
  );
}

function DashedArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 12"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M2 6h64" strokeDasharray="1 7" />
      <path d="m68 2 6 4-6 4" strokeLinejoin="round" />
    </svg>
  );
}
