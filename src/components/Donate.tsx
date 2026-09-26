import { getActiveContent } from "@/lib/content";
import CopyButton from "@/components/CopyButton";

/** Committee bank account (from the committee's PNB passbook). */
const BANK = {
  accountName: "Nayer Pally Sealdah Sarbojanin Durga Puja Committee",
  bank: "Punjab National Bank (PNB)",
  branch: "Kolkata, Sealdah",
  accountNumber: "1401000100706910",
  ifsc: "PUNB0140100",
  micr: "700024027",
};

const rows: { label: string; value: string; copy?: boolean; mono?: boolean }[] = [
  { label: "Account Name", value: BANK.accountName },
  { label: "Bank", value: BANK.bank },
  { label: "Branch", value: BANK.branch },
  { label: "Account Number", value: BANK.accountNumber, copy: true, mono: true },
  { label: "IFSC", value: BANK.ifsc, copy: true, mono: true },
  { label: "MICR", value: BANK.micr, mono: true },
];

export default function Donate() {
  const { site } = getActiveContent();
  return (
    <section
      id="donate"
      className="section-pad scroll-mt-20 bg-soft text-center"
      aria-labelledby="donate-heading"
    >
      <div className="container-premium">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-3 text-crimson">Help Us Grow</p>
          <h2
            id="donate-heading"
            className="font-display text-3xl font-semibold text-navy md:text-4xl"
          >
            Donate
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#4A3B31] md:text-[1.05rem] md:leading-[1.8]">
            We are still a small, community-run puja — and we&apos;d love your
            help to grow it, year on year, into a grand theme puja that does
            justice to Nayer Pally&apos;s spirit. Every contribution, big or
            small, goes directly toward the pandal, the pratima, the bhog and
            the days of celebration.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#4A3B31] md:text-[1.05rem] md:leading-[1.8]">
            You can donate directly to the committee&apos;s bank account below,
            or reach out to the committee using the contact details on this
            page.
          </p>
        </div>

        {/* Payment options grid — a future UPI QR card can sit beside this one */}
        <div className="mx-auto mt-10 grid max-w-3xl gap-6">
          <div
            className="rounded-sm border border-gold/40 bg-cream p-6 text-left shadow-sm sm:p-8"
            aria-labelledby="bank-transfer-heading"
            role="group"
          >
            <details className="donate-details group">
              <summary
                className="focus-ring -m-2 flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm p-2 [&::-webkit-details-marker]:hidden"
                aria-describedby="bank-transfer-hint"
              >
                <span className="min-w-0">
                  <span className="eyebrow mb-2 block text-gold-antique">Direct to Committee Account</span>
                  <span
                    id="bank-transfer-heading"
                    role="heading"
                    aria-level={3}
                    className="block font-display text-xl font-semibold text-navy md:text-2xl"
                  >
                    Bank Transfer (NEFT / IMPS / RTGS)
                  </span>
                  <span
                    id="bank-transfer-hint"
                    className="mt-2 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-navy/70 underline decoration-gold/60 underline-offset-4 group-hover:text-crimson"
                  >
                    <span className="group-open:hidden">Show bank details</span>
                    <span className="hidden group-open:inline">Hide bank details</span>
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-soft text-gold-antique transition-transform duration-300 group-open:rotate-180 group-hover:border-gold"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </summary>
              <dl className="mt-6 divide-y divide-navy/10 border-y border-navy/10">
                {rows.map((r) => (
                  <div
                    key={r.label}
                    className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-center sm:gap-4"
                  >
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted sm:w-40 sm:shrink-0">
                      {r.label}
                    </dt>
                    <dd className="flex min-w-0 flex-1 items-center justify-between gap-3">
                      <span
                        className={`min-w-0 break-words text-navy ${
                          r.mono
                            ? "font-mono text-base font-semibold tracking-wider md:text-lg"
                            : "text-sm font-medium md:text-base"
                        }`}
                      >
                        {r.value}
                      </span>
                      {r.copy && <CopyButton value={r.value} label={r.label} />}
                    </dd>
                  </div>
                ))}
              </dl>
            </details>
            <div className="mt-5 rounded-sm border-l-2 border-gold bg-soft px-4 py-3 text-sm leading-relaxed text-[#4A3B31]">
              <p>
                After donating, please email the payment screenshot to{" "}
                <a href={`mailto:${site.email}`} className="focus-ring rounded-sm font-medium break-all text-navy underline decoration-gold/60 underline-offset-2 hover:text-crimson">
                  {site.email}
                </a>{" "}
                for your receipt.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent("Donation receipt — Nayer Pally Sealdah Sarbojanin Durga Puja")}`}
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-xs font-semibold tracking-wide text-cream shadow-sm transition hover:brightness-110"
                >
                  Email screenshot
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <p className="mt-10 text-base leading-relaxed text-[#4A3B31] md:text-[1.05rem] md:leading-[1.8]">
            For Puja Seva donations, please reach out to the committee by email.
          </p>
          <a
            href="#contact"
            className="focus-ring mt-7 inline-flex rounded-sm bg-navy px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-cream transition hover:brightness-110"
          >
            Contact the Committee
          </a>
        </div>
      </div>
    </section>
  );
}
