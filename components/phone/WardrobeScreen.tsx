import { CloudBagIcon, SearchIcon, SlidersIcon } from "@/components/AppIcons";
import { Garment, type GarmentKind, type GarmentTone } from "@/components/Garment";
import { TabBar } from "@/components/phone/TabBar";

const FILTERS = ["All", "Clothes", "Shoes", "Bags", "Accessories"];

const ITEMS: { kind: GarmentKind; tone: GarmentTone }[] = [
  { kind: "blazer", tone: "dark" },
  { kind: "shirt", tone: "light" },
  { kind: "dress", tone: "dark" },
  { kind: "sweater", tone: "light" },
  { kind: "jeans", tone: "denim" },
  { kind: "bag", tone: "dark" },
  { kind: "pump", tone: "dark" },
  { kind: "sneaker", tone: "light" },
  { kind: "boot", tone: "dark" },
  { kind: "sunglasses", tone: "dark" },
  { kind: "belt", tone: "dark" },
  { kind: "earrings", tone: "copper" },
];

export function WardrobeScreen() {
  return (
    <div className="flex h-full flex-col px-4 pt-3">
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 flex-1 items-center gap-2 rounded-full bg-[#f1f0ee] px-3.5 ring-1 ring-line">
          <SearchIcon className="h-3.5 w-3.5 text-muted" />
          <span className="text-[11px] text-muted">Search your wardrobe</span>
        </div>
        <SlidersIcon className="h-[18px] w-[18px] text-ink-soft" />
      </div>

      <div className="mt-4 flex gap-3 overflow-hidden">
        {FILTERS.map((filter, index) => (
          <span
            key={filter}
            className={`whitespace-nowrap pb-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] ${
              index === 0 ? "border-b-[1.5px] border-accent text-ink" : "text-muted"
            }`}
          >
            {filter}
          </span>
        ))}
      </div>

      <div className="mt-3.5 flex items-center justify-between rounded-2xl bg-[#e7e3dc] px-3.5 py-3">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink">New purchases</p>
          <p className="mt-1 text-[10px] text-ink-soft">Synced from the store</p>
          <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-accent-ink">View new</p>
        </div>
        <CloudBagIcon className="h-11 w-11 text-ink" />
      </div>

      <div className="mt-3.5 grid grid-cols-3 gap-2.5">
        {ITEMS.map((item) => (
          <span
            key={item.kind}
            className="flex aspect-square items-center justify-center rounded-xl bg-[#f1f0ee] ring-1 ring-line"
          >
            <Garment kind={item.kind} tone={item.tone} className="h-[74%] w-[74%]" />
          </span>
        ))}
      </div>

      <TabBar active="wardrobe" />
    </div>
  );
}
