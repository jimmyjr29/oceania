"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { paketList, Paket } from "@/lib/paket";

export default function PaketPage() {
  return (
    <section className="py-20 mt-10 bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-950">Pilihan Paket Wisata</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">Pilih paket wisata sesuai kebutuhan Anda. Dari pantai eksotis hingga wisata alam, semua tersedia untuk pengalaman liburan tak terlupakan.</p>
        </motion.div>

        {/* Paket Grid persis seperti contoh */}
        <div className="grid gap-8 md:grid-cols-3">
          {paketList.slice(0, 3).map((paket: Paket, index: number) => (
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
                  {/* Rating badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-slate-700">{paket.rating}</span>
                  </div>
                </div>

                {/* Konten */}
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-oceania-navy mb-1">{paket.nama}</h3>
                  <p className="text-slate-500 text-sm mb-1">
                    {paket.durasi} • {paket.lokasi}
                  </p>
                  <p className="text-slate-600 text-sm mb-2">
                    Start from <span className="font-bold text-lg text-blue-900">Rp {paket.harga.toLocaleString("id-ID")}/pax</span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
