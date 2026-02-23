"use client";
import React from "react";

export const DetailSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 animate-pulse">
      {/* Back Button Skeleton */}
      <div className="h-4 w-32 bg-[var(--text-primary)]/10 rounded-full mb-12" />

      {/* Header Skeleton */}
      <header className="mb-12">
        <div className="flex gap-4 mb-8">
          <div className="h-8 w-24 bg-[var(--jiwa-red)]/20 rounded-full" />
          <div className="h-8 w-32 bg-[var(--text-primary)]/10 rounded-full" />
        </div>
        <div className="h-12 md:h-20 w-full bg-[var(--text-primary)]/10 rounded-3xl mb-4" />
        <div className="h-12 md:h-20 w-3/4 bg-[var(--text-primary)]/10 rounded-3xl mb-10" />
        
        <div className="flex items-center gap-4 pt-8 border-t border-[var(--text-primary)]/10">
          <div className="w-12 h-12 rounded-full bg-[var(--text-primary)]/10" />
          <div className="space-y-2">
            <div className="h-3 w-16 bg-[var(--jiwa-red)]/20 rounded-full" />
            <div className="h-4 w-32 bg-[var(--text-primary)]/10 rounded-full" />
          </div>
        </div>
      </header>

      {/* Featured Image Skeleton */}
      <div className="aspect-[16/9] w-full bg-[var(--text-primary)]/5 rounded-[3.5rem] mb-16" />

      {/* Content Skeleton */}
      <div className="space-y-6">
        <div className="h-6 w-full bg-[var(--text-primary)]/5 rounded-xl" />
        <div className="h-6 w-full bg-[var(--text-primary)]/5 rounded-xl" />
        <div className="h-6 w-2/3 bg-[var(--text-primary)]/5 rounded-xl" />
        
        <div className="py-10">
          <div className="h-40 w-full bg-[var(--text-primary)]/[0.03] rounded-[2rem] border-l-8 border-[var(--text-primary)]/10" />
        </div>

        <div className="h-6 w-full bg-[var(--text-primary)]/5 rounded-xl" />
        <div className="h-6 w-5/6 bg-[var(--text-primary)]/5 rounded-xl" />
      </div>
    </div>
  );
};