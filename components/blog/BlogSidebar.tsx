"use client";

import React from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

interface BlogSidebarProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  categories: string[];
}

export const BlogSidebar = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
}: BlogSidebarProps) => {
  return (
    <aside className="lg:w-1/4">
      <div className="lg:sticky lg:top-32 space-y-8">
        {/* --- SEARCH INPUT --- */}
        <div className="relative group">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-primary)]/30 group-focus-within:text-[var(--jiwa-red)] transition-colors"
            size={18}
          />
          <input
            type="text"
            placeholder="Cari artikel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 rounded-2xl border border-[var(--text-primary)]/10 outline-none text-sm transition-all focus:border-[var(--jiwa-red)]/50 focus:ring-4 focus:ring-[var(--jiwa-red)]/5 bg-[var(--text-primary)]/[0.02] text-[var(--text-primary)] placeholder:text-[var(--text-primary)]/30"
          />
        </div>

        {/* --- CATEGORIES CARD --- */}
        <div className="p-8 rounded-[2.5rem] border border-[var(--text-primary)]/10 bg-[var(--bg-primary)] shadow-sm">
          <h4 className="font-black uppercase text-[10px] tracking-[0.3em] mb-8 text-[var(--jiwa-red)] border-b border-[var(--text-primary)]/5 pb-4">
            Filter by Topic
          </h4>

          <nav>
            <ul className="space-y-4">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;

                return (
                  <li
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="group cursor-pointer flex items-center justify-between"
                  >
                    <span
                      className={`text-[13px] font-bold uppercase tracking-wider transition-all duration-300 ${
                        isActive
                          ? "text-[var(--jiwa-red)] translate-x-1"
                          : "text-[var(--text-primary)]/50 hover:text-[var(--text-primary)] hover:translate-x-1"
                      }`}
                    >
                      {cat}
                    </span>

                    {isActive && (
                      <motion.div
                        layoutId="active-dot"
                        className="w-1.5 h-1.5 rounded-full bg-[var(--jiwa-red)] shadow-[0_0_10px_rgba(var(--jiwa-red-rgb),0.5)]"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* --- PROMO / AD SLOT (Optional Extra) --- */}
        <div className="p-8 rounded-[2.5rem] bg-[var(--jiwa-red)] text-white overflow-hidden relative group cursor-pointer">
          <div className="relative z-10">
            <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-80">
              Flash Sale
            </p>
            <h5 className="text-xl font-black italic leading-tight mb-4">
              Get 50% Off on your first App order!
            </h5>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Search size={14} className="rotate-90" />
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all" />
        </div>
      </div>
    </aside>
  );
};
