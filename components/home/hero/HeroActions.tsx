"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroActions = ({ variants }: { variants?: any }) => {
  return (
    // Wrapper: Container tombol dengan animasi stagger dari parent
    <motion.div 
      variants={variants} 
      className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
    >
      {/* Tombol Utama: Background menggunakan warna brand dari Global CSS */}
      <Link
        href="/services"
        className="group flex items-center justify-center gap-4 w-full sm:w-auto px-10 py-4 md:py-5 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-white transition-all duration-300 rounded-full shadow-xl shadow-red-900/20"
        style={{ backgroundColor: 'var(--jiwa-red)' }}
      >
        Explore Menu 
        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
      </Link>
      
      {/* Tombol Kedua: Warna teks otomatis mengikuti tema (Light/Dark) */}
      <Link
        href="/about"
        className="text-[10px] md:text-[11px] font-black uppercase tracking-widest hover:opacity-50 transition-opacity py-2"
        style={{ color: 'var(--text-primary)' }}
      >
        Our Story
      </Link>
    </motion.div>
  );
};