"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, MapPin } from 'lucide-react';
import { fadeInScale, floatingAnimation } from '@/lib/animations';

export const HeroImage = () => {
  return (
    <div className="relative flex justify-center lg:justify-end order-first lg:order-last">
      
      {/* Container Utama & Animasi Masuk */}
      <motion.div 
        variants={fadeInScale}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-lg aspect-4/5 z-20"
      >
        
        {/* Foto Utama */}
        <div className="relative h-full w-full rounded-4xl md:rounded-[3rem] overflow-hidden shadow-2xl">
          <Image 
            src="/janji-jiwa-hero.webp" 
            alt="Janji Jiwa signature coffee" 
            fill 
            priority 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Card: Rating Pelanggan */}
        <motion.div 
          variants={floatingAnimation}
          animate="animate"
          className="absolute -left-4 sm:-left-8 bottom-10 p-4 md:p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl scale-75 sm:scale-100 bg-white/80 dark:bg-white/5"
        >
          <div className="flex gap-1 text-yellow-500 mb-1">
            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={10} fill="currentColor" />)}
          </div>
          <p className="text-[10px] font-black uppercase opacity-50"
          style={{ color: 'var(--text-primary)' }}>
            1M+ Friends
          </p>
        </motion.div>

        {/* Card: Jumlah Outlet */}
        <motion.div 
          animate={{
            y: [0, 8, 0],
            transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -right-2 sm:-right-6 top-10 p-3 md:p-4 rounded-full shadow-2xl flex items-center gap-2 scale-75 sm:scale-100 z-30"
          style={{ backgroundColor: 'var(--jiwa-red)' }}
        >
          <MapPin size={14} className="text-white ml-1" />
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white pr-2">
            900+ Outlets
          </span>
        </motion.div>
      </motion.div>

      {/* Efek Cahaya (Glow) di Belakang */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square rounded-full blur-[80px] md:blur-[120px] opacity-10 md:opacity-20 pointer-events-none"
        style={{ backgroundColor: 'var(--jiwa-red)' }}
      />

    </div>
  );
};