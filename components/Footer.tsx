"use client";

import { Separator } from "@/components/ui/separator";
import { MapPin, MailIcon, Instagram, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PiTiktokLogo, PiWhatsappLogo } from "react-icons/pi";
import { useRouter, usePathname } from "next/navigation";

const footerLinks = [
  { title: "Beranda", href: "#beranda" },
  { title: "Destinasi", href: "#destinasi" },
  { title: "Paket Wisata", href: "#paket-wisata" },
  { title: "Galeri", href: "#galery" },
  { title: "Tentang Kami", href: "/tentang" },
  { title: "Kontak", href: "/kontak" },
];

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleMenuClick = (href: string) => {
    if (href.startsWith("#")) {
      // jika bukan di halaman utama, redirect ke homepage + hash
      if (pathname !== "/") {
        router.push("/" + href);
        return;
      }
      // scroll smooth
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(href);
    }
  };

  return (
    <footer className="dark:border-t dark bg-blue-950 text-foreground">
      <div className="max-w-(--breakpoint-xl) mx-auto">
        <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
          {/* Logo */}
          <div>
            <button onClick={() => handleMenuClick("#beranda")} className="flex items-center space-x-1 cursor-pointer">
              <Image src="/logo.png" alt="Oceania Logo" width={32} height={32} className="object-contain" priority />
              <span className="text-xl font-bold text-white">OCEANIA</span>
            </button>

            {/* Menu Links */}
            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <button onClick={() => handleMenuClick(href)} className="text-muted-foreground hover:text-white transition-colors">
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div className="max-w-xs w-full">
            <h6 className="mb-2 font-semibold text-white">Tentang Kami</h6>
            <div className="mt-2 flex items-center gap-2 text-slate-200">
              <MapPin size={14} /> <small>Jalan Masda Adisucipto, Tanjungpandan, Belitung</small>
            </div>
            <div className="mt-2 flex items-center gap-2 text-slate-200">
              <MailIcon size={14} /> <small> oceaniaid@gmail.com</small>
            </div>
            <div className="mt-2 flex items-center gap-2 text-slate-200">
              <PiWhatsappLogo size={14} /> <small> +62 851-2113-7807</small>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom */}
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          <span className="text-muted-foreground text-center sm:text-start">&copy; {new Date().getFullYear()} Oceania. All rights reserved.</span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href="https://tiktok.com" target="_blank">
              <PiTiktokLogo className="h-5 w-5 hover:text-white transition-colors" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="h-5 w-5 hover:text-white transition-colors" />
            </Link>
            <Link href="https://netbel.my.id/" target="_blank">
              <Globe className="h-5 w-5 hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
