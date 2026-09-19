import { getActiveContent } from "@/lib/content";

const icons = [
  <path key="1" d="M12 2v20M4 8h16l-2 8H6L4 8Z" />,
  <>
    <path key="a" d="M9 18V5l12-2v13" />
    <circle key="b" cx="6" cy="18" r="3" />
    <circle key="c" cx="18" cy="16" r="3" />
  </>,
  <path
    key="3"
    d="M12 21s-7-4.5-9.5-9C.5 8 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4 4.5 8-2.5 4.5-9.5 9-9.5 9Z"
  />,
];

export default function Events() {
  const { pack } = getActiveContent();
  const colors = ["bg-crimson", "bg-gold", "bg-navy"];
  const strokes = ["#FBF6EC", "#132A52", "#FBF6EC"];

  return (
    <section id="events" className="section-pad bg-cream" aria-labelledby="events-heading">
      <div className="container-premium">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 text-crimson">{pack.eventsIntro}</p>
          <h2
            id="events-heading"
            className="font-display text-3xl font-semibold text-navy md:text-4xl"
          >
            Events &amp; Culture
          </h2>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {pack.events.map((ev, i) => (
            <li
              key={ev.title}
              className="rounded-sm border border-navy/10 bg-white p-6 shadow-sm"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${colors[i % 3]}`}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={strokes[i % 3]}
                  strokeWidth="1.6"
                  aria-hidden
                >
                  {icons[i % 3]}
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-navy">
                {ev.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{ev.blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
