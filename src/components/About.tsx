import { getActiveContent, fillTemplate } from "@/lib/content";

export default function About() {
  const { site, year, anniversary, pack } = getActiveContent();
  const stats = [
    { value: `${anniversary}th`, label: `Year (${year})` },
    { value: String(site.foundedYear), label: "Founded" },
    { value: "Central", label: "Kolkata" },
  ];

  return (
    <section id="about" className="section-pad bg-cream" aria-labelledby="about-heading">
      <div className="container-premium">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-3 text-crimson">{pack.about.eyebrow}</p>
            <h2
              id="about-heading"
              className="font-display text-3xl font-semibold text-navy md:text-4xl"
            >
              {pack.about.heading}
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
            {pack.about.paragraphs.map((para, i) => {
              const text = fillTemplate(para, year, anniversary);
              return (
                <p
                  key={i}
                  className={
                    i === pack.about.paragraphs.length - 1
                      ? "font-medium text-navy"
                      : undefined
                  }
                >
                  {text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
