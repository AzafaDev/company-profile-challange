"use client";

import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { fadeInScale } from "@/lib/animations";

interface ExperienceBadgeProps {
  years: string; // Contoh: "8" (tanpa simbol + agar bisa dianimasikan)
}

export const ExperienceBadge = ({ years }: ExperienceBadgeProps) => {
  // Logic untuk animasi angka
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const numericYears = parseInt(years);
    if (!isNaN(numericYears)) {
      const controls = animate(count, numericYears, {
        duration: 2,
        ease: "easeOut",
        delay: 0.5,
      });
      return controls.stop;
    }
  }, [years, count]);

  return (
    <motion.div
      variants={fadeInScale}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="absolute -bottom-6 -right-4 md:-right-10 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(var(--jiwa-red-rgb),0.3)] z-20 bg-[var(--jiwa-red)] flex items-center justify-center min-w-[120px] md:min-w-[160px]"
    >
      <div className="text-center text-white">
        <div className="flex items-start justify-center">
          <motion.span className="font-black text-4xl md:text-6xl leading-none tracking-tighter">
            {rounded}
          </motion.span>
          <span className="font-black text-xl md:text-2xl mt-1 md:mt-2">+</span>
        </div>

        <p className="text-white/90 text-[9px] md:text-[11px] uppercase tracking-[0.3em] font-black mt-3 leading-tight">
          Years of <br /> Excellence
        </p>
      </div>

      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] pointer-events-none" />
    </motion.div>
  );
};
