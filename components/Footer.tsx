const LINK_COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Services",
    links: [
      { label: "Infrastructure & civil works", href: "#services" },
      { label: "Procurement & logistics", href: "#services" },
      { label: "Engineering & technical services", href: "#services" },
      { label: "Program management & advisory", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Who we are", href: "#who-we-are" },
      { label: "Working with government", href: "#government" },
      { label: "Selected projects", href: "#projects" },
      { label: "Newsroom", href: "#newsroom" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Capability statement", href: "#contact" },
      { label: "Compliance & registrations", href: "#compliance" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto max-w-[88rem] px-6 pt-24 pb-12 lg:px-12">
        <div className="mb-16 flex items-center gap-3">
          <Logo className="h-9 w-9" />
          <span className="font-head text-lg font-semibold uppercase tracking-[0.14em]">
            Norcrest Group
          </span>
        </div>
        <div className="grid gap-16 lg:grid-cols-[3fr_2fr]">
          <div className="grid gap-12 sm:grid-cols-3">
            {LINK_COLUMNS.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[11px] uppercase tracking-[0.12em] text-mut">
                  {col.heading}
                </h3>
                <ul className="mt-6 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-fg/80 transition-colors hover:text-fg"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:border-l lg:border-rule lg:pl-16">
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.12em] text-mut">
                Headquarters
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-fg/80">
                Norcrest Group LLC
                <br />
                9950 Westpark Drive, Suite 420
                <br />
                Houston, TX 77063, United States
                <br />
                +1 (713) 555-0148
              </p>
            </div>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.12em] text-mut">
                Nigeria office
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-fg/80">
                Norcrest Nigeria Ltd
                <br />
                Plot 142, Adetokunbo Ademola Crescent
                <br />
                Wuse II, Abuja, FCT, Nigeria
                <br />
                +234 809 555 0148
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-rule pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-mut">
            © {new Date().getFullYear()} Norcrest Group LLC. All rights
            reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy", "Terms of use", "Accessibility"].map((item) => (
              <a
                key={item}
                href="#top"
                className="text-xs text-mut transition-colors hover:text-fg"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
