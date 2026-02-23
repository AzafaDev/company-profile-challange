"use client";
import React from "react";

export const BlogSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row rounded-[2.5rem] border border-[var(--text-primary)]/10 overflow-hidden bg-[var(--bg-primary)] animate-pulse">
      {/* Image Skeleton */}
      <div className="h-64 md:h-64 md:w-72 lg:w-80 shrink-0 bg-[var(--text-primary)]/10" />
      
      {/* Content Skeleton */}
      <div className="p-8 md:p-10 flex flex-col flex-1 gap-4">
        <div className="flex gap-4">
          <div className="h-3 w-20 bg-[var(--text-primary)]/10 rounded-full" />
          <div className="h-3 w-24 bg-[var(--text-primary)]/10 rounded-full" />
        </div>
        <div className="h-8 w-3/4 bg-[var(--text-primary)]/15 rounded-xl" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-[var(--text-primary)]/5 rounded-md" />
          <div className="h-4 w-5/6 bg-[var(--text-primary)]/5 rounded-md" />
        </div>
        <div className="mt-auto pt-6 border-t border-[var(--text-primary)]/10">
          <div className="h-4 w-32 bg-[var(--jiwa-red)]/10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export const SidebarSkeleton = () => {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="h-14 w-full bg-[var(--text-primary)]/10 rounded-2xl" />
      <div className="p-8 rounded-[2.5rem] border border-[var(--text-primary)]/10">
        <div className="h-4 w-24 bg-[var(--jiwa-red)]/20 rounded-full mb-8" />
        <div className="space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-4 w-full bg-[var(--text-primary)]/10 rounded-md" />
          ))}
        </div>
      </div>
    </div>
  );
};