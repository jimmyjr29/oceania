"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, ArrowLeft, Phone, Mail, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import type { Destinasi } from "@/lib/destinasi";

export default function DestinasiDetailClient({ dest }: { dest: Destinasi }) {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (previewIndex === null) return;
    setPreviewIndex((previewIndex - 1 + dest.footage.length) % dest.footage.length);
  };

  const handleNext = () => {
    if (previewIndex === null) return;
    setPreviewIndex((previewIndex + 1) % dest.footage.length);
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20">
        {/* Header dengan gambar cover */}
        <div className="relative w-full h-[60vh] md:h-[70vh]">
          <Image src={dest.gambar} alt={dest.nama} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          {/* Judul destinasi */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">{dest.nama}</h1>
              <div className="flex items-center gap-4 text-white/95">
                <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 rounded-full px-4 py-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg font-medium">{dest.lokasi}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">{dest.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Konten detail */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
          {/* Deskripsi */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-6">Tentang Destinasi</h2>
            <p className="text-slate-700 text-lg leading-relaxed whitespace-pre-line">{dest.detail}</p>
          </section>

          {/* Galeri */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-6">Best view di {dest.nama}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {dest.footage.map((src, idx) => (
                <div key={idx} className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer" onClick={() => setPreviewIndex(idx)}>
                  <Image src={src} alt={`${dest.nama} foto ${idx + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section - More Attractive */}
          <section className="mb-12">
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-3xl shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-oceania-sunset/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>

              <div className="relative z-10 p-8 md:p-12 lg:p-16">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Siap Menjelajahi {dest.nama}?</h3>
                  <p className="text-white/90 text-lg mb-8 leading-relaxed">Wujudkan liburan impian Anda bersama kami. Dapatkan paket wisata eksklusif, harga terbaik, dan pengalaman tak terlupakan di destinasi ini.</p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="w-full sm:w-auto bg-oceania-sunset hover:bg-oceania-sunset/90 text-white font-bold py-6 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" asChild>
                      <Link href="/paket" className="flex items-center gap-2">
                        <Star className="w-5 h-5" />
                        Lihat Paket Wisata
                      </Link>
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 backdrop-blur-sm font-bold py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      asChild
                    >
                      <Link href="/kontak" className="flex items-center gap-2">
                        <Phone className="w-5 h-5" />
                        Hubungi Kami
                      </Link>
                    </Button>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <p className="text-white/80 text-sm mb-4">Atau hubungi kami langsung:</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/90">
                      <a href="tel:+6281234567890" className="flex items-center gap-2 hover:text-oceania-sunset transition-colors">
                        <Phone className="w-4 h-4" />
                        <span className="font-medium">+62 851-3853-4353</span>
                      </a>
                      <span className="hidden sm:inline text-white/40">•</span>
                      <a href="mailto:info@oceaniatravel.com" className="flex items-center gap-2 hover:text-oceania-sunset transition-colors">
                        <Mail className="w-4 h-4" />
                        <span className="font-medium">info@oceaniatravel.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tombol Kembali */}
          <div className="flex justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white hover:bg-slate-50 text-blue-950 border-2 border-slate-200 hover:border-blue-900 font-semibold py-6 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              asChild
            >
              <Link href="/destinasi" className="flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                Kembali ke Destinasi
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Modal Preview Gambar */}
      <AnimatePresence>
        {previewIndex !== null && (
          <motion.div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999] p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setPreviewIndex(null)}>
            <motion.div className="relative max-w-7xl w-full h-full flex items-center justify-center" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()}>
              {/* Tombol Close */}
              <button
                onClick={() => setPreviewIndex(null)}
                className="absolute top-4 right-4 z-50 text-white bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110"
                aria-label="Tutup Preview"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Tombol Previous - hanya tampil jika lebih dari 1 foto */}
              {dest.footage.length > 1 && (
                <button onClick={handlePrev} className="absolute left-4 z-50 text-white bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110" aria-label="Foto Sebelumnya">
                  <ChevronLeft className="w-8 h-8" />
                </button>
              )}

              {/* Gambar Preview */}
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <div className="relative w-full max-h-[80vh] aspect-[4/3]">
                  <Image src={dest.footage[previewIndex]} alt={`${dest.nama} preview ${previewIndex + 1}`} fill className="object-contain" priority />
                </div>

                {/* Info foto */}
                <div className="mt-6 text-center">
                  <p className="text-white text-lg font-medium">
                    {dest.nama} - Foto {previewIndex + 1} dari {dest.footage.length}
                  </p>
                </div>
              </div>

              {/* Tombol Next - hanya tampil jika lebih dari 1 foto */}
              {dest.footage.length > 1 && (
                <button onClick={handleNext} className="absolute right-4 z-50 text-white bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110" aria-label="Foto Berikutnya">
                  <ChevronRight className="w-8 h-8" />
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
