import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — how we work and what we hold ourselves to.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={`About ${site.name}`}
        intro="A right-sized firm built to take on contract work and finish it cleanly with one accountable point of contact from award through closeout."
      />

      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              Our approach
            </h2>
            {/* TODO: replace the three paragraphs below with the real company story. */}
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                {site.name} was formed to serve clients who need work done to
                specification, documented as it happens, and delivered without
                surprises. We take on scopes we can staff properly and decline
                the ones we can&apos;t which is why our performance record
                stands up to review.
              </p>
              <p>
                Every engagement starts with a written understanding of scope,
                schedule, and acceptance criteria. From there we report on a
                fixed cadence, escalate early, and keep a clean paper trail so
                nothing about our performance has to be reconstructed later.
              </p>
              <p>
                We work with federal, state, and municipal agencies as well as
                commercial prime contractors, and we are equally comfortable as
                a prime or a subcontractor on a larger team.
              </p>
            </div>
          </div>

          <aside className="rounded-sm border border-line bg-mist p-7">
            <p className="text-sm font-semibold text-ink">
              Commitments on every contract
            </p>
            <ul className="mt-5 space-y-4">
              {site.differentiators.map((d) => (
                <li key={d} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-0.5 font-bold text-brand">
                    &#10003;
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>
    </>
  );
}
