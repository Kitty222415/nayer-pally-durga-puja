const events = [
  {
    title: "Rath Yatra & Khuti Puja",
    blurb:
      "A community favourite held annually at Shraddhananda Park, drawing crowds from across Sealdah for the chariot procession. Every year, Khuti Puja — marking the ceremonial start of pandal construction — is performed on this same day.",
    iconBg: "bg-crimson",
    iconStroke: "#FBF6EC",
    icon: (
      <path d="M12 2v20M4 8h16l-2 8H6L4 8Z" />
    ),
  },
  {
    title: "Cultural Nights",
    blurb:
      "Music, dance and performances by local talent through the puja evenings, open to the whole neighbourhood. [Add this year's line-up.]",
    iconBg: "bg-gold",
    iconStroke: "#132A52",
    icon: (
      <>
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </>
    ),
  },
  {
    title: "Bhog & Community Meals",
    blurb:
      "Shared meals prepared and served to the community across the puja days, a tradition of seva at the heart of our celebration.",
    iconBg: "bg-navy",
    iconStroke: "#FBF6EC",
    icon: (
      <path d="M12 21s-7-4.5-9.5-9C.5 8 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4 4.5 8-2.5 4.5-9.5 9-9.5 9Z" />
    ),
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="section-pad bg-cream"
      aria-labelledby="events-heading"
    >
      <div className="container-premium">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 text-crimson">Culture &amp; Celebration</p>
          <h2
            id="events-heading"
            className="font-display text-3xl font-semibold text-navy md:text-4xl"
          >
            Events &amp; Culture
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {events.map((ev) => (
            <article
              key={ev.title}
              className="rounded-sm border border-parchment bg-[#FFFDF9] p-7 transition hover:-translate-y-1"
            >
              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full ${ev.iconBg}`}
                aria-hidden
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={ev.iconStroke}
                  strokeWidth="1.6"
                >
                  {ev.icon}
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-navy md:text-[1.4rem]">
                {ev.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4A3B31] md:text-[0.95rem] md:leading-[1.7]">
                {ev.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
