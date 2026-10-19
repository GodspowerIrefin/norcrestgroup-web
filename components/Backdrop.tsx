/**
 * Faint engineering-drawing line work used as section backgrounds.
 * All stroke currentColor so they adapt to dark and off-white bands;
 * parents set position, size, and a low opacity.
 */

function Frame({
  viewBox,
  className,
  children,
}: {
  viewBox: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox={viewBox}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      preserveAspectRatio="xMaxYMax meet"
    >
      {children}
    </svg>
  );
}

/** Suspension bridge elevation with dimension marks. */
export function BridgeLines({ className }: { className?: string }) {
  return (
    <Frame viewBox="0 0 900 420" className={className}>
      <path d="M0 300h900" strokeWidth="1.5" />
      <path d="M240 300V120M660 300V120" strokeWidth="1.5" />
      <path d="M230 118h20M650 118h20" />
      <path d="M0 190q120 116 240 -68M240 122q210 260 420 0M660 122q120 184 240 68" />
      <path d="M120 258v42M180 276v24M300 224v76M360 260v40M450 282v18M540 260v40M600 224v76M720 258v42M780 276v24" strokeWidth="0.75" />
      <path d="M240 90v-18h420v18M450 72v-14" strokeWidth="0.75" />
      <path d="M446 300l4 -8 4 8" strokeWidth="0.75" />
      <path d="M0 340h900" strokeWidth="0.5" strokeDasharray="2 10" />
    </Frame>
  );
}

/** Transmission towers with catenary spans. */
export function TowerLines({ className }: { className?: string }) {
  return (
    <Frame viewBox="0 0 700 520" className={className}>
      <path d="M170 480L210 120l40 360M180 220h60M172 320h76M160 480h100" strokeWidth="1.25" />
      <path d="M182 220l52 100M238 220l-52 100" strokeWidth="0.75" />
      <path d="M196 120h28M196 120l-18 -34M224 120l18 -34" strokeWidth="1.25" />
      <path d="M480 480L510 180l30 300M488 260h44M482 340h56M472 480h76" strokeWidth="1.25" />
      <path d="M490 260l40 80M530 260l-40 80" strokeWidth="0.75" />
      <path d="M500 180h20M500 180l-14 -28M520 180l14 -28" strokeWidth="1.25" />
      <path d="M178 88q160 120 316 66M242 88q140 100 250 64" strokeWidth="0.75" />
      <path d="M534 154q90 60 166 40M494 152q-160 80 -300 -40" strokeWidth="0.75" />
      <path d="M0 480h700" strokeWidth="0.5" strokeDasharray="2 10" />
    </Frame>
  );
}

/** Survey contours with crosshair station marks. */
export function ContourLines({ className }: { className?: string }) {
  return (
    <Frame viewBox="0 0 900 360" className={className}>
      <path d="M0 300q220 -70 420 -20t480 -30" strokeWidth="0.75" />
      <path d="M0 250q240 -80 440 -30t460 -40" strokeWidth="0.75" />
      <path d="M0 200q260 -90 460 -40t440 -50" strokeWidth="0.75" />
      <path d="M0 150q280 -100 480 -50t420 -55" strokeWidth="0.75" />
      <path d="M320 214v24M308 226h24" />
      <path d="M620 160v24M608 172h24" />
      <path d="M150 262v24M138 274h24" />
    </Frame>
  );
}

/** The Norcrest N mark as a large contour. */
export function MarkLines({ className }: { className?: string }) {
  return (
    <Frame viewBox="0 0 400 400" className={className}>
      <rect x="10" y="10" width="380" height="380" strokeWidth="1.5" />
      <path d="M110 300V100l180 200V100" strokeWidth="2" />
      <path d="M10 200h-0M110 60v-30M290 370v-30" strokeWidth="0.75" strokeDasharray="2 8" />
    </Frame>
  );
}
