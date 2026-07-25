import {
  CalendarCloudIcon,
  CameraIcon,
  ChatIcon,
  DressFormIcon,
  ProfileIcon,
} from "@/components/AppIcons";
import { LogoGlyph } from "@/components/LogoMark";

const TABS = ["wardrobe", "camera", "outfit", "events", "shopper", "profile"] as const;

export type TabName = (typeof TABS)[number];

const ICONS: Record<TabName, (props: { className?: string }) => React.ReactNode> = {
  wardrobe: ({ className }) => <LogoGlyph className={className} />,
  camera: ({ className }) => <CameraIcon className={className} />,
  outfit: ({ className }) => <DressFormIcon className={className} />,
  events: ({ className }) => <CalendarCloudIcon className={className} />,
  shopper: ({ className }) => <ChatIcon className={className} />,
  profile: ({ className }) => <ProfileIcon className={className} />,
};

export function TabBar({ active }: { active: TabName }) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 border-t border-line bg-surface/95 pb-4 pt-2.5 backdrop-blur">
      <ul className="flex items-end justify-around px-3">
        {TABS.map((tab) => {
          const IconFor = ICONS[tab];
          const isActive = tab === active;
          return (
            <li key={tab} className="flex flex-col items-center gap-1">
              <span className={isActive ? "text-ink" : "text-muted/70"}>
                <IconFor className={tab === "wardrobe" ? "h-[17px] w-[17px]" : "h-[19px] w-[19px]"} />
              </span>
              <span
                className={`h-[3px] w-[3px] rounded-full ${isActive ? "bg-accent" : "bg-transparent"}`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
