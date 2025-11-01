"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Check, ArrowLeft, MapPin, X, ChevronLeft, ChevronRight, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { paketList, Paket } from "@/lib/paket";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PiWhatsappLogo } from "react-icons/pi";

interface PaketDetailPageProps {
  slug: string;
}

export default function PaketDetailPage({ slug }: PaketDetailPageProps) {
  const paket = paketList.find((p: Paket) => p.slug === slug);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  if (!paket) notFound();

  const handlePrev = () => {
    if (previewIndex === null) return;
    setPreviewIndex((previewIndex - 1 + paket.galeri.length) % paket.galeri.length);
  };

  const handleNext = () => {
    if (previewIndex === null) return;
    setPreviewIndex((previewIndex + 1) % paket.galeri.length);
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* ===== HERO SECTION ===== */}
        <section className="relative w-full h-[60vh] md:h-[70vh]">
          {/* Banner */}
          <Image src={paket.banner} alt={paket.nama} fill priority className="object-cover" />

          {/* Overlay gradient agar teks terbaca */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Judul dan info paket di bagian bawah banner */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-6xl mx-auto">
              {/* Judul + Tag kategori */}
              <div className="flex items-center flex-wrap gap-3 mb-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">{paket.nama}</h1>

                {/* === Tag Kategori === */}
                <span
                  className={`text-sm md:text-base font-semibold px-4 py-1.5 rounded-full shadow-md backdrop-blur-sm border
            ${paket.kategori === "Premium" ? "bg-gradient-to-r from-yellow-400/90 to-orange-500/90 text-white border-yellow-300/30" : "bg-blue-600/90 text-white border-white/30"}
          `}
                >
                  {paket.kategori}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-white/95 mb-6">
                {/* Lokasi */}
                <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 rounded-full px-4 py-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg font-medium">{paket.lokasi}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">{paket.rating}</span>
                </div>

                {/* Harga */}
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-lg">
                    Mulai dari <span className="font-bold text-orange-300">Rp {paket.harga.toLocaleString("id-ID")}</span>
                    {paket.tipeHarga === "perPax" ? "/pax" : "/paket"}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                {/* Tombol Kembali */}
                <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                  <Link href="/paket">
                    <Button
                      variant="outline"
                      size="lg"
                      className="relative overflow-hidden bg-white/70 backdrop-blur-md text-slate-900 font-semibold border border-slate-200  hover:bg-white hover:shadow-md hover:border-slate-300 transition-all duration-300 flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Kembali
                    </Button>
                  </Link>
                </motion.div>

                {/* Tombol Pesan Sekarang */}
                <motion.div whileHover={{ y: -2, scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                  <a href={`https://wa.me/6285138534353?text=Halo, saya tertarik untuk booking paket ${paket.nama}`} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-700 text-white font-bold px-8 shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300 flex items-center gap-2"
                    >
                      <PiWhatsappLogo className="w-4 h-4" />
                      Pesan Sekarang
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== KONTEN UTAMA ===== */}
        <main className="max-w-6xl mx-auto px-6 pb-16 space-y-8 mt-12">
          {/* Deskripsi Paket */}
          <section>
            <h2 className="text-2xl font-bold mb-2">Deskripsi Paket</h2>
            <p className="text-slate-600" dangerouslySetInnerHTML={{ __html: paket.deskripsiLengkap }} />
          </section>
          {/* Fasilitas Paket */}
          <section>
            <Card className="p-6 shadow-md space-y-6">
              {/* Fasilitas Termasuk */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Fasilitas Termasuk</h2>
                <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                  {paket.fasilitasInclude.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Tidak Termasuk */}
              {paket.fasilitasExclude && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Tidak Termasuk</h3>
                  <ul className="list-disc pl-6 text-slate-500 text-sm space-y-1">
                    {paket.fasilitasExclude.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          </section>

          {/* Detail Harga */}
          <section>
            <Card className="p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Detail Harga</h2>

              {/* Layout: Tabel Hotel */}
              {paket.detailHarga.layoutType === "tabel-hotel" && paket.detailHarga.tabelHotel && (
                <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full table-fixed">
                    <thead>
                      <tr className="bg-gradient-to-r from-oceania-sunset to-orange-600">
                        <th className="w-[40%] px-2 sm:px-6 py-3 sm:py-4 text-left text-blue-950 font-bold text-[10px] sm:text-base">HOTEL PILIHAN</th>
                        <th className="w-[25%] px-2 sm:px-6 py-3 sm:py-4 text-center text-blue-950 font-bold text-[10px] sm:text-base">PESERTA</th>
                        <th className="w-[35%] px-2 sm:px-6 py-3 sm:py-4 text-center text-blue-950 font-bold text-[10px] sm:text-base">HARGA</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paket.detailHarga.tabelHotel?.map((item, idx) => (
                        <tr
                          key={idx}
                          className={`
                            ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
                            hover:bg-blue-50 transition-colors duration-200
                            ${idx === (paket.detailHarga.tabelHotel?.length ?? 0) - 1 ? "" : "border-b border-slate-200"}
                          `}
                        >
                          <td className="px-2 sm:px-6 py-3 sm:py-4 text-slate-700 font-bold text-[10px] sm:text-base leading-tight">{item.hotel}</td>
                          <td className="text-center px-2 sm:px-6 py-3 sm:py-4 text-slate-700 font-medium text-[10px] sm:text-base">{item.peserta}</td>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 text-center">
                            <div className="flex flex-col items-center">
                              <span className="text-xs sm:text-lg font-bold text-blue-950 whitespace-nowrap">Rp {item.harga.toLocaleString("id-ID")}</span>
                              <span className="text-[9px] sm:text-sm text-slate-500">/paket</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Layout: Tabel Hotel Multiple */}
              {paket.detailHarga.layoutType === "tabel-hotel-multiple" && paket.detailHarga.tabelHotelMultiple && (
                <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full table-fixed">
                    <thead>
                      <tr className="bg-gradient-to-r from-oceania-sunset to-orange-600">
                        <th className="w-[40%] px-2 sm:px-6 py-3 sm:py-4 text-left text-blue-950 font-bold text-[10px] sm:text-base">HOTEL PILIHAN</th>
                        <th className="w-[25%] px-2 sm:px-6 py-3 sm:py-4 text-center text-blue-950 font-bold text-[10px] sm:text-base">PESERTA</th>
                        <th className="w-[35%] px-2 sm:px-6 py-3 sm:py-4 text-center text-blue-950 font-bold text-[10px] sm:text-base">HARGA</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paket.detailHarga.tabelHotelMultiple?.map((hotel, hotelIdx) =>
                        hotel.opsi?.map((opsi, opsiIdx) => (
                          <tr
                            key={`${hotelIdx}-${opsiIdx}`}
                            className={`
                              ${hotelIdx % 2 === 0 ? "bg-white" : "bg-slate-50"}
                              hover:bg-blue-50 transition-colors duration-200 border-b border-slate-200
                            `}
                          >
                            {opsiIdx === 0 && (
                              <td rowSpan={hotel.opsi?.length ?? 1} className="px-2 sm:px-6 py-3 sm:py-4 text-slate-700 font-bold align-middle border-r border-slate-200 text-[10px] sm:text-base leading-tight">
                                {hotel.hotel}
                              </td>
                            )}
                            <td className="text-center px-2 sm:px-6 py-3 sm:py-4 text-slate-700 font-medium text-[10px] sm:text-base">{opsi.peserta}</td>
                            <td className="px-2 sm:px-6 py-3 sm:py-4 text-center">
                              <div className="flex flex-col items-center">
                                <span className="text-xs sm:text-lg font-bold text-blue-950 whitespace-nowrap">Rp {opsi.harga.toLocaleString("id-ID")}</span>
                                <span className="text-[9px] sm:text-sm text-slate-500">/paket</span>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Layout: Paket Lengkap */}
              {paket.detailHarga.layoutType === "tabel-peserta" && paket.detailHarga.tabel && (
                <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm mt-4">
                  <table className="w-full table-fixed">
                    <thead>
                      <tr className="bg-gradient-to-r from-oceania-sunset to-orange-600">
                        <th className="w-[45%] px-2 sm:px-6 py-3 sm:py-4 text-center text-blue-950 font-bold text-[10px] sm:text-base">Jumlah Peserta</th>
                        <th className="w-[55%] px-2 sm:px-6 py-3 sm:py-4 text-center text-blue-950 font-bold text-[10px] sm:text-base">Harga per Orang</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paket.detailHarga.tabel.map((item, idx) => (
                        <tr
                          key={idx}
                          className={`
                            ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
                            hover:bg-blue-50 transition-colors duration-200
                            ${idx === paket.detailHarga.tabel!.length - 1 ? "" : "border-b border-slate-200"}
                          `}
                        >
                          <td className="text-center px-2 sm:px-6 py-3 sm:py-4 text-slate-700 font-medium text-[10px] sm:text-base">{item.jumlahPeserta} orang</td>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 text-center">
                            <div className="flex flex-col items-center">
                              <span className="text-xs sm:text-lg font-bold text-blue-950 whitespace-nowrap">
                                Rp {item.harga.toLocaleString("id-ID")}
                                <span className="text-[9px] sm:text-sm text-slate-500">/pax</span>
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Catatan */}
              {paket.detailHarga.keterangan && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    <span className="font-semibold text-blue-950">💡 Catatan: </span>
                    {paket.detailHarga.keterangan}
                  </p>
                </div>
              )}

              {/* Info tambahan */}
              {(paket.detailHarga.layoutType === "tabel-paket-lengkap" || paket.detailHarga.layoutType === "tabel-peserta" || !paket.detailHarga.layoutType) && (
                <div className="mt-4 flex items-start gap-2 text-xs text-slate-500">
                  <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <p>Semakin banyak peserta, semakin hemat harga per orangnya!</p>
                </div>
              )}
            </Card>
          </section>

          {/* Itinerary */}
          <section>
            <Card className="p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
              <div className="space-y-6">
                {paket.itinerary.map((day, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold mb-2">{day.judul}</h3>
                    <p className="text-slate-600 mb-2" dangerouslySetInnerHTML={{ __html: day.deskripsi }} />
                    <ul className="list-disc pl-5 text-slate-600 text-sm">
                      {day.destinasi.map((dest, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: dest }} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </section>
          {/* Gallery dengan Preview */}
          <section>
            <Card className="p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Galeri Perjalanan</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {paket.galeri.map((img, idx) => (
                  <div key={idx} className="relative aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer" onClick={() => setPreviewIndex(idx)}>
                    <Image src={img} alt={`Galeri ${idx + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    {/* Hover overlay */}
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
            </Card>
          </section>
          {/* CTA Section */}
          <section>
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-3xl shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-oceania-sunset/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>

              <div className="relative z-10 p-8 md:p-12 lg:p-16">
                <div className="max-w-3xl mx-auto text-center">
                  {/* Icon atau Badge */}

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Waktunya Buat Liburan Jadi Nyata! 🌴</h3>
                  <p className="text-white/90 text-lg mb-8 leading-relaxed">
                    Jangan cuma jadi rencana! Pesan <span className="font-bold text-oceania-sunset">{paket.nama}</span> sekarang dan nikmati pengalaman liburan impian dengan harga terbaik.
                    <span className="block mt-2 text-white/80">Tim kami siap bantu atur semuanya — tinggal berangkat dan nikmati!</span>
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-oceania-sunset to-orange-600 hover:from-oceania-sunset/90 hover:to-orange-600/90 text-white font-bold py-6 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <a
                        href={`https://wa.me/6285138534353?text=Halo%20Oceania%20Travel!%20Saya%20tertarik%20dengan%20paket%20*${encodeURIComponent(paket.nama)}*%20(Rp%20${paket.harga.toLocaleString(
                          "id-ID"
                        )}/pax).%20Bisa%20bantu%20info%20lebih%20lanjut?`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <PiWhatsappLogo className="w-5 h-5" />
                        Chat WhatsApp Sekarang
                      </a>
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 backdrop-blur-sm font-bold py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      asChild
                    >
                      <Link href="/paket" className="flex items-center gap-2">
                        <Star className="w-5 h-5" />
                        Lihat Paket Lainnya
                      </Link>
                    </Button>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <p className="text-white/80 text-sm mb-4 font-medium">💬 Atau hubungi kami langsung untuk konsultasi gratis:</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/90">
                      <a href="tel:+6285138534353" className="flex items-center gap-2 hover:text-oceania-sunset transition-colors group">
                        <Phone className="w-4 h-4 group-hover:animate-pulse" />
                        <span className="font-medium">+62 851-3853-4353</span>
                      </a>
                      <span className="hidden sm:inline text-white/40">•</span>
                      <a href="mailto:info@oceaniatravel.com" className="flex items-center gap-2 hover:text-oceania-sunset transition-colors group">
                        <Mail className="w-4 h-4 group-hover:animate-pulse" />
                        <span className="font-medium">info@oceaniatravel.com</span>
                      </a>
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-6 flex items-center justify-center gap-2 text-white/70 text-xs">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>Respon Cepat</span>
                      <span className="text-white/40">•</span>
                      <Check className="w-4 h-4 text-green-400" />
                      <span>Harga Transparan</span>
                      <span className="text-white/40">•</span>
                      <Check className="w-4 h-4 text-green-400" />
                      <span>Terpercaya</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

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
              {paket.galeri.length > 1 && (
                <button onClick={handlePrev} className="absolute left-4 z-50 text-white bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110" aria-label="Foto Sebelumnya">
                  <ChevronLeft className="w-8 h-8" />
                </button>
              )}

              {/* Gambar Preview */}
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <div className="relative w-full max-h-[80vh] aspect-square md:aspect-[4/3]">
                  <Image src={paket.galeri[previewIndex]} alt={`${paket.nama} galeri ${previewIndex + 1}`} fill className="object-contain" priority />
                </div>

                {/* Info foto */}
                <div className="mt-6 text-center">
                  <p className="text-white text-lg font-medium">
                    {paket.nama} - Foto {previewIndex + 1} dari {paket.galeri.length}
                  </p>
                </div>
              </div>

              {/* Tombol Next - hanya tampil jika lebih dari 1 foto */}
              {paket.galeri.length > 1 && (
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
