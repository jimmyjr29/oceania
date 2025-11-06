"use client";

import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Star, Search, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { destinasiData, Destinasi } from "@/lib/destinasi";

export default function DestinasiPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedKategori, setSelectedKategori] = useState<string>("Semua");
  const [sortOption, setSortOption] = useState<string>("nama");

  const allDestinasi: Destinasi[] = destinasiData;

  const kategoris = useMemo(() => {
    const unique = Array.from(new Set(allDestinasi.map((d: Destinasi) => d.kategori)));
    return ["Semua", ...unique];
  }, [allDestinasi]);

  const filteredDestinasi = useMemo<Destinasi[]>(() => {
    const q = searchTerm.trim().toLowerCase();

    let result = allDestinasi.filter((d: Destinasi) => {
      const matchesSearch = q === "" || d.nama.toLowerCase().includes(q) || d.lokasi.toLowerCase().includes(q);
      const matchesKategori = selectedKategori === "Semua" || d.kategori === selectedKategori;
      return matchesSearch && matchesKategori;
    });

    if (sortOption === "nama") {
      result = [...result].sort((a: Destinasi, b: Destinasi) => a.nama.localeCompare(b.nama));
    } else if (sortOption === "rating") {
      result = [...result].sort((a: Destinasi, b: Destinasi) => b.rating - a.rating);
    }

    return result;
  }, [searchTerm, selectedKategori, sortOption, allDestinasi]);

  return (
    <div className="min-h-screen bg-white/80">
      {/* Hero Section */}
      <section className="relative bg-white/80 pt-30">
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
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-7xl mx-auto px-6">
        {/* Filter Controls */}
        <div className="flex flex-col gap-6">
          {/* Search Bar dan Category Filter */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Cari destinasi wisata..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-2 w-full" />
            </div>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 text-center">
              {kategoris.map((kategori) => (
                <Button
                  key={kategori}
                  variant={selectedKategori === kategori ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedKategori(kategori)}
                  className="min-w-[100px] sm:min-w-[120px]" // opsional, agar lebar tombol seragam
                >
                  {kategori}
                </Button>
              ))}
            </div>
            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2 whitespace-nowrap justify-center sm:justify-start">
              <label htmlFor="sort" className="text-sm text-gray-600">
                Urutkan:
              </label>
              <select id="sort" value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="px-3 py-1.5 border border-gray-300 rounded-md text-sm h-9 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="nama">Nama (A–Z)</option>
                <option value="rating">Rating (Tertinggi)</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-slate-600">
            <p className="text-gray-600">
              Menampilkan <span className="font-semibold text-blue-900">{filteredDestinasi.length}</span> destinasi
            </p>
          </div>
        </div>
      </motion.div>

      {/* Destinasi Grid  */}
      <section className="py-12 bg-white/80">
        <div className="max-w-7xl mx-auto px-6">
          {filteredDestinasi.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Tidak ada destinasi ditemukan</h3>
              <p className="text-gray-500 dark:text-gray-400">Coba ubah kata kunci pencarian atau filter kategori</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              {filteredDestinasi.map((item: Destinasi, index: number) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
                    <div className="relative w-full h-64 overflow-hidden">
                      <Image src={item.gambar} alt={item.nama} fill className="object-cover group-hover:scale-110 transition-transform duration-700 rounded-t-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-slate-700">{item.rating}</span>
                      </div>
                    </div>

                    <div className="p-6 text-left">
                      <h3 className="text-xl font-bold text-oceania-navy mb-2 group-hover:text-oceania-sunset transition-colors duration-300">{item.nama}</h3>

                      <div className="flex items-center gap-2 mb-3 text-slate-500">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{item.lokasi}</span>
                      </div>

                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">{item.deskripsi}</p>

                      <Button
                        className="w-full bg-gradient-to-r from-oceania-navy to-blue-900 hover:from-oceania-navy/90 hover:to-blue-900/90 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                        asChild
                      >
                        <Link href={`/destinasi/${item.slug}`}>
                          <span>Lihat Detail</span>
                          <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="ml-2">
                            →
                          </motion.span>
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
