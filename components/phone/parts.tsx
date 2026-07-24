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
}: {
  kind: GarmentKind;
  tone?: GarmentTone;
}) {
  return (
    <span className="flex aspect-square w-full items-center justify-center rounded-[10px] bg-[#f1f0ee] ring-1 ring-line">
      <Garment kind={kind} tone={tone} className="h-[78%] w-[78%]" />
    </span>
  );
}
