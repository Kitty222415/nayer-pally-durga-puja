import Image from "next/image";
import { asset } from "@/lib/asset";
import type { Testimonial, TestimonialBody } from "@/lib/content";

export const FALLBACK_AVATAR = "/testimonials/placeholder-avatar.svg";

export function QuoteMark({ className = "h-5 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 24" className={`${className} text-gold`} fill="currentColor" aria-hidden>
      <path d="M0 24V14.4C0 6.4 4.3 1.6 12.8 0l1.4 3.1C9.6 4.5 7.4 7.3 7.1 11.2H13V24H0zm18.3 0V14.4C18.3 6.4 22.6 1.6 31.1 0l1.4 3.1c-4.6 1.4-6.8 4.2-7.1 8.1h5.9V24H18.3z" />
    </svg>
  );
}

export function Avatar({ item, size }: { item: Testimonial; size: "sm" | "lg" }) {
  const src = item.photo || FALLBACK_AVATAR;
  const box = size === "lg" ? "h-28 w-28 md:h-36 md:w-36" : "h-16 w-16";
  return (
    <span
      className={`relative block ${box} shrink-0 overflow-hidden rounded-full ring-2 ring-gold/70 ring-offset-2 ring-offset-navy`}
    >
      <Image
        src={asset(src)}
        alt={item.placeholder ? "" : `Photo of ${item.name}`}
        fill
        sizes={size === "lg" ? "144px" : "64px"}
        unoptimized={src.endsWith(".svg")}
        className="object-cover"
      />
    </span>
  );
}

/** Long-form testimonial text: intro paragraphs, bold-labelled points, closing paragraphs. */
export function TestimonialBodyContent({
  body,
  wide = false,
}: {
  body: TestimonialBody;
  wide?: boolean;
}) {
  return (
    <div className="space-y-5 text-[0.95rem] leading-relaxed text-[#E4DCCF] md:text-base">
      {body.intro?.map((p, i) => (
        <p key={`i${i}`}>{p}</p>
      ))}
      {!!body.points?.length && (
        <ul className={`grid gap-4 ${wide ? "md:grid-cols-2" : ""}`}>
          {body.points.map((pt, i) => (
            <li
              key={`p${i}`}
              className="relative rounded-sm border border-gold/20 bg-navy/60 p-5 pl-6 before:absolute before:inset-y-5 before:left-0 before:w-0.5 before:bg-gold"
            >
              <strong className="block font-semibold tracking-wide text-gold">{pt.label}</strong>
              <span className="mt-1.5 block">{pt.text}</span>
            </li>
          ))}
        </ul>
      )}
      {body.closing?.map((p, i) => (
        <p key={`c${i}`} className="font-display text-lg leading-relaxed text-cream md:text-xl">
          {p}
        </p>
      ))}
    </div>
  );
}

/** A single, centred, featured testimonial (used when there is only one). */
export function FeaturedTestimonial({ item }: { item: Testimonial }) {
  return (
    <figure className="relative mx-auto mt-12 max-w-5xl rounded-sm border border-gold/40 bg-cream/[0.04] p-6 shadow-xl shadow-black/30 sm:p-9 md:grid md:grid-cols-[200px_1fr] md:gap-10 md:p-12">
      <figcaption className="flex flex-col items-center text-center md:sticky md:top-28 md:self-start">
        <Avatar item={item} size="lg" />
        <p className="mt-5 font-display text-2xl font-semibold tracking-wide text-gold">{item.name}</p>
        {item.detail && (
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#B9AFA3]">{item.detail}</p>
        )}
        {item.source &&
          (item.sourceUrl ? (
            <a
              href={item.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-2 inline-block rounded-sm text-[11px] uppercase tracking-[0.14em] text-cream/60 underline-offset-2 hover:text-gold hover:underline"
            >
              Source: {item.source}
            </a>
          ) : (
            <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-cream/60">
              Source: {item.source}
            </p>
          ))}
      </figcaption>

      <div className="mt-8 md:mt-0">
        <QuoteMark className="mx-auto h-7 w-9 md:mx-0" />
        <p className="font-display mt-4 text-center text-2xl font-semibold leading-snug text-cream md:text-left md:text-[2rem]">
          “{item.quote}”
        </p>
        <div className="mx-auto mt-6 h-0.5 w-[70px] bg-gold md:mx-0" aria-hidden />
        {item.body && (
          <blockquote className="mt-7">
            <TestimonialBodyContent body={item.body} wide />
          </blockquote>
        )}
      </div>
    </figure>
  );
}
