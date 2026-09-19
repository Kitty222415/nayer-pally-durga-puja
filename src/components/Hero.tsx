export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden midnight-gradient"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 20%, rgba(201,162,39,0.18), transparent 55%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(155,27,46,0.35), transparent 50%), radial-gradient(ellipse 50% 35% at 10% 70%, rgba(26,39,68,0.8), transparent 45%)",
        }}
      />
      <div className="pattern-mandala pointer-events-none absolute inset-0 opacity-50" aria-hidden />

      <div className="container-premium relative z-10 section-pad pt-28 md:pt-32">
        <div className="mx-auto max-w-4xl text-center fade-up">
          <p className="font-bengali mb-4 text-lg text-gold-light/90 md:text-xl">
            শুভ দুর্গাপূজা
          </p>
          <div className="mx-auto mb-6 flex items-center justify-center gap-3" aria-hidden>
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/70" />
            <span className="text-gold text-sm">✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/70" />
          </div>
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-gold/90 md:text-xs">
            Organised by Jatio Yuba Sangha
          </p>
          <h1
            id="hero-heading"
            className="font-display text-balance text-3xl font-semibold leading-[1.15] text-ivory sm:text-4xl md:text-5xl lg:text-[3.35rem]"
          >
            Nayer Pally Sealdah Sarbojanin{" "}
            <span className="shimmer-gold">Durga Puja</span> Committee
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base font-light leading-relaxed text-ivory/75 md:text-lg">
            A sacred celebration of devotion, culture, and community in the heart of
            Sealdah — where tradition meets festive splendour at Shraddhananda Park,
            Kolkata.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#puja-days"
              className="focus-ring gold-gradient inline-flex items-center rounded-sm px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-midnight shadow-lg shadow-black/30 transition hover:brightness-110"
            >
              Explore Puja Days
            </a>
            <a
              href="#donate"
              className="focus-ring inline-flex items-center rounded-sm border border-gold/50 bg-transparent px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition hover:bg-gold/10"
            >
              Offer Anjali
            </a>
          </div>
          <p className="mt-12 text-[11px] uppercase tracking-[0.22em] text-ivory/45">
            Nayer Pally · Sealdah · Kolkata 700009
          </p>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ivory to-transparent"
        aria-hidden
      />
    </section>
  );
}
