import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Capabilities",
  description: `Service lines, NAICS codes, and registration details for ${site.name}.`,
};

export default function CapabilitiesPage() {
  const regRows = [
    { label: "Unique Entity ID (UEI)", value: site.registrations.uei },
    { label: "CAGE Code", value: site.registrations.cage },
    { label: "DUNS", value: site.registrations.duns },
    { label: "SAM.gov Status", value: site.registrations.samStatus },
    { label: "Business Type", value: site.registrations.businessType },
  ].filter((r) => r.value);

  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="What we do, and how we prove it"
        intro="Our service lines, the classifications we compete under, and the registration details a contracting officer needs to verify us."
      />

      <section className="sec-light py-15">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <Reveal>
            <h2 className="font-head text-4xl leading-[1.08] tracking-[-0.02em] md:text-5xl">
              Service lines
            </h2>
          </Reveal>
          <div className="mt-16">
            {site.services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <div className="grid gap-4 border-t border-rule py-10 md:grid-cols-12 md:gap-8">
                  <p className="text-sm text-mut md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-head text-2xl tracking-[-0.02em] md:col-span-5 lg:text-3xl">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-fg/70 md:col-span-5 md:col-start-8">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-rule" />
          </div>
        </div>
      </section>

      <section className="py-15">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <Reveal>
              <h2 className="font-head text-4xl leading-[1.08] tracking-[-0.02em] md:text-5xl">
                NAICS codes
              </h2>
            </Reveal>
            <ul className="mt-12 border-t border-rule">
              {site.naics.map((n, i) => (
                <Reveal key={n.code} as="li" delay={i * 0.08}>
                  <div className="flex gap-8 border-b border-rule py-6">
                    <span className="w-20 shrink-0 font-head text-xl tracking-[-0.01em]">
                      {n.code}
                    </span>
                    <span className="text-sm leading-relaxed text-fg/70">{n.label}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="lg:border-l lg:border-rule lg:pl-16">
            <Reveal>
              <h2 className="font-head text-4xl leading-[1.08] tracking-[-0.02em] md:text-5xl">
                Registrations
              </h2>
            </Reveal>
            {regRows.length > 0 ? (
              <dl className="mt-12 border-t border-rule">
                {regRows.map((r, i) => (
                  <Reveal key={r.label} delay={i * 0.08}>
                    <div className="flex justify-between gap-6 border-b border-rule py-6">
                      <dt className="text-sm text-fg/70">{r.label}</dt>
                      <dd className="text-right text-sm">{r.value}</dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            ) : (
              <p className="mt-12 text-sm text-fg/70">
                Registration details available on request.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
