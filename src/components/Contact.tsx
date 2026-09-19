const cards = [
  {
    href: "tel:+919830945325",
    label: "+91 98309 45325",
    external: false,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" />
    ),
  },
  {
    href: "mailto:jatioyubasanghasealdah@gmail.com",
    label: "jatioyubasanghasealdah@gmail.com",
    external: false,
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6 10-6" />
      </>
    ),
  },
  {
    href: "https://www.facebook.com/profile.php?id=100083116423356",
    label: "Facebook Page",
    external: true,
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad bg-navy text-cream"
      aria-labelledby="contact-heading"
    >
      <div className="container-premium">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 text-gold">Reach Us</p>
          <h2
            id="contact-heading"
            className="font-display text-3xl font-semibold text-cream md:text-4xl"
          >
            Contact
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              {...(card.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="focus-ring flex flex-col items-center rounded-sm border border-gold/30 bg-cream/[0.05] p-7 text-center transition hover:border-gold/60 hover:bg-cream/[0.08]"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A227"
                strokeWidth="1.6"
                className="mb-3.5"
                aria-hidden
              >
                {card.icon}
              </svg>
              <span className="text-sm font-medium text-cream break-all">
                {card.label}
              </span>
            </a>
          ))}

          <div className="flex flex-col items-center rounded-sm border border-gold/30 bg-cream/[0.05] p-7 text-center">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C9A227"
              strokeWidth="1.6"
              className="mb-3.5"
              aria-hidden
            >
              <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-sm font-medium leading-snug text-cream">
              Shraddhananda Park, Raja Rammohan Sarani, Sealdah, Kolkata 700009
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
