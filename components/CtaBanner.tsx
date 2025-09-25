"use client";

import { Globe } from "@/components/magicui/globe";
import { BorderBeam } from "@/components/magicui/border-beam";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-background px-8 py-20 md:px-28 md:py-28 shadow-xl">
          {/* BorderBeam efek */}
          <BorderBeam duration={6} size={400} borderWidth={1} className="from-transparent via-orange-500 to-transparent" />
          <BorderBeam duration={6} delay={3} size={400} borderWidth={1} className="from-transparent via-blue-900 to-transparent" />

          {/* Globe sebagai background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Globe className="scale-[1.7] translate-y-40 opacity-70" />
          </div>

          {/* Konten */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Wujudkan Liburan Impianmu di <span className="text-primary">Belitung</span>
            </h2> */}
            <h2 className="bg-gradient-to-b from-blue-950 to-slate-600/70 bg-clip-text text-center text-7xl md:text-8xl font-bold leading-none text-transparent ">Gas Ke Belitung!</h2>
            <p className="text-slate-600 max-w-2xl mb-10 text-lg md:text-xl">
              Pantai eksotis, mercusuar ikonik, dan petualangan seru menantimu bersama <span className="font-semibold text-slate-700">Oceania Travel</span>. Yuk booking sekarang dan nikmati pengalaman liburan tak terlupakan!
            </p>

            {/* Tombol Booking */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-oceania-navy to-blue-950 hover:from-oceania-navy/90 hover:to-blue-950/90 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="https://wa.me/6285138534353?text=Halo%20Oceania%20Travel!%20Saya%20ingin%20booking%20paket%20wisata." target="_blank">
                  Booking Sekarang
                  <ArrowUpRight className="h-5! w-5!" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
