"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

// Import sub-komponen
import { ExperienceBadge } from "./ExperienceBadge";
import { FeatureCard } from "./FeatureCard";

const CompanyOverview = () => {
  return (
    <section className="py-24 px-6 md:px-12 overflow-hidden bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* LEFT: VISUAL CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative"
        >
          {/* Decorative Dot Pattern */}
          <div className="absolute -top-10 -left-10 w-32 h-32 pattern-dots opacity-20 hidden md:block text-[var(--jiwa-red)]" />
          
          <div className="relative aspect-4/5 rounded-4xl md:rounded-[3rem] overflow-hidden shadow-2xl group">
            <Image 
              src="/janji-jiwa-overview.webp" 
              alt="Janji Jiwa Culture" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <ExperienceBadge years="8+" />
        </motion.div>

        {/* RIGHT: TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 flex flex-col"
        >
          {/* Label Section */}
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-0.5 bg-[var(--jiwa-red)]" />
            <span className="font-black tracking-[0.4em] text-[10px] md:text-[11px] uppercase text-[var(--jiwa-red)]">
              Our Essence
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] mb-8 italic tracking-tighter text-[var(--text-primary)]">
            Crafting Souls, <br /> 
            <span className="text-[var(--jiwa-red)]">One Cup</span> At A Time.
          </h2>

          <p className="opacity-60 mb-12 leading-relaxed text-base md:text-lg max-w-2xl text-[var(--text-primary)]">
            Janji Jiwa bukan sekadar kedai kopi. Kami adalah jembatan antara petani lokal dengan Teman Sejiwa. 
            Melalui semangat <span className="font-bold text-[var(--jiwa-red)] italic">"Kopi Dari Hati"</span>.
          </p>

          {/* Feature Grid menggunakan Sub-Component */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <FeatureCard 
              icon={Users} 
              title="The People" 
              desc="Didukung oleh 500+ talenta lokal berbakat." 
              delay={0.1} 
            />
            <FeatureCard 
              icon={Zap} 
              title="The Speed" 
              desc="Konsistensi rasa dalam pelayanan yang sigap." 
              delay={0.2} 
            />
          </div>

          {/* CTA Link */}
          <Link 
            href="/about" 
            className="group w-fit flex items-center gap-4 font-black text-[11px] uppercase tracking-[0.3em] text-[var(--text-primary)]"
          >
            <span className="relative">
              Explore Our Story
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[var(--jiwa-red)] transition-all duration-300 group-hover:w-full" />
            </span>
            <div className="w-10 h-10 rounded-full border border-[var(--jiwa-red)]/40 flex items-center justify-center group-hover:bg-[var(--jiwa-red)] group-hover:text-white transition-all">
              <ArrowRight size={16} />
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default CompanyOverview;