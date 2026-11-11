import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — how we work and what we hold ourselves to.`,
};

const h2 = "font-head text-4xl leading-[1.08] tracking-[-0.02em] md:text-5xl";

export default function AboutPage() {
  const { about, contact } = site;

  return (
    <>
      <PageHeader eyebrow="About" title={site.name} intro={site.tagline} />

      {/* ========== COMPANY SNAPSHOT ========== */}
      <section className="sec-light py-15">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
            <div>
              <Reveal>
                <h2 className={h2}>Company Snapshot</h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-12 max-w-2xl text-lg leading-relaxed text-fg/80">
                  {about.snapshot}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.16} className="lg:border-l lg:border-rule lg:pl-16">
              <Photo
                ratio="4/5"
                src="/media/drafting.jpg"
                caption="Markups on a construction drawing at the plan table"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== CORE COMPETENCIES ========== */}
      <section className="py-15">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <Reveal>
            <h2 className={h2}>Core Competencies</h2>
          </Reveal>
          <div className="mt-16">
            {about.competencies.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.08}>
                <div className="grid gap-4 border-t border-rule py-10 md:grid-cols-12 md:gap-8">
                  <p className="text-sm text-mut md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-head text-2xl tracking-[-0.02em] md:col-span-5 lg:text-3xl">
                    {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-fg/70 md:col-span-5 md:col-start-8">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-rule" />
          </div>
        </div>
      </section>

      {/* ========== DIFFERENTIATORS ========== */}
      <section className="sec-light py-15">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <Reveal>
              <h2 className={h2}>Differentiators</h2>
            </Reveal>
            <ul className="lg:border-l lg:border-rule lg:pl-16">
              {about.differentiators.map((d, i) => (
                <Reveal key={d} as="li" delay={i * 0.08}>
                  <div className="flex items-start gap-4 border-b border-rule py-6">
                    <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-lg leading-relaxed">{d}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ========== COMPANY DATA + CONTACT ========== */}
      <section className="py-15">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <Reveal>
              <h2 className={h2}>Company Data</h2>
            </Reveal>
            <dl className="mt-12 border-t border-rule">
              {about.companyData.map((row, i) => (
                <Reveal key={row.label} delay={i * 0.05}>
                  <div className="flex justify-between gap-6 border-b border-rule py-5">
                    <dt className="text-sm text-fg/70">{row.label}</dt>
                    <dd className="text-right text-sm">{row.value}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          <div className="lg:border-l lg:border-rule lg:pl-16">
            <Reveal>
              <h2 className={h2}>Contact</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <ul className="mt-12 border-t border-rule text-sm">
                <li className="border-b border-rule py-5 font-head text-xl tracking-[-0.01em]">
                  {contact.name}, {contact.title}
                </li>
                <li className="border-b border-rule py-5">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-fg/80 transition-colors hover:text-fg"
                  >
                    {contact.email}
                  </a>
                </li>
                <li className="border-b border-rule py-5">
                  <a
                    href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                    className="text-fg/80 transition-colors hover:text-fg"
                  >
                    {contact.phone}
                  </a>
                </li>
                <li className="border-b border-rule py-5">
                  <a href={site.url} className="text-fg/80 transition-colors hover:text-fg">
                    {contact.website}
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
