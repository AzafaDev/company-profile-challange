"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export const ProductHeader = () => (
  <motion.div variants={fadeInUp} className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-20 gap-8">
    <div className="text-center lg:text-left">
      <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
        <span className="w-8 h-[2px] bg-[var(--jiwa-red)]" />
        <span className="font-black tracking-[0.4em] text-[10px] uppercase text-[var(--jiwa-red)]">What We Brew</span>
      </div>
      <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none text-[var(--text-primary)]">
        Freshness In <br /> <span className="text-[var(--jiwa-red)]">Every Byte.</span>
      </h2>
    </div>
    
    <Link 
      href="/services" 
      className="group flex items-center gap-4 px-8 py-4 rounded-full border border-zinc-300 dark:border-zinc-700 font-bold text-[10px] uppercase tracking-widest transition-all 
                 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black 
                 text-[var(--text-primary)]"
    >
      Explore Full Menu <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
    </Link>
  </motion.div>
);