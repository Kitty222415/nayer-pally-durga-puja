export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad bg-cream"
      aria-labelledby="contact-heading"
    >
      <div className="container-premium">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-crimson">
            Reach Us
          </p>
          <h2
            id="contact-heading"
            className="font-display text-3xl font-semibold text-midnight md:text-4xl"
          >
            Contact
          </h2>
          <p className="mt-4 text-midnight/70">
            Nayer Pally Sealdah Sarbojanin Durga Puja Committee — organised by
            Jatio Yuba Sangha.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <address className="ornament-border not-italic rounded-sm bg-ivory p-6 md:p-8">
            <h3 className="font-display text-xl font-semibold text-midnight">
              Location
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-midnight/75">
              Nayer Pally / Sealdah
              <br />
              Kolkata, West Bengal, India
              <br />
              PIN 700009
            </p>
            <p className="mt-4 text-sm text-midnight/75">
              <span className="block text-[10px] uppercase tracking-[0.18em] text-muted">
                Festival venue
              </span>
              Shraddhananda Park
              <span className="text-muted"> (Sradhananda Park)</span>
            </p>
          </address>

          <div className="ornament-border rounded-sm bg-ivory p-6 md:p-8">
            <h3 className="font-display text-xl font-semibold text-midnight">
              Connect
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-muted">
                  Phone
                </span>
                <a
                  href="tel:+919831593129"
                  className="focus-ring mt-1 inline-block font-medium text-crimson hover:text-vermilion"
                >
                  +91 98315 93129
                </a>
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-muted">
                  Email
                </span>
                <a
                  href="mailto:jatioyubasanghasealdah@gmail.com"
                  className="focus-ring mt-1 inline-block break-all font-medium text-crimson hover:text-vermilion"
                >
                  jatioyubasanghasealdah@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-muted">
                  Facebook
                </span>
                <a
                  href="https://www.facebook.com/profile.php?id=100083116423356"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-1 inline-block font-medium text-crimson hover:text-vermilion"
                >
                  Nayer Pally Sealdah Sarbojanin Durga Puja Committee
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ornament-border mx-auto mt-8 max-w-4xl overflow-hidden rounded-sm bg-midnight">
          <div
            className="flex aspect-[21/9] min-h-[12rem] flex-col items-center justify-center bg-gradient-to-br from-royal via-midnight to-crimson-deep p-8 text-center"
            role="img"
            aria-label="Map placeholder for Nayer Pally Sealdah, Kolkata 700009"
          >
            <p className="font-display text-xl text-ivory md:text-2xl">
              Kolkata · 700009
            </p>
            <p className="mt-2 text-sm text-ivory/60">
              Interactive map can be embedded when an exact pandal pin is confirmed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
