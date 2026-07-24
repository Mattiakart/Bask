"use client";

import { useEffect, useRef } from "react";
import { CatPeek, Wordmark } from "./LogoMark";

export function Footer() {
  const peekRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = peekRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="border-t border-line px-5 pb-10 pt-14 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <div ref={peekRef} className="cat-peek mb-6 w-full max-w-xs text-ink">
          <CatPeek className="mx-auto h-12 w-full" />
        </div>
        <Wordmark />
        <p className="mt-5 max-w-sm font-serif text-xl italic leading-snug text-muted">
          Parliamo come un’amica che ha sempre il look giusto.
        </p>
        <p className="mt-8 font-sans text-xs tracking-wide text-muted">
          © {new Date().getFullYear()} Bask in Wardrobe
        </p>
      </div>
    </footer>
  );
}
