"use client";

import { Globe, Users, BadgeDollarSign, Ship, ShieldCheck, Headset } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import { motion, Variants } from "framer-motion";

// Data alasan
const reasons = [
  {
    icon: Globe,
    title: "Destinasi Eksklusif & Autentik",
    desc: "Nikmati keindahan Belitung dan destinasi eksotis lainnya dengan akses ke spot terbaik yang jarang dikunjungi turis biasa.",
  },
  {
    icon: Users,
    title: "Guide Lokal Berpengalaman",
    desc: "Tim kami adalah pemandu lokal profesional yang siap mendampingi perjalanan Anda dengan cerita, budaya, dan keramahan khas Belitung.",
  },
  {
    icon: BadgeDollarSign,
    title: "Harga Jujur & Transparan",
    desc: "Tidak ada biaya tersembunyi. Semua paket sudah termasuk layanan utama, sehingga Anda bisa liburan tanpa khawatir.",
  },
  {
    icon: Ship,
    title: "Pengalaman Lengkap & Berkesan",
    desc: "Dari tour laut hingga jelajah darat, kami siapkan aktivitas seru yang bisa disesuaikan dengan kebutuhan Anda.",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan & Kenyamanan Terjamin",
    desc: "Kami selalu mengutamakan keselamatan dengan perlengkapan standar serta layanan ramah agar liburan Anda terasa aman dan nyaman.",
  },
  {
    icon: Headset,
    title: "Dukungan 24/7",
    desc: "Tim support kami siap membantu kapan saja, dari proses pemesanan hingga perjalanan selesai.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1], // cubic-bezier untuk easeOut
    },
  },
};

export default function WhyOceania() {
  return (
    <section className="py-20 bg-blue-50/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Judul */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-blue-950 text-4xl md:text-5xl font-bold mb-4">Kenapa Memilih Oceania?</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Liburan Anda, Prioritas Kami. Kami hadir untuk memberikan pengalaman perjalanan terbaik, nyaman, dan penuh kenangan indah. Berikut alasan mengapa ribuan wisatawan mempercayakan liburannya bersama Oceania Travel:
          </p>
        </motion.div>

        {/* Card wrapper dengan border beam */}
        <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="relative rounded-xl overflow-hidden border">
          {/* Border Beam */}
          <BorderBeam duration={6} size={400} borderWidth={1} className="from-transparent via-orange-500 to-transparent" />
          <BorderBeam duration={6} delay={3} size={400} borderWidth={1} className="from-transparent via-blue-900 to-transparent" />

          {/* Grid isi card */}
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="flex flex-col gap-2 border-b sm:border-r p-6 last:border-b-0 sm:last:border-r-0 bg-background/50 hover:bg-background/80 transition-colors"
              >
                <item.icon className="w-6 h-6 text-primary" />
                <h3 className="text-blue-950 font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
