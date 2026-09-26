import siteData from "@/data/site.json";
import galleryAll from "@/data/gallery.json";
import year2026 from "@/data/years/2026.json";
import year2027 from "@/data/years/2027.json";

export type GalleryItem = {
  src: string;
  file: string;
  caption: string;
  alt: string;
  year?: number;
};

export type Testimonial = {
  /** true while the card still holds placeholder text — replace with a real quote */
  placeholder?: boolean;
  /** Photo path under public/testimonials/ (e.g. "/testimonials/rina-das.jpg"). Empty → generic avatar. */
  photo?: string;
  quote: string;
  name: string;
  detail?: string;
  source?: string;
  sourceUrl?: string;
};

export type Sponsor = {
  name: string;
  logo: string;
  width: number;
  height: number;
  url?: string;
};

export type YearPack = {
  year: number;
  bengaliYear: string;
  status: "published" | "tba";
  heroBadge: string;
  about: { eyebrow: string; heading: string; paragraphs: string[] };
  eventsIntro: string;
  events: { title: string; blurb: string }[];
  visitors: { eyebrow: string; heading: string; body: string };
  testimonials?: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: Testimonial[];
  };
  englishSchedule: {
    eyebrow: string;
    intro: string;
    footnote: string;
    days: {
      bengali: string;
      name: string;
      note: string;
      date: string;
      highlight?: boolean;
    }[];
  };
  bengaliSchedule: {
    eyebrow: string;
    heading: string;
    intro: string;
    footnote: string;
    rows: {
      tithi: string;
      banglaDate: string;
      englishDate: string;
      detail: string;
      highlight?: boolean;
    }[];
  };
};

export const site = siteData as {
  committeeName: string;
  organiser: string;
  foundedYear: number;
  venue: string;
  addressLine: string;
  pin: string;
  email: string;
  /** WhatsApp-only number (country code, digits only, e.g. "91XXXXXXXXXX"). Messages only — never shown as text or used as tel:. */
  whatsappNumber: string;
  facebookUrl: string;
  /** Instagram profile URL — leave "" to hide the Instagram icon */
  instagram: string;
  heroGreetingBn: string;
  sponsors: Sponsor[];
};

const YEAR_PACKS: Record<number, YearPack> = {
  2026: year2026 as YearPack,
  2027: year2027 as YearPack,
};

export function getTargetPujaYear(now = new Date()): number {
  const forced = process.env.NEXT_PUBLIC_PUJA_YEAR;
  if (forced && /^\d{4}$/.test(forced)) return Number(forced);
  const y = now.getFullYear();
  return now.getMonth() >= 10 ? y + 1 : y;
}

export function getAnniversary(year: number): number {
  return year - site.foundedYear + 1;
}

export function fillTemplate(
  text: string,
  year: number,
  anniversary: number,
): string {
  return text
    .replaceAll("{year}", String(year))
    .replaceAll("{anniversary}", String(anniversary));
}

function latestPublishedYear(): number {
  const years = Object.values(YEAR_PACKS)
    .filter((p) => p.status === "published")
    .map((p) => p.year);
  return years.length ? Math.max(...years) : 2026;
}

export function getActiveContent(now = new Date()) {
  const targetYear = getTargetPujaYear(now);
  let year = targetYear;
  let pack = YEAR_PACKS[targetYear];
  let showingFallback = false;

  if (!pack || pack.status !== "published") {
    year = latestPublishedYear();
    pack = YEAR_PACKS[year];
    showingFallback = targetYear !== year;
  }

  const anniversary = getAnniversary(year);
  const tagged = (galleryAll as GalleryItem[]).filter(
    (g) => !g.year || g.year === year,
  );

  return {
    site,
    year,
    anniversary,
    pack,
    showingFallback,
    targetYear,
    gallery: tagged.length ? tagged : (galleryAll as GalleryItem[]),
  };
}

/** Build a wa.me chat link for the committee's WhatsApp-only number with an optional prefilled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber.replace(/\D/g, "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const WHATSAPP_MESSAGES = {
  general:
    "Namaskar! I have a question about Nayer Pally Sealdah Sarbojanin Durga Puja.",
  donation:
    "Namaskar! I have made a donation to Nayer Pally Sealdah Sarbojanin Durga Puja. Sharing the payment screenshot for the receipt. Name: ",
} as const;
