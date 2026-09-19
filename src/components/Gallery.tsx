import Image from "next/image";
import gallery from "@/data/gallery.json";

const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=100083116423356";

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-ivory" aria-labelledby="gallery-heading">
      <div className="container-premium">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-crimson">
            Visual Memories
          </p>
          <h2
            id="gallery-heading"
            className="font-display text-3xl font-semibold text-midnight md:text-4xl"
          >
            Gallery
          </h2>
          <p className="mt-4 text-midnight/70">
            Moments from our pandal, Rath Yatra, and community festivals — seeded
            from publicly shared photos on our Facebook page.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <li key={item.file}>
              <figure className="ornament-border group relative aspect-[4/3] overflow-hidden rounded-sm bg-midnight/5">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight/90 via-midnight/55 to-transparent px-4 pb-3.5 pt-10">
                  <span className="font-display text-sm font-medium text-ivory md:text-base">
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-sm border border-crimson/40 bg-crimson px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-ivory shadow-md transition hover:bg-crimson-deep"
          >
            See more on Facebook
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z" />
            </svg>
          </a>
          <p className="max-w-md text-xs text-midnight/55">
            Photos are manually curated from our public Facebook page — not a live auto-sync.
          </p>
        </div>
      </div>
    </section>
  );
}
