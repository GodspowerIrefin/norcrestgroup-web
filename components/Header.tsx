"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { site } from "@/lib/site";

const LINKS = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "About", href: "/about" },
  { label: "Past Performance", href: "/past-performance" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled && !open ? "border-rule bg-ink" : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[88rem] items-center justify-between px-6 py-5 lg:px-12">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 font-head text-lg font-semibold uppercase tracking-[0.14em]"
          >
            <Logo className="h-8 w-8" />
            {site.shortName}
          </Link>
          <div className="flex items-center gap-10">
            <nav
              className={`hidden items-center gap-8 lg:flex ${open ? "pointer-events-none opacity-0" : ""}`}
            >
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.12em] transition-colors hover:text-fg ${
                    pathname === link.href ? "text-fg" : "text-fg/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="border border-fg/60 px-5 py-2.5 text-xs uppercase tracking-[0.12em] transition-colors hover:bg-fg hover:text-ink"
              >
                Request Capabilities
              </Link>
            </nav>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="text-xs uppercase tracking-[0.12em] transition-colors hover:text-mut lg:hidden"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ink transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="mx-auto flex h-full max-w-[88rem] flex-col px-6 pt-28 pb-12">
          <ul>
            {LINKS.map((link) => (
              <li key={link.href} className="border-b border-rule">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-5 font-head text-3xl tracking-[-0.02em] transition-colors hover:text-mut"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="cta-link mt-10 text-sm"
          >
            Request Capabilities <span className="arrow">→</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
