import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-mist">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="text-lg font-semibold text-ink">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
            {site.description}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li><Link href="/capabilities" className="hover:text-brand">Capabilities</Link></li>
            <li><Link href="/about" className="hover:text-brand">About</Link></li>
            <li><Link href="/past-performance" className="hover:text-brand">Past Performance</Link></li>
            <li><Link href="/contact" className="hover:text-brand">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>
              <a href={`mailto:${site.contact.email}`} className="hover:text-brand">
                {site.contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.contact.phone.replace(/[^\d+]/g, "")}`} className="hover:text-brand">
                {site.contact.phone}
              </a>
            </li>
            <li className="pt-1 leading-relaxed">
              {site.contact.address.line1}
              <br />
              {site.contact.address.city}, {site.contact.address.state}{" "}
              {site.contact.address.zip}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.domain}</p>
        </Container>
      </div>
    </footer>
  );
}
