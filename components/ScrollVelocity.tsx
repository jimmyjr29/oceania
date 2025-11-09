"use client";

import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/magicui/scroll-based-velocity";
import Image from "next/image";

export const ScrollVelocity = () => {
  return (
    <ScrollVelocityContainer className="bg-orange-100/50 text-2xl text-oceania-navy md:text-4xl font-bold select-none">
      <ScrollVelocityRow baseVelocity={20} direction={1}>
        <Image src="/logo.svg" alt="Logo Oceania Travel" width={50} height={50} className="mx-2 inline-block" />
        OCEANIA
      </ScrollVelocityRow>
    </ScrollVelocityContainer>
  );
};
