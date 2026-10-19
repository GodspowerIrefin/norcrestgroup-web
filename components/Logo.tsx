/**
 * Norcrest Group mark: an N drawn as two verticals and a diagonal inside a
 * square frame, with a small accent notch at the lower-right corner.
 * Monochrome via currentColor so it sits on any surface.
 */
export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M11 30 V10 L29 30 V10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
      />
      <rect x="33" y="33" width="6" height="6" fill="#b0562f" />
    </svg>
  );
}
