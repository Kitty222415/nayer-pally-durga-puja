import Image from "next/image";
import { asset } from "@/lib/asset";
import { getActiveContent, fillTemplate } from "@/lib/content";

export default function Hero() {
  const { site, year, anniversary, pack, showingFallback, targetYear } =
    getActiveContent();
  const badge = fillTemplate(
    pack.heroBadge || "{anniversary}th Year · Since 1948",
    year,
    anniversary,
  );

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Soft full-bleed backdrop — the pandal photo you shared */}
      <div className="absolute inset-0">
        <Image
          src={asset("/brand/maa-durga-hero-v2.jpg")}
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[center_28%] scale-[1.03]"
        />
        {/* Soft overlays so Maa stays visible but text stays readable */}
        <div
          className="absolute inset-0 bg-navy/35"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-navy/45 via-navy/25 to-navy/75"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-navy/25"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent"
          aria-hidden
        />
      </div>

      <div className="container-premium relative z-10 section-pad pt-20 md:pt-32">
        <div className="mx-auto max-w-3xl text-center fade-up">
          <div className="mx-auto mb-3 flex h-32 w-32 items-center justify-center rounded-full border-2 border-cream/75 bg-navy/35 p-2 shadow-[0_0_24px_rgba(228,199,101,0.5)] backdrop-blur-sm md:hidden">
            <Image
              src={asset("/brand/nayer-pally-logo-hd-2026.png")}
              alt="Nayer Pally Sealdah Sarbojanin Durga Puja — Jatio Yuba Sangha"
              width={1724}
              height={1724}
              quality={100}
              sizes="128px"
              className="h-full w-full object-contain"
            />
          </div>
          <p className="font-bengali mb-4 text-3xl font-semibold text-gold drop-shadow-md sm:text-4xl md:text-[2.75rem]">
            {site.heroGreetingBn}
          </p>
          <div className="mb-6 inline-flex items-center rounded-full border border-gold/80 bg-navy/40 px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold backdrop-blur-sm md:text-xs">
            {badge}
          </div>
          <h1
            id="hero-heading"
            className="font-display text-balance text-3xl font-semibold leading-[1.12] text-cream drop-shadow-md sm:text-4xl md:text-5xl lg:text-[3.25rem]"
          >
            {site.committeeName}
          </h1>
          <p className="mt-5 text-base font-medium tracking-wide text-gold sm:text-lg md:text-[1.15rem]">
            Organised by {site.organiser}
          </p>
          <p className="mt-3 text-sm tracking-wide text-[#E2D8CE] sm:text-base">
            <a
              href="#directions"
              className="focus-ring rounded-sm underline decoration-gold/40 underline-offset-4 transition hover:text-gold hover:decoration-gold"
              title="How to reach the pandal"
            >
              {site.venue} · {site.addressLine} · PIN {site.pin}
            </a>
          </p>
          {showingFallback && (
            <p className="mt-4 text-xs text-cream/70">
              Showing {year} details — {targetYear} schedule will appear when
              published.
            </p>
          )}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#puja-days"
              className="focus-ring inline-flex items-center rounded-sm bg-crimson px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-cream shadow-lg shadow-black/30 transition hover:bg-crimson-deep"
            >
              Puja Schedule
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center rounded-sm border border-gold bg-navy/40 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur-sm transition hover:bg-gold/15"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
