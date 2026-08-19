"use client";

import { useState } from "react";

type Status = { kind: "idle" | "sending" | "ok" | "error"; message?: string };

const field =
  "mt-2 w-full rounded-sm border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand";
const label = "text-sm font-medium text-ink";

export function ContactForm() {
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
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
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
        className="rounded-sm bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {status.kind === "sending" ? "Sending…" : "Send message"}
      </button>

      {status.message && (
        <p
          role="status"
          className={`text-sm ${status.kind === "ok" ? "text-brand" : "text-red-700"}`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
