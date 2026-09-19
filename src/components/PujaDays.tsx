import { getActiveContent, fillTemplate } from "@/lib/content";

export default function PujaDays() {
  const { year, anniversary, pack } = getActiveContent();
  const sched = pack.englishSchedule;
  const days = sched.days;

  return (
    <section
      id="puja-days"
      className="section-pad bg-navy text-cream"
      aria-labelledby="puja-days-heading"
    >
      <div className="container-premium">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 text-gold">
            {fillTemplate(sched.eyebrow, year, anniversary)}
          </p>
          <h2
            id="puja-days-heading"
            className="font-display text-3xl font-semibold text-cream md:text-4xl"
          >
            Puja Days
          </h2>
          <p className="mt-4 text-sm text-[#B9AFA3] md:text-base">
            {fillTemplate(sched.intro, year, anniversary)}
          </p>
        </div>

        {days.length === 0 ? (
          <p className="mt-12 text-center text-sm text-gold/90">
            Full dates for {year} will appear here once the Kolkata Panchang is
            published.
          </p>
        ) : (
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
        )}

        <p className="mt-8 text-center text-xs text-muted">
          {fillTemplate(sched.footnote, year, anniversary)}
        </p>
      </div>
    </section>
  );
}
