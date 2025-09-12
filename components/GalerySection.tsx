"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/magicui/marquee";
import { Button } from "./ui/button";

const galleryItems = [
  {
    id: 1,
    category: "pantai",
    image: "/images/destinasi1.png",
    title: "Sunset di Tanjung Tinggi",
  },
  {
    id: 2,
    category: "island",
    image: "/images/destinasi2.png",
    title: "Pulau Lengkuas",
  },
  {
    id: 3,
    category: "kuliner",
    image: "/images/destinasi3.png",
    title: "Seafood Fresh",
  },
  {
    id: 4,
    category: "budaya",
    image: "/images/destinasi4.png",
    title: "Museum Kata",
  },
  {
    id: 5,
    category: "customer",
    image: "/images/destinasi5.png",
    title: "Happy Travelers",
  },
  {
    id: 6,
    category: "pantai",
    image: "/images/destinasi6.png",
    title: "Pantai Kelayang",
  },
  {
    id: 7,
    category: "island",
    image: "/images/destinasi7.png",
    title: "Hopping Adventure",
  },
  {
    id: 8,
    category: "customer",
    image: "/images/destinasi1.png",
    title: "Family Trip",
  },
];

export default function GaleriSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  const handleNext = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex + 1) % galleryItems.length);
    }
  };

  return (
    <section id="galery" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-6">
          {/* <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-4xl">
            📸
          </motion.div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950">Galeri Petualangan</h2>
        </div>
        <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">Lihat momen-momen indah yang telah diabadikan dalam setiap perjalanan</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Gallery Marquee */}
        <Marquee pauseOnHover className="[--duration:40s]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="mx-3 cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <Card className="overflow-hidden rounded-2xl shadow-lg border-0 w-80 aspect-[16/9] relative">
                <CardContent className="absolute inset-0 p-0">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />

                  {/* Overlay hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Marquee>
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Prev Button */}
            <button onClick={handlePrev} className="absolute left-6 text-white bg-black/50 rounded-full p-3 hover:bg-black/70">
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Image & Close Button */}
            <motion.div key={activeIndex} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-4xl w-full px-6 relative">
              <Card className="overflow-hidden rounded-2xl bg-white border-0 relative">
                {/* Close Button in top-right of card */}
                <button onClick={() => setActiveIndex(null)} className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 z-10" aria-label="Tutup">
                  <X className="w-6 h-6" />
                </button>
                <CardContent className="p-4">
                  <Image src={galleryItems[activeIndex].image} alt={galleryItems[activeIndex].title} width={1200} height={800} className="rounded-xl object-contain w-full h-auto max-h-[70vh] mx-auto" />
                  <p className="text-center text-black mt-4 text-lg">{galleryItems[activeIndex].title}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Next Button */}
            <button onClick={handleNext} className="absolute right-6 text-white bg-black/50 rounded-full p-3 hover:bg-black/70">
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Button */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.8 }} className="mt-16 text-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-oceania-navy to-blue-900 hover:from-oceania-navy/90 hover:to-blue-900/90 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          asChild
        >
          <Link href="/galery">
            <span>Lihat Semua Galery</span>
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="ml-3 inline-block">
              📸
            </motion.span>
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
