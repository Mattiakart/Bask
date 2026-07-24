import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bask in Wardrobe",
    template: "%s · Bask in Wardrobe",
  },
  description:
    "Il tuo armadio digitale che ricorda cosa hai indossato, quando e dove. A different outfit for every occasion.",
  openGraph: {
    title: "Bask in Wardrobe — A different outfit for every occasion.",
    description:
      "Il webapp sta per arrivare. Organizza l’armadio, collega gli eventi e non ripetere mai lo stesso outfit.",
    locale: "it_IT",
    type: "website",
    siteName: "Bask in Wardrobe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="page-atmosphere min-h-full font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
