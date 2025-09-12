"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Star, Search, MapPin, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";

const allDestinasi = [
  {
    id: 1,
    nama: "Pantai Tanjung Tinggi",
    lokasi: "Belitung, Bangka Belitung",
    rating: 4.8,
    kategori: "Pantai",
    gambar: "/images/destinasi.png",
    deskripsi: "Pantai eksotis dengan batu granit raksasa dan air laut yang jernih.",
    harga: "Gratis",
  },
  {
    id: 2,
    nama: "Pulau Lengkuas",
    lokasi: "Belitung, Bangka Belitung",
    rating: 4.9,
    kategori: "Pulau",
    gambar: "/images/destinasi1.png",
    deskripsi: "Pulau kecil dengan mercusuar bersejarah dan snorkeling terbaik.",
    harga: "Rp 50.000",
  },
  {
    id: 3,
    nama: "Danau Kaolin",
    lokasi: "Tanjung Pandan",
    rating: 4.7,
    kategori: "Danau",
    gambar: "/images/danau-kaolin.jpg",
    deskripsi: "Danau bekas tambang kaolin dengan air berwarna biru tosca yang menakjubkan.",
    harga: "Rp 10.000",
  },
  {
    id: 4,
    nama: "Pantai Tanjung Kelayang",
    lokasi: "Belitung, Bangka Belitung",
    rating: 4.6,
    kategori: "Pantai",
    gambar: "/images/destinasi.png",
    deskripsi: "Pantai dengan formasi batu granit yang unik dan sunset yang memukau.",
    harga: "Gratis",
  },
  {
    id: 5,
    nama: "Museum Kata Andrea Hirata",
    lokasi: "Belitung, Bangka Belitung",
    rating: 4.5,
    kategori: "Museum",
    gambar: "/images/destinasi1.png",
    deskripsi: "Museum yang didedikasikan untuk karya sastra Andrea Hirata.",
    harga: "Rp 15.000",
  },
  {
    id: 6,
    nama: "Pantai Burung Mandi",
    lokasi: "Belitung, Bangka Belitung",
    rating: 4.4,
    kategori: "Pantai",
    gambar: "/images/danau-kaolin.jpg",
    deskripsi: "Pantai tenang dengan air jernih dan suasana yang damai.",
    harga: "Gratis",
  },
  {
    id: 7,
    nama: "Replika SD Laskar Pelangi",
    lokasi: "Belitung, Bangka Belitung",
    rating: 4.3,
    kategori: "Wisata Edukasi",
    gambar: "/images/destinasi.png",
    deskripsi: "Replika sekolah dari film Laskar Pelangi yang ikonik.",
    harga: "Rp 5.000",
  },
  {
    id: 8,
    nama: "Pantai Penyabong",
    lokasi: "Belitung, Bangka Belitung",
    rating: 4.2,
    kategori: "Pantai",
    gambar: "/images/destinasi1.png",
    deskripsi: "Pantai dengan pemandangan sunset terbaik di Belitung.",
    harga: "Gratis",
  },
  {
    id: 9,
    nama: "Pantai Nyiur Melambai",
    lokasi: "Belitung, Bangka Belitung",
    rating: 4.1,
    kategori: "Pantai",
    gambar: "/images/danau-kaolin.jpg",
    deskripsi: "Pantai dengan deretan pohon kelapa yang melambai tertiup angin.",
    harga: "Gratis",
  },
];

const kategoris = ["Semua", "Pantai", "Pulau", "Danau", "Museum", "Wisata Edukasi"];

export default function DestinasiPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedKategori, setSelectedKategori] = useState("Semua");
  const [sortBy, setSortBy] = useState("rating");

  const filteredDestinasi = useMemo(() => {
    const filtered = allDestinasi.filter((destinasi) => {
      const matchesSearch = destinasi.nama.toLowerCase().includes(searchTerm.toLowerCase()) || destinasi.lokasi.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesKategori = selectedKategori === "Semua" || destinasi.kategori === selectedKategori;
      return matchesSearch && matchesKategori;
    });

    // Sort berdasarkan pilihan
    if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "nama") {
      filtered.sort((a, b) => a.nama.localeCompare(b.nama));
    }

    return filtered;
  }, [searchTerm, selectedKategori, sortBy]);

  return (
    <div className=" min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Jelajahi Keindahan Belitung
          </motion.h1>
          <motion.p className="text-xl mb-8 max-w-2xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Temukan paket wisata terbaik di Pulau Belitung dengan keindahan alam yang memukau
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-800 shadow-sm">
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
                <Button key={kategori} variant={selectedKategori === kategori ? "default" : "outline"} size="sm" onClick={() => setSelectedKategori(kategori)} className="text-sm">
                  {kategori}
                </Button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 dark:border-gray-600">
              <option value="rating">Urutkan Rating</option>
              <option value="nama">Urutkan Nama</option>
            </select>
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
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredDestinasi.map((item, index) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} whileHover={{ scale: 1.03 }} className="group">
                  <Card className="overflow-hidden shadow-lg rounded-2xl p-0 hover:shadow-xl transition-shadow duration-300">
                    {/* Gambar */}
                    <div className="relative w-full h-48">
                      <Image src={item.gambar} alt={item.nama} fill className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-2xl" />
                      {/* Kategori Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">{item.kategori}</span>
                      </div>
                      {/* Rating Badge */}
                      <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium">{item.rating}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 line-clamp-1">{item.nama}</h3>

                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm line-clamp-1">{item.lokasi}</span>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{item.deskripsi}</p>

                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-bold text-green-600 dark:text-green-400">{item.harga}</span>
                      </div>

                      <Button variant="default" className="w-full" asChild>
                        <Link href={`/paketwisata/${item.id}`}>Lihat Detail</Link>
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
