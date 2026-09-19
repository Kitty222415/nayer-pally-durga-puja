export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="midnight-gradient border-t border-gold/20 text-ivory">
      <div className="container-premium section-pad !py-12 md:!py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold leading-snug">
              Nayer Pally Sealdah Sarbojanin Durga Puja Committee
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold">
              Jatio Yuba Sangha
            </p>
            <p className="font-bengali mt-4 text-gold-light/80">শুভ দুর্গাপূজা</p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
              Quick links
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ivory/70">
              {[
                ["#about", "About"],
                ["#puja-days", "Puja Days"],
                ["#events", "Events"],
                ["#donate", "Donate"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="focus-ring rounded-sm hover:text-gold"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
              Find us
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ivory/70">
              Nayer Pally / Sealdah
              <br />
              Kolkata 700009, West Bengal
              <br />
              Venue: Shraddhananda Park
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100083116423356"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-4 inline-flex text-sm text-gold hover:text-gold-light"
            >
              Follow on Facebook →
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gold/15 pt-8 text-center text-xs text-ivory/45 md:flex-row md:text-left">
          <p>
            © {year} Jatio Yuba Sangha · Nayer Pally Sealdah Sarbojanin Durga Puja
            Committee
          </p>
          <p className="font-bengali text-ivory/50">বিজয়া দশমী</p>
        </div>
      </div>
    </footer>
  );
}
