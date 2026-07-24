import { BellIcon, CatFaceIcon, ChevronRightIcon, PinIcon, SunCloudIcon } from "@/components/AppIcons";
import { Hairline, ItemTile, ScreenLabel } from "@/components/phone/parts";
import { TabBar } from "@/components/phone/TabBar";

export function HomeScreen() {
  return (
    <div className="flex h-full flex-col px-5 pt-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f1f0ee] ring-1 ring-line">
            <CatFaceIcon className="h-[18px] w-[18px] text-ink" />
          </span>
          <p className="text-[13px] font-semibold tracking-tight text-ink">Buongiorno, Chiara</p>
        </div>
        <BellIcon className="h-[18px] w-[18px] text-ink-soft" />
      </div>

      <div className="mt-5 flex items-start justify-between">
        <div>
          <ScreenLabel>Oggi</ScreenLabel>
          <p className="mt-1 text-[13px] font-medium text-ink">20 Maggio 2025</p>
        </div>
        <div className="flex items-center gap-2">
          <SunCloudIcon className="h-6 w-6 text-accent" />
          <div className="leading-none">
            <p className="text-[17px] font-semibold text-ink">18°</p>
            <p className="mt-0.5 text-[9px] text-muted">Milano</p>
          </div>
        </div>
      </div>

      <Hairline className="mt-4" />

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <ScreenLabel>Prossimo evento</ScreenLabel>
          <ChevronRightIcon className="h-3.5 w-3.5 text-muted" />
        </div>
        <p className="mt-1.5 text-[15px] font-semibold tracking-tight text-ink">Team meeting</p>
        <p className="mt-0.5 text-[11px] text-muted">10:00 AM – 12:00 PM</p>
        <p className="mt-1 flex items-center gap-1 text-[10px] text-muted">
          <PinIcon className="h-3 w-3" />
          Milano
        </p>
        <div className="mt-3 flex items-end gap-2">
          <ItemTile kind="blazer" tone="dark" />
          <ItemTile kind="trousers" tone="light" />
          <ItemTile kind="pump" tone="dark" size="sm" />
          <ItemTile kind="bag" tone="dark" />
        </div>
      </div>

      <Hairline className="mt-5" />

      <div className="mt-4">
        <ScreenLabel>Suggerimenti outfit</ScreenLabel>
        <p className="mt-1.5 text-[15px] font-semibold tracking-tight text-ink">Smart &amp; polished</p>
        <div className="mt-3 flex items-end gap-2">
          <ItemTile kind="blazer" tone="dark" size="lg" />
          <ItemTile kind="trousers" tone="light" size="lg" />
          <ItemTile kind="bag" tone="dark" />
          <ItemTile kind="pump" tone="dark" />
        </div>
        <div className="mt-4 flex items-center gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            Salva
          </span>
          <span className="flex h-10 flex-1 items-center justify-center rounded-full bg-ink text-[10px] font-semibold uppercase tracking-[0.24em] text-bg">
            Indossa
          </span>
        </div>
      </div>

      <TabBar active="armadio" />
    </div>
  );
}
