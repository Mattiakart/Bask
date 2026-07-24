/** Canonical origin, without a trailing slash. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
  /\/+$/,
  "",
);

export const siteName = "Bask in Wardrobe";
export const tagline = "A different outfit for every occasion";
export const description =
  "Bask in Wardrobe ricorda cosa hai indossato, quando e dove. La webapp sta arrivando: lascia la tua email e sei tra le prime a entrare.";
