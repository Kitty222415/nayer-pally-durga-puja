import { getActiveContent } from "@/lib/content";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { FeaturedTestimonial } from "@/components/TestimonialCard";

export default function Testimonials() {
  const { pack } = getActiveContent();
  const t = pack.testimonials;
  if (!t || !t.items?.length) return null;

  return (
    <section
      id="testimonials"
      className="section-pad relative overflow-hidden bg-navy text-cream"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent"
        aria-hidden
      />
      <div className="container-premium relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 text-gold">{t.eyebrow}</p>
          <h2
            id="testimonials-heading"
            className="font-display text-3xl font-semibold text-cream md:text-4xl"
          >
            {t.heading}
          </h2>
          <div className="mx-auto mt-5 h-0.5 w-[70px] bg-gold" aria-hidden />
          {t.intro && (
            <p className="mt-5 text-sm text-[#CFC4B6] md:text-base">{t.intro}</p>
          )}
        </div>

        {t.items.length === 1 ? (
          <FeaturedTestimonial item={t.items[0]} />
        ) : (
          <TestimonialsCarousel items={t.items} />
        )}
      </div>
    </section>
  );
}
