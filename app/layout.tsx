import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";

import { description, siteName, siteUrl, tagline } from "@/lib/site";
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

const title = `${siteName} — ${tagline}`;
const social = "L'armadio che ricorda cosa hai indossato, quando e dove. La webapp sta arrivando.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
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
    url: "/",
    siteName,
    title,
    description: social,
  },
  twitter: { card: "summary_large_image", title, description: social },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${bodoni.variable} ${manrope.variable} h-full antialiased`}>
      <body className="grain-overlay flex min-h-full flex-col">{children}</body>
    </html>
  );
}
