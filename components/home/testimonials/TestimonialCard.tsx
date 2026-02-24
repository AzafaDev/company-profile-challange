"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface ReviewProps {
  rev: {
    name: string;
    role: string;
    comment: string;
    rating: number;
    avatar: string;
  };
  index: number;
}

export const TestimonialCard = ({ rev, index }: ReviewProps) => (
  <motion.div
    variants={fadeInUp}
    className={`p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] relative group border 
                border-[var(--text-primary)]/[0.08] dark:border-zinc-800/50 
                transition-all duration-700 bg-[var(--bg-primary)] 
                hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] 
                dark:hover:shadow-[var(--jiwa-red)]/5
                ${index % 2 !== 0 ? "md:translate-y-12" : ""}`}
  >
    {/* --- DECORATIVE QUOTE ICON --- */}
    <div className="absolute top-10 right-10 pointer-events-none transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
      <Quote
        size={56}
        className="opacity-[0.05] group-hover:opacity-20 transition-opacity"
        style={{ color: "var(--jiwa-red)" }}
        strokeWidth={1.5}
      />
    </div>

    {/* --- STAR RATING --- */}
    <div className="flex gap-1.5 mb-8">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rev.rating ? "var(--jiwa-red)" : "transparent"}
          stroke="var(--jiwa-red)"
          strokeWidth={2}
        />
      ))}
    </div>

    {/* --- TESTIMONIAL TEXT --- */}
    <blockquote className="text-xl md:text-2xl font-black leading-[1.3] italic mb-12 tracking-tight text-[var(--text-primary)]">
      "{rev.comment}"
    </blockquote>

    {/* --- USER PROFILE --- */}
    <div className="flex items-center gap-5 mt-auto">
      {/* Avatar with dynamic glow */}
      <div className="relative">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-black text-white shadow-xl bg-[var(--jiwa-red)] transition-transform duration-500 group-hover:-rotate-6">
          {rev.avatar}
        </div>
        {/* Subtle decorative ring */}
        <div className="absolute -inset-1 rounded-2xl border border-[var(--jiwa-red)]/20 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      </div>

      <div>
        <p className="font-black text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--text-primary)]">
          {rev.name}
        </p>
        <p className="text-[10px] opacity-40 font-bold uppercase tracking-[0.15em] mt-1 text-[var(--text-primary)]">
          {rev.role}
        </p>
      </div>
    </div>
  </motion.div>
);
