import Link from "next/link";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import Icon from "@/components/Icon";
import { BridgeLines, ContourLines, MarkLines } from "@/components/Backdrop";
import { site } from "@/lib/site";

// glyph per service line, in the order of site.services
const SERVICE_ICONS = ["advisory", "procurement", "civil", "incountry", "tender", "customs"];

export default function Home() {
  const facts = [
    { label: "UEI", value: site.registrations.uei },
    { label: "CAGE Code", value: site.registrations.cage },
    { label: "SAM.gov", value: site.registrations.samStatus },
    { label: "Business Type", value: site.registrations.businessType },
  ].filter((f) => f.value);

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative flex min-h-svh items-end pt-36">
        <div className="absolute inset-0 overflow-hidden bg-panel">
          {/* eslint-disable-next-line @next/next/no-img-element -- full-bleed hero, art-directed crop */}
          <img
            src="/media/hero.jpg"
            alt="High-voltage transmission towers at dusk"
            className="photo-treat h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[88rem] px-6 pb-16 lg:px-12 lg:pb-20">
          <p className="text-[11px] uppercase tracking-[0.12em] text-fg/70">
            {site.registrations.businessType}
          </p>
          {/* sized by the smaller of width and height so short laptop screens don't overflow */}
          <h1 className="mt-6 max-w-5xl font-head text-[length:clamp(2.75rem,min(6vw,8svh),6.25rem)] leading-[1.04] tracking-[-0.02em]">
            {site.tagline}
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-fg/80">
            {site.description}
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-10">
            <Link
              href="/contact"
              className="bg-fg px-8 py-4 text-xs uppercase tracking-[0.12em] text-canvas transition-colors hover:bg-fg/85"
            >
              Request Our Capability Statement
            </Link>
            <Link href="/capabilities" className="cta-link text-sm">
              View Capabilities <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== REGISTRATION STRIP ========== */}
      <section className="border-b border-rule">
        <div className="mx-auto grid max-w-[88rem] gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
          {facts.map((f) => (
            <div key={f.label}>
              <p className="text-[11px] uppercase tracking-[0.12em] text-mut">
                {f.label}
              </p>
              <p className="mt-3 font-head text-xl tracking-[-0.01em]">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="sec-light relative isolate overflow-hidden py-15">
        <BridgeLines className="pointer-events-none absolute right-0 bottom-0 -z-10 w-[72%] max-w-4xl opacity-[0.07]" />
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <Reveal>
            <h2 className="max-w-3xl font-head text-4xl leading-[1.08] tracking-[-0.02em] md:text-5xl lg:text-6xl">
              What we deliver
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-fg/80">
              Core service lines we bid and perform under. Each is scoped,
              documented, and reported against the contract terms.
            </p>
          </Reveal>

          <div className="mt-20">
            {site.services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <div className="grid gap-4 border-t border-rule py-10 md:grid-cols-12 md:gap-8">
                  <p className="text-sm text-mut md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="flex items-start gap-4 font-head text-2xl tracking-[-0.02em] md:col-span-5 lg:text-3xl">
                    <Icon name={SERVICE_ICONS[i]} className="mt-1 h-7 w-7 shrink-0 text-mut" />
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-fg/70 md:col-span-5 md:col-start-8">
                    {service.body}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-rule" />
          </div>

          {/* photo strip: mixed aspect ratios, thin vertical rules */}
          <div className="mt-24 grid md:grid-cols-[4fr_5fr_3fr] md:divide-x md:divide-rule">
            <Reveal className="md:pr-8">
              <Photo
                ratio="4/5"
                src="/media/site-crew.jpg"
                caption="Site walk on a reinforced slab pour, supervision team in hi-vis"
              />
            </Reveal>
            <Reveal delay={0.08} className="max-md:mt-8 md:px-8">
              <Photo
                ratio="3/2"
                src="/media/warehouse.jpg"
                caption="Racked distribution warehouse with picking bins"
              />
            </Reveal>
            <Reveal delay={0.16} className="max-md:mt-8 md:pl-8">
              <Photo
                ratio="1/1"
                src="/media/review.jpg"
                caption="Documents under review across two workstations"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== NAICS ========== */}
      <section className="relative isolate overflow-hidden py-15">
        <ContourLines className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 w-full opacity-[0.07]" />
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <div>
              <Reveal>
                <h2 className="font-head text-4xl leading-[1.08] tracking-[-0.02em] md:text-5xl">
                  NAICS codes
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-10 text-base leading-relaxed text-fg/80">
                  The classifications we register and compete under.
                </p>
              </Reveal>
            </div>
            <div className="lg:border-l lg:border-rule lg:pl-16">
              {site.naics.map((n, i) => (
                <Reveal key={n.code} delay={i * 0.08}>
                  <div className="flex flex-col gap-2 border-b border-rule py-7 first:border-t sm:flex-row sm:items-baseline sm:gap-10">
                    <span className="w-24 shrink-0 font-head text-2xl tracking-[-0.01em]">
                      {n.code}
                    </span>
                    <span className="text-sm text-fg/70">{n.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== DIFFERENTIATORS ========== */}
      <section className="sec-light py-15">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[2fr_3fr]">
            <div>
              <Reveal>
                <h2 className="font-head text-4xl leading-[1.08] tracking-[-0.02em] md:text-5xl">
                  Why clients award us work
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-10 max-w-lg text-base leading-relaxed text-fg/80">
                  Contracts are won on confidence. These are the commitments we
                  hold ourselves to on every engagement.
                </p>
              </Reveal>
            </div>
            <ul className="lg:border-l lg:border-rule lg:pl-16">
              {site.differentiators.map((d, i) => (
                <Reveal key={d} as="li" delay={i * 0.08}>
                  <div className="flex items-start gap-4 border-b border-rule py-6 first:pt-0">
                    <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-lg leading-relaxed">{d}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative isolate overflow-hidden py-15">
        <MarkLines className="pointer-events-none absolute -right-16 top-1/2 -z-10 h-[420px] -translate-y-1/2 opacity-[0.06]" />
        <div className="mx-auto flex max-w-[88rem] flex-col items-start justify-between gap-10 px-6 lg:flex-row lg:items-end lg:px-12">
          <div>
            <Reveal>
              <h2 className="max-w-3xl font-head text-4xl leading-[1.08] tracking-[-0.02em] md:text-5xl lg:text-6xl">
                Have a solicitation or scope of work?
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-fg/80">
                Send it over and we&apos;ll respond with our fit and availability.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Link href="/contact" className="cta-link shrink-0 text-sm">
              Get in touch <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
