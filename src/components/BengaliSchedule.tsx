const rows = [
  {
    tithi: "চতুর্থী",
    banglaDate: "২৬ আশ্বিন",
    englishDate: "১৪ অক্টোবর ২০২৬, বুধবার",
    detail: "পূজার উদ্বোধন — কমিটির বিশেষ দিন।",
    highlight: true,
  },
  {
    tithi: "পঞ্চমী",
    banglaDate: "২৭ আশ্বিন",
    englishDate: "১৫ অক্টোবর ২০২৬, বৃহস্পতিবার",
    detail: "মণ্ডপ সর্বসাধারণের জন্য উন্মুক্ত।",
  },
  {
    tithi: "ষষ্ঠী",
    banglaDate: "২৮ আশ্বিন",
    englishDate: "১৬ অক্টোবর ২০২৬, শুক্রবার",
    detail:
      "কল্পারম্ভ ও ষষ্ঠীবিহিত পূজা; সন্ধ্যায় বোধন, আমন্ত্রণ ও অধিবাস।",
    highlight: true,
  },
  {
    tithi: "সপ্তমী (প্রথম দিন)",
    banglaDate: "২৯ আশ্বিন",
    englishDate: "১৭ অক্টোবর ২০২৬, শনিবার",
    detail:
      "নবপত্রিকা প্রবেশ, স্থাপন ও সপ্তমীবিহিত পূজা। সপ্তমী তিথি দুইদিন বিস্তৃত।",
  },
  {
    tithi: "সপ্তমী (দ্বিতীয় দিন)",
    banglaDate: "৩০ আশ্বিন",
    englishDate: "১৮ অক্টোবর ২০২৬, রবিবার",
    detail: "দ্বি-সপ্তমী — অবশিষ্ট সপ্তমীবিহিত অধিক পূজা।",
  },
  {
    tithi: "মহাষ্টমী ও সন্ধিপূজা",
    banglaDate: "১ কার্তিক",
    englishDate: "১৯ অক্টোবর ২০২৬, সোমবার",
    detail:
      "মহাষ্টমী পূজা ও কুমারী পূজা। সন্ধিপূজা প্রায় সকাল ৭:২৬ থেকে ৮:১৪ (কলকাতা নির্ঘণ্ট)।",
    highlight: true,
  },
  {
    tithi: "মহানবমী",
    banglaDate: "২ কার্তিক",
    englishDate: "২০ অক্টোবর ২০২৬, মঙ্গলবার",
    detail: "মহানবমী পূজা ও হোম; নবরাত্রিক ব্রত সমাপন।",
  },
  {
    tithi: "বিজয়া দশমী",
    banglaDate: "৩ কার্তিক",
    englishDate: "২১ অক্টোবর ২০২৬, বুধবার",
    detail: "দশমীবিহিত পূজা, সিঁদুর খেলা ও দেবীর বিদায়।",
    highlight: true,
  },
  {
    tithi: "দ্বাদশী",
    banglaDate: "৫ কার্তিক",
    englishDate: "২৩ অক্টোবর ২০২৬, শুক্রবার",
    detail: "প্রতিমা বিসর্জন — কমিটির নির্ধারিত বিসর্জন দিবস।",
    highlight: true,
  },
];

export default function BengaliSchedule() {
  return (
    <section
      id="bangla-nirghanta"
      className="section-pad bg-cream"
      aria-labelledby="bangla-nirghanta-heading"
      lang="bn"
    >
      <div className="container-premium">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-3 text-crimson">বাংলা নির্ঘণ্ট · ১৪৩৩ বঙ্গাব্দ</p>
          <h2
            id="bangla-nirghanta-heading"
            className="font-bengali text-3xl font-semibold text-navy md:text-4xl"
          >
            তিথি অনুসারে দুর্গাপূজা সূচি
          </h2>
          <p className="mt-4 font-bengali text-base leading-relaxed text-[#4A3B31] md:text-lg">
            চলতি বছরের (২০২৬ / ১৪৩৩ বঙ্গাব্দ) কলকাতার পঞ্জিকা অনুযায়ী
            তিথিভিত্তিক সূচি। উদ্বোধন চতুর্থীতে ও বিসর্জন দ্বাদশীতে — আমাদের
            কমিটির রীতি অনুসারে।
          </p>
        </div>

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

        <p className="mt-6 text-center font-bengali text-xs leading-relaxed text-[#6B5C4F] md:text-sm">
          সূত্র: কলকাতার প্রচলিত পঞ্জিকা / নির্ঘণ্ট ১৪৩৩। সন্ধিপূজার সঠিক সময়
          ও স্থানীয় আচার পূজার কাছাকাছি সময়ে পুরোহিত ও কমিটির ঘোষণা অনুসারে
          নিশ্চিত করুন।
        </p>
      </div>
    </section>
  );
}
