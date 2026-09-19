const stats = [
  { value: "79th", label: "Year (2026)" },
  { value: "1948", label: "Founded" },
  { value: "Central", label: "Kolkata" },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-cream" aria-labelledby="about-heading">
      <div className="container-premium">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-3 text-crimson">Heritage &amp; Community</p>
            <h2
              id="about-heading"
              className="font-display text-3xl font-semibold text-navy md:text-4xl"
            >
              About the Committee
            </h2>
            <div className="mt-6 h-0.5 w-[70px] bg-gold" aria-hidden />
            <div className="mt-8 flex flex-wrap gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-bold text-crimson md:text-[2rem]">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 text-base leading-[1.85] text-body md:text-[1.05rem]">
            <p>
              Nayer Pally Sealdah Sarbojanin Durga Puja Committee — organised by
              Jatio Yuba Sangha — is one of the older Durga Pujas of central
              Kolkata, founded in 1948. 2026 marks our{" "}
              <strong className="font-semibold text-crimson">79th year</strong> of
              celebration at Shraddhananda Park, Raja Rammohan Sarani, Sealdah.
            </p>
            <p>
              Across nearly eight decades, the puja has weathered its share of
              hurdles — yet it has stood tall every single year, carried forward
              by the same spirit of community service, culture and togetherness
              it was founded on.
            </p>
            <p className="font-medium text-navy">
              Every year, the pandal, the pratima, and the days of celebration
              are made possible by the generosity of sponsors, the effort of
              volunteers, and the warmth of everyone who walks through our gates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
