import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";

const COMPANY_LINKS = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "About", href: "/about" },
  { label: "Past Performance", href: "/past-performance" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const { email, phone, address } = site.contact;

  return (
    <footer className="border-t border-rule">
      <div className="mx-auto max-w-[88rem] px-6 pt-24 pb-12 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[3fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-9 w-9" />
              <span className="font-head text-lg font-semibold uppercase tracking-[0.14em]">
                {site.name}
              </span>
            </div>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-fg/70">
              {site.description}
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:border-l lg:border-rule lg:pl-16">
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.12em] text-mut">
                Company
              </h3>
              <ul className="mt-6 space-y-3">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-fg/80 transition-colors hover:text-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.12em] text-mut">
                Contact
              </h3>
              <ul className="mt-6 space-y-3 text-sm text-fg/80">
                <li>
                  <a href={`mailto:${email}`} className="transition-colors hover:text-fg">
                    {email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                    className="transition-colors hover:text-fg"
                  >
                    {phone}
                  </a>
                </li>
                <li className="leading-relaxed">
                  {address.line1}
                  <br />
                  {address.city}, {address.state} {address.zip}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-rule pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-mut">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-mut">{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
