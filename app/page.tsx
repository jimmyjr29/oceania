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

// import dynamic from "next/dynamic";

// const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollVelocity />
      <WhyOceania />
      <DestinasiSection />
      <PaketSection />
      <GaleriSection />
      <FAQ />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
