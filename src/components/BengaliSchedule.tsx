import { getActiveContent, fillTemplate } from "@/lib/content";

export default function BengaliSchedule() {
  const { year, anniversary, pack } = getActiveContent();
  const sched = pack.bengaliSchedule;
  const rows = sched.rows;

  return (
    <section
      id="bangla-nirghanta"
      className="section-pad bg-cream"
      aria-labelledby="bangla-nirghanta-heading"
      lang="bn"
    >
      <div className="container-premium">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-3 text-crimson">
            {fillTemplate(sched.eyebrow, year, anniversary)}
          </p>
          <h2
            id="bangla-nirghanta-heading"
            className="font-bengali text-3xl font-semibold text-navy md:text-4xl"
          >
            {sched.heading}
          </h2>
          <p className="mt-4 font-bengali text-base leading-relaxed text-[#4A3B31] md:text-lg">
            {fillTemplate(sched.intro, year, anniversary)}
          </p>
        </div>

        {rows.length === 0 ? (
          <p className="mt-12 text-center font-bengali text-sm text-navy/70">
            এই বছরের তিথি সূচি শীঘ্রই যোগ করা হবে।
          </p>
        ) : (
          <div className="mt-12 overflow-hidden rounded-sm border border-navy/15 bg-white shadow-sm">
            <div className="hidden grid-cols-[1.1fr_0.9fr_1.1fr_1.8fr] bg-navy px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.14em] text-gold md:grid">
              <span>তিথি</span>
              <span>বাংলা তারিখ</span>
              <span>ইংরেজি তারিখ</span>
              <span>বিবরণ</span>
            </div>
            <ul className="divide-y divide-navy/10">
              {rows.map((row) => (
                <li
                  key={row.tithi}
                  className={`grid gap-2 px-4 py-4 md:grid-cols-[1.1fr_0.9fr_1.1fr_1.8fr] md:items-start md:gap-4 ${
                    row.highlight ? "bg-gold/10" : "bg-white"
                  }`}
                >
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-crimson md:hidden">
                      তিথি
                    </p>
                    <p className="font-bengali text-base font-semibold text-navy md:text-lg">
                      {row.tithi}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-crimson md:hidden">
                      বাংলা তারিখ
                    </p>
                    <p className="font-bengali text-sm text-[#3A2E10] md:text-base">
                      {row.banglaDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-crimson md:hidden">
                      ইংরেজি তারিখ
                    </p>
                    <p className="font-bengali text-sm text-[#3A2E10] md:text-base">
                      {row.englishDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-crimson md:hidden">
                      বিবরণ
                    </p>
                    <p className="font-bengali text-sm leading-relaxed text-[#4A3B31] md:text-[0.95rem]">
                      {row.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-6 text-center font-bengali text-xs leading-relaxed text-[#6B5C4F] md:text-sm">
          {fillTemplate(sched.footnote, year, anniversary)}
        </p>
      </div>
    </section>
  );
}
