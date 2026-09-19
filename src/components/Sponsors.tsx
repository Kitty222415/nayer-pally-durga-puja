export default function Sponsors() {
  const slots = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section
      id="sponsors"
      className="section-pad bg-cream"
      aria-labelledby="sponsors-heading"
    >
      <div className="container-premium">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-crimson">
            With Gratitude
          </p>
          <h2
            id="sponsors-heading"
            className="font-display text-3xl font-semibold text-midnight md:text-4xl"
          >
            Our <span className="gold-text">Sponsors</span>
          </h2>
          <p className="mt-4 text-midnight/70">
            Patron slots for generous supporters of Nayer Pally Sealdah Sarbojanin
            Durga Puja. Logos and names will appear here once confirmed — we do
            not list unverified sponsors.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {slots.map((n) => (
            <li
              key={n}
              className="ornament-border flex aspect-[3/2] flex-col items-center justify-center rounded-sm bg-ivory px-4 text-center"
            >
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted">
                Sponsor slot {n}
              </span>
              <span className="font-display mt-2 text-lg text-midnight/40">
                Reserved
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-midnight/60">
          Interested in supporting the Pujo?{" "}
          <a
            href="#contact"
            className="focus-ring font-medium text-crimson underline decoration-gold/50 underline-offset-4 hover:text-vermilion"
          >
            Get in touch
          </a>
          .
        </p>
      </div>
    </section>
  );
}
