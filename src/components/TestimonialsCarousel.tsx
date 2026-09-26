"use client";

import Image from "next/image";
import { asset } from "@/lib/asset";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/lib/content";

const FALLBACK_AVATAR = "/testimonials/placeholder-avatar.svg";
const AUTO_ADVANCE_MS = 4500;
const RESUME_AFTER_TOUCH_MS = 6000;

export default function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [active, setActive] = useState(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Respect prefers-reduced-motion: no auto-scroll, instant jumps.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const step = useCallback(() => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>("[data-card]");
    if (!track || !card) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    return card.offsetWidth + gap;
  }, []);

  const go = useCallback(
    (dir: 1 | -1) => {
      const track = trackRef.current;
      if (!track) return;
      const max = track.scrollWidth - track.clientWidth;
      const behavior: ScrollBehavior = reducedMotion ? "auto" : "smooth";
      if (dir === 1 && track.scrollLeft >= max - 4) {
        track.scrollTo({ left: 0, behavior }); // loop back to the start
      } else if (dir === -1 && track.scrollLeft <= 4) {
        track.scrollTo({ left: max, behavior }); // wrap to the end
      } else {
        track.scrollBy({ left: dir * step(), behavior });
      }
    },
    [reducedMotion, step],
  );

  // Auto-advance one card at a time; pauses on hover / focus / touch.
  useEffect(() => {
    if (reducedMotion || paused || items.length < 2) return;
    const id = setInterval(() => {
      if (document.visibilityState === "visible") go(1);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [reducedMotion, paused, go, items.length]);

  // Track which card is first in view (for the dots).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const s = step();
      if (s) setActive(Math.min(items.length - 1, Math.round(track.scrollLeft / s)));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [items.length, step]);

  useEffect(() => () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  const pauseTemporarily = () => {
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_AFTER_TOUCH_MS);
  };

  const manual = (dir: 1 | -1) => {
    pauseTemporarily();
    go(dir);
  };

  const jumpTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    pauseTemporarily();
    track.scrollTo({ left: i * step(), behavior: reducedMotion ? "auto" : "smooth" });
  };

  const arrowCls =
    "focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-navy/80 text-gold shadow-lg shadow-black/30 transition hover:border-gold hover:bg-gold hover:text-navy";

  return (
    <div
      className="relative mt-12"
      role="region"
      aria-roledescription="carousel"
      aria-label="Visitor testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={pauseTemporarily}
      onPointerDown={pauseTemporarily}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") manual(1);
        if (e.key === "ArrowLeft") manual(-1);
      }}
    >
      <ul
        ref={trackRef}
        tabIndex={0}
        className="testimonial-track flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 focus:outline-none motion-reduce:scroll-auto"
      >
        {items.map((item, i) => (
          <li
            key={i}
            data-card
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${items.length}`}
            className="w-full shrink-0 snap-start md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            <figure className="relative flex h-full flex-col rounded-sm border border-gold/30 bg-cream/[0.04] p-7 shadow-lg shadow-black/20 transition hover:border-gold/60">
              {item.placeholder && (
                <span className="absolute right-4 top-4 rounded-full border border-gold/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold/80">
                  Placeholder
                </span>
              )}
              <div className="flex items-center gap-4">
                <span className="relative block h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/70 ring-offset-2 ring-offset-navy">
                  <Image
                    src={asset(item.photo || FALLBACK_AVATAR)}
                    alt={item.placeholder ? "" : `Photo of ${item.name}`}
                    fill
                    sizes="64px"
                    unoptimized={(item.photo || FALLBACK_AVATAR).endsWith(".svg")}
                    className="object-cover"
                  />
                </span>
                <svg
                  viewBox="0 0 32 24"
                  className="h-5 w-7 text-gold"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M0 24V14.4C0 6.4 4.3 1.6 12.8 0l1.4 3.1C9.6 4.5 7.4 7.3 7.1 11.2H13V24H0zm18.3 0V14.4C18.3 6.4 22.6 1.6 31.1 0l1.4 3.1c-4.6 1.4-6.8 4.2-7.1 8.1h5.9V24H18.3z" />
                </svg>
              </div>
              <blockquote
                className={`font-display mt-5 flex-1 text-lg leading-relaxed md:text-xl ${
                  item.placeholder ? "italic text-cream/60" : "text-cream"
                }`}
              >
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-gold/20 pt-4">
                <p className="text-sm font-semibold tracking-wide text-gold">{item.name}</p>
                {item.detail && (
                  <p className="mt-0.5 text-xs text-[#B9AFA3]">{item.detail}</p>
                )}
                {item.source &&
                  (item.sourceUrl ? (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring mt-1 inline-block rounded-sm text-[11px] uppercase tracking-[0.14em] text-cream/60 underline-offset-2 hover:text-gold hover:underline"
                    >
                      Source: {item.source}
                    </a>
                  ) : (
                    <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-cream/60">
                      Source: {item.source}
                    </p>
                  ))}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      {items.length > 1 && (
        <div className="mt-8 flex items-center justify-center gap-5">
          <button type="button" className={arrowCls} aria-label="Previous testimonial" onClick={() => manual(-1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex items-center gap-2" aria-hidden>
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                tabIndex={-1}
                onClick={() => jumpTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-6 bg-gold" : "w-1.5 bg-gold/35 hover:bg-gold/60"
                }`}
              />
            ))}
          </div>
          <button type="button" className={arrowCls} aria-label="Next testimonial" onClick={() => manual(1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
