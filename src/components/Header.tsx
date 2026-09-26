"use client";

import Image from "next/image";
import { asset } from "@/lib/asset";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#puja-days", label: "Puja Days" },
  { href: "#bangla-nirghanta", label: "বাংলা সূচি" },
  { href: "#events", label: "Events" },
  { href: "#visitors", label: "For Visitors" },
  { href: "#directions", label: "Directions" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#gallery", label: "Gallery" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#volunteer", label: "Volunteer" },
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
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-navy"
      }`}
    >
      <div className="container-premium flex items-center justify-between gap-3 px-5 py-3 md:py-3.5">
        <a
          href="#top"
          aria-label="Nayer Pally Sealdah Sarbojanin Durga Puja — Jatio Yuba Sangha"
          className="group focus-ring flex min-w-0 items-center rounded-sm"
        >
          <Image
            src={asset("/brand/nayer-pally-logo-hd-2026.png")}
            alt="Nayer Pally Sealdah Sarbojanin Durga Puja — Jatio Yuba Sangha"
            width={1724}
            height={1724}
            priority
            quality={100}
            sizes="(min-width: 768px) 64px, 48px"
            className="h-12 w-12 shrink-0 object-contain md:h-16 md:w-16"
          />
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring rounded-sm px-2 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-cream/85 transition hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#donate"
            className="focus-ring hidden rounded-sm bg-gold px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy transition hover:brightness-110 sm:inline-flex"
          >
            Donate
          </a>

          <button
            type="button"
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-sm border border-gold/30 text-cream xl:hidden"
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
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-gold/20 bg-navy/98 px-5 py-6 xl:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="focus-ring block rounded-sm px-3 py-3 text-sm uppercase tracking-[0.16em] text-cream/90 hover:bg-royal hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#donate"
                className="focus-ring mt-2 block rounded-sm bg-gold px-3 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-navy"
                onClick={() => setOpen(false)}
              >
                Donate
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
