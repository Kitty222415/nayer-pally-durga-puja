export default function Visitors() {
  return (
    <section
      id="visitors"
      className="section-pad bg-gradient-to-br from-gold via-gold-light to-gold"
      aria-labelledby="visitors-heading"
    >
      <div className="container-premium">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
          <div
            className="flex h-[110px] w-[110px] shrink-0 items-center justify-center rounded-full bg-navy"
            aria-hidden
          >
            <svg
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FBF6EC"
              strokeWidth="1.4"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="eyebrow mb-3 font-bold text-navy">A Special Welcome</p>
            <h2
              id="visitors-heading"
              className="font-display text-3xl font-bold text-navy md:text-[2.35rem]"
            >
              Durga Puja, Open to the World
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#3A2E10] md:text-[1.05rem] md:leading-[1.75]">
              We warmly welcome tourists and visitors from abroad to experience
              Durga Puja with us — the rituals, the drums, the pandal, and the
              spirit of the neighbourhood. From Shashthi onward, our
              international guests are offered a special Bhog of Maa Durga,
              along with a friendly introduction to each day&apos;s customs.
              Guests from abroad may also offer{" "}
              <strong className="font-semibold text-navy">Anjali</strong> to
              Maa Durga with the committee&apos;s guidance — a simple, heartfelt
              way to take part in the worship.
            </p>
            <a
              href="#contact"
              className="focus-ring mt-6 inline-flex rounded-sm bg-navy px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-cream transition hover:brightness-110"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
