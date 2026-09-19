export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden midnight-gradient"
      aria-labelledby="hero-heading"
    >
      <svg
        className="pointer-events-none absolute left-6 top-24 opacity-[0.18] sm:left-12 sm:top-28 md:left-16"
        width="180"
        height="180"
        viewBox="0 0 220 220"
        fill="none"
        aria-hidden
      >
        <circle cx="110" cy="110" r="100" stroke="#C9A227" strokeWidth="1" />
        <circle cx="110" cy="110" r="70" stroke="#C9A227" strokeWidth="1" />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-16 right-8 opacity-[0.16] sm:bottom-20 sm:right-16 md:right-20"
        width="200"
        height="200"
        viewBox="0 0 260 260"
        fill="none"
        aria-hidden
      >
        <circle cx="130" cy="130" r="120" stroke="#7A1420" strokeWidth="1" />
        <circle cx="130" cy="130" r="86" stroke="#7A1420" strokeWidth="1" />
      </svg>

      <div className="container-premium relative z-10 section-pad pt-28 md:pt-32">
        <div className="mx-auto max-w-4xl text-center fade-up">
          <p className="font-bengali mb-4 text-3xl font-semibold text-gold sm:text-4xl md:text-[2.75rem]">
            শুভ দুর্গাপূজা
          </p>
          <div className="mb-6 inline-flex items-center rounded-full border border-gold px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold md:text-xs">
            79th Year · Since 1948
          </div>
          <h1
            id="hero-heading"
            className="font-display text-balance text-3xl font-semibold leading-[1.12] text-cream sm:text-4xl md:text-5xl lg:text-[3.75rem]"
          >
            Nayer Pally Sealdah Sarbojanin Durga Puja Committee
          </h1>
          <p className="mt-5 text-base font-medium tracking-wide text-gold sm:text-lg md:text-[1.15rem]">
            Organised by Jatio Yuba Sangha
          </p>
          <p className="mt-3 text-sm tracking-wide text-[#D8CFC4] sm:text-base">
            Shraddhananda Park · Raja Rammohan Sarani, Sealdah, Kolkata · PIN 700009
          </p>
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
