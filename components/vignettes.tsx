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
    month: "May",
    occasion: "Work dinner",
    place: "Milan, Brera",
    items: [
      { kind: "blazer", tone: "dark" },
      { kind: "trousers", tone: "light" },
      { kind: "pump", tone: "dark" },
    ],
  },
  {
    day: "03",
    month: "May",
    occasion: "Aperitivo",
    place: "Milan, Navigli",
    items: [
      { kind: "dress", tone: "dark" },
      { kind: "boot", tone: "dark" },
      { kind: "bag", tone: "dark" },
    ],
  },
  {
    day: "27",
    month: "Apr",
    occasion: "Wedding",
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
    <div className={`${PANEL} p-5 sm:p-7`}>
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted">
          <ClockIcon className="h-4 w-4 text-accent" />
          Archive
        </p>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted">Recent looks</p>
      </div>

      <ul className="mt-5 divide-y divide-line">
        {WORN.map((look) => (
          <li key={`${look.day}-${look.month}`} className="flex items-center gap-3 py-4 sm:gap-4">
            <div className="w-9 shrink-0 sm:w-11">
              <p className="font-display text-[1.375rem] leading-none text-ink">{look.day}</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-muted">{look.month}</p>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-ink sm:truncate">{look.occasion}</p>
              <p className="mt-0.5 text-xs text-muted sm:truncate">{look.place}</p>
            </div>
            <div className="flex shrink-0 gap-1 sm:gap-1.5">
              {look.items.map((item) => (
                <span
                  key={item.kind}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f1f0ee] ring-1 ring-line sm:h-9 sm:w-9"
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
        You already wore this blazer to dinner on May 12 — with the same people.
      </p>
    </div>
  );
}

export function BoutiqueVignette() {
  return (
    <div className={`${PANEL} p-5 sm:p-8`}>
      <div className="flex items-center gap-4">
        <StorefrontIcon className="h-[4.5rem] w-auto shrink-0 text-ink sm:h-[5.5rem]" />
        <DashedArrow className="h-auto w-full min-w-8 flex-1 text-accent" />
        <CloudBagIcon className="h-14 w-14 shrink-0 text-ink sm:h-16 sm:w-16" />
      </div>

      <div className="mt-7 border-t border-line pt-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted">
          Sync
        </p>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
          The store loads new purchases straight into your digital wardrobe.
        </p>
      </div>

      <div className="mt-6 flex items-center gap-4 rounded-2xl bg-[#e7e3dc] px-4 py-3.5">
        <div className="min-w-0">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink">
            New purchases
          </p>
          <p className="mt-1 text-xs text-ink-soft sm:truncate">3 pieces added · Boutique Milan</p>
        </div>
        <span className="ml-auto shrink-0 text-[9px] font-semibold uppercase tracking-[0.2em] text-accent-ink">
          View new
        </span>
      </div>
    </div>
  );
}

function DashedArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 12"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M2 6h80" strokeDasharray="1 6" />
      <path d="m85 2.5 5 3.5-5 3.5" strokeLinejoin="round" />
    </svg>
  );
}
