import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} about a solicitation, scope of work, or teaming opportunity.`,
};

export default function ContactPage() {
  const { email, phone, address } = site.contact;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Send us your scope of work"
        intro="Share a solicitation, statement of work, or teaming opportunity and we'll respond with our fit, availability, and capability statement."
      />

      <section className="py-15">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-6 lg:grid-cols-[3fr_2fr] lg:px-12">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.08} className="lg:border-l lg:border-rule lg:pl-16">
            <h2 className="font-head text-3xl tracking-[-0.02em]">Direct contact</h2>
            <ul className="mt-10 border-t border-rule text-sm">
              <li className="border-b border-rule py-6">
                <span className="block text-[11px] uppercase tracking-[0.12em] text-mut">
                  Email
                </span>
                <a
                  className="mt-3 block text-fg/80 transition-colors hover:text-fg"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              </li>
              <li className="border-b border-rule py-6">
                <span className="block text-[11px] uppercase tracking-[0.12em] text-mut">
                  Phone
                </span>
                <a
                  className="mt-3 block text-fg/80 transition-colors hover:text-fg"
                  href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                >
                  {phone}
                </a>
              </li>
              <li className="border-b border-rule py-6">
                <span className="block text-[11px] uppercase tracking-[0.12em] text-mut">
                  Address
                </span>
                <span className="mt-3 block leading-relaxed text-fg/80">
                  {address.line1}
                  <br />
                  {address.city}, {address.state} {address.zip}
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
