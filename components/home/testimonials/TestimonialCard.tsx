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
    className={`p-8 md:p-10 rounded-[2.5rem] relative group border 
                border-zinc-200 dark:border-zinc-800 transition-all duration-500 
                shadow-sm hover:shadow-2xl bg-[var(--bg-primary)]
                ${index === 1 ? 'md:mt-12' : ''}`} // Efek naik turun kartu
  >
    {/* Large Quote Icon */}
    <Quote 
      className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity" 
      size={48} 
      style={{ color: "var(--jiwa-red)" }} 
    />

    <div className="flex gap-1 mb-8">
      {[...Array(rev.rating)].map((_, i) => (
        <Star key={i} size={12} fill="var(--jiwa-red)" stroke="var(--jiwa-red)" />
      ))}
    </div>

    <blockquote className="text-lg md:text-xl font-bold leading-relaxed italic mb-10 tracking-tight text-[var(--text-primary)]">
      "{rev.comment}"
    </blockquote>

    <div className="flex items-center gap-4">
      {/* Avatar Placeholder */}
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xs font-black text-white shadow-lg bg-[var(--jiwa-red)]">
        {rev.avatar}
      </div>
      <div>
        <p className="font-black text-sm uppercase tracking-widest text-[var(--text-primary)]">
          {rev.name}
        </p>
        <p className="text-[10px] opacity-50 font-bold uppercase tracking-wider text-[var(--text-primary)]">
          {rev.role}
        </p>
      </div>
    </div>
  </motion.div>
);