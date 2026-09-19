export default function Donate() {
  return (
    <section
      id="donate"
      className="section-pad relative overflow-hidden crimson-gradient text-ivory"
      aria-labelledby="donate-heading"
    >
      <div className="pattern-mandala pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div className="container-premium relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bengali mb-3 text-lg text-gold-light/90">অঞ্জলি</p>
          <h2
            id="donate-heading"
            className="font-display text-3xl font-semibold md:text-4xl"
          >
            Donate / Offer Anjali
          </h2>
          <div className="mx-auto mt-4 h-px w-20 bg-gold/50" aria-hidden />
          <p className="mt-6 text-base leading-relaxed text-ivory/80 md:text-lg">
            Your contribution helps light the pandal, sustain rituals, and welcome
            every devotee with dignity. Offerings may be made in person during
            Pujo, or by contacting the committee directly.
          </p>
          <p className="mt-4 text-sm text-ivory/60">
            Online payment will be shared by the committee when available. We do
            not process payments on this website.
          </p>

          <div className="ornament-border mx-auto mt-10 max-w-lg rounded-sm bg-midnight/30 p-6 text-left backdrop-blur-sm md:p-8">
            <h3 className="font-display text-xl font-semibold text-gold-light">
              How to contribute
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ivory/80">
              <li className="flex gap-3">
                <span className="text-gold" aria-hidden>
                  ✦
                </span>
                <span>
                  Call or WhatsApp{" "}
                  <a
                    href="tel:+919831593129"
                    className="focus-ring font-medium text-ivory underline decoration-gold/40 underline-offset-2"
                  >
                    +91 98315 93129
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold" aria-hidden>
                  ✦
                </span>
                <span>
                  Email{" "}
                  <a
                    href="mailto:jatioyubasanghasealdah@gmail.com"
                    className="focus-ring font-medium text-ivory underline decoration-gold/40 underline-offset-2 break-all"
                  >
                    jatioyubasanghasealdah@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold" aria-hidden>
                  ✦
                </span>
                <span>
                  Visit the pandal at Nayer Pally / Shraddhananda Park during
                  festival days
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
