import Image from "next/image";
import { asset } from "@/lib/asset";
import { getActiveContent, whatsappLink, WHATSAPP_MESSAGES } from "@/lib/content";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/SocialIcons";

export default function Footer() {
  const { site } = getActiveContent();
  return (
    <footer className="bg-footer text-[#B9AFA3]">
      <div className="container-premium section-pad !py-14 md:!py-16">
        <div className="flex flex-col gap-6 border-b border-gold/20 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={asset("/brand/nayer-pally-logo-hd-2026.png")}
              alt=""
              width={1724}
              height={1724}
              quality={100}
              sizes="44px"
              className="h-11 w-11 object-contain"
            />
            <span className="font-display text-lg font-semibold leading-snug text-cream md:text-[1.15rem]">
              Nayer Pally Sealdah Sarbojanin Durga Puja Committee
            </span>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm tracking-wide">Jatio Yuba Sangha</p>
            <div className="flex items-center gap-2">
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-cream/80 transition hover:border-gold hover:text-gold"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              {site.instagram && (
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-cream/80 transition hover:border-gold hover:text-gold"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-9 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
              Committee
            </p>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>
                <a href="#about" className="focus-ring rounded-sm hover:text-gold">
                  About
                </a>
              </li>
              <li>
                <a href="#puja-days" className="focus-ring rounded-sm hover:text-gold">
                  Puja Days
                </a>
              </li>
              <li>
                <a href="#events" className="focus-ring rounded-sm hover:text-gold">
                  Events &amp; Culture
                </a>
              </li>
              <li>
                <a href="#directions" className="focus-ring rounded-sm hover:text-gold">
                  Directions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
              Get Involved
            </p>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>
                <a href="#gallery" className="focus-ring rounded-sm hover:text-gold">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#sponsors" className="focus-ring rounded-sm hover:text-gold">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#volunteer" className="focus-ring rounded-sm hover:text-gold">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#donate" className="focus-ring rounded-sm hover:text-gold">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
              Contact
            </p>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>
                <a
                  href="mailto:jatioyubasanghasealdah@gmail.com"
                  className="focus-ring break-all rounded-sm hover:text-gold"
                >
                  jatioyubasanghasealdah@gmail.com
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-sm hover:text-gold"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  WhatsApp (message only)
                </a>
              </li>
              <li>
                <a
                  href="#directions"
                  className="focus-ring rounded-sm hover:text-gold"
                  title="How to reach the pandal"
                >
                  Shraddhananda Park, Raja Rammohan Sarani, Sealdah, Kolkata 700009
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-muted">
          © Jatio Yuba Sangha / Nayer Pally Sealdah Sarbojanin Durga Puja
          Committee. ·{" "}
          <span className="font-bengali">শুভ দুর্গাপূজা</span>
        </p>
      </div>
    </footer>
  );
}
