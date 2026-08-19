import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} about a solicitation, scope of work, or teaming opportunity.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Send us your scope of work"
        intro="Share a solicitation, statement of work, or teaming opportunity and we'll respond with our fit, availability, and capability statement."
      />

      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-sm border border-line bg-mist p-7">
              <p className="text-sm font-semibold text-ink">Direct contact</p>
              <ul className="mt-5 space-y-4 text-sm text-ink-soft">
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em]">
                    Email
                  </span>
                  <a
                    className="mt-1 block font-medium text-brand hover:underline"
                    href={`mailto:${site.contact.email}`}
                  >
                    {site.contact.email}
                  </a>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em]">
                    Phone
                  </span>
                  <a
                    className="mt-1 block font-medium text-brand hover:underline"
                    href={`tel:${site.contact.phone.replace(/[^\d+]/g, "")}`}
                  >
                    {site.contact.phone}
                  </a>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em]">
                    Address
                  </span>
                  <span className="mt-1 block leading-relaxed">
                    {site.contact.address.line1}
                    <br />
                    {site.contact.address.city}, {site.contact.address.state}{" "}
                    {site.contact.address.zip}
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
