"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { paketList, Paket } from "../lib/paket";

export default function PaketSection() {
  return (
    <section id="paket" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-oceania-sunset/10 to-blue-200/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-r from-blue-200/10 to-oceania-navy/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-oceania-sunset/5 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-950">Pilihan Paket Wisata</span>
          </h2>
          <p className="text-slate-600 mb-4 px-4 md:px-8 text-lg max-w-3xl mx-auto leading-relaxed">Nikmati pengalaman liburan terbaik dengan berbagai pilihan paket wisata Belitung sesuai kebutuhan Anda.</p>
          <motion.div initial={{ width: 0 }} whileInView={{ width: "200px" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="h-1 bg-gradient-to-r from-oceania-sunset to-blue-900 mx-auto rounded-full" />
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* {paketList.slice(0, 3).map((paket: Paket, index: number) => ( */}
          {paketList
            .filter((item) => ["3", "5", "7"].includes(String(item.id)))
            .map((paket: Paket, index: number) => (
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
                    <Image src={paket.image} alt={paket.nama} fill className="object-cover group-hover:scale-110 transition-transform duration-700 rounded-t-2xl" />
                    {/* Rating badge */}
                    {/* Bar atas: kategori kiri, rating kanan */}
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
                      <a href={`https://wa.me/6285138534353?text=Halo, saya mau booking paket ${paket.nama}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button className="bg-gradient-to-r from-oceania-navy to-blue-900 text-white font-bold rounded-2xl w-full">Pesan Sekarang</Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.8 }} className="mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-oceania-navy to-blue-900 hover:from-oceania-navy/90 hover:to-blue-900/90 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link href="/paket">
              <span>Lihat Semua Paket</span>
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="ml-3">
                →
              </motion.span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
