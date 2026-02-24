"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroActionsProps {
  variants?: any;
}

export const HeroActions = ({ variants }: HeroActionsProps) => {
  return (
    <motion.div
      variants={variants}
      className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-fit"
    >
      {/* --- PRIMARY CTA: EXPLORE MENU --- */}
      <Link href="/services" className="w-full sm:w-auto">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center justify-center gap-4 w-full px-10 py-5 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-white bg-[var(--jiwa-red)] rounded-full shadow-2xl shadow-red-900/20 transition-shadow hover:shadow-red-900/40"
        >
          Explore Menu
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </motion.button>
      </Link>

      {/* --- SECONDARY CTA: OUR STORY --- */}
      <Link
        href="/about"
        className="relative py-2 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] group"
      >
        Our Story
        {/* Animated Underline Effect */}
        <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-[var(--jiwa-red)] transition-all duration-300 group-hover:w-full" />
      </Link>
    </motion.div>
  );
};
