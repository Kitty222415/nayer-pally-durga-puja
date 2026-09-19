import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-footer text-[#B9AFA3]">
      <div className="container-premium section-pad !py-14 md:!py-16">
        <div className="flex flex-col gap-6 border-b border-gold/20 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo.jpeg"
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover"
            />
            <span className="font-display text-lg font-semibold leading-snug text-cream md:text-[1.15rem]">
              Nayer Pally Sealdah Sarbojanin Durga Puja Committee
            </span>
          </div>
          <p className="text-sm tracking-wide">Jatio Yuba Sangha</p>
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
                  Donate / Anjali
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
                <a href="tel:+916291439316" className="focus-ring rounded-sm hover:text-gold">
                  +91 62914 39316
                </a>
              </li>
              <li>
                <a
                  href="mailto:jatioyubasanghasealdah@gmail.com"
                  className="focus-ring break-all rounded-sm hover:text-gold"
                >
                  jatioyubasanghasealdah@gmail.com
                </a>
              </li>
              <li>
                Shraddhananda Park, Raja Rammohan Sarani, Sealdah, Kolkata 700009
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
