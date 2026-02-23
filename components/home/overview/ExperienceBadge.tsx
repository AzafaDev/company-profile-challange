"use client";
import { fadeInScale } from "@/lib/animations";
import { motion } from "framer-motion";

export const ExperienceBadge = ({ years }: { years: string }) => (
  <motion.div 
    variants={fadeInScale} // Pakai animasi scale milikmu
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="absolute -bottom-6 -right-4 md:-right-10 p-5 md:p-8 rounded-3xl shadow-2xl z-20 bg-[var(--jiwa-red)]"
  >
    <div className="text-center text-white">
      <p className="font-black text-3xl md:text-5xl leading-none">{years}</p>
      <p className="text-white/80 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold mt-2">
        Years of <br/> Excellence
      </p>
    </div>
  </motion.div>
);