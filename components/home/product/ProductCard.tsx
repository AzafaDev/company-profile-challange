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
  <motion.div variants={fadeInUp} className="relative group pt-16">
    <div className="relative h-full p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 
                    border border-zinc-200 dark:border-zinc-800 
                    bg-[var(--bg-primary)] shadow-sm hover:shadow-2xl 
                    hover:shadow-red-900/10 flex flex-col items-start">
      
      {/* Floating Image dengan Border adaptif */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-40 md:w-48 md:h-48 z-20 group-hover:-translate-y-4 transition-transform duration-500">
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl rotate-3 group-hover:rotate-6 transition-transform border-4 border-white dark:border-zinc-800">
             <Image src={item.img} alt={item.title} fill className="object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-xl z-30 bg-[var(--jiwa-red)]">
           {item.icon}
          </div>
      </div>

      <div className="mt-32 w-full text-center md:text-left">
        {/* Title & Desc mengikuti --text-primary */}
        <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-[var(--text-primary)]">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed mb-10 min-h-[60px] opacity-70 text-[var(--text-primary)] font-medium">
          {item.description}
        </p>
        
        <Link
          href={item.link}
          className="group/link inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-[0.3em] transition-all text-[var(--jiwa-red)]"
        >
          <span>Discover More</span>
          <div className="w-8 h-8 rounded-full flex items-center justify-center border border-zinc-300 dark:border-zinc-700 group-hover/link:bg-[var(--jiwa-red)] group-hover/link:text-white transition-all">
            <Plus size={14} />
          </div>
        </Link>
      </div>
    </div>

    {/* Index Number adaptif */}
    <span className="absolute bottom-6 right-10 text-8xl font-black opacity-[0.05] select-none text-[var(--text-primary)]">
      0{index + 1}
    </span>
  </motion.div>
);