export default function Volunteer() {
  return (
    <section
      id="volunteer"
      className="section-pad bg-crimson text-cream"
      aria-labelledby="volunteer-heading"
    >
      <div className="container-premium">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="eyebrow mb-3 text-gold">Join the Seva</p>
            <h2
              id="volunteer-heading"
              className="font-display text-3xl font-semibold text-cream md:text-[2.5rem]"
            >
              Volunteer With Us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#F3D9D9] md:text-[1.05rem] md:leading-[1.7]">
              Our puja runs on the time and effort of volunteers from the
              neighbourhood. Whether it&apos;s setup, hospitality, cultural
              events or day-of coordination, there&apos;s a place for you on the
              team.
            </p>
          </div>
          <a
            href="#contact"
            className="focus-ring shrink-0 rounded-sm bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-navy transition hover:brightness-110"
          >
            Sign Up to Volunteer
          </a>
        </div>
      </div>
    </section>
  );
}
