"use client";

import React from "react";

export const DetailSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 animate-pulse">
      {/* --- BACK NAVIGATION --- */}
      <div className="h-4 w-32 bg-[var(--text-primary)]/10 rounded-full mb-12" />

      {/* --- HEADER SECTION --- */}
      <header className="mb-12">
        {/* Category & Date Badge */}
        <div className="flex gap-3 mb-8">
          <div className="h-7 w-24 bg-[var(--jiwa-red)]/20 rounded-full" />
          <div className="h-7 w-32 bg-[var(--text-primary)]/10 rounded-full" />
        </div>

        {/* Title Lines */}
        <div className="space-y-4 mb-10">
          <div className="h-12 md:h-16 w-full bg-[var(--text-primary)]/10 rounded-2xl md:rounded-3xl" />
          <div className="h-12 md:h-16 w-3/4 bg-[var(--text-primary)]/10 rounded-2xl md:rounded-3xl" />
        </div>

        {/* Author Metadata */}
        <div className="flex items-center gap-4 pt-8 border-t border-[var(--text-primary)]/10">
          <div className="w-12 h-12 rounded-full bg-[var(--text-primary)]/10 shrink-0" />
          <div className="space-y-2">
            <div className="h-3 w-16 bg-[var(--jiwa-red)]/20 rounded-full" />
            <div className="h-4 w-32 bg-[var(--text-primary)]/10 rounded-full" />
          </div>
        </div>
      </header>

      {/* --- FEATURED MEDIA --- */}
      <div className="aspect-video w-full bg-[var(--text-primary)]/5 rounded-[2.5rem] md:rounded-[3.5rem] mb-16" />

      {/* --- ARTICLE CONTENT --- */}
      <div className="space-y-8">
        {/* Paragraph 1 */}
        <div className="space-y-3">
          <div className="h-5 w-full bg-[var(--text-primary)]/5 rounded-lg" />
          <div className="h-5 w-full bg-[var(--text-primary)]/5 rounded-lg" />
          <div className="h-5 w-[92%] bg-[var(--text-primary)]/5 rounded-lg" />
          <div className="h-5 w-2/3 bg-[var(--text-primary)]/5 rounded-lg" />
        </div>

        {/* Blockquote Skeleton */}
        <div className="py-6 px-8 bg-[var(--text-primary)]/[0.02] rounded-[2rem] border-l-4 border-[var(--jiwa-red)]/30">
          <div className="h-5 w-full bg-[var(--text-primary)]/5 rounded-lg mb-3" />
          <div className="h-5 w-4/5 bg-[var(--text-primary)]/5 rounded-lg" />
        </div>

        {/* Paragraph 2 */}
        <div className="space-y-3">
          <div className="h-5 w-full bg-[var(--text-primary)]/5 rounded-lg" />
          <div className="h-5 w-[96%] bg-[var(--text-primary)]/5 rounded-lg" />
          <div className="h-5 w-5/6 bg-[var(--text-primary)]/5 rounded-lg" />
        </div>
      </div>
    </div>
  );
};
