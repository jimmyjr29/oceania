import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Analytics } from "@vercel/analytics/react";
const geistSans = Geist({
  subsets: ["latin"],
});

// 🌐 Metadata SEO Global
export const metadata: Metadata = {
  metadataBase: new URL("https://oceania.co.id"),
  title: {
    default: "Oceania Travel — Paket Wisata Belitung & Tour Terbaik",
    template: "%s | Oceania Travel",
  },
  description: "Temukan paket wisata Belitung terbaik dengan Oceania Travel. Nikmati pengalaman eksklusif, destinasi menawan, dan pelayanan profesional untuk liburan tak terlupakan di Indonesia.",
  keywords: [
    "Oceania Travel",
    "wisata Belitung",
    "paket tour Belitung",
    "travel Belitung",
    "paket wisata Indonesia",
    "Oceania Tour",
    "liburan Belitung",
    "destinasi wisata",
    "travel agent Belitung",
    "Belitung Isaland tours",
    "holiday packages Belitung",
    "best travel agency Belitung",
    "exclusive travel Belitung",
    "professional travel services",
    "Indonesian travel packages",
    "Belitung vacation deals",
    "Oceania holiday tours",
    "Belitung travel experiences",
    "custom travel Belitung",
    "affordable travel Belitung",
    "luxury travel Belitung",
    "family travel Belitung",
    "honeymoon packages Belitung",
    "adventure tours Belitung",
    "cultural tours Belitung",
    "beach vacations Belitung",
    "island hopping Belitung",
    "nature tours Belitung",
    "snorkeling Belitung",
    "eco-tourism Belitung",
    "local experiences Belitung",
    "guided tours Belitung",
    "group travel Belitung",
    "solo travel Belitung",
    "romantic getaways Belitung",
    "budget travel Belitung",
    "travel deals Indonesia",
    "holiday planning Belitung",
  ],
  authors: [{ name: "Oceania Travel Team", url: "https://oceania.co.id" }],
  creator: "Oceania Travel",
  publisher: "Oceania Travel",
  openGraph: {
    title: "Oceania Travel — Paket Wisata Belitung & Tour Terbaik",
    description: "Nikmati liburan tak terlupakan ke Belitung bersama Oceania Travel. Pilihan paket wisata menarik, destinasi eksklusif, dan layanan profesional.",
    url: "https://oceania.co.id",
    siteName: "Oceania Travel",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://oceania.co.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oceania Travel - Paket Wisata Belitung",
      },
    ],
  },
  alternates: {
    canonical: "https://oceania.co.id",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  twitter: {
    card: "summary_large_image",
    title: "Oceania Travel — Paket Wisata Belitung & Tour Terbaik",
    description: "Nikmati keindahan Belitung bersama Oceania Travel. Dapatkan pengalaman wisata eksklusif dan pelayanan terbaik.",
    images: ["https://oceania.co.id/og-image.jpg"],
    creator: "@oceaniatravel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Travel & Tourism",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <SchemaMarkup />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-ZWB5W7R0XV" />
      </head>

      <body className={`${geistSans.className} bg-white text-gray-800 flex flex-col min-h-screen`}>
        <Navbar />
        <ScrollProgress />
        <main className="flex-1">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
