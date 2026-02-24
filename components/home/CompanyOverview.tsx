"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

// Components
import { ExperienceBadge } from "./overview/ExperienceBadge";
import { FeatureCard } from "./overview/FeatureCard";

// Animations
import { containerVariants, fadeInUp, fadeInScale } from "@/lib/animations";
import { FEATURES } from "@/const/home";


const CompanyOverview = () => {
  return (
    <section className="py-24 px-6 md:px-12 overflow-hidden bg-[var(--bg-primary)]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center"
      >
        {/* --- LEFT: VISUAL ELEMENT --- */}
        <motion.div variants={fadeInScale} className="lg:col-span-5 relative">
          {/* Decorative Pattern */}
          <div className="absolute -top-10 -left-10 w-32 h-32 pattern-dots opacity-20 hidden md:block text-[var(--jiwa-red)]" />

          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group">
            <Image
              src="/janji-jiwa-overview.webp"
              alt="Janji Jiwa Brand Atmosphere"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <ExperienceBadge years="8+" />
        </motion.div>

        {/* --- RIGHT: CONTENT ELEMENT --- */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Subtitle */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-10 h-0.5 bg-[var(--jiwa-red)]" />
            <span className="font-black tracking-[0.4em] text-[10px] md:text-[11px] uppercase text-[var(--jiwa-red)]">
              Our Essence
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-black leading-[1.1] mb-8 italic tracking-tighter text-[var(--text-primary)]"
          >
            Crafting Souls, <br />
            <span className="text-[var(--jiwa-red)]">One Cup</span> At A Time.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="opacity-60 mb-12 leading-relaxed text-base md:text-lg max-w-2xl text-[var(--text-primary)] font-medium"
          >
            Janji Jiwa bukan sekadar kedai kopi. Kami adalah jembatan yang
            menghubungkan cita rasa biji kopi petani lokal dengan kehangatan
            hati setiap Teman Sejiwa.
          </motion.p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {FEATURES.map((feature, idx) => (
              <FeatureCard
                key={idx}
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}
              />
            ))}
          </div>

          {/* CTA Link */}
          <motion.div variants={fadeInUp}>
            <Link
              href="/about"
              className="group w-fit flex items-center gap-5 font-black text-[11px] uppercase tracking-[0.3em] text-[var(--text-primary)] transition-all"
            >
              <span className="relative">
                Explore Our Story
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[var(--jiwa-red)] transition-all duration-300 group-hover:w-full" />
              </span>
              <div className="w-12 h-12 rounded-full border border-[var(--text-primary)]/10 flex items-center justify-center group-hover:bg-[var(--jiwa-red)] group-hover:border-[var(--jiwa-red)] group-hover:text-white transition-all duration-500 shadow-sm">
                <ArrowRight size={18} />
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CompanyOverview;
