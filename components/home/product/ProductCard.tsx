"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface ProductCardProps {
  item: {
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
    img: string;
  };
  index: number;
}

export const ProductCard = ({ item, index }: ProductCardProps) => (
  <motion.div variants={fadeInUp} className="relative group pt-16 h-full">
    {/* --- MAIN CONTAINER --- */}
    <div
      className="relative h-full p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 
                    border border-[var(--text-primary)]/[0.08] dark:border-zinc-800 
                    bg-[var(--bg-primary)] shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] 
                    dark:hover:shadow-red-900/5 flex flex-col items-center md:items-start"
    >
      {/* --- FLOATING IMAGE BOX --- */}
      <div
        className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-40 md:w-48 md:h-48 z-20 
                      group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-700 ease-out"
      >
        <div
          className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl rotate-3 
                          group-hover:rotate-6 transition-transform duration-500 
                          border-4 border-[var(--bg-primary)]"
        >
          <Image
            src={item.img}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 160px, 192px"
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Icon Badge */}
        <div
          className="absolute -bottom-2 -right-2 w-12 h-12 rounded-2xl flex items-center justify-center 
                          text-white shadow-xl z-30 bg-[var(--jiwa-red)] transition-transform duration-500 
                          group-hover:scale-110 group-hover:-rotate-12"
        >
          {item.icon}
        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="mt-32 w-full text-center md:text-left flex flex-col h-full">
        <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-[var(--text-primary)] italic">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed mb-10 min-h-[60px] opacity-60 text-[var(--text-primary)] font-medium">
          {item.description}
        </p>

        {/* Footer Card: Link & Index */}
        <div className="mt-auto flex items-end justify-between w-full">
          <Link
            href={item.link}
            className="group/link inline-flex items-center gap-3 font-black text-[10px] uppercase tracking-[0.3em] transition-all text-[var(--jiwa-red)]"
          >
            <span className="relative">
              Discover More
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--jiwa-red)] transition-all duration-300 group-hover/link:w-full" />
            </span>
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--jiwa-red)]/20 
                            group-hover/link:bg-[var(--jiwa-red)] group-hover/link:text-white transition-all duration-300"
            >
              <Plus size={16} />
            </div>
          </Link>

          {/* Index Number */}
          <span className="text-7xl font-black opacity-[0.03] select-none text-[var(--text-primary)] leading-none -mb-2">
            {index + 1}
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);
