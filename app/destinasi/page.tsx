"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Search, MapPin, X } from "lucide-react";
import Image from "next/image";
import { allDestinasi, Destinasi } from "@/lib/destinasi";

export default function DestinasiPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedKategori, setSelectedKategori] = useState("Semua");
  const [sortOption, setSortOption] = useState("nama");
  const [activeDestinasi, setActiveDestinasi] = useState<Destinasi | null>(null);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const kategoris = useMemo(() => {
    const unique = Array.from(new Set(allDestinasi.map((d) => d.kategori)));
    return ["Semua", ...unique];
  }, []);

  const filteredDestinasi = useMemo(() => {
    let result = allDestinasi.filter((destinasi) => {
      const matchesSearch = destinasi.nama.toLowerCase().includes(searchTerm.toLowerCase()) || destinasi.lokasi.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesKategori = selectedKategori === "Semua" || destinasi.kategori === selectedKategori;
      return matchesSearch && matchesKategori;
    });

    if (sortOption === "nama") {
      result = result.sort((a, b) => a.nama.localeCompare(b.nama));
    } else if (sortOption === "rating") {
      result = result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchTerm, selectedKategori, sortOption]);

  const handlePrev = () => {
    if (previewIndex === null || activeDestinasi === null) return;
    const total = 1 + activeDestinasi.footage.length;
    setPreviewIndex((previewIndex - 1 + total) % total);
  };

  const handleNext = () => {
    if (previewIndex === null || activeDestinasi === null) return;
    const total = 1 + activeDestinasi.footage.length;
    setPreviewIndex((previewIndex + 1) % total);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-white pt-30 pb-10">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-950" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Jelajahi Keindahan Belitung
          </motion.h1>
          <motion.p className="text-xl mb-8 max-w-2xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Temukan destinasi wisata terbaik di Pulau Belitung dengan keindahan alam yang memukau
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8 bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Cari destinasi wisata..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-2 w-full" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {kategoris.map((kategori) => (
                <Button
                  key={kategori}
                  variant={selectedKategori === kategori ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedKategori(kategori)}
                  className={selectedKategori === kategori ? "text-white bg-blue-950 hover:bg-blue-900" : "text-sm"}
                >
                  {kategori}
                </Button>
              ))}
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm text-muted-foreground">
                Urutkan:
              </label>
              <select
                id="sort"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="px-3 py-1.5 border rounded-md text-sm h-9" // sama tinggi dengan Button size="sm"
              >
                <option value="nama">Nama (A–Z)</option>
                <option value="rating">Rating (Tertinggi)</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-600 dark:text-gray-300">Menampilkan {filteredDestinasi.length} destinasi</p>
        </div>
      </section>

      {/* Destinasi Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          {filteredDestinasi.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Tidak ada destinasi ditemukan</h3>
              <p className="text-gray-500 dark:text-gray-400">Coba ubah kata kunci pencarian atau filter kategori</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              {filteredDestinasi.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={index < 3 ? { opacity: 1, y: 0 } : undefined} // langsung animasi untuk 3 card pertama
                  whileInView={index >= 3 ? { opacity: 1, y: 0 } : undefined} // sisanya muncul saat di-scroll
                  viewport={index >= 3 ? { once: true, amount: 0.2 } : undefined}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
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
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                          className="ml-2"
                        >
                          →
                        </motion.span>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

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
                  <div className="p-6 text-center">
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
    </div>
  );
}
