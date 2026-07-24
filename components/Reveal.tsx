"use client";

import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger, in ms, applied to the reveal transition. */
  delay?: number;
  /** "peek" drives the cat animation instead of the default fade-and-rise. */
  variant?: "reveal" | "peek";
};

export function Reveal({ children, className, delay = 0, variant = "reveal" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...(variant === "peek" ? { "data-peek": "" } : { "data-reveal": "" })}
    >
      {children}
    </div>
  );
}
