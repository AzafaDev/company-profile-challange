"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export const BlogCard = ({ post }: { post: any }) => {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group flex flex-col md:flex-row rounded-[2.5rem] border border-[var(--text-primary)]/20 overflow-hidden transition-all duration-500 hover:border-[var(--jiwa-red)]/50 hover:shadow-2xl bg-[var(--bg-primary)] shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)]"
    >
      {/* IMAGE AREA */}
      <div className="relative h-64 md:h-auto md:w-72 lg:w-80 shrink-0 overflow-hidden bg-[var(--text-primary)]/5">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6 z-10">
          <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg bg-[var(--jiwa-red)]">
            {post.category}
          </span>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="p-8 md:p-10 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4 text-[10px] font-bold uppercase tracking-widest text-[var(--text-primary)] opacity-60">
            <User size={12} className="text-[var(--jiwa-red)]" /> {post.author}
            <span className="w-1 h-1 rounded-full bg-[var(--text-primary)]/30"></span>
            <Calendar size={12} className="text-[var(--jiwa-red)]" /> {post.date}
          </div>
          <h2 className="text-2xl md:text-3xl font-black leading-tight mb-4 tracking-tighter text-[var(--text-primary)] group-hover:text-[var(--jiwa-red)] transition-colors">
            {post.title}
          </h2>
          <p className="text-sm opacity-70 leading-relaxed mb-6 line-clamp-2 text-[var(--text-primary)]">
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-[var(--text-primary)]/15">
          <Link 
            href={`/blog/${post.slug}`}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[var(--jiwa-red)] transition-all hover:gap-4 font-black"
          >
            Continue Reading <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};