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
  const { about } = site;

  return (
    <>
      <PageHeader eyebrow="About" title={site.name} intro={site.tagline} />

      {/* ========== OUR APPROACH ========== */}
      <section className="sec-light py-15">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
            <div>
              <Reveal>
                <h2 className={h2}>Our approach</h2>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="mt-12 max-w-2xl space-y-6 text-base leading-relaxed text-fg/80">
                  <p>
                    {site.name} was formed to serve clients who need work done
                    to specification, documented as it happens, and delivered
                    without surprises. We take on scopes we can staff properly
                    and decline the ones we can&apos;t which is why our
                    performance record stands up to review.
                  </p>
                  <p>
                    Every engagement starts with a written understanding of
                    scope, schedule, and acceptance criteria. From there we
                    report on a fixed cadence, escalate early, and keep a clean
                    paper trail so nothing about our performance has to be
                    reconstructed later.
                  </p>
                  <p>
                    We work with federal, state, and municipal agencies as well
                    as commercial prime contractors, and we are equally
                    comfortable as a prime or a subcontractor on a larger team.
                  </p>
                </div>
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
    </>
  );
}
