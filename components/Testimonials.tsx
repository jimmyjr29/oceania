"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Leonel Messi",
    origin: "Argentina",
    package: "Paket 3D2N Belitung",
    rating: 5,
    comment: "Liburan bersama Oceania benar-benar tak terlupakan!",
    description: "Semua destinasi sesuai ekspektasi, guide ramah, dan pelayanan sangat profesional. Sangat puas dan pasti akan merekomendasikan kepada teman-teman.",
    image: "/images/testimoni/messi.jpeg",
  },
  {
    name: "Pevita Pearce",
    origin: "Jakarta",
    package: "Paket 2D1N Belitung",
    rating: 4,
    comment: "Paketnya worth it banget, terutama Pulau Lengkuas.",
    description: "Makanannya enak dan jadwal padat tapi seru. Cocok untuk liburan singkat dengan keluarga.",
    image: "/images/testimoni/pevita.jpeg",
  },
  {
    name: "Cristiano Ronaldo",
    origin: "Portugal",
    package: "Private Trip Belitung",
    rating: 5,
    comment: "Excellent service from Oceania Travel.",
    description: "Very professional team, I felt safe and well taken care of during the trip. Highly recommend to anyone visiting Belitung.",
    image: "/images/testimoni/ronaldo.jpeg",
  },
  {
    name: "Jennifer Bachdim",
    origin: "Jakarta",
    package: "Paket 4D3N Belitung",
    rating: 5,
    comment: "An amazing experience with Oceania Travel!",
    description: "The itinerary was perfect, the guides were knowledgeable and friendly, and every detail was taken care of. I can't wait to book my next trip with them.",
    image: "/images/testimoni/jennifer.jpeg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-blue-950 text-3xl md:text-4xl font-bold text-center mb-8">Apa Kata Mereka?</h2>
        <p className="text-center text-slate-600 text-lg mb-8">Berikut komentar dari beberapa klien kami.</p>

        <div className="relative w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={index} initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -80 }} transition={{ duration: 0.5 }}>
              <Card
                className="rounded-2xl bg-background border 
                               shadow-lg shadow-primary/5 
                               hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="flex flex-col gap-6 p-8">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className={`w-5 h-5 ${idx < testimonials[index].rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`} />
                    ))}
                  </div>

                  {/* Komentar utama */}
                  <h3 className="text-blue-950 text-xl md:text-2xl font-semibold leading-snug">&quot;{testimonials[index].comment}&quot;</h3>

                  {/* Deskripsi */}
                  <p className="text-slate-600 text-base">{testimonials[index].description}</p>

                  {/* Profile */}
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

        {/* Navigasi dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full transition-all ${index === i ? "bg-primary" : "bg-muted"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
