"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const UTILITY_LINKS = [
  { label: "Capability statement", href: "#contact" },
  { label: "Compliance", href: "#compliance" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const PRIMARY_LINKS = [
  { label: "Who we are", href: "#who-we-are" },
  { label: "What we do", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Newsroom", href: "#newsroom" },
];

const MENU_LINKS = [
  { label: "Who we are", href: "#who-we-are" },
  { label: "What we do", href: "#services" },
  { label: "Working with government", href: "#government" },
  { label: "Selected projects", href: "#projects" },
  { label: "Newsroom", href: "#newsroom" },
  { label: "Careers", href: "#careers" },
  { label: "Compliance", href: "#compliance" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled && !open ? "bg-ink" : "bg-transparent"
        }`}
      >
        <div
          className={`hidden border-b border-rule transition-opacity duration-300 md:block ${
            open ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="mx-auto flex max-w-[88rem] justify-end gap-8 px-6 py-2.5 lg:px-12">
            {UTILITY_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-mut transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto flex max-w-[88rem] items-center justify-between px-6 py-5 lg:px-12">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 font-head text-lg font-semibold uppercase tracking-[0.14em]"
          >
            <Logo className="h-8 w-8" />
            Norcrest Group
          </a>
          <div className="flex items-center gap-10">
            <nav
              className={`hidden items-center gap-8 lg:flex ${open ? "pointer-events-none opacity-0" : ""}`}
            >
              {PRIMARY_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.12em] text-fg/80 transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="text-xs uppercase tracking-[0.12em] transition-colors hover:text-mut"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ink transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto grid h-full max-w-[88rem] grid-cols-1 px-6 pt-28 pb-12 lg:grid-cols-[2fr_3fr] lg:px-12">
          <div className="relative hidden border-r border-rule pr-12 lg:block">
            <div className="img-zoom h-full">
              {/* eslint-disable-next-line @next/next/no-img-element -- full-bleed art direction */}
              <img
                src="/media/office.jpg"
                alt="Engineer at a dual-monitor workstation in the Houston office"
                className="photo-treat h-full w-full object-cover"
              />
            </div>
          </div>
          <nav className="flex flex-col justify-between lg:pl-16">
            <ul>
              {MENU_LINKS.map((link) => (
                <li key={link.label} className="border-b border-rule">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-5 font-head text-3xl tracking-[-0.02em] transition-colors hover:text-mut lg:text-4xl"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-x-8 gap-y-2 pt-10">
              {UTILITY_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-xs text-mut transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
