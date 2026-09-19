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
      className="relative flex min-h-[100svh] items-center overflow-hidden midnight-gradient"
      aria-labelledby="hero-heading"
    >
      <div className="container-premium relative z-10 section-pad pt-28 md:pt-32">
        <div className="mx-auto max-w-4xl text-center fade-up">
          <p className="font-bengali mb-4 text-3xl font-semibold text-gold sm:text-4xl md:text-[2.75rem]">
            {site.heroGreetingBn}
          </p>
          <div className="mb-6 inline-flex items-center rounded-full border border-gold px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold md:text-xs">
            {badge}
          </div>
          <h1
            id="hero-heading"
            className="font-display text-balance text-3xl font-semibold leading-[1.12] text-cream sm:text-4xl md:text-5xl lg:text-[3.75rem]"
          >
            {site.committeeName}
          </h1>
          <p className="mt-5 text-base font-medium tracking-wide text-gold sm:text-lg md:text-[1.15rem]">
            Organised by {site.organiser}
          </p>
          <p className="mt-3 text-sm tracking-wide text-[#D8CFC4] sm:text-base">
            {site.venue} · {site.addressLine} · PIN {site.pin}
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
              className="focus-ring inline-flex items-center rounded-sm bg-crimson px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-cream shadow-lg shadow-black/25 transition hover:bg-crimson-deep"
            >
              Puja Schedule
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center rounded-sm border border-gold bg-transparent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition hover:bg-gold/10"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
