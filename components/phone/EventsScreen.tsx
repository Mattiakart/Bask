import { ChevronLeftIcon, ChevronRightIcon, PinIcon, PlusIcon, SunCloudIcon } from "@/components/AppIcons";
import { LogoGlyph } from "@/components/LogoMark";
import { Hairline, ScreenLabel } from "@/components/phone/parts";
import { TabBar } from "@/components/phone/TabBar";

const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];
const DAYS = [19, 20, 21, 22, 23, 24, 25];

const TODAY = [
  { title: "Team meeting", time: "10:00 – 12:00", temp: "18°", day: "Tue" },
  { title: "Dinner with friends", time: "20:00", temp: "16°", day: "Tue" },
];

export function EventsScreen() {
  return (
    <div className="flex h-full flex-col px-5 pt-3">
      <div className="flex items-center justify-between">
        <LogoGlyph className="h-[18px] w-auto text-ink" />
        <p className="text-[13px] font-semibold text-ink">My events</p>
        <PlusIcon className="h-[18px] w-[18px] text-ink-soft" />
      </div>

      <div className="mt-5 flex items-center justify-between">
        <ChevronLeftIcon className="h-3.5 w-3.5 text-muted" />
        <p className="font-display text-[15px] tracking-wide text-ink">May 2025</p>
        <ChevronRightIcon className="h-3.5 w-3.5 text-muted" />
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map((day, index) => (
          <span key={index} className="text-[9px] font-semibold uppercase tracking-widest text-muted">
            {day}
          </span>
        ))}
        {DAYS.map((day) => (
          <span
            key={day}
            className={`mx-auto mt-1.5 flex h-7 w-7 items-center justify-center rounded-full text-[11px] ${
              day === 20 ? "bg-ink font-semibold text-bg" : "text-ink-soft"
            }`}
          >
            {day}
          </span>
        ))}
      </div>

      <Hairline className="mt-5" />

      <ScreenLabel className="mt-4">Today • May 20</ScreenLabel>

      <ul className="mt-3 space-y-4">
        {TODAY.map((event) => (
          <li key={event.title} className="flex items-start justify-between">
            <div>
              <p className="text-[13px] font-semibold text-ink">{event.title}</p>
              <p className="mt-0.5 text-[10px] text-muted">{event.time}</p>
              <p className="mt-1 flex items-center gap-1 text-[10px] text-muted">
                <PinIcon className="h-3 w-3" />
                Milan
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <SunCloudIcon className="h-[18px] w-[18px] text-accent" />
              <div className="leading-none">
                <p className="text-[13px] font-semibold text-ink">{event.temp}</p>
                <p className="mt-0.5 text-[8px] text-muted">{event.day}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Hairline className="mt-5" />

      <div className="mt-4">
        <ScreenLabel>This week</ScreenLabel>
        <div className="mt-3 flex items-center justify-between rounded-2xl bg-[#e7e3dc] px-3.5 py-3">
          <div>
            <p className="text-[12px] font-semibold text-ink">Wedding</p>
            <p className="mt-0.5 text-[10px] text-ink-soft">Saturday, May 24 • 18:00</p>
          </div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-accent-ink">3 ideas</p>
        </div>
      </div>

      <TabBar active="events" />
    </div>
  );
}
