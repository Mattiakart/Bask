"use client";

import { useId, useState } from "react";

import { CheckIcon } from "@/components/AppIcons";

type Status = "idle" | "pending" | "success" | "duplicate";

/**
 * Static builds have no server to post to, so they send signups to an external
 * form service instead. Those services don't report duplicates, so a 2xx from
 * one is simply a success.
 */
const endpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT;
const target = endpoint || "/api/waitlist";

export function WaitlistForm({ variant = "panel" }: { variant?: "hero" | "panel" }) {
  const fieldId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const height = variant === "hero" ? "h-12" : "h-14";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "pending") return;

    setStatus("pending");
    setError(null);

    try {
      const response = await fetch(target, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.status === 422) {
        setStatus("idle");
        setError("Controlla l'indirizzo: manca qualcosa.");
        return;
      }

      if (!response.ok) {
        setStatus("idle");
        setError("Non è andata. Riprova tra un attimo.");
        return;
      }

      if (endpoint) {
        setStatus("success");
        return;
      }

      const data: { status?: string } = await response.json().catch(() => ({}));
      setStatus(data.status === "duplicate" ? "duplicate" : "success");
    } catch {
      setStatus("idle");
      setError("Connessione assente. Riprova tra un attimo.");
    }
  }

  if (status === "success" || status === "duplicate") {
    return (
      <div
        role="status"
        className="animate-rise flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent-soft px-5 py-4"
      >
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-bg">
          <CheckIcon className="h-3.5 w-3.5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">
            {status === "success" ? "Sei in lista." : "Eri già in lista."}
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            {status === "success"
              ? "Ti scriviamo appena la webapp apre le porte. Niente doppioni, promesso."
              : "Tranquilla, non ti abbiamo dimenticata."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={fieldId} className="sr-only">
          Il tuo indirizzo email
        </label>
        <input
          id={fieldId}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          maxLength={254}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (error) setError(null);
          }}
          placeholder="il.tuo.indirizzo@email.it"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${fieldId}-error` : undefined}
          className={`${height} min-w-0 flex-1 rounded-full border border-line bg-surface/80 px-5 text-sm text-ink transition-colors placeholder:text-muted hover:border-ink/30 focus:border-ink focus:outline-none`}
        />
        <button
          type="submit"
          disabled={status === "pending"}
          className={`${height} shrink-0 rounded-full bg-ink px-8 text-[10px] font-semibold uppercase tracking-[0.24em] text-bg transition-colors hover:bg-accent-ink disabled:cursor-not-allowed disabled:opacity-60`}
        >
          {status === "pending" ? "Un attimo…" : "Unisciti alla waitlist"}
        </button>
      </form>

      {error ? (
        <p id={`${fieldId}-error`} role="alert" className="mt-3 text-sm text-accent-ink">
          {error}
        </p>
      ) : (
        <p className="mt-3 text-xs text-muted">
          Una sola email, quella del lancio. Niente newsletter, niente rumore.
        </p>
      )}
    </div>
  );
}
