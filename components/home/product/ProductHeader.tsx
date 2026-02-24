"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export const ProductHeader = () => (
  <motion.div
    variants={fadeInUp}
    className="relative flex flex-col lg:flex-row justify-between items-center lg:items-end mb-24 gap-10"
  >
    {/* --- BACKGROUND DECORATIVE TEXT --- */}
    <span
      className="absolute -top-12 left-0 text-[12vw] font-black uppercase italic opacity-[0.03] select-none pointer-events-none whitespace-nowrap hidden lg:block text-[var(--text-primary)]"
      aria-hidden="true"
    >
      MENU SEJIWA
    </span>

    {/* --- LEFT CONTENT: TITLES --- */}
    <div className="text-center lg:text-left z-10">
      <div className="flex items-center justify-center lg:justify-start gap-4 mb-5">
        <span className="w-10 h-[2px] bg-[var(--jiwa-red)]" />
        <span className="font-black tracking-[0.4em] text-[10px] md:text-[11px] uppercase text-[var(--jiwa-red)]">
          What We Brew
        </span>
      </div>

      <h2 className="text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter leading-[0.9] text-[var(--text-primary)]">
        Freshness In <br />
        <span className="text-[var(--jiwa-red)]">Every Byte.</span>
      </h2>
    </div>

    {/* --- RIGHT CONTENT: CTA BUTTON --- */}
    <Link
      href="/services"
      className="group relative flex items-center gap-5 px-10 py-5 rounded-full border border-[var(--text-primary)]/10 font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden text-[var(--text-primary)] hover:border-[var(--jiwa-red)]"
    >
      {/* Background Hover Slide Effect */}
      <span className="absolute inset-0 bg-[var(--jiwa-red)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />

      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        Explore Full Menu
      </span>

      <ArrowRight
        size={16}
        className="relative z-10 group-hover:translate-x-2 group-hover:text-white transition-all duration-300"
      />
    </Link>
  </motion.div>
);
