"use client";

import { useState } from "react";

type Status = { kind: "idle" | "sending" | "ok" | "error"; message?: string };

const field =
  "mt-3 w-full border border-rule bg-transparent px-4 py-3 text-sm text-fg outline-none transition-colors focus:border-fg";
const label = "text-[11px] uppercase tracking-[0.12em] text-mut";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ kind: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus({ kind: "error", message: json.error ?? "Something went wrong." });
        return;
      }
      form.reset();
      setStatus({
        kind: "ok",
        message: "Thank you — we've received your message and will respond shortly.",
      });
    } catch {
      setStatus({
        kind: "error",
        message: "Network error. Please try again or email us directly.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Name</label>
          <input className={field} id="name" name="name" required autoComplete="name" />
        </div>
        <div>
          <label className={label} htmlFor="organization">Organization</label>
          <input className={field} id="organization" name="organization" autoComplete="organization" />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="email">Email</label>
        <input className={field} id="email" name="email" type="email" required autoComplete="email" />
      </div>

      <div>
        <label className={label} htmlFor="message">
          Scope of work or question
        </label>
        <textarea className={`${field} min-h-40 resize-y`} id="message" name="message" required />
      </div>

      <button
        type="submit"
        disabled={status.kind === "sending"}
        className="border border-fg px-8 py-4 text-xs uppercase tracking-[0.12em] transition-colors hover:bg-fg hover:text-canvas disabled:opacity-60"
      >
        {status.kind === "sending" ? "Sending…" : "Send message"}
      </button>

      {status.message && (
        <p
          role="status"
          className={`text-sm ${status.kind === "ok" ? "text-fg" : "text-accent"}`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
