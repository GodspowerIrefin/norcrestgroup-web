import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import NaicsGrid from "@/components/NaicsGrid";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Capabilities",
  description: `Service lines and NAICS codes for ${site.name}.`,
};

export default function CapabilitiesPage() {
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
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <Reveal>
            <h2 className="font-head text-4xl leading-[1.08] tracking-[-0.02em] md:text-5xl">
              NAICS codes
            </h2>
          </Reveal>
          <NaicsGrid className="mt-12" />
        </div>
      </section>
    </>
  );
}
