import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

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

      <section className="py-20">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Service lines
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
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

      <section className="border-t border-line bg-mist py-20">
        <Container className="grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              NAICS codes
            </h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {site.naics.map((n) => (
                <li key={n.code} className="flex gap-6 py-4">
                  <span className="w-20 shrink-0 font-mono text-sm font-semibold text-brand">
                    {n.code}
                  </span>
                  <span className="text-sm text-ink-soft">{n.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              Registrations
            </h2>
            {regRows.length > 0 ? (
              <dl className="mt-8 divide-y divide-line border-y border-line">
                {regRows.map((r) => (
                  <div key={r.label} className="flex justify-between gap-6 py-4">
                    <dt className="text-sm text-ink-soft">{r.label}</dt>
                    <dd className="text-sm font-semibold text-ink">{r.value}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-8 text-sm text-ink-soft">
                Registration details available on request.
              </p>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
