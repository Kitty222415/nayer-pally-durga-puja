import Image from "next/image";
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
      {/* Soft full-bleed Maa Durga backdrop */}
      <div className="absolute inset-0">
        <Image
          src="/brand/maa-durga-hero.jpg"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-[center_30%] scale-[1.02]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/50 to-navy/90"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy/65 via-navy/25 to-crimson/25"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(11,22,48,0.55)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-gold/10 to-transparent"
          aria-hidden
        />
      </div>

      <svg
        className="pointer-events-none absolute left-4 top-24 opacity-20 sm:left-10 md:left-14"
        width="160"
        height="160"
        viewBox="0 0 220 220"
        fill="none"
        aria-hidden
      >
        <circle cx="110" cy="110" r="100" stroke="#C9A227" strokeWidth="1" />
        <circle cx="110" cy="110" r="70" stroke="#C9A227" strokeWidth="1" />
      </svg>

      <div className="container-premium relative z-10 section-pad pt-28 md:pt-32">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="text-center lg:text-left fade-up">
            <p className="font-bengali mb-4 text-3xl font-semibold text-gold drop-shadow sm:text-4xl md:text-[2.75rem]">
              {site.heroGreetingBn}
            </p>
            <div className="mb-6 inline-flex items-center rounded-full border border-gold/80 bg-navy/35 px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold backdrop-blur-[2px] md:text-xs">
              {badge}
            </div>
            <h1
              id="hero-heading"
              className="font-display text-balance text-3xl font-semibold leading-[1.12] text-cream drop-shadow-md sm:text-4xl md:text-5xl lg:text-[3.4rem]"
            >
              {site.committeeName}
            </h1>
            <p className="mt-5 text-base font-medium tracking-wide text-gold sm:text-lg md:text-[1.15rem]">
              Organised by {site.organiser}
            </p>
            <p className="mt-3 text-sm tracking-wide text-[#E2D8CE] sm:text-base">
              {site.venue} · {site.addressLine} · PIN {site.pin}
            </p>
            {showingFallback && (
              <p className="mt-4 text-xs text-cream/70">
                Showing {year} details — {targetYear} schedule will appear when
                published.
              </p>
            )}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#puja-days"
                className="focus-ring inline-flex items-center rounded-sm bg-crimson px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-cream shadow-lg shadow-black/30 transition hover:bg-crimson-deep"
              >
                Puja Schedule
              </a>
              <a
                href="#contact"
                className="focus-ring inline-flex items-center rounded-sm border border-gold bg-navy/30 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition hover:bg-gold/15"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Crisp high-quality right panel — no haze on the photo */}
          <div className="relative mx-auto w-full max-w-lg fade-up lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-2 rounded-[1.35rem] bg-gradient-to-br from-gold/60 via-gold/20 to-crimson/30 opacity-80"
              aria-hidden
            />
            <figure className="relative overflow-hidden rounded-[1rem] border-2 border-gold/70 bg-navy shadow-[0_28px_64px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/brand/maa-durga-face.png"
                  alt="Close portrait of Maa Durga’s face from our Sealdah pandal"
                  fill
                  priority
                  quality={100}
                  unoptimized
                  sizes="(max-width: 1024px) 92vw, 440px"
                  className="object-cover object-[center_35%]"
                />
                <div
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent px-5 pb-5 pt-16"
                  aria-hidden
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 px-5 pb-5 text-center">
                <p className="font-bengali text-lg font-semibold text-gold drop-shadow">
                  জয় মা দুর্গা
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-cream/90">
                  Our pandal · Sealdah
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
