import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="border-b border-rule pt-40 pb-20 lg:pt-48">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.12em] text-mut">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-8 max-w-4xl font-head text-5xl leading-[1.04] tracking-[-0.02em] md:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-fg/80">
            {intro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
