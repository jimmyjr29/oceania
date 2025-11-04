"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/testimoni";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // ✅ Deteksi render client untuk hindari mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ Auto-slide hanya dijalankan di sisi client
  useEffect(() => {
    if (!isClient) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isClient]);

  // ✅ Saat SSR, tampilkan placeholder agar HTML server & client cocok
  if (!isClient) {
    return (
      <section className="py-20 bg-blue-50/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center text-slate-500">
          <p>Memuat testimoni...</p>
        </div>
      </section>
    );
  }

  // ✅ Konten utama (sudah aman dari hydration mismatch)
  return (
    <section className="py-20 bg-blue-50/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-blue-950 text-3xl md:text-4xl font-bold text-center mb-8">Apa Kata Mereka?</h2>
        <p className="text-center text-slate-600 text-lg mb-8">Berikut komentar dari beberapa klien kami.</p>

        <div className="relative w-full overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={testimonials[index].id} // ✅ gunakan id sebagai key untuk kestabilan
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="rounded-2xl bg-background border shadow-lg shadow-primary/5 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex flex-col gap-6 p-8">
                  {/* ⭐ Rating */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className={`w-5 h-5 ${idx < testimonials[index].rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`} />
                    ))}
                  </div>

                  {/* 💬 Komentar utama */}
                  <h3 className="text-blue-950 text-xl md:text-2xl font-semibold leading-snug">&quot;{testimonials[index].comment}&quot;</h3>

                  {/* 📄 Deskripsi */}
                  <p className="text-slate-600 text-base">{testimonials[index].description}</p>

                  {/* 👤 Profil pengguna */}
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white shadow-sm">
                      <Image src={testimonials[index].image} alt={testimonials[index].name} width={48} height={48} className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonials[index].name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[index].origin} • {testimonials[index].package}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ⚪ Navigasi dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((t) => (
            <button
              key={t.id}
              onClick={() => setIndex(testimonials.indexOf(t))}
              className={`w-3 h-3 rounded-full transition-all ${testimonials[index].id === t.id ? "bg-primary" : "bg-muted"}`}
              aria-label={`Tampilkan testimoni ${t.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
