const roles = [
  {
    title: "Pandal & Décor",
    desc: "Help craft the sacred space — lights, flowers, and festive artistry.",
  },
  {
    title: "Ritual Support",
    desc: "Assist with anjali lines, prasad distribution, and ceremonial flow.",
  },
  {
    title: "Cultural Desk",
    desc: "Coordinate performances, stage cues, and guest hospitality.",
  },
  {
    title: "Community Outreach",
    desc: "Share updates, welcome neighbours, and strengthen local bonds.",
  },
];

export default function Volunteer() {
  return (
    <section
      id="volunteer"
      className="section-pad bg-ivory"
      aria-labelledby="volunteer-heading"
    >
      <div className="container-premium">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-crimson">
              Join Hands
            </p>
            <h2
              id="volunteer-heading"
              className="font-display text-3xl font-semibold text-midnight md:text-4xl"
            >
              Volunteer with{" "}
              <span className="gold-text">Jatio Yuba Sangha</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-midnight/75">
              Sarbojanin Pujo thrives on collective seva. Whether you are a
              student, neighbour, or lifelong devotee of Nayer Pally, your time
              and talent make the celebration possible.
            </p>
            <p className="mt-4 text-base leading-relaxed text-midnight/75">
              Reach out via phone, email, or our Facebook page — the committee
              will guide you on how best to contribute.
            </p>
            <a
              href="#contact"
              className="focus-ring gold-gradient mt-8 inline-flex rounded-sm px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-midnight shadow-md transition hover:brightness-110"
            >
              Offer Your Seva
            </a>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {roles.map((role) => (
              <li
                key={role.title}
                className="ornament-border rounded-sm bg-cream/70 p-5"
              >
                <h3 className="font-display text-xl font-semibold text-midnight">
                  {role.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-midnight/65">
                  {role.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
