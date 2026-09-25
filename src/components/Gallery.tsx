import Image from "next/image";
import { getActiveContent } from "@/lib/content";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

export default function Gallery() {
  const { site, year, gallery } = getActiveContent();

  return (
    <section
      id="gallery"
      className="section-pad bg-soft"
      aria-labelledby="gallery-heading"
    >
      <div className="container-premium">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 text-crimson">Moments</p>
          <h2
            id="gallery-heading"
            className="font-display text-3xl font-semibold text-navy md:text-4xl"
          >
            Gallery
          </h2>
          <p className="mt-4 text-sm text-muted md:text-base">
            Photos from our pandal, cultural nights, Rath Yatra and community
            gatherings — {year} season.
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-navy/50">
            {gallery.length} photos · {year}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {gallery.map((item) => (
            <li key={item.file}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-parchment bg-navy/5">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/55 to-transparent px-3 pb-3 pt-10">
                  <span className="font-display text-sm font-medium text-cream md:text-[0.95rem]">
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={site.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-sm border border-crimson/40 bg-crimson px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cream shadow-md transition hover:bg-crimson-deep"
          >
            <FacebookIcon className="h-4 w-4" />
            See more on Facebook
          </a>
          {site.instagram && (
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-sm border border-crimson px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-crimson transition hover:bg-crimson hover:text-cream"
            >
              <InstagramIcon className="h-4 w-4" />
              Follow on Instagram
            </a>
          )}
          </div>
          <p className="max-w-md text-xs text-muted">
            Send new photos anytime — add them under the active year in{" "}
            <code className="text-navy">src/data/gallery.json</code>.
          </p>
        </div>
      </div>
    </section>
  );
}
