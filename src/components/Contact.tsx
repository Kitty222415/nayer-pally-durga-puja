import type { ReactNode } from "react";
import { getActiveContent } from "@/lib/content";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

export default function Contact() {
  const { site } = getActiveContent();
  const cards: {
    href: string;
    label: string;
    external: boolean;
    icon?: ReactNode;
  }[] = [
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
      icon: <FacebookIcon className="h-5 w-5" />,
    },
    // Instagram card only shows once site.json "instagram" is filled in
    ...(site.instagram
      ? [
          {
            href: site.instagram,
            label: "Instagram",
            external: true,
            icon: <InstagramIcon className="h-5 w-5" />,
          },
        ]
      : []),
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
        <div
          className={`mt-12 grid gap-4 ${cards.length > 3 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}
        >
          {cards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              {...(card.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="focus-ring flex flex-col items-center rounded-sm border border-gold/30 bg-cream/[0.05] p-7 text-center transition hover:border-gold/60"
            >
              {card.icon && <span className="mb-3 text-gold">{card.icon}</span>}
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
