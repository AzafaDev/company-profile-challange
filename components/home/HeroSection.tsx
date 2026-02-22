"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, MapPin } from 'lucide-react';
import { useThemeStore } from '@/store/useThemeStore';
import { motion, Variants } from 'framer-motion';

const HeroSection = () => {
  const { theme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const JIWA_RED = "#B22222";
  const TEXT_COLOR = theme === 'dark' ? '#f5f5f5' : '#1a1a1a';

  if (!mounted) return <section className="min-h-screen" />;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section 
      className="relative w-full min-h-screen flex items-center overflow-hidden pt-20 pb-12"
      style={{ backgroundColor: theme === 'dark' ? '#0d0d0d' : '#ffffff' }}
    >
      {/* BACKGROUND TEXT - Hidden on Mobile for better performance/readability */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.02] dark:opacity-[0.03] whitespace-nowrap z-0 hidden lg:block">
        <h1 className="text-[25vw] font-black leading-none uppercase italic">KOPI DARI HATI</h1>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* IMAGE AREA - Appears first on Mobile (order-first) */}
        <div className="relative flex justify-center lg:justify-end order-first lg:order-last">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-lg aspect-[4/5] z-20"
          >
            {/* Main Image */}
            <div className="relative h-full w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/janji-jiwa-hero.webp" 
                alt="Janji Jiwa signature coffee"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* FLOATING CARD 1: RATING - Simplified for Mobile */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -left-4 sm:-left-8 bottom-10 p-4 md:p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl scale-75 sm:scale-100"
              style={{ backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)' }}
            >
              <div className="flex gap-1 text-yellow-500 mb-1">
                {[1,2,3,4,5].map(s => <Star key={s} size={10} fill="currentColor" />)}
              </div>
              <p className="text-[10px] font-black uppercase opacity-50">1M+ Friends</p>
            </motion.div>

            {/* FLOATING CARD 2: LOCATION - Adjusted position for Mobile */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -right-2 sm:-right-6 top-10 p-3 md:p-4 rounded-full backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-2 scale-75 sm:scale-100"
              style={{ backgroundColor: JIWA_RED }}
            >
              <MapPin size={14} className="text-white ml-1" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white pr-2">900+ Outlets</span>
            </motion.div>
          </motion.div>

          {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] aspect-square rounded-full blur-[80px] md:blur-[120px] opacity-10 md:opacity-20 pointer-events-none"
            style={{ backgroundColor: JIWA_RED }}
          />
        </div>

        {/* LEFT: CONTENT AREA */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4 md:mb-6">
            <span className="h-[2px] w-8 md:w-12" style={{ backgroundColor: JIWA_RED }} />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: JIWA_RED }}>
              Established 2018
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1] tracking-tighter mb-6 italic"
            style={{ color: TEXT_COLOR }}
          >
            A Journey In <br /> Every <span style={{ color: JIWA_RED }}>Sip.</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-sm md:text-lg opacity-60 mb-8 max-w-[280px] sm:max-w-md leading-relaxed"
            style={{ color: TEXT_COLOR }}
          >
            Menyatukan rasa autentik biji kopi nusantara dengan kehangatan kasih sayang. Janji kami adalah kualitas di setiap cangkir.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <Link
              href="/services"
              className="group flex items-center justify-center gap-4 w-full sm:w-auto px-10 py-4 md:py-5 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-white transition-all duration-300 rounded-full shadow-xl shadow-red-900/20"
              style={{ backgroundColor: JIWA_RED }}
            >
              Explore Menu <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <Link
              href="/about"
              className="text-[10px] md:text-[11px] font-black uppercase tracking-widest hover:opacity-50 transition-opacity py-2"
              style={{ color: TEXT_COLOR }}
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;