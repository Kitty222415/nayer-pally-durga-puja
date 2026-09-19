const placeholders = [
  { title: "Maa Durga Pratima", tone: "from-crimson-deep to-royal" },
  { title: "Pandal Décor", tone: "from-royal to-midnight" },
  { title: "Rath Yatra 2026", tone: "from-vermilion to-crimson-deep" },
  { title: "Cultural Night", tone: "from-midnight to-crimson" },
  { title: "Community Gathering", tone: "from-royal to-vermilion" },
  { title: "Shraddhananda Park", tone: "from-crimson to-midnight" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-ivory" aria-labelledby="gallery-heading">
      <div className="container-premium">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-crimson">
            Visual Memories
          </p>
          <h2
            id="gallery-heading"
            className="font-display text-3xl font-semibold text-midnight md:text-4xl"
          >
            Gallery
          </h2>
          <p className="mt-4 text-midnight/70">
            Moments from our pandal, rituals, and community festivals. Official
            photographs will replace these placeholders soon.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((item, i) => (
            <li key={item.title}>
              <figure className="ornament-border group relative aspect-[4/3] overflow-hidden rounded-sm">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.tone}`}
                  role="img"
                  aria-label={`Placeholder for ${item.title}`}
                />
                <div className="pattern-mandala absolute inset-0 opacity-30" aria-hidden />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-midnight/20 p-6 text-center transition group-hover:bg-midnight/35">
                  <span className="font-display text-lg font-medium text-ivory md:text-xl">
                    {item.title}
                  </span>
                  <span className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gold/80">
                    Photo coming soon
                  </span>
                </div>
                <figcaption className="sr-only">
                  Placeholder {i + 1}: {item.title}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
