import { getActiveContent } from "@/lib/content";

export default function Contact() {
  const { site } = getActiveContent();
  const cards = [
    {
      href: `tel:${site.phoneTel}`,
      label: site.phoneDisplay,
      external: false,
    },
    {
      href: `mailto:${site.email}`,
      label: site.email,
      external: false,
    },
    {
      href: site.facebookUrl,
      label: "Facebook Page",
      external: true,
    },
  ];

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
          <p className="mt-4 text-sm text-[#B9AFA3]">
            {site.venue}, {site.addressLine}, PIN {site.pin}
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {cards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              {...(card.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="focus-ring flex flex-col items-center rounded-sm border border-gold/30 bg-cream/[0.05] p-7 text-center transition hover:border-gold/60"
            >
              <span className="text-sm font-medium break-all text-cream">
                {card.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
