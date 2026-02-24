"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, MapPin } from "lucide-react";
import { fadeInScale, floatingAnimation } from "@/lib/animations";

export const HeroImage = () => {
  return (
    <div className="relative flex justify-center lg:justify-end order-first lg:order-last">
      {/* --- MAIN IMAGE CONTAINER --- */}
      <motion.div
        variants={fadeInScale}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-lg aspect-[4/5] z-20"
      >
        {/* The Core Image */}
        <div className="relative h-full w-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] group">
          <Image
            src="/janji-jiwa-hero.webp"
            alt="Janji Jiwa Signature Coffee Experience"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            fetchPriority="high"
          />
          {/* Subtle Overlay for better contrast with floating cards */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
        </div>

        {/* --- FLOATING CARD: RATING --- */}
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          className="absolute -left-4 sm:-left-12 bottom-12 p-4 md:p-6 rounded-2xl backdrop-blur-xl border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.2)] bg-white/90 dark:bg-zinc-900/40 flex flex-col gap-1"
        >
          <div className="flex gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <p className="text-[10px] font-black uppercase tracking-tighter text-[var(--text-primary)]">
            1M+ Friends Sejiwa
          </p>
        </motion.div>

        {/* --- FLOATING BADGE: OUTLETS --- */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -right-4 sm:-right-8 top-12 p-3 md:p-4 rounded-full shadow-2xl flex items-center gap-2 bg-[var(--jiwa-red)] z-30 border-4 border-[var(--bg-primary)]"
        >
          <div className="bg-white/20 p-1.5 rounded-full">
            <MapPin size={14} className="text-white" />
          </div>
          <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-white pr-2">
            900+ Outlets
          </span>
        </motion.div>
      </motion.div>

      {/* --- AMBIENT GLOW --- */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-[var(--jiwa-red)]/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none z-0"
        aria-hidden="true"
      />
    </div>
  );
};
