import { getActiveContent } from "@/lib/content";

export default function Testimonials() {
  const { pack } = getActiveContent();
  const t = pack.testimonials;
  if (!t || !t.items?.length) return null;

  return (
    <section
      id="testimonials"
      className="section-pad relative overflow-hidden bg-navy text-cream"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent"
        aria-hidden
      />
      <div className="container-premium relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 text-gold">{t.eyebrow}</p>
          <h2
            id="testimonials-heading"
            className="font-display text-3xl font-semibold text-cream md:text-4xl"
          >
            {t.heading}
          </h2>
          <div className="mx-auto mt-5 h-0.5 w-[70px] bg-gold" aria-hidden />
          {t.intro && (
            <p className="mt-5 text-sm text-[#CFC4B6] md:text-base">{t.intro}</p>
          )}
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {t.items.map((item, i) => (
            <li key={i} className="h-full">
              <figure className="relative flex h-full flex-col rounded-sm border border-gold/30 bg-cream/[0.04] p-7 pt-14 shadow-lg shadow-black/20 transition hover:border-gold/60">
                <svg
                  viewBox="0 0 32 24"
                  className="absolute left-7 top-5 h-5 w-7 text-gold"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M0 24V14.4C0 6.4 4.3 1.6 12.8 0l1.4 3.1C9.6 4.5 7.4 7.3 7.1 11.2H13V24H0zm18.3 0V14.4C18.3 6.4 22.6 1.6 31.1 0l1.4 3.1c-4.6 1.4-6.8 4.2-7.1 8.1h5.9V24H18.3z" />
                </svg>
                {item.placeholder && (
                  <span className="absolute right-4 top-4 rounded-full border border-gold/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold/80">
                    Placeholder
                  </span>
                )}
                <blockquote
                  className={`font-display flex-1 text-lg leading-relaxed md:text-xl ${
                    item.placeholder ? "italic text-cream/60" : "text-cream"
                  }`}
                >
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-gold/20 pt-4">
                  <p className="text-sm font-semibold tracking-wide text-gold">
                    {item.name}
                  </p>
                  {item.detail && (
                    <p className="mt-0.5 text-xs text-[#B9AFA3]">{item.detail}</p>
                  )}
                  {item.source &&
                    (item.sourceUrl ? (
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring mt-1 inline-block rounded-sm text-[11px] uppercase tracking-[0.14em] text-cream/60 underline-offset-2 hover:text-gold hover:underline"
                      >
                        Source: {item.source}
                      </a>
                    ) : (
                      <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-cream/60">
                        Source: {item.source}
                      </p>
                    ))}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
