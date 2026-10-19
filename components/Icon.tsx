import type { ReactNode } from "react";

/**
 * Thin-line technical glyphs drawn to match the site's drafting language:
 * 1.5px strokes, square caps, no fills, no rounded shapes.
 */
const GLYPHS: Record<string, ReactNode> = {
  civil: (
    <>
      <path d="M2 16h20" />
      <path d="M4 16c2.5-6 13.5-6 16 0" />
      <path d="M8 13.4V16M12 11.6V16M16 13.4V16" />
      <path d="M4 16v4M20 16v4" />
    </>
  ),
  procurement: (
    <>
      <rect x="3" y="7" width="18" height="10" />
      <path d="M8 7v10M13 7v10M18 7v10" />
    </>
  ),
  engineering: (
    <>
      <path d="M9.5 21L12 4l2.5 17" />
      <path d="M10.4 10h3.2M9.7 15h4.6M7 21h10" />
      <path d="M10.4 10l3.3 5M13.6 10l-3.3 5" />
    </>
  ),
  advisory: (
    <>
      <rect x="6" y="5" width="12" height="16" />
      <path d="M10 5V3h4v2" />
      <path d="M9 10h6M9 13h6M9 16h4" />
    </>
  ),
  tender: (
    <>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M15 3v4h4" />
      <path d="M9 11h6M9 14h6M9 17h4" />
    </>
  ),
  incountry: (
    <>
      <path d="M5 8l7-4 7 4" />
      <rect x="5" y="8" width="14" height="13" />
      <path d="M11 21v-4h2v4" />
      <path d="M8 12h2M14 12h2M8 16h2M14 16h2" />
    </>
  ),
  customs: (
    <>
      <path d="M3 15h18l-2.5 4h-13z" />
      <path d="M7 15v-3h4v3M12 15v-6h4v6" />
    </>
  ),
  payment: (
    <>
      <path d="M4 9l8-5 8 5H4z" />
      <path d="M7 9v8M12 9v8M17 9v8" />
      <path d="M5 17h14M4 20h16" />
    </>
  ),
  check: (
    <>
      <rect x="4" y="4" width="16" height="16" />
      <path d="M8 12l3 3 5-6" />
    </>
  ),
};

export default function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: keyof typeof GLYPHS | string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
    >
      {GLYPHS[name]}
    </svg>
  );
}
