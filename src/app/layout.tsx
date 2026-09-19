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
  metadataBase: new URL("https://kitty222415.github.io/nayer-pally-durga-puja"),
  title: {
    default:
      "Nayer Pally Sealdah Sarbojanin Durga Puja Committee - Jatio Yuba Sangha",
    template:
      "%s | Nayer Pally Sealdah Sarbojanin Durga Puja",
  },
  description:
    "Official website of Nayer Pally Sealdah Sarbojanin Durga Puja Committee, organised by Jatio Yuba Sangha. Celebrating Durga Puja and community festivals at Shraddhananda Park, Sealdah, Kolkata 700009.",
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
  ],
  authors: [{ name: "Jatio Yuba Sangha" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    title:
      "Nayer Pally Sealdah Sarbojanin Durga Puja Committee - Jatio Yuba Sangha",
    description:
      "Sacred festivity in the heart of Sealdah. Organised by Jatio Yuba Sangha at Nayer Pally, Kolkata.",
    siteName: "Nayer Pally Sealdah Durga Puja",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayer Pally Sealdah Sarbojanin Durga Puja",
    description:
      "Organised by Jatio Yuba Sangha · Kolkata 700009 · Shraddhananda Park",
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
