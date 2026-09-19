const events = [
  {
    title: "Rath Yatra Utsav",
    venue: "Shraddhananda Park",
    blurb:
      "A vibrant celebration of Lord Jagannath, Balabhadra, and Subhadra — floral décor, devotion, and community gathering at Shraddhananda Park (also known as Sradhananda Park).",
    tag: "Community Festival",
  },
  {
    title: "Cultural Evenings",
    venue: "Puja Pandal · Nayer Pally",
    blurb:
      "Music, dance, and performances that honour Bengali heritage — evenings filled with rhythm, colour, and shared celebration during Durga Puja.",
    tag: "Arts & Culture",
  },
  {
    title: "Pushpanjali & Rituals",
    venue: "Main Pandal",
    blurb:
      "Sacred offerings, dhaak beats, and collective prayer as devotees seek the blessings of Maa Durga across the five holy days.",
    tag: "Devotion",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="section-pad midnight-gradient text-ivory"
      aria-labelledby="events-heading"
    >
      <div className="container-premium">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Beyond the Pandal
            </p>
            <h2
              id="events-heading"
              className="font-display text-3xl font-semibold md:text-4xl"
            >
              Events &amp; <span className="text-gold-light">Culture</span>
            </h2>
            <p className="mt-4 text-ivory/70">
              Year-round community spirit — from Durga Puja splendour to Rath
              Yatra at Shraddhananda Park.
            </p>
          </div>
          <p className="font-bengali text-gold/80 md:text-right">উৎসব · সংস্কৃতি · সেবা</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {events.map((ev) => (
            <article
              key={ev.title}
              className="flex flex-col rounded-sm border border-gold/25 bg-royal/40 p-6 backdrop-blur-sm transition hover:border-gold/50 hover:bg-royal/60"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                {ev.tag}
              </span>
              <h3 className="font-display mt-3 text-2xl font-semibold text-ivory">
                {ev.title}
              </h3>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-ivory/50">
                {ev.venue}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ivory/70">
                {ev.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
