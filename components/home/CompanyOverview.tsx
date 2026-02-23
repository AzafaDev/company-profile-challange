"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, ArrowRight, Coffee, Zap } from "lucide-react";
import { useThemeStore } from "@/store/useThemeStore";
import { motion } from "framer-motion";

const CompanyOverview = () => {
  const { theme } = useThemeStore();
  const JIWA_RED = "#B22222";
  const TEXT_COLOR = theme === "dark" ? "#f5f5f5" : "#1a1a1a";
  const CARD_BG = theme === "dark" ? "#161616" : "#ffffff";

  return (
    <section className="py-24 px-6 md:px-12 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* LEFT: VISUAL CONTENT (Span 5 columns) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative"
        >
          {/* Dekoratif Background - Hanya muncul di Desktop agar mobile bersih */}
          <div 
            className="absolute -top-10 -left-10 w-32 h-32 pattern-dots opacity-20 hidden md:block" 
            style={{ color: JIWA_RED }}
          />
          
          <div className="relative aspect-4/5 sm:aspect-square lg:aspect-4/5 rounded-4xl md:rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] group">
            <Image 
              src="/janji-jiwa-overview.webp" 
              alt="Janji Jiwa Culture" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Overlay Gradient halus */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Badge Experience - Floating & Responsive */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-6 -right-4 md:-right-10 p-5 md:p-8 rounded-3xl shadow-2xl z-20"
            style={{ backgroundColor: JIWA_RED }}
          >
            <div className="text-center">
              <p className="text-white font-black text-3xl md:text-5xl leading-none">8+</p>
              <p className="text-white/80 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold mt-2">Years of <br/> Excellence</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: TEXT CONTENT (Span 7 columns) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 flex flex-col"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-0.5" style={{ backgroundColor: JIWA_RED }} />
            <span className="font-black tracking-[0.4em] text-[10px] md:text-[11px] uppercase" style={{ color: JIWA_RED }}>
              Our Essence
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] mb-8 italic tracking-tighter" style={{ color: TEXT_COLOR }}>
            Crafting Souls, <br /> 
            <span style={{ color: JIWA_RED }}>One Cup</span> At A Time.
          </h2>

          <p className="opacity-60 mb-12 leading-relaxed text-base md:text-lg max-w-2xl" style={{ color: TEXT_COLOR }}>
            Janji Jiwa bukan sekadar kedai kopi. Kami adalah jembatan antara petani lokal dengan Teman Sejiwa. Melalui semangat <span className="font-bold text-red-700 italic">"Kopi Dari Hati"</span>, kami memastikan setiap racikan membawa cerita dan kehangatan nusantara.
          </p>

          {/* Feature Grid - Lebih clean & modern */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: <Users size={20} />, title: "The People", desc: "Didukung oleh 500+ talenta lokal berbakat.", delay: 0.1 },
              { icon: <Zap size={20} />, title: "The Speed", desc: "Konsistensi rasa dalam pelayanan yang sigap.", delay: 0.2 }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: feature.delay }}
                className="p-6 rounded-2xl border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-all"
                style={{ backgroundColor: theme === 'dark' ? '#111' : '#f9f9f9' }}
              >
                <div className="mb-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${JIWA_RED}15`, color: JIWA_RED }}>
                  {feature.icon}
                </div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-2" style={{ color: TEXT_COLOR }}>{feature.title}</h4>
                <p className="text-xs opacity-50 leading-relaxed" style={{ color: TEXT_COLOR }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Link - Modern Minimalist */}
          <Link 
            href="/about" 
            className="group w-fit flex items-center gap-4 font-black text-[11px] uppercase tracking-[0.3em] transition-all" 
            style={{ color: TEXT_COLOR }}
          >
            <span className="relative">
              Explore Our Story
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: JIWA_RED }} />
            </span>
            <div className="w-10 h-10 rounded-full border flex items-center justify-center group-hover:bg-red-700 group-hover:text-white transition-all" style={{ borderColor: `${JIWA_RED}40` }}>
              <ArrowRight size={16} />
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default CompanyOverview;