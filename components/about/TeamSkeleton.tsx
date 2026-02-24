"use client";

import React from "react";

interface TeamSkeletonProps {
  count?: number;
}

export const TeamSkeleton = ({ count = 6 }: TeamSkeletonProps) => {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="p-10 rounded-[3rem] border border-zinc-100 dark:border-zinc-800/50 bg-[var(--bg-primary)] flex flex-col items-center animate-pulse"
        >
          {/* --- Avatar Skeleton --- */}
          <div className="relative w-28 h-28 mb-6">
            <div className="absolute inset-0 rounded-full border border-dashed border-zinc-200 dark:border-zinc-800" />
            <div className="absolute inset-2 rounded-full bg-[var(--text-primary)]/10" />
          </div>

          {/* --- Text Content Skeleton --- */}
          <div className="w-full flex flex-col items-center space-y-4">
            {/* Name Skeleton */}
            <div className="h-5 w-3/4 bg-[var(--text-primary)]/10 rounded-full" />

            {/* Role Skeleton */}
            <div className="h-3 w-1/3 bg-[var(--jiwa-red)]/10 rounded-full" />
          </div>
        </div>
      ))}
    </>
  );
};
