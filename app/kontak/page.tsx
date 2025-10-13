"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { SiTiktok, SiWhatsapp } from "react-icons/si"; // pastikan react-icons sudah terinstall
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="py-36 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">Hubungi Kami ✨</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Tim <span className="font-semibold">Oceania Travel</span> siap membantu Anda dalam setiap langkah perjalanan. Hubungi kami melalui sosial media atau kunjungi lokasi kami langsung.
          </p>
        </motion.div>

        {/* Grid: Map + Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Google Maps */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="overflow-hidden rounded-2xl shadow-lg border border-slate-200 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d335275.21102508885!2d107.76121192632765!3d-2.8416953792560693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65c4447cdeb1d753%3A0xc67fcd2d0c89a72e!2sOceania.co.id!5e0!3m2!1sid!2sid!4v1757525735290!5m2!1sid!2sid"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Info + Sosmed */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200 p-8 space-y-6 flex flex-col justify-center"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-orange-500" />
              <div>
                <h4 className="font-semibold text-blue-950">Alamat</h4>
                <p className="text-slate-600">Jl. Masda Adi Sucipto, Tanjungpandan, Belitung</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-orange-500" />
              <div>
                <h4 className="font-semibold text-blue-950">Email</h4>
                <p className="text-slate-600">oceaniaid@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-orange-500" />
              <div>
                <h4 className="font-semibold text-blue-950">Telepon</h4>
                <p className="text-slate-600">+62 851-3853-4353</p>
              </div>
            </div>

            {/* Sosial Media */}
            <div className="pt-4 border-t border-slate-200">
              <h4 className="font-semibold text-blue-950 mb-3">Ikuti Kami</h4>
              <div className="flex gap-4">
                <Link href="https://www.instagram.com/oceania.id/" target="_blank" className="p-3 rounded-full bg-gradient-to-tr from-pink-500 to-orange-500 text-white shadow-md hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="https://www.tiktok.com/@oceania.id" target="_blank" className="p-3 rounded-full bg-black text-white shadow-md hover:scale-110 transition-transform">
                  <SiTiktok className="w-5 h-5" />
                </Link>
                <Link href="https://wa.me/6285138534353" target="_blank" className="p-3 rounded-full bg-green-500 text-white shadow-md hover:scale-110 transition-transform">
                  <SiWhatsapp className="w-5 h-5" />
                </Link>
                <Link href="mailto:oceaniaid@gmail.com" className="p-3 rounded-full bg-blue-600 text-white shadow-md hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
