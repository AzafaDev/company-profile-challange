"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export const ProductRow = ({ item, idx }: { item: any; idx: number }) => {
  const isEven = idx % 2 === 0;

  return (
    <div 
      className={`py-20 px-8 md:px-12 transition-colors duration-300 ${
        !isEven ? "bg-[var(--text-primary)]/[0.03]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* IMAGE AREA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`relative aspect-square rounded-[2.5rem] overflow-hidden ${!isEven ? "lg:order-2" : "lg:order-1"}`}
        >
          <Image 
            src={item.image} 
            alt={item.title} 
            fill 
            className="object-cover transition-transform duration-700 hover:scale-110" 
          />
          <div className="absolute top-6 left-6 bg-[var(--bg-primary)] px-4 py-2 rounded-full shadow-sm border border-[var(--text-primary)]/10">
            <p className="text-[10px] font-black uppercase tracking-widest text-[var(--jiwa-red)]">
              {item.category}
            </p>
          </div>
        </motion.div>

        {/* CONTENT AREA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`${!isEven ? "lg:order-1" : "lg:order-2"}`}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-[var(--text-primary)]">
            {item.title}
          </h2>
          <p className="text-xl font-bold mb-6 italic text-[var(--jiwa-red)]">
            {item.price}
          </p>
          <p className="text-lg opacity-70 leading-relaxed mb-8 text-[var(--text-primary)]">
            {item.description}
          </p>

          {/* TESTIMONIAL MINI CARD */}
          <div className="p-6 rounded-2xl border-l-4 mb-8 bg-[var(--bg-primary)] border-[var(--jiwa-red)] shadow-sm">
            <div className="flex gap-1 mb-2 text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <p className="italic text-sm opacity-80 mb-3 text-[var(--text-primary)]">
              "{item.testimonial}"
            </p>
            <p className="text-[10px] font-black uppercase tracking-widest text-[var(--text-primary)] opacity-50">
              — {item.client}
            </p>
          </div>

          <button className="flex items-center gap-3 px-8 py-4 text-[11px] font-black uppercase tracking-widest text-[var(--bg-primary)] transition-all duration-300 bg-[var(--jiwa-red)] hover:opacity-90 shadow-lg shadow-red-900/20">
            Order Now <ShoppingCart size={16} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};