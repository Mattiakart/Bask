import { basePath } from "@/lib/site";

type LogoProps = {
  className?: string;
  /** Accessible name. Pass empty string for decorative use. */
  title?: string;
};

const markSrc = `${basePath}/brand/logo-mark.svg`;
const lockupSrc = `${basePath}/brand/logo-lockup.png`;

/**
 * Official Bask monogram (door-B with peeking cats).
 * One of two brand assets — compact placements only.
 */
export function LogoMark({ className, title = "Bask in Wardrobe" }: LogoProps) {
  const decorative = title === "";
  return (
    // eslint-disable-next-line @next/next/no-img-element -- brand asset from /public
    <img
      src={markSrc}
      alt={decorative ? "" : title}
      className={className}
      draggable={false}
      aria-hidden={decorative || undefined}
    />
  );
}

/** Compact glyph — same official mark. */
export function LogoGlyph({ className, title = "" }: LogoProps) {
  return <LogoMark className={className} title={title} />;
}

/**
 * Official full lockup: mark + BASK / IN WARDROBE + copper rule.
 * Second of two brand assets — hero and footer.
 */
export function LogoLockup({ className, title = "Bask in Wardrobe" }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- brand asset from /public
    <img src={lockupSrc} alt={title} className={className} draggable={false} />
  );
}
