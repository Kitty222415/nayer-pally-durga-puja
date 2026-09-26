import type { ReactNode } from "react";
import { getActiveContent, mapsLinks } from "@/lib/content";

const tips: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "By Train",
    body: "Sealdah railway station is the nearest station — the pandal is a short walk away.",
    icon: (
      <>
        <rect x="5" y="3" width="14" height="13" rx="3" />
        <path d="M5 11h14M9 20l-2 2M15 20l2 2M8.5 16v4M15.5 16v4" />
      </>
    ),
  },
  {
    title: "By Metro",
    body: "Sealdah metro station (Green Line) is the nearest — a short walk away. Mahatma Gandhi Road station (Blue Line) is also nearby.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M7.5 16V8l4.5 5 4.5-5v8" />
      </>
    ),
  },
  {
    title: "By Bus / Taxi",
    body: "Take any bus or taxi to Sealdah or Raja Rammohan Sarani (Amherst Street) and ask for Shraddhananda Park.",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="13" rx="2" />
        <path d="M4 11h16M8 17v3M16 17v3" />
        <circle cx="8" cy="14" r="0.8" />
        <circle cx="16" cy="14" r="0.8" />
      </>
    ),
  },
];

export default function Directions() {
  const { site } = getActiveContent();
  const maps = mapsLinks();

  return (
    <section
      id="directions"
      className="section-pad scroll-mt-20 bg-soft"
      aria-labelledby="directions-heading"
    >
      <div className="container-premium">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 text-crimson">Directions</p>
          <h2
            id="directions-heading"
            className="font-display text-3xl font-semibold text-navy md:text-4xl"
          >
            How to Reach
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            Find us at {site.venue}, near Sealdah station in central Kolkata.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:items-start">
          {/* Map */}
          <div className="lg:col-span-3">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-gold/40 bg-navy/5 shadow-md sm:aspect-video">
              <iframe
                src={maps.embed}
                title={`Map showing ${site.venue}, ${site.addressLine} ${site.pin}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>

          {/* Address + buttons */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <address className="ornament-border rounded-lg bg-white p-6 not-italic">
              <p className="eyebrow mb-2 text-crimson">Pandal Address</p>
              <p className="font-display text-xl font-semibold text-navy">
                {site.committeeName}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {site.venue}
                <br />
                Raja Rammohan Sarani, Sealdah
                <br />
                Kolkata {site.pin}, West Bengal
              </p>
            </address>

            <div className="flex flex-col gap-3">
              <a
                href={maps.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2.5 rounded-sm bg-crimson px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-cream shadow-lg shadow-black/15 transition hover:bg-crimson-deep"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <path d="M12 2 20 20l-8-4-8 4 8-18Z" strokeLinejoin="round" />
                </svg>
                Get Directions
                <span className="sr-only">(opens Google Maps in a new tab)</span>
              </a>
              <a
                href={maps.search}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm border border-navy/30 bg-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-navy transition hover:border-gold hover:text-crimson"
              >
                Open in Google Maps
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {tips.map((t) => (
            <li
              key={t.title}
              className="rounded-sm border border-navy/10 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-navy">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FBF6EC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {t.icon}
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-navy">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{t.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
