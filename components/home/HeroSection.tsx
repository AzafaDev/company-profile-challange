"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { containerVariants, fadeInUp } from '@/lib/animations';
import { HeroBackgroundText } from './hero/HeroBackground';
import { HeroImage } from './hero/HeroImage';
import { HeroActions } from './hero/HeroActions';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  // Mencegah hydration error saat sinkronisasi animasi & tema
  useEffect(() => setMounted(true), []);
  if (!mounted) return <section className="min-h-screen" />;

  return (
    // Section Utama: Background otomatis berubah via CSS Variable
    <section 
      className="relative w-full min-h-screen flex items-center overflow-hidden pt-20 pb-12 transition-colors duration-500"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Teks dekoratif latar belakang */}
      <HeroBackgroundText />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Area Visual: Gambar & Floating Cards */}
        <HeroImage />

        {/* Area Konten: Animasi bertingkat (stagger) untuk anak elemen */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative text-center lg:text-left flex flex-col items-center lg:items-start"
          style={{ color: 'var(--text-primary)' }}
        >
          {/* Label: Detail brand singkat */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <span className="h-0.5 w-12" style={{ backgroundColor: 'var(--jiwa-red)' }} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: 'var(--jiwa-red)' }}>
              Established 2018
            </span>
          </motion.div>

          {/* Heading: Tipografi utama */}
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-6xl md:text-8xl font-black leading-none tracking-tighter mb-6 italic"
          >
            A Journey In <br /> Every <span style={{ color: 'var(--jiwa-red)' }}>Sip.</span>
          </motion.h2>
          
          {/* Deskripsi: Penjelasan singkat brand */}
          <motion.p 
            variants={fadeInUp}
            className="text-sm md:text-lg opacity-60 mb-8 max-w-md leading-relaxed"
          >
            Menyatukan rasa autentik biji kopi nusantara dengan kehangatan kasih sayang.
          </motion.p>
          
          {/* CTA: Tombol aksi utama dan sekunder */}
          <HeroActions variants={fadeInUp}/>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;