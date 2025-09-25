"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Hero() {
  const [counters, setCounters] = useState({
    customers: 50,
    destinations: 20,
    satisfaction: 90,
  });

  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  // Counter animation effect
  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);

      // Animate customers counter to 500
      let customerCount = 0;
      const customerInterval = setInterval(() => {
        customerCount += 15;
        if (customerCount >= 500) {
          customerCount = 500;
          clearInterval(customerInterval);
        }
        setCounters((prev) => ({ ...prev, customers: customerCount }));
      }, 30);

      // Animate destinations counter to 15
      let destinationCount = 0;
      const destinationInterval = setInterval(() => {
        destinationCount += 1;
        if (destinationCount >= 15) {
          destinationCount = 15;
          clearInterval(destinationInterval);
        }
        setCounters((prev) => ({ ...prev, destinations: destinationCount }));
      }, 80);

      // Animate satisfaction counter to 100
      let satisfactionCount = 0;
      const satisfactionInterval = setInterval(() => {
        satisfactionCount += 3;
        if (satisfactionCount >= 100) {
          satisfactionCount = 100;
          clearInterval(satisfactionInterval);
        }
        setCounters((prev) => ({ ...prev, satisfaction: satisfactionCount }));
      }, 40);

      return () => {
        clearInterval(customerInterval);
        clearInterval(destinationInterval);
        clearInterval(satisfactionInterval);
      };
    }
  }, [inView, isVisible]);

  const statsData = [
    {
      number: `${counters.customers}+`,
      label: "Wisatawan Puas",
      icon: "👥",
      delay: 0,
    },
    {
      number: `${counters.destinations}+`,
      label: "Destinasi Eksotis",
      icon: "🏝️",
      delay: 0.1,
    },
    {
      number: "24/7",
      label: "Customer Support",
      icon: "🎧",
      delay: 0.2,
    },
    {
      number: `${counters.satisfaction}%`,
      label: "Kepuasan Terjamin",
      icon: "⭐",
      delay: 0.3,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="beranda" className="relative min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Video */}
        <video className="absolute top-0 left-0 w-full h-full object-cover" src="/videos/Hero-Oceania.mp4" autoPlay loop muted playsInline />

        {/* Overlay biar teks lebih jelas */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Konten Hero */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative mt-20 z-10 max-w-5xl px-4 sm:px-6 flex-1 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Jelajahi Dunia Bersama <span className="text-oceania-sunset block sm:inline">OCEANIA</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">Temukan destinasi eksotis, paket wisata terbaik, dan pengalaman perjalanan tak terlupakan.</p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link
              href="/paket"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base text-white bg-white/10 border border-white/30 backdrop-blur-xl shadow-lg hover:shadow-xl hover:bg-white/20 hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Lihat Paket
            </Link>

            <Link
              href="https://wa.me/6285138534353?text=Halo%20saya%20ingin%20pesan%20paket%20wisata%20Oceania"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base bg-white/90 backdrop-blur-sm text-oceania-navy shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Hubungi Kami
            </Link>
          </div>
        </motion.div>

        {/* Stats Section - Positioned at bottom of hero */}
        <div ref={ref} className="relative z-10 w-full pb-6 sm:pb-8 lg:pb-12">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto">
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: stat.delay + 1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  className="group"
                >
                  <div className="relative">
                    {/* Main card with glass effect */}
                    <div className="relative bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center shadow-lg border border-white/20 hover:shadow-2xl hover:bg-white/20 transition-all duration-300">
                      {/* Icon */}
                      <motion.div
                        animate={
                          inView
                            ? {
                                scale: [1, 1.1, 1],
                                rotate: [0, 3, -3, 0],
                              }
                            : {}
                        }
                        transition={{
                          duration: 0.6,
                          delay: stat.delay + 1.3,
                          ease: "easeOut",
                        }}
                        className="text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2 inline-block"
                      >
                        {stat.icon}
                      </motion.div>

                      {/* Number */}
                      <motion.div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-1">{stat.number}</motion.div>

                      {/* Label */}
                      <div className="text-white/90 font-medium text-xs sm:text-sm lg:text-base leading-tight">{stat.label}</div>

                      {/* Decorative line */}
                      <motion.div initial={{ width: 0 }} animate={inView ? { width: "50%" } : {}} transition={{ duration: 0.8, delay: stat.delay + 1.5 }} className="h-0.5 bg-oceania-sunset mx-auto mt-2 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
