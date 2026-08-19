import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-gradient-to-b from-brand-dark to-brand text-white">
        <Container className="py-24 sm:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {site.registrations.businessType}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {site.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Request Our Capability Statement
            </Link>
            <Link
              href="/capabilities"
              className="rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Capabilities
            </Link>
          </div>
        </Container>
      </section>

      {/* Capability statement strip */}
      <section className="border-b border-line bg-mist">
        <Container className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "UEI", value: site.registrations.uei },
            { label: "CAGE Code", value: site.registrations.cage },
            { label: "SAM.gov", value: site.registrations.samStatus },
            { label: "Business Type", value: site.registrations.businessType },
          ]
            .filter((f) => f.value)
            .map((f) => (
              <div key={f.label}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  {f.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-ink">{f.value}</p>
              </div>
            ))}
        </Container>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            What we deliver
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Core service lines we bid and perform under. Each is scoped,
            documented, and reported against the contract terms.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {site.services.map((s) => (
              <div key={s.title} className="bg-white p-7">
                <h3 className="text-base font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* NAICS */}
      <section className="border-y border-line bg-mist py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            NAICS codes
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            The classifications we register and compete under.
          </p>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {site.naics.map((n) => (
              <li
                key={n.code}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:gap-8"
              >
                <span className="w-24 shrink-0 font-mono text-sm font-semibold text-brand">
                  {n.code}
                </span>
                <span className="text-sm text-ink-soft">{n.label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Differentiators */}
      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">
              Why clients award us work
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
              Contracts are won on confidence. These are the commitments we hold
              ourselves to on every engagement.
            </p>
          </div>
          <ul className="space-y-5">
            {site.differentiators.map((d) => (
              <li key={d} className="flex gap-4">
                <span
                  aria-hidden
                  className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-[11px] font-bold text-white"
                >
                  &#10003;
                </span>
                <span className="text-base leading-relaxed text-ink-soft">{d}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 text-white">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Have a solicitation or scope of work?
            </h2>
            <p className="mt-2 text-white/70">
              Send it over and we&apos;ll respond with our fit and availability.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </Container>
      </section>
    </>
  );
}
