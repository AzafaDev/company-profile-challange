"use client";
import React from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export const BlogSidebar = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory, 
  categories 
}: any) => {
  return (
    <aside className="lg:w-1/4">
      <div className="lg:sticky lg:top-32 space-y-8">
        {/* Search Input */}
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-primary)]/40" size={18} />
          <input
            type="text"
            placeholder="Cari artikel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-[var(--text-primary)]/10 outline-none text-sm transition-all focus:border-[var(--jiwa-red)] bg-[var(--text-primary)]/[0.04] text-[var(--text-primary)] placeholder:text-[var(--text-primary)]/40"
          />
        </div>

        {/* Categories List */}
        <div className="p-8 rounded-[2.5rem] border border-[var(--text-primary)]/20 bg-[var(--bg-primary)] shadow-sm">
          <h4 className="font-black uppercase text-[11px] tracking-[0.2em] mb-8 text-[var(--jiwa-red)] border-b border-[var(--jiwa-red)]/10 pb-4">
            Categories
          </h4>
          <ul className="space-y-5 text-[13px] font-bold text-[var(--text-primary)]">
            {categories.map((cat: string) => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="cursor-pointer transition-all flex items-center justify-between group"
              >
                <span className={`transition-all duration-300 ${
                  selectedCategory === cat 
                    ? "text-[var(--jiwa-red)] scale-105 origin-left" 
                    : "opacity-50 hover:opacity-100 hover:translate-x-2"
                }`}>
                  {cat}
                </span>
                {selectedCategory === cat && (
                  <motion.div layoutId="active-dot" className="w-1.5 h-1.5 rounded-full bg-[var(--jiwa-red)]" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};