import Reveal from "./Reveal";
import { site } from "@/lib/site";

/**
 * NAICS codes in two columns, filled column-first. Paired rows share a
 * height, so both columns start and end level even when a label wraps.
 */
export default function NaicsGrid({ className = "" }: { className?: string }) {
  const half = Math.ceil(site.naics.length / 2);

  return (
    <div
      className={`grid border-t border-rule lg:grid-flow-col lg:grid-cols-2 ${className}`}
      style={{ gridTemplateRows: `repeat(${half}, auto)` }}
    >
      {site.naics.map((n, i) => (
        <Reveal
          key={n.code}
          delay={(i % half) * 0.08}
          className={i < half ? "lg:pr-16" : "lg:border-l lg:border-rule lg:pl-16"}
        >
          <div className="flex h-full flex-col gap-2 border-b border-rule py-7 sm:flex-row sm:items-baseline sm:gap-10">
            <span className="w-24 shrink-0 font-head text-2xl tracking-[-0.01em]">
              {n.code}
            </span>
            <span className="text-sm text-fg/70">
              {n.label}
              {n.primary && (
                <span className="ml-3 text-[11px] uppercase tracking-[0.12em] text-accent">
                  Primary
                </span>
              )}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
