const days = [
  {
    name: "Shashthi",
    bengali: "ষষ্ঠী",
    note: "Bodhon & Amantran — the sacred invitation of Maa Durga.",
  },
  {
    name: "Saptami",
    bengali: "সপ্তমী",
    note: "Pran Pratishtha — life is invoked into the divine idol.",
  },
  {
    name: "Ashtami",
    bengali: "অষ্টমী",
    note: "Sandhi Puja & Pushpanjali — the heart of devotion.",
  },
  {
    name: "Navami",
    bengali: "নবমী",
    note: "Maha Navami rituals, cultural programmes & community joy.",
  },
  {
    name: "Dashami",
    bengali: "দশমী",
    note: "বিজয়া দশমী — Sindoor Khela, visarjan & farewell blessings.",
  },
];

export default function PujaDays() {
  return (
    <section
      id="puja-days"
      className="section-pad relative overflow-hidden bg-cream"
      aria-labelledby="puja-days-heading"
    >
      <div className="pattern-mandala pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="container-premium relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-crimson">
            The Sacred Five Days
          </p>
          <h2
            id="puja-days-heading"
            className="font-display text-3xl font-semibold text-midnight md:text-4xl"
          >
            Durga Puja <span className="gold-text">Mahotsav</span>
          </h2>
          <p className="mt-4 text-base text-midnight/70">
            From Shashthi to Dashami — each day unfolds with ritual, music, and
            community spirit. Exact dates for the upcoming Pujo will be announced
            here.
          </p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ivory/80 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-gold-antique">
            <span aria-hidden>●</span> Dates TBA
          </p>
        </div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {days.map((day, i) => (
            <li
              key={day.name}
              className="ornament-border group relative flex flex-col rounded-sm bg-ivory p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-crimson/10"
            >
              <span className="font-display text-4xl font-semibold text-gold/40 transition group-hover:text-gold/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-3 text-xl font-semibold text-midnight">
                {day.name}
              </h3>
              <p className="font-bengali mt-1 text-sm text-crimson">{day.bengali}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-midnight/65">
                {day.note}
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-muted">
                Schedule TBA
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
