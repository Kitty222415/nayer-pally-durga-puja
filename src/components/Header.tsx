"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#puja-days", label: "Puja Days" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#volunteer", label: "Volunteer" },
  { href: "#donate", label: "Donate" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-midnight/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-premium flex items-center justify-between gap-4 px-5 py-3 md:py-4">
        <a href="#top" className="group focus-ring flex min-w-0 items-center gap-3 rounded-sm">
          <Image
            src="/brand/logo.jpeg"
            alt="Nayer Pally Sealdah Sarbojanin Durga Puja Committee logo"
            width={48}
            height={48}
            priority
            className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-gold/40 md:h-12 md:w-12"
          />
          <span className="min-w-0">
            <span className="font-display block truncate text-sm font-semibold tracking-wide text-ivory md:text-base">
              Nayer Pally Sealdah
            </span>
            <span className="block truncate text-[10px] uppercase tracking-[0.18em] text-gold/90 md:text-[11px]">
              Jatio Yuba Sangha
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring rounded-sm px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-ivory/80 transition hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-sm border border-gold/30 text-ivory lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-gold/20 bg-midnight/98 px-5 py-6 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="focus-ring block rounded-sm px-3 py-3 text-sm uppercase tracking-[0.16em] text-ivory/90 hover:bg-royal hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
