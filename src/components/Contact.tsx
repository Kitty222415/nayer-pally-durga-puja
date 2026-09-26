import type { ReactNode } from "react";
import {
  getActiveContent,
  whatsappLink,
  WHATSAPP_MESSAGES,
} from "@/lib/content";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/SocialIcons";

export default function Contact() {
  const { site } = getActiveContent();
  const cards: {
    href: string;
    label: string;
    external: boolean;
    icon?: ReactNode;
    /** WhatsApp card: green chat button + "message only" caption (number never shown) */
    whatsapp?: boolean;
    caption?: string;
  }[] = [
    {
      href: `mailto:${site.email}`,
      label: site.email,
      external: false,
    },
    {
      href: whatsappLink(WHATSAPP_MESSAGES.general),
      label: "Chat on WhatsApp",
      external: true,
      whatsapp: true,
      caption: "Message only — no calls please",
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
            <a
              href="#directions"
              className="focus-ring rounded-sm underline decoration-gold/40 underline-offset-4 transition hover:text-gold hover:decoration-gold"
              title="How to reach the pandal"
            >
              {site.venue}, {site.addressLine}, PIN {site.pin}
            </a>
          </p>
        </div>
        <div
          className={`mt-12 grid gap-4 ${cards.length > 3 ? "sm:grid-cols-2 lg:grid-cols-4" : cards.length === 3 ? "sm:grid-cols-3" : "mx-auto max-w-2xl sm:grid-cols-2"}`}
        >
          {cards.map((card) =>
            card.whatsapp ? (
              <div
                key={card.label}
                className="flex flex-col items-center justify-center rounded-sm border border-gold/30 bg-cream/[0.05] p-7 text-center"
              >
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with the committee on WhatsApp (opens WhatsApp, messages only)"
                  className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1EBE5A]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {card.label}
                </a>
                {card.caption && (
                  <span className="mt-3 text-xs tracking-wide text-[#B9AFA3]">
                    {card.caption}
                  </span>
                )}
              </div>
            ) : (
              <a
                key={card.label}
                href={card.href}
                {...(card.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="focus-ring flex flex-col items-center justify-center rounded-sm border border-gold/30 bg-cream/[0.05] p-7 text-center transition hover:border-gold/60"
              >
                {card.icon && (
                  <span className="mb-3 text-gold">{card.icon}</span>
                )}
                <span className="text-sm font-medium break-all text-cream">
                  {card.label}
                </span>
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
