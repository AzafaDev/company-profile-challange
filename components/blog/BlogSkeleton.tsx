"use client";

import React from "react";

/**
 * BlogSkeleton - Meniru struktur BlogCard
 */
export const BlogSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row rounded-[2.5rem] border border-[var(--text-primary)]/10 overflow-hidden bg-[var(--bg-primary)] animate-pulse">
      {/* Image Skeleton */}
      <div className="h-64 md:h-auto md:w-72 lg:w-80 shrink-0 bg-[var(--text-primary)]/10" />

      {/* Content Skeleton */}
      <div className="p-8 md:p-10 flex flex-col flex-1">
        <header className="mb-4">
          {/* Metadata Skeleton */}
          <div className="flex gap-4 mb-4">
            <div className="h-3 w-20 bg-[var(--text-primary)]/10 rounded-full" />
            <div className="h-3 w-24 bg-[var(--text-primary)]/10 rounded-full" />
          </div>

          {/* Title Skeleton */}
          <div className="h-8 w-3/4 bg-[var(--text-primary)]/15 rounded-xl mb-4" />

          {/* Excerpt Skeleton */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-[var(--text-primary)]/5 rounded-md" />
            <div className="h-4 w-5/6 bg-[var(--text-primary)]/5 rounded-md" />
          </div>
        </header>

        {/* Footer Skeleton */}
        <div className="mt-auto pt-6 border-t border-[var(--text-primary)]/10">
          <div className="h-4 w-32 bg-[var(--jiwa-red)]/10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

/**
 * SidebarSkeleton - Meniru struktur BlogSidebar
 */
export const SidebarSkeleton = () => {
  return (
    <aside className="lg:w-1/4 space-y-8 animate-pulse">
      {/* Search Bar Skeleton */}
      <div className="h-14 w-full bg-[var(--text-primary)]/10 rounded-2xl" />

      {/* Categories Box Skeleton */}
      <div className="p-8 rounded-[2.5rem] border border-[var(--text-primary)]/10 bg-[var(--bg-primary)] shadow-sm">
        {/* Category Title */}
        <div className="h-3 w-24 bg-[var(--jiwa-red)]/20 rounded-full mb-8" />

        {/* Category List Items */}
        <div className="space-y-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="h-4 w-20 bg-[var(--text-primary)]/10 rounded-md" />
              {/* Optional: Dot skeleton for active item */}
              {i === 0 && (
                <div className="h-1.5 w-1.5 rounded-full bg-[var(--jiwa-red)]/20" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Promo Box Skeleton (Optional matching BlogSidebar) */}
      <div className="h-48 w-full bg-[var(--jiwa-red)]/5 rounded-[2.5rem] border border-[var(--jiwa-red)]/10" />
    </aside>
  );
};
