export default function Donate() {
  return (
    <section
      id="donate"
      className="section-pad bg-soft text-center"
      aria-labelledby="donate-heading"
    >
      <div className="container-premium">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-3 text-crimson">Help Us Grow</p>
          <h2
            id="donate-heading"
            className="font-display text-3xl font-semibold text-navy md:text-4xl"
          >
            Donate
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#4A3B31] md:text-[1.05rem] md:leading-[1.8]">
            We are still a small, community-run puja — and we&apos;d love your
            help to grow it, year on year, into a grand theme puja that does
            justice to Nayer Pally&apos;s spirit. Every contribution, big or
            small, goes directly toward the pandal, the pratima, the bhog and
            the days of celebration.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#4A3B31] md:text-[1.05rem] md:leading-[1.8]">
            To make a donation, please reach out to the committee directly using
            the contact details below; we do not currently process payments
            online.
          </p>
          <a
            href="#contact"
            className="focus-ring mt-9 inline-flex rounded-sm bg-navy px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-cream transition hover:brightness-110"
          >
            Contact the Committee
          </a>
        </div>
      </div>
    </section>
  );
}
