import Image from "next/image";
import { asset } from "@/lib/asset";
import { getActiveContent } from "@/lib/content";

export default function Sponsors() {
  const { site } = getActiveContent();
  const sponsors = site.sponsors ?? [];
  const TOTAL_SLOTS = 6;
  const openSlots = Math.max(0, TOTAL_SLOTS - sponsors.length);

  return (
    <section
      id="sponsors"
      className="section-pad bg-cream"
      aria-labelledby="sponsors-heading"
    >
      <div className="container-premium">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 text-crimson">With Gratitude</p>
          <h2
            id="sponsors-heading"
            className="font-display text-3xl font-semibold text-navy md:text-4xl"
          >
            Our Sponsors
          </h2>
          <p className="mt-4 text-sm text-muted md:text-base">
            Thank you to the brands who help bring the puja to life every year.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {sponsors.map((s) => {
            const tile = (
              <>
                <span className="relative block h-20 w-full">
                  <Image
                    src={asset(s.logo)}
                    alt={`${s.name} logo`}
                    fill
                    unoptimized
                    sizes="200px"
                    className="object-contain"
                  />
                </span>
                <span className="sr-only">{s.name}</span>
              </>
            );
            return (
              <li
                key={s.name}
                className="flex h-32 items-center justify-center rounded-sm border border-[#E7DCC9] bg-white px-5 py-4 shadow-sm"
                title={s.name}
              >
                {s.url ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring block w-full rounded-sm"
                  >
                    {tile}
                  </a>
                ) : (
                  tile
                )}
              </li>
            );
          })}
          {Array.from({ length: openSlots }, (_, i) => (
            <li
              key={`slot-${i}`}
              className="flex h-32 items-center justify-center rounded-sm border border-dashed border-[#C7B79A] px-3 text-center text-xs text-[#9C8B76]"
            >
              Sponsor slot available
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="focus-ring inline-flex rounded-sm border border-crimson px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-crimson transition hover:bg-crimson hover:text-cream"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
}
