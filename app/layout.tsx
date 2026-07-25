import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";

import { description, favicon, basePath, siteName, siteUrl, socialCard, tagline } from "@/lib/site";
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
const social =
  "Your AI companion for what you wear. It remembers every look, reads your calendar and the weather, and helps you dress with intention.";
const image = {
  // Absolute URL: root-relative `/og.png` would drop a path segment from
  // metadataBase on project Pages (user.github.io/Bask → …/og.png).
  url: `${siteUrl}${socialCard.path}`,
  width: socialCard.width,
  height: socialCard.height,
  type: "image/png",
  alt: title,
};

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title,
  description,
  alternates: { canonical: "./" },
  icons: {
    // Prefix basePath here — Next rewrites script/CSS hrefs automatically, but
    // not manually declared icon URLs.
    icon: [
      {
        url: `${basePath}${favicon.path}`,
        type: "image/png",
        sizes: `${favicon.size}x${favicon.size}`,
      },
    ],
  },
  keywords: [
    "AI stylist",
    "digital wardrobe",
    "outfit companion",
    "personal stylist",
    "Bask in Wardrobe",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "./",
    siteName,
    title,
    description: social,
    images: [image],
  },
  twitter: { card: "summary_large_image", title, description: social, images: [image] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoni.variable} ${manrope.variable} h-full antialiased`}>
      <body className="grain-overlay flex min-h-full flex-col">{children}</body>
    </html>
  );
}
