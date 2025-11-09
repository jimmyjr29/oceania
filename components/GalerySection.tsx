"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/magicui/marquee";
import { Button } from "./ui/button";
import { galleryItems } from "@/lib/galery";

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
    <section id="galery" className="py-20 bg-blue-50/20 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 px-6">
        <div className="flex items-center justify-center gap-3 mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950">Galeri Petualangan</h2>
        </div>
        <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">Lihat momen-momen indah yang telah diabadikan dalam setiap perjalanan</p>
      </div>

      {/* Gradient Overlay (Fade Kiri-Kanan) */}
      <div className="absolute top-0 left-0 w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-r from-blue-50/90 via-blue-50/30 to-transparent" />
      <div className="absolute top-0 right-0 w-32 md:w-64 h-full z-20 pointer-events-none bg-gradient-to-l from-blue-50/90 via-blue-50/30 to-transparent" />

      {/* Marquee Container */}
      <div className="w-full relative z-10 overflow-hidden flex flex-col items-center gap-4 px-4 md:px-4">
        {/* Marquee Atas */}
        <Marquee
          pauseOnHover
          className="[--duration:80s]"
          style={{
            ["--duration" as any]: `${Math.max(40, galleryItems.length * 3)}s`,
          }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={`top-${item.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.01 }}
              whileHover={{ scale: 1.05 }}
              className="mx-4 cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <Card className="overflow-hidden rounded-2xl shadow-lg border-0 w-64 sm:w-72 md:w-80 lg:w-96 aspect-[16/9] relative">
                <CardContent className="absolute inset-0 p-0">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  {/* Overlay hover */}
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 hover:opacity-100 transition flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Marquee>

        {/* Marquee Bawah (Arah Berlawanan) */}
        <Marquee
          pauseOnHover
          reverse
          className="[--duration:80s]"
          style={{
            ["--duration" as any]: `${Math.max(40, galleryItems.length * 3)}s`,
          }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={`bottom-${item.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.01 }}
              whileHover={{ scale: 1.05 }}
              className="mx-4 cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <Card className="overflow-hidden rounded-2xl shadow-lg border-0 w-64 sm:w-72 md:w-80 lg:w-96 aspect-[16/9] relative">
                <CardContent className="absolute inset-0 p-0">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  {/* Overlay hover */}
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 hover:opacity-100 transition flex items-center justify-center">
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
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 z-50 text-white bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full p-2 transition-all duration-200 hover:scale-110"
              aria-label="Foto Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Image & Close Button */}
            <motion.div key={activeIndex} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-4xl w-full px-6 relative">
              <Card className="overflow-hidden rounded-2xl bg-white border-0 relative">
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
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 z-50 text-white bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full p-2 transition-all duration-200 hover:scale-110"
              aria-label="Foto Berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* View All Button */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.8 }} className="mt-16 text-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-oceania-navy to-blue-900 hover:from-oceania-navy/90 hover:to-blue-900/90 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          asChild
        >
          <Link href="/galery">
            <span>Lihat Semua Galery</span>
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="ml-3 inline-block">
              →
            </motion.span>
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
