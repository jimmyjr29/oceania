"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const destinasi = [
  {
    id: 1,
    nama: "Pantai Tanjung Tinggi",
    lokasi: "Belitung, Bangka Belitung",
    rating: 4.8,
    gambar: "/images/destinasi.png",
    deskripsi: "Pantai dengan batu granit raksasa yang ikonik",
    detail:
      "Pantai Tanjung Tinggi terkenal dengan pasir putih dan batu granit raksasa yang tersebar di sepanjang pantai. Air lautnya jernih dan cocok untuk berenang maupun snorkeling. Pantai Tanjung Tinggi terkenal dengan pasir putih dan batu granit raksasa yang tersebar di sepanjang pantai. Air lautnya jernih dan cocok untuk berenang maupun snorkeling. Pantai Tanjung Tinggi terkenal dengan pasir putih dan batu granit raksasa yang tersebar di sepanjang pantai. Air lautnya jernih dan cocok untuk berenang maupun snorkeling",
    footage: [
      "/images/destinasi1.png",
      "/images/destinasi2.png",
      "/images/destinasi3.png",
      "/images/destinasi4.png",
      "/images/destinasi1.png",
      "/images/destinasi2.png",
      "/images/destinasi4.png",
      "/images/destinasi1.png",
      "/images/destinasi2.png",
    ],
  },
  {
    id: 2,
    nama: "Pulau Lengkuas",
    lokasi: "Belitung, Bangka Belitung",
    rating: 4.9,
    gambar: "/images/destinasi1.png",
    deskripsi: "Mercusuar bersejarah dengan pemandangan 360°",
    detail: "Pulau Lengkuas memiliki mercusuar peninggalan Belanda yang bisa dinaiki untuk melihat panorama laut dan pulau-pulau kecil di sekitarnya.",
    footage: ["/images/destinasi4.png", "/images/destinasi5.png", "/images/destinasi6.png"],
  },
  {
    id: 3,
    nama: "Danau Kaolin",
    lokasi: "Tanjung Pandan",
    rating: 4.7,
    gambar: "/images/destinasi3.png",
    deskripsi: "Danau buatan dengan air biru tosca memukau",
    detail: "Danau Kaolin terbentuk dari bekas penambangan kaolin, menghasilkan air berwarna biru tosca yang kontras dengan tanah putih di sekitarnya.",
    footage: ["/images/destinasi7.png", "/images/destinasi8.png", "/images/destinasi9.png"],
  },
];

export default function DestinasiSection() {
  const [activeDestinasi, setActiveDestinasi] = useState<(typeof destinasi)[0] | null>(null);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const totalPreview = activeDestinasi ? 1 + activeDestinasi.footage.length : 0; // 1 cover + footage

  const handlePrev = () => {
    if (previewIndex === null || activeDestinasi === null) return;
    const current = previewIndex + 1; // cover = -1, footage[0] = 0, dst
    const next = ((current - 1 + totalPreview) % totalPreview) - 1; // -1 = cover, 0 = footage[0], dst
    setPreviewIndex(next);
  };

  const handleNext = () => {
    if (previewIndex === null || activeDestinasi === null) return;
    const current = previewIndex + 1;
    const next = ((current + 1) % totalPreview) - 1;
    setPreviewIndex(next);
  };

  return (
    <section id="destinasi" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-oceania-sunset/10 to-blue-200/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-r from-blue-200/10 to-oceania-navy/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-oceania-sunset/5 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 px-4 md:px-8">
            <span className="text-blue-950 ">Destinasi Populer</span>
          </h2>
          <p className="text-slate-600 mb-4 px-4 md:px-8 text-lg max-w-3xl mx-auto leading-relaxed">
            Temukan tempat-tempat wisata terbaik di Belitung yang wajib dikunjungi. Dari pantai eksotis hingga spot alam yang memukau, jelajahi destinasi populer ini untuk pengalaman liburan tak terlupakan.
          </p>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-oceania-sunset to-blue-900 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {destinasi.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.03,
                y: -5,
              }}
              className="group"
            >
              <Card className="overflow-hidden shadow-xl hover:shadow-2xl rounded-2xl p-0 border-0 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/90">
                {/* Gambar dengan overlay gradient */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image src={item.gambar} alt={item.nama} fill className="object-cover group-hover:scale-110 transition-transform duration-700 rounded-t-2xl" />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Rating badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-slate-700">{item.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-oceania-navy mb-2 group-hover:text-oceania-sunset transition-colors duration-300">{item.nama}</h3>

                  <div className="flex items-center gap-2 mb-3 text-slate-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{item.lokasi}</span>
                  </div>

                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{item.deskripsi}</p>

                  <Button
                    className="w-full bg-gradient-to-r from-oceania-navy to-blue-900 hover:from-oceania-navy/90 hover:to-blue-900/90 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    type="button"
                    onClick={() => setActiveDestinasi(item)}
                  >
                    <span>Lihat Detail</span>
                    <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="ml-2">
                      →
                    </motion.span>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Modal Destinasi Detail */}
        <AnimatePresence>
          {activeDestinasi && (
            <motion.div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.3 }} className="relative max-w-4xl w-full mx-4">
                <Card className="overflow-hidden rounded-2xl bg-white border-0 relative">
                  {/* Tombol Close */}
                  <button onClick={() => setActiveDestinasi(null)} className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 z-10" aria-label="Tutup">
                    <X className="w-6 h-6" />
                  </button>
                  {/* Konten Modal dengan scroll */}
                  <CardContent className="p-0 max-h-[75vh] overflow-y-auto">
                    {/* Gambar utama (cover) */}
                    <div className="relative w-full h-64 md:h-80 cursor-pointer group" onClick={() => setPreviewIndex(-1)}>
                      <Image src={activeDestinasi.gambar} alt={activeDestinasi.nama} fill className="object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-oceania-navy mb-2">{activeDestinasi.nama}</h3>
                      <div className="flex items-center justify-center gap-2 mb-2 text-slate-500">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{activeDestinasi.lokasi}</span>
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 ml-4" />
                        <span className="text-sm font-semibold text-slate-700">{activeDestinasi.rating}</span>
                      </div>
                      <p className="text-slate-600 text-base mb-4 whitespace-pre-line">{activeDestinasi.detail}</p>
                      {/* Footage */}
                      <div className="mt-6">
                        <h4 className="font-semibold text-oceania-navy mb-2">Galeri Destinasi</h4>
                        <div className="grid grid-cols-3 gap-3">
                          {activeDestinasi.footage.map((src, idx) => (
                            <div key={idx} className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border cursor-pointer group" onClick={() => setPreviewIndex(idx)}>
                              <Image src={src} alt={`Footage ${idx + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal Preview Gambar (cover & footage) */}
        <AnimatePresence>
          {activeDestinasi && previewIndex !== null && (
            <motion.div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[10000]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="relative max-w-3xl w-full px-4 flex items-center justify-center">
                {/* Tombol Prev */}
                <button onClick={handlePrev} className="absolute left-2 md:left-6 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 z-10" aria-label="Sebelumnya">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {/* Tombol Next */}
                <button onClick={handleNext} className="absolute right-2 md:right-6 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 z-10" aria-label="Berikutnya">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {/* Tombol Close */}
                <button onClick={() => setPreviewIndex(null)} className="absolute top-4 right-4 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 z-10" aria-label="Tutup Preview">
                  <X className="w-7 h-7" />
                </button>
                <div className="flex flex-col items-center w-full">
                  <Image
                    src={previewIndex === -1 ? activeDestinasi.gambar : activeDestinasi.footage[previewIndex]}
                    alt={previewIndex === -1 ? `Cover ${activeDestinasi.nama}` : `Preview Footage ${previewIndex + 1}`}
                    width={1200}
                    height={800}
                    className="rounded-2xl object-contain w-full max-h-[80vh] bg-black"
                  />
                  <p className="text-white mt-4 text-lg text-center">
                    {activeDestinasi.nama} {previewIndex === -1 ? "— Cover" : `— Foto ${previewIndex + 1}`}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Button */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.8 }} className="mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-oceania-navy to-blue-900 hover:from-oceania-navy/90 hover:to-blue-900/90 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link href="/destinasi">
              <span>Lihat Semua Destinasi</span>
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="ml-3">
                🏝️
              </motion.span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
