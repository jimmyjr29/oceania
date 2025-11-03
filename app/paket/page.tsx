"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { paketList, Paket } from "@/lib/paket";
import { useState, useMemo } from "react";

export default function PaketPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedKategori, setSelectedKategori] = useState("Semua");
  const [sortOption, setSortOption] = useState("nama");

  // Filter dan sort paket
  const filteredPaket = useMemo(() => {
    let result = paketList.filter((paket: Paket) => {
      const matchSearch = paket.nama.toLowerCase().includes(searchQuery.toLowerCase()) || paket.lokasi.toLowerCase().includes(searchQuery.toLowerCase()) || paket.deskripsiSingkat.toLowerCase().includes(searchQuery.toLowerCase());

      const matchKategori = selectedKategori === "Semua" || paket.kategori === selectedKategori;

      return matchSearch && matchKategori;
    });

    // Sorting
    if (sortOption === "nama") {
      result = [...result].sort((a: Paket, b: Paket) => a.nama.localeCompare(b.nama));
    } else if (sortOption === "harga") {
      result = [...result].sort((a: Paket, b: Paket) => a.harga - b.harga);
    } else if (sortOption === "rating") {
      result = [...result].sort((a: Paket, b: Paket) => b.rating - a.rating);
    }

    return result;
  }, [searchQuery, selectedKategori, sortOption]);

  return (
    <section className="py-20 mt-10 bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-950">Pilihan Paket Wisata</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">Pilih paket wisata sesuai kebutuhan Anda. Dari pantai eksotis hingga wisata alam, semua tersedia untuk pengalaman liburan tak terlupakan.</p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari paket wisata, lokasi, atau destinasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Filter Kategori */}
            <div className="flex gap-2 w-full overflow-x-auto no-scrollbar md:overflow-visible md:w-auto">
              <button
                onClick={() => setSelectedKategori("Semua")}
                className={`flex-shrink-0 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold text-sm md:text-base transition-all ${
                  selectedKategori === "Semua" ? "bg-gradient-to-r from-blue-950 to-blue-900 text-white shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setSelectedKategori("Premium")}
                className={`flex-shrink-0 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold text-sm md:text-base transition-all ${
                  selectedKategori === "Premium" ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Premium
              </button>
              <button
                onClick={() => setSelectedKategori("Reguler")}
                className={`flex-shrink-0 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold text-sm md:text-base transition-all ${
                  selectedKategori === "Reguler" ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Reguler
              </button>
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm text-slate-600 whitespace-nowrap">
                Urutkan:
              </label>
              <select
                id="sort"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="px-3 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
              >
                <option value="nama">Nama (A–Z)</option>
                <option value="harga">Harga (Terendah)</option>
                <option value="rating">Rating (Tertinggi)</option>
              </select>
            </div>
          </div>

          {/* Result Count */}
          <div className="mt-4 text-sm text-slate-600">
            Menampilkan <span className="font-semibold text-blue-900">{filteredPaket.length}</span> paket wisata
          </div>
        </motion.div>

        {/* Grid Paket */}
        <div className="grid gap-8 md:grid-cols-3">
          {filteredPaket.length > 0 ? (
            filteredPaket.map((paket: Paket, index: number) => (
              <motion.div
                key={paket.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl rounded-2xl p-0 border-0 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/90">
                  {/* Gambar */}
                  <div className="relative w-full h-56">
                    <Image src={paket.image || paket.banner} alt={paket.nama} fill className="object-cover group-hover:scale-110 transition-transform duration-700 rounded-t-2xl" />

                    {/* Kategori + Rating di bar atas */}
                    <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-4">
                      {/* Tag kategori */}
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm backdrop-blur-sm ${paket.kategori === "Premium" ? "bg-gradient-to-r from-yellow-500 to-orange-500" : "bg-blue-600/90"}`}>
                        {paket.kategori}
                      </div>

                      {/* Rating badge */}
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-slate-700">{paket.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Konten */}
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-bold text-oceania-navy mb-1">{paket.nama}</h3>
                    <p className="text-slate-500 text-sm mb-1">
                      {paket.durasi} • {paket.lokasi}
                    </p>
                    <p className="text-slate-600 text-sm mb-2">
                      Start from{" "}
                      <span className="font-bold text-lg text-blue-900">
                        Rp {paket.harga.toLocaleString("id-ID")}
                        {paket.tipeHarga === "perPaket" ? "/paket" : "/pax"}
                      </span>
                    </p>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{paket.deskripsiSingkat}</p>

                    <div className="flex gap-3">
                      <Link href={`/paket/${paket.slug}`} className="flex-1">
                        <Button variant="outline" className="rounded-2xl font-medium w-full">
                          Detail →
                        </Button>
                      </Link>
                      <a href={`https://wa.me/6281234567890?text=Halo, saya mau booking paket ${paket.nama}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button className="bg-gradient-to-r from-oceania-navy to-blue-900 text-white font-bold rounded-2xl w-full">Pesan Sekarang</Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 text-center py-16">
              <p className="text-slate-500 text-lg">Tidak ada paket wisata yang sesuai dengan pencarian Anda.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedKategori("Semua");
                }}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
