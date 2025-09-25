"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Check, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { paketList, Paket } from "@/lib/paket";
import { notFound } from "next/navigation";

interface PaketDetailPageProps {
  slug: string;
}

export default function PaketDetailPage({ slug }: PaketDetailPageProps) {
  const paket = paketList.find((p: Paket) => p.slug === slug);

  if (!paket) notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Card className="relative max-w-5xl mx-auto mt-30 mb-12 overflow-hidden rounded-xl p-0 shadow-lg border ring-1 ring-slate-200 h-72">
        {/* Tombol Kembali */}
        <Link href="/#paket" className="absolute top-4 left-4 z-30">
          <Button variant="outline" size="sm" className="bg-white/80 hover:bg-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali
          </Button>
        </Link>
        {/* Banner Full */}
        <Image src={paket.banner} alt={paket.nama} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 800px" />
        {/* Overlay gradient agar teks terbaca */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
        {/* Konten di atas gambar */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-6 z-20">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white drop-shadow">{paket.nama}</h1>
          <p className="text-slate-200 mb-2">
            {paket.durasi} - {paket.lokasi}
          </p>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-white">{paket.rating}</span>
            <span className="text-white">Rating</span>
          </div>
          <p className="text-lg text-white mb-4">
            start from <span className="font-bold text-xl text-orange-300">Rp {paket.harga.toLocaleString("id-ID")}</span>
            /pax
          </p>
          {/* Tombol Booking di bawah harga */}
          <a href={`https://wa.me/6281234567890?text=Halo, saya mau booking paket ${paket.nama}`} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-gradient-to-r from-oceania-navy to-blue-900 text-white font-bold rounded-2xl w-full">
              Pesan Sekarang
            </Button>
          </a>
        </div>
      </Card>

      <main className="max-w-5xl mx-auto px-6 pb-16 space-y-8">
        {/* Deskripsi Paket */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Deskripsi Paket</h2>
          <p className="text-slate-600">{paket.deskripsiLengkap}</p>
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
                    <span>{item}</span>
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

            <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
              <Image src={paket.detailHarga.image.startsWith("/") ? paket.detailHarga.image : `/${paket.detailHarga.image}`} alt="Detail Harga" fill sizes="(max-width: 768px) 100vw, 600px" className="object-cover" />
            </div>

            <p className="text-slate-600 text-sm mt-3">{paket.detailHarga.keterangan}</p>
          </Card>
        </section>

        {/* Itinerary */}
        <section>
          <Card className="p-6 shadow-md">
            <h2 className="text-2xl font-bold">Itinerary</h2>
            <div className="space-y-6">
              {paket.itinerary.map((day, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-2">{day.judul}</h3>
                  <p className="text-slate-600 mb-2">{day.deskripsi}</p>
                  <ul className="list-disc pl-5 text-slate-600 text-sm">
                    {day.destinasi.map((dest, i) => (
                      <li key={i}>{dest}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Gallery */}
        <section>
          <Card className="p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Galeri</h2>
            <div className="grid grid-cols-3 gap-2">
              {paket.galeri.map((img, idx) => (
                <div key={idx} className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <Image src={img} alt={`Galeri ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}
