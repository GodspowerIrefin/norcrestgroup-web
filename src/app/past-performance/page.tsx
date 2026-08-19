import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

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

      <section className="py-20">
        <Container>
          <div className="space-y-px overflow-hidden rounded-sm border border-line bg-line">
            {site.pastPerformance.map((p, i) => (
              <article key={i} className="bg-white p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="text-lg font-semibold text-ink">{p.client}</h2>
                  <p className="text-sm font-medium text-brand">{p.value}</p>
                </div>
                <dl className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                      Scope
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {p.scope}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                      Outcome
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {p.outcome}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          <p className="mt-10 text-sm text-ink-soft">
            Need a reference for a specific scope?{" "}
            <Link href="/contact" className="font-semibold text-brand hover:underline">
              Contact us
            </Link>{" "}
            and we&apos;ll provide contacts relevant to your solicitation.
          </p>
        </Container>
      </section>
    </>
  );
}
