import { getActiveContent } from "@/lib/content";

export default function Visitors() {
  const { pack } = getActiveContent();
  const v = pack.visitors;

  return (
    <section
      id="visitors"
      className="section-pad bg-gradient-to-br from-gold via-gold-light to-gold"
      aria-labelledby="visitors-heading"
    >
      <div className="container-premium">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-3 font-bold text-navy">{v.eyebrow}</p>
          <h2
            id="visitors-heading"
            className="font-display text-3xl font-bold text-navy md:text-[2.35rem]"
          >
            {v.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#3A2E10] md:text-[1.05rem] md:leading-[1.75]">
            {v.body}
          </p>
          <a
            href="#contact"
            className="focus-ring mt-6 inline-flex rounded-sm bg-navy px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-cream transition hover:brightness-110"
          >
            Plan Your Visit
          </a>
        </div>
      </div>
    </section>
  );
}
