"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const paketwisata = [
  {
    id: 1,
    nama: "Pantai Tanjung Tinggi",
    lokasi: "Belitung, Bangka Belitung",
    rating: 4.8,
    gambar: "/images/destinasi.png",
  },
  {
    id: 2,
    nama: "Pulau Lengkuas",
    lokasi: "Belitung, Bangka Belitung",
    rating: 4.9,
    gambar: "/images/destinasi1.png",
  },
  {
    id: 3,
    nama: "Danau Kaolin",
    lokasi: "Tanjung Pandan",
    rating: 4.7,
    gambar: "/images/danau-kaolin.jpg",
  },
];

export default function PaketSection() {
  return (
    <section id="paket-wisata" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 px-4 md:px-8">Pilihan Paket di Ocenaia</h2>
        <p className="text-gray-600 mb-10 px-4 md:px-8">Tentukan Paket sesuai pilihan anda, kalau mau Costume bisa juga lohh.</p>

        <div className="grid gap-8 md:grid-cols-3">
          {paketwisata.map((item) => (
            <motion.div key={item.id} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
              <Card className="overflow-hidden shadow-lg rounded-2xl p-0">
                {/* Gambar penuh di atas - tanpa margin/padding */}
                <div className="relative w-full h-56">
                  <Image src={item.gambar} alt={item.nama} fill className="object-cover hover:scale-105 transition-transform duration-500 rounded-t-2xl" />
                </div>

                {/* Konten dengan padding manual */}
                <div className="p-4 text-left">
                  <h3 className="text-xl font-semibold">{item.nama}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.lokasi}</p>
                  <div className="flex items-center gap-1 mt-2 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                  <Button variant="default" className="w-full mt-4" asChild>
                    <Link href={`/paketwisata/${item.id}`}>Lihat Detail</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tombol ke halaman semua paketwisata */}
        <div className="mt-12">
          <Button size="lg" asChild>
            <Link href="/paketwisata">Lihat Semua Paket</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
