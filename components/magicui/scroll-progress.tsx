// ScrollProgress.tsx
"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 h-1 bg-orange-500 origin-left z-40"
      style={{ scaleX, top: "64px" }} // 👈 posisi tepat di bawah navbar
    />
  );
}
