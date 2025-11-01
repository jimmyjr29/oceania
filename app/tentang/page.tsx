"use client";

import WhyOceania from "@/components/WhyOceania";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Judul */}
        <h2 className="text-blue-950 text-3xl md:text-5xl font-bold text-center mt-16 mb-16">
          Tentang <span className="text-blue-950">OCEANIA Travel </span>
        </h2>

        {/* Grid Cerita Kami */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          {/* Teks */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="text-blue-950 text-2xl font-semibold mb-4">Cerita Kami</h3>
            <p className="text-slate-600 leading-relaxed mb-4 text-justify">
              OCEANIA Travel Agency lahir pada tahun 2025 dengan semangat menghadirkan pengalaman perjalanan yang autentik dan berkesan. Terinspirasi oleh keindahan alam dan budaya Indonesia, kami berkomitmen menjadi partner terpercaya bagi
              setiap petualangan Anda.
            </p>
            <p className="text-slate-600 leading-relaxed text-justify">
              Meski merupakan agensi yang baru berdiri, tim kami terdiri dari para profesional berpengalaman di dunia pariwisata. Kami percaya bahwa setiap perjalanan bukan sekadar liburan, tetapi juga cerita yang layak untuk dikenang.
            </p>
          </motion.div>

          {/* Ilustrasi / Gambar */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex justify-center">
            <div className="rounded-full bg-gradient-to-tr from-orange-400 to-blue-900 p-1">
              <div className="rounded-full bg-orange-50 p-10 md:p-16">
                <Image src="/brand.png" alt="Logo Oceania Travel" width={160} height={160} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visi, Misi, Komitmen */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid md:grid-cols-3 gap-6 bg-orange-200/20 rounded-2xl p-8">
          <div className="text-blue-950 text-center space-y-3">
            <h4 className="text-xl font-semibold">Visi Kami</h4>
            <p className="text-slate-600 text-sm">Menjadi travel agency terdepan yang menghadirkan pengalaman perjalanan berkualitas tinggi dengan pelayanan terbaik di Indonesia.</p>
          </div>

          <div className="text-blue-950 text-center space-y-3">
            <h4 className="text-xl font-semibold">Misi Kami</h4>
            <p className="text-slate-600 text-sm">Memberikan layanan tour & travel profesional, aman, nyaman, dan berkesan untuk setiap pelanggan dengan harga terjangkau.</p>
          </div>

          <div className="text-blue-950 text-center space-y-3">
            <h4 className="text-xl font-semibold">Komitmen Kami</h4>
            <p className="text-slate-600 text-sm">Kepuasan pelanggan adalah prioritas utama. Kami berkomitmen memberikan service excellent di setiap perjalanan.</p>
          </div>
        </motion.div>
      </div>
      <WhyOceania />
    </section>
  );
}
