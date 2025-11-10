"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { BorderBeam } from "./magicui/border-beam";
// import LanguagePopup from "./LanguagePopup";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(true); // deteksi background
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Beranda", href: "#beranda" },
    { name: "Destinasi", href: "#destinasi" },
    { name: "Paket Wisata", href: "#paket" },
    { name: "Galeri", href: "#galery" },
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Kontak", href: "/kontak" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // cek section pertama apakah gelap atau terang
  useEffect(() => {
    const hero = document.querySelector("#beranda");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // kalau masih kelihatan hero (misalnya bg gambar gelap), pakai text putih
        setIsDarkBg(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (href: string) => {
    if (href.startsWith("#")) {
      if (pathname !== "/") {
        router.push("/" + href);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          // Update hash di URL agar sesuai dengan section
          window.history.replaceState(null, "", href);
        }
      }
    } else if (href.startsWith("/")) {
      router.push(href);
    }

    setIsMobileMenuOpen(false);
  };

  // tentukan warna teks
  const textColor = isScrolled || !isDarkBg ? "text-blue-950 hover:text-orange-500" : "text-white hover:text-orange-300";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-stone-100/70 backdrop-blur-md border-b border-orange-200/20 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo Oceania Travel Belitung" width={40} height={40} />
            <button onClick={() => handleMenuClick("#beranda")} className={`text-2xl font-bold transition-colors duration-300 cursor-pointer ${textColor}`}>
              OCEANIA
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-8">
              {menuItems.map((item, index) => (
                <button key={index} onClick={() => handleMenuClick(item.href)} className={`px-3 py-2 font-medium transition-colors duration-200 relative group cursor-pointer ${textColor}`}>
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/6285138534353?text=Halo%20saya%20ingin%20pesan%20paket%20wisata%20Oceania"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden inline-flex items-center justify-center backdrop-blur-md bg-white/20 text-blue-950 font-semibold rounded-xl px-5 py-2 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white shadow-lg hover:shadow-xl"
            >
              Pesan Sekarang
              <BorderBeam duration={8} size={50} borderWidth={3} className="from-transparent via-orange-500 to-transparent" />
            </a>
          </div>
          {/* <LanguagePopup /> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className={`p-2 rounded-md transition-colors duration-200 ${textColor}`}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div
          className={`px-12 pt-2 pb-3 space-y-1 
                backdrop-blur-md border-t border-white/20 
                ${isScrolled ? "bg-white/30" : "bg-black/30"}`}
        >
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleMenuClick(item.href)}
              className={`w-full text-center block px-3 py-2 text-base font-medium rounded-md transition-all duration-200 cursor-pointer ${
                isScrolled || !isDarkBg ? "text-blue-950 hover:text-orange-500 hover:bg-orange-100/10" : "text-white hover:text-orange-300 hover:bg-white/10"
              }`}
            >
              {item.name}
            </button>
          ))}

          {/* CTA Button Mobile */}
          <a
            href="https://wa.me/6285138534353?text=Halo%20saya%20ingin%20pesan%20paket%20wisata%20Oceania"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full backdrop-blur-md bg-white/20 text-blue-950 font-bold py-2 px-2 rounded-xl shadow-lg transition-all duration-500 transform hover:scale-105 hover:bg-orange-500 hover:text-white block text-center"
          >
            Pesan Sekarang
            <BorderBeam duration={8} size={70} borderWidth={3} className="from-transparent via-orange-500 to-transparent" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
