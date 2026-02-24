"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Components
import { HeroBackgroundText } from "./hero/HeroBackground";
import { HeroImage } from "./hero/HeroImage";
import { HeroActions } from "./hero/HeroActions";

// Animations
import { containerVariants, fadeInUp } from "@/lib/animations";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  // Mencegah hydration mismatch antara server dan client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section className="min-h-screen bg-[var(--bg-primary)]" />;
  }

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-30 pb-12 transition-colors duration-500 bg-[var(--bg-primary)]">
      {/* --- BACKGROUND DECORATION --- */}
      <HeroBackgroundText />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* --- LEFT SIDE: VISUALS --- */}
        <HeroImage />

        {/* --- RIGHT SIDE: CONTENT --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative text-center lg:text-left flex flex-col items-center lg:items-start text-[var(--text-primary)]"
        >
          {/* Brand Badge */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-0.5 w-12 bg-[var(--jiwa-red)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--jiwa-red)]">
              Established 2018
            </span>
          </motion.div>

          {/* Main Typography */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-6 italic"
          >
            A Journey In <br />
            Every <span className="text-[var(--jiwa-red)]">Sip.</span>
          </motion.h1>

          {/* Narrative Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-xl opacity-60 mb-10 max-w-md leading-relaxed font-medium"
          >
            Menyatukan rasa autentik biji kopi nusantara dengan kehangatan kasih
            sayang di setiap cangkir.
          </motion.p>

          {/* Call to Actions */}
          <div className="w-full lg:w-fit">
            <HeroActions variants={fadeInUp} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
