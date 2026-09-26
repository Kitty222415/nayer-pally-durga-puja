import { getActiveContent } from "@/lib/content";

export default function ContentUpdates() {
  const { year, targetYear, showingFallback } = getActiveContent();

  return (
    <section
      id="updates"
      className="section-pad bg-soft"
      aria-labelledby="updates-heading"
    >
      <div className="container-premium">
        <div className="mx-auto max-w-3xl rounded-sm border border-navy/10 bg-white p-8 shadow-sm md:p-10">
          <p className="eyebrow mb-3 text-crimson">Committee tools</p>
          <h2
            id="updates-heading"
            className="font-display text-2xl font-semibold text-navy md:text-3xl"
          >
            How to update each year
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-body md:text-base">
            The site auto-selects the active Puja year (currently showing{" "}
            <strong>{year}</strong>
            {showingFallback ? ` while ${targetYear} is still TBA` : ""}).
            Schedules, Bengali নির্ঘণ্ট, About text, events, visitors copy and
            gallery all read from year packs — so you can refresh them every
            season without rebuilding the whole site design.
          </p>
          <ol className="mt-6 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-body md:text-base">
            <li>
              <strong>Easiest:</strong> message me the new English + Bengali
              dates, About wording, and photos — I&apos;ll update the year pack
              for you.
            </li>
            <li>
              <strong>Self-serve schedules &amp; context:</strong> edit{" "}
              <code className="rounded bg-soft px-1 text-navy">
                src/data/years/YYYY.json
              </code>{" "}
              (copy <code className="rounded bg-soft px-1">2026.json</code> to{" "}
              <code className="rounded bg-soft px-1">2027.json</code>, fill
              dates, set <code className="rounded bg-soft px-1">status</code> to{" "}
              <code className="rounded bg-soft px-1">published</code>).
            </li>
            <li>
              <strong>Gallery:</strong> drop images in{" "}
              <code className="rounded bg-soft px-1">public/gallery/</code> and
              list them in{" "}
              <code className="rounded bg-soft px-1">src/data/gallery.json</code>{" "}
              with <code className="rounded bg-soft px-1">&quot;year&quot;: YYYY</code>.
            </li>
            <li>
              <strong>Email / address:</strong> edit{" "}
              <code className="rounded bg-soft px-1">src/data/site.json</code>{" "}
              once — used across Contact, Footer and Hero.
            </li>
            <li>
              <strong>Force a year</strong> (optional): set env{" "}
              <code className="rounded bg-soft px-1">NEXT_PUBLIC_PUJA_YEAR=2027</code>.
            </li>
          </ol>
          <p className="mt-6 text-xs text-muted">
            Full notes: see CONTENT_UPDATES.md in the project repo.
          </p>
        </div>
      </div>
    </section>
  );
}
