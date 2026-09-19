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
          <p className="eyebrow mb-3 text-crimson">With Gratitude</p>
          <h2
            id="sponsors-heading"
            className="font-display text-3xl font-semibold text-navy md:text-4xl"
          >
            Our Sponsors
          </h2>
          <p className="mt-4 text-sm text-muted md:text-base">
            Sponsor slots reserved — logos to be added
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {slots.map((n) => (
            <li
              key={n}
              className="flex h-24 items-center justify-center rounded-sm border border-dashed border-[#C7B79A] px-3 text-center text-xs text-[#9C8B76]"
            >
              Sponsor {n}
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="focus-ring inline-flex rounded-sm border border-crimson px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-crimson transition hover:bg-crimson hover:text-cream"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
}
