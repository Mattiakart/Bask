"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error" | "duplicate";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { error?: string; ok?: boolean };

      if (res.status === 409) {
        setStatus("duplicate");
        setMessage("Sei già in lista. Ti avvisiamo al lancio.");
        return;
      }

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Qualcosa non ha funzionato. Riprova.");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Connessione assente. Controlla la rete e riprova.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="animate-success border border-line-accent bg-accent-soft px-6 py-8 text-center sm:px-10"
        role="status"
      >
        <p className="font-serif text-2xl font-medium sm:text-3xl">
          Sei in lista.
        </p>
        <p className="mt-3 font-sans text-base text-muted">
          A presto — e niente outfit doppioni.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full" noValidate>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <label className="sr-only" htmlFor="waitlist-email">
          Indirizzo email
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error" || status === "duplicate") {
              setStatus("idle");
              setMessage(null);
            }
          }}
          placeholder="la.tua@email.com"
          className="h-12 flex-1 border border-line bg-bg-elevated px-4 font-sans text-base text-ink placeholder:text-muted/70 focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="h-12 shrink-0 bg-ink px-7 font-sans text-sm font-semibold tracking-wide text-bg-elevated transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          {status === "loading" ? "Un attimo…" : "Avvisami"}
        </button>
      </div>
      {message ? (
        <p
          className={`mt-3 font-sans text-sm ${
            status === "duplicate" ? "text-muted" : "text-accent"
          }`}
          role="alert"
        >
          {message}
        </p>
      ) : null}
      <p className="mt-4 font-sans text-xs leading-relaxed text-muted">
        Usiamo la mail solo per avvisarti del lancio. Niente newsletter noiose.
      </p>
    </form>
  );
}

export function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="border-t border-line px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-xl text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          Presto online
        </p>
        <h2 className="mt-5 font-serif text-3xl font-medium leading-snug tracking-tight sm:text-4xl md:text-5xl">
          Il webapp sta per arrivare.
        </h2>
        <p className="mx-auto mt-4 max-w-md font-sans text-base leading-relaxed text-muted sm:text-lg">
          Lascia la mail: ti avvisiamo per prime.
        </p>
        <div className="mt-10 text-left">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
