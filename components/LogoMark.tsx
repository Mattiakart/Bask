import { basePath } from "@/lib/site";

type LogoProps = {
  className?: string;
  /** Accessible name. Pass empty string for decorative use. */
  title?: string;
};

/** Official mark only — door-B with peeking cats. */
const markSrc = `${basePath}/brand/logo-mark.png`;
/** Official lockup only — mark + BASK / IN WARDROBE. */
const lockupSrc = `${basePath}/brand/logo-lockup.png`;

/**
 * Official Bask monogram image (one of two brand assets).
 */
export function LogoMark({ className, title = "Bask in Wardrobe" }: LogoProps) {
  const decorative = title === "";
  return (
    // eslint-disable-next-line @next/next/no-img-element -- brand PNG from /public
    <img
      src={markSrc}
      alt={decorative ? "" : title}
      className={className}
      draggable={false}
      aria-hidden={decorative || undefined}
    />
  );
}

/** Compact placements — same official mark image. */
export function LogoGlyph(props: LogoProps) {
  return <LogoMark {...props} title={props.title ?? ""} />;
}

/**
 * Official full lockup image (second of two brand assets).
 */
export function LogoLockup({ className, title = "Bask in Wardrobe" }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- brand PNG from /public
    <img src={lockupSrc} alt={title} className={className} draggable={false} />
  );
}
