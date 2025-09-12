import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oceania Travel",
  description: "Agensi travel modern dengan destinasi terbaik di Indonesia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${geistSans.className} bg-white text-gray-800 flex flex-col min-h-screen`}>
        {/* Navbar */}
        <Navbar />
        <ScrollProgress />

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
