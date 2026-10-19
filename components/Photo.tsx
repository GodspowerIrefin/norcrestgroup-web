const RATIOS = {
  "4/5": "aspect-[4/5]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
  "21/9": "aspect-[21/9]",
} as const;

/**
 * Placeholder for real photography. Drop the final image at `src` under
 * /public and it renders; until then the slot shows its shot description
 * at the correct aspect ratio.
 */
export default function Photo({
  ratio,
  caption,
  src,
  className = "",
}: {
  ratio: keyof typeof RATIOS;
  caption: string;
  src?: string;
  className?: string;
}) {
  return (
    <figure className={`img-zoom relative ${RATIOS[ratio]} ${className}`}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element -- full-bleed art direction; sizes set by container
        <img
          src={src}
          alt={caption}
          className="photo-treat h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-end bg-panel p-4">
          <figcaption className="text-[11px] uppercase tracking-[0.12em] leading-relaxed text-mut">
            Photo — {caption}
          </figcaption>
        </div>
      )}
    </figure>
  );
}
