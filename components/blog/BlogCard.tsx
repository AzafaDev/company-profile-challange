"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface BlogPostProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
    image: string;
  };
}

export const BlogCard = ({ post }: BlogPostProps) => {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group flex flex-col md:flex-row rounded-[2.5rem] border border-[var(--text-primary)]/10 overflow-hidden transition-all duration-500 hover:border-[var(--jiwa-red)]/30 bg-[var(--bg-primary)] shadow-sm hover:shadow-2xl"
    >
      {/* --- IMAGE AREA --- */}
      <div className="relative h-64 md:h-auto md:w-72 lg:w-80 shrink-0 overflow-hidden bg-[var(--text-primary)]/5">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          fetchPriority="high"
        />
        {/* Category Badge */}
        <div className="absolute top-6 left-6 z-10">
          <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg bg-[var(--jiwa-red)]">
            {post.category}
          </span>
        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="p-8 md:p-10 flex flex-col flex-1 justify-between">
        <header>
          {/* Metadata */}
          <div className="flex items-center gap-3 mb-4 text-[10px] font-black uppercase tracking-widest text-[var(--text-primary)] opacity-50">
            <div className="flex items-center gap-1.5">
              <User size={12} className="text-[var(--jiwa-red)]" />
              {post.author}
            </div>
            <span className="w-1 h-1 rounded-full bg-[var(--text-primary)]/20" />
            <div className="flex items-center gap-1.5">
              <Calendar size={12} className="text-[var(--jiwa-red)]" />
              {post.date}
            </div>
          </div>

          {/* Title & Excerpt */}
          <h2 className="text-2xl md:text-3xl font-black leading-tight mb-4 tracking-tighter text-[var(--text-primary)] group-hover:text-[var(--jiwa-red)] transition-colors duration-300">
            {post.title}
          </h2>
          <p className="text-sm opacity-60 leading-relaxed mb-6 line-clamp-2 text-[var(--text-primary)] font-medium">
            {post.excerpt}
          </p>
        </header>

        {/* Footer Link */}
        <footer className="pt-6 border-t border-[var(--text-primary)]/10">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[var(--jiwa-red)] transition-all hover:gap-4 group/btn"
          >
            Continue Reading
            <ArrowRight
              size={14}
              className="transition-transform group-hover/btn:translate-x-1"
            />
          </Link>
        </footer>
      </div>
    </motion.article>
  );
};
