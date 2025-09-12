"use client";

import DestinasiSection from "@/components/DestinasiSection";
import Hero from "@/components/Hero";
import PaketSection from "@/components/PaketSection";
import GaleriSection from "@/components/GalerySection";
import { ScrollVelocity } from "@/components/ScrollVelocity";
import WhyOceania from "@/components/WhyOceania";
import FAQ from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
// import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      {/* <section className="max-w-6xl mx-auto px-6 py-16 text-center"> */}
      <Hero />
      <ScrollVelocity />
      <WhyOceania />
      <DestinasiSection />
      <PaketSection />
      <GaleriSection />
      <FAQ />
      <Testimonials />
      <CtaBanner />
      {/* </section> */}
    </>
  );
}
