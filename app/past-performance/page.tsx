import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Past Performance",
  description: `Selected engagements delivered by ${site.name}.`,
};

export default function PastPerformancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Past Performance"
        title="Selected engagements"
        intro="Representative work, with the scope delivered and the result it produced. References available on request."
      />

      <section className="sec-light py-15">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          {site.pastPerformance.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article className="grid gap-8 border-t border-rule py-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
                <div>
                  <h2 className="font-head text-2xl tracking-[-0.02em] lg:text-3xl">
                    {p.client}
                  </h2>
                  <p className="mt-4 text-sm text-mut">{p.value}</p>
                </div>
                <dl className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.12em] text-mut">
                      Scope
                    </dt>
                    <dd className="mt-3 text-sm leading-relaxed text-fg/70">
                      {p.scope}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.12em] text-mut">
                      Outcome
                    </dt>
                    <dd className="mt-3 text-sm leading-relaxed text-fg/70">
                      {p.outcome}
                    </dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-rule" />

          <Reveal delay={0.16}>
            <p className="mt-14 text-sm text-fg/70">
              Need a reference for a specific scope?{" "}
              <Link
                href="/contact"
                className="text-fg underline decoration-1 underline-offset-4"
              >
                Contact us
              </Link>{" "}
              and we&apos;ll provide contacts relevant to your solicitation.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
