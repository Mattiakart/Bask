import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bask in Wardrobe — A different outfit for every occasion",
  description:
    "Bask in Wardrobe ricorda cosa hai indossato, quando e dove. La webapp sta arrivando: lascia la tua email e sei tra le prime a entrare.",
  keywords: [
    "armadio digitale",
    "guardaroba virtuale",
    "outfit",
    "personal stylist",
    "Bask in Wardrobe",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "Bask in Wardrobe",
    title: "Bask in Wardrobe — A different outfit for every occasion",
    description:
      "L'armadio che ricorda cosa hai indossato, quando e dove. La webapp sta arrivando.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bask in Wardrobe — A different outfit for every occasion",
    description:
      "L'armadio che ricorda cosa hai indossato, quando e dove. La webapp sta arrivando.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${bodoni.variable} ${manrope.variable} h-full antialiased`}>
      <body className="grain-overlay flex min-h-full flex-col">
        <noscript>
          <style>{`[data-reveal]{opacity:1;transform:none}[data-peek] .peek-cat{transform:none}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
