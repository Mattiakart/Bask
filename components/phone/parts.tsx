import { Garment, type GarmentKind, type GarmentTone } from "@/components/Garment";

export function ScreenLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-[8.5px] font-semibold uppercase tracking-[0.22em] text-muted ${className ?? ""}`}>
      {children}
    </p>
  );
}

export function Hairline({ className }: { className?: string }) {
  return <div className={`h-px w-full bg-line ${className ?? ""}`} />;
}

export function ItemTile({
  kind,
  tone,
  className,
  size = "md",
}: {
  kind: GarmentKind;
  tone?: GarmentTone;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const box = size === "sm" ? "h-11 w-11" : size === "lg" ? "h-[68px] w-[68px]" : "h-14 w-14";
  return (
    <span
      className={`flex ${box} items-center justify-center rounded-[10px] bg-[#f1f0ee] ring-1 ring-line ${className ?? ""}`}
    >
      <Garment kind={kind} tone={tone} className="h-[78%] w-[78%]" />
    </span>
  );
}
