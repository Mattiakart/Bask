"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./LogoMark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          <Wordmark />
        </a>
        <a
          href="#waitlist"
          className="font-sans text-sm font-semibold tracking-wide text-ink transition-colors hover:text-accent"
        >
          Waitlist
        </a>
      </div>
    </header>
  );
}
