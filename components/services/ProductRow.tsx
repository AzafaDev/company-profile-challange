"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface ProductRowProps {
  item: {
    title: string;
    price: string;
    description: string;
    image: string;
    category: string;
    testimonial: string;
    client: string;
  };
  idx: number;
}

export const ProductRow = ({ item, idx }: ProductRowProps) => {
  const isEven = idx % 2 === 0;

  return (
    <section
      className={`py-24 px-8 md:px-12 transition-colors duration-500 overflow-hidden ${
        !isEven
          ? "bg-[var(--text-primary)]/[0.02] dark:bg-white/[0.01]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* --- IMAGE AREA: PARALLAX READY --- */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`relative aspect-square rounded-[3rem] overflow-hidden group shadow-2xl ${
            !isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />

          {/* Subtle Corner Badge */}
          <div className="absolute top-8 left-8 bg-[var(--bg-primary)]/90 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-xl border border-white/20">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--jiwa-red)]">
              {item.category}
            </p>
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* --- CONTENT AREA --- */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className={`flex flex-col items-start ${!isEven ? "lg:order-1" : "lg:order-2"}`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter text-[var(--text-primary)] italic leading-none">
            {item.title}
          </h2>

          <p className="text-2xl font-black mb-8 italic text-[var(--jiwa-red)] tracking-tight">
            {item.price}
          </p>

          <p className="text-lg opacity-60 leading-relaxed mb-10 text-[var(--text-primary)] font-medium max-w-xl">
            {item.description}
          </p>

          {/* TESTIMONIAL MINI CARD: GLASSMORPHISM */}
          <div className="relative p-7 rounded-[2rem] border-l-4 mb-10 bg-[var(--bg-primary)] border-[var(--jiwa-red)] shadow-[0_15px_40px_rgba(0,0,0,0.05)] dark:shadow-none dark:border-zinc-800">
            <div className="flex gap-1.5 mb-3 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" stroke="none" />
              ))}
            </div>
            <p className="italic text-base font-bold leading-relaxed mb-4 text-[var(--text-primary)]">
              "{item.testimonial}"
            </p>
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[var(--jiwa-red)]" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-primary)] opacity-40">
                {item.client}
              </p>
            </div>
          </div>

          {/* ACTION BUTTON */}
          <button className="group relative flex items-center gap-4 px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-white bg-[var(--jiwa-red)] transition-all duration-500 rounded-full hover:shadow-2xl hover:shadow-red-900/40 active:scale-95">
            Order Now
            <ShoppingCart
              size={18}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
