import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nayerpallysealdahsarbojanindurgapuja.com"),
  title: {
    default:
      "Nayer Pally Sealdah Sarbojanin Durga Puja Committee - Jatio Yuba Sangha",
    template: "%s | Nayer Pally Sealdah Sarbojanin Durga Puja",
  },
  description:
    "Official website of Nayer Pally Sealdah Sarbojanin Durga Puja Committee, organised by Jatio Yuba Sangha. Founded 1948 — celebrating our 79th year in 2026 at Shraddhananda Park, Raja Rammohan Sarani, Sealdah, Kolkata 700009.",
  keywords: [
    "Durga Puja",
    "Nayer Pally",
    "Sealdah",
    "Kolkata",
    "Jatio Yuba Sangha",
    "Sarbojanin",
    "Shraddhananda Park",
    "Bengali festival",
    "Rath Yatra",
    "1948",
  ],
  authors: [{ name: "Jatio Yuba Sangha" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    title:
      "Nayer Pally Sealdah Sarbojanin Durga Puja Committee - Jatio Yuba Sangha",
    description:
      "79th Year · Since 1948. Organised by Jatio Yuba Sangha at Shraddhananda Park, Sealdah, Kolkata 700009.",
    siteName: "Nayer Pally Sealdah Durga Puja",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayer Pally Sealdah Sarbojanin Durga Puja",
    description:
      "Organised by Jatio Yuba Sangha · 79th Year · Shraddhananda Park, Kolkata 700009",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${outfit.variable} ${notoBengali.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
