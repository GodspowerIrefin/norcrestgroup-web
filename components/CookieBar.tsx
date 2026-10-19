"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "norcrest-consent";

export default function CookieBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (choice: "essential" | "all") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* storage unavailable — dismiss for this visit only */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      id="gdpr"
      role="dialog"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-ink"
    >
      <div className="mx-auto flex max-w-[88rem] flex-col gap-5 px-6 py-5 lg:flex-row lg:items-center lg:px-12">
        <p className="flex-1 text-xs leading-relaxed text-mut">
          We use cookies to understand how this site is used. You can accept
          all cookies or continue with essential cookies only.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => decide("essential")}
            className="border border-white/40 px-5 py-2.5 text-xs uppercase tracking-[0.12em] text-fg/80 transition-colors hover:bg-fg hover:text-ink"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => decide("all")}
            className="border border-white px-5 py-2.5 text-xs uppercase tracking-[0.12em] transition-colors hover:bg-fg hover:text-ink"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
