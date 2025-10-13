"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ✅ Import data dari lib
import { getAllDestinasi } from "@/lib/destinasi";

export default function DestinasiSection() {
  const destinasi = getAllDestinasi(); // ambil semua data dari lib

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
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 px-4 md:px-8">
            <span className="text-blue-950">Destinasi Populer</span>
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
          {destinasi
            .filter((item) => [1, 4, 8].includes(item.id))
            .map((item, index) => (
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
                →
              </motion.span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
