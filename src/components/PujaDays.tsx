const days = [
  {
    bengali: "চতুর্থী",
    name: "Chaturthi",
    note: "Inauguration",
    date: "Wed, 14 Oct 2026",
    highlight: true,
  },
  {
    bengali: "পঞ্চমী",
    name: "Panchami",
    note: "Pandal opens to all",
    date: "Fri, 16 Oct 2026",
  },
  {
    bengali: "ষষ্ঠী",
    name: "Shashthi",
    note: "Bodhon & welcome of the Devi",
    date: "Sat, 17 Oct 2026",
  },
  {
    bengali: "সপ্তমী",
    name: "Saptami",
    note: "Nabapatrika & morning rites",
    date: "Sun, 18 Oct 2026",
  },
  {
    bengali: "অষ্টমী",
    name: "Ashtami",
    note: "Sandhi Puja & Kumari Puja",
    date: "Mon, 19 Oct 2026",
    highlight: true,
  },
  {
    bengali: "নবমী",
    name: "Nabami",
    note: "Maha Nabami Puja & Havan",
    date: "Tue, 20 Oct 2026",
  },
  {
    bengali: "দশমী",
    name: "Bijoya Dashami",
    note: "Sindoor Khela & farewell",
    date: "Wed, 21 Oct 2026",
    highlight: true,
  },
  {
    bengali: "দ্বাদশী",
    name: "Dwadashi",
    note: "Immersion",
    date: "Thu, 22 Oct 2026",
    highlight: true,
  },
];

export default function PujaDays() {
  return (
    <section
      id="puja-days"
      className="section-pad bg-navy text-cream"
      aria-labelledby="puja-days-heading"
    >
      <div className="container-premium">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 text-gold">Chaturthi to Dwadashi · 2026</p>
          <h2
            id="puja-days-heading"
            className="font-display text-3xl font-semibold text-cream md:text-4xl"
          >
            Puja Days
          </h2>
          <p className="mt-4 text-sm text-[#B9AFA3] md:text-base">
            Inauguration on Chaturthi · Immersion on Dwadashi, following the
            Panchang tithi calendar
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {days.map((day) => (
            <li
              key={day.name}
              className={`rounded-sm border px-3 py-5 text-center transition hover:-translate-y-0.5 ${
                day.highlight
                  ? "border-gold bg-cream/[0.06]"
                  : "border-gold/35 bg-cream/[0.05]"
              }`}
            >
              <p className="font-bengali text-lg font-semibold text-gold sm:text-xl">
                {day.bengali}
              </p>
              <h3 className="font-display mt-1 text-base font-semibold text-cream sm:text-lg">
                {day.name}
              </h3>
              <p
                className={`mt-1.5 text-[11px] ${
                  day.note === "Inauguration" || day.note === "Immersion"
                    ? "font-semibold uppercase tracking-[0.12em] text-gold"
                    : "text-[#B9AFA3]"
                }`}
              >
                {day.note}
              </p>
              <p className="mt-1.5 text-xs text-[#B9AFA3]">{day.date}</p>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-center text-xs text-muted">
          Dates follow the 2026 Panchang (Ashwin Shukla Paksha); please confirm
          final timings closer to the festival.
        </p>
      </div>
    </section>
  );
}
