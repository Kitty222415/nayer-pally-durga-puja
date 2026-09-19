export default function About() {
  return (
    <section id="about" className="section-pad bg-ivory" aria-labelledby="about-heading">
      <div className="container-premium">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-crimson">
              Our Heritage
            </p>
            <h2
              id="about-heading"
              className="font-display text-3xl font-semibold text-midnight md:text-4xl"
            >
              A Sarbojanin celebration{" "}
              <span className="gold-text">rooted in community</span>
            </h2>
            <div className="mt-4 h-px w-20 bg-gradient-to-r from-gold to-transparent" aria-hidden />
            <p className="mt-6 text-base leading-relaxed text-midnight/75 md:text-lg">
              <strong className="font-medium text-midnight">
                Nayer Pally Sealdah Sarbojanin Durga Puja Committee – Jatio Yuba Sangha
              </strong>{" "}
              brings together devotees, neighbours, and well-wishers for one of
              Kolkata&apos;s cherished community Pujos. Organised by{" "}
              <strong className="font-medium text-crimson">Jatio Yuba Sangha</strong>,
              our celebration honours Maa Durga with reverence, artistry, and
              open-hearted hospitality.
            </p>
            <p className="mt-4 text-base leading-relaxed text-midnight/75">
              From the glow of the pandal to the rhythm of dhaak and the warmth of
              shared prasad, every moment is crafted for the people of Nayer Pally,
              Sealdah, and beyond — a true <em>sarbojanin</em> festival for all.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Organiser", value: "Jatio Yuba Sangha" },
                { label: "Locality", value: "Nayer Pally / Sealdah" },
                { label: "City", value: "Kolkata, West Bengal" },
                { label: "PIN", value: "700009" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="ornament-border rounded-sm bg-cream/60 px-4 py-3"
                >
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-muted">
                    {item.label}
                  </span>
                  <span className="mt-1 block font-display text-lg font-semibold text-midnight">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="ornament-border relative overflow-hidden rounded-sm bg-midnight aspect-[4/5] sm:aspect-[5/6]">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, #1a2744 0%, #6b0f1c 50%, #9b1b2e 100%)",
                }}
              />
              <div className="pattern-mandala absolute inset-0 opacity-40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <span className="font-bengali text-2xl text-gold-light md:text-3xl">
                  জয় মা দুর্গা
                </span>
                <div className="my-6 h-px w-16 bg-gold/60" aria-hidden />
                <p className="font-display text-xl font-medium leading-snug text-ivory md:text-2xl">
                  Devotion · Culture · Community
                </p>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/65">
                  Celebrating the triumph of good over evil with grace, music, and
                  shared joy — year after year in Sealdah.
                </p>
                <div
                  className="mt-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/50 bg-gradient-to-br from-crimson to-royal"
                  aria-hidden
                >
                  <span className="font-display text-2xl text-gold-light">॥</span>
                </div>
              </div>
            </div>
            <div
              className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-sm border border-gold/30 bg-gold/5"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
