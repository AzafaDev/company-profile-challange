"use client";
import React from "react";

export const TeamSkeleton = () => {
  return (
    // Kita buat 4 skeleton item sesuai jumlah results di fetch kamu
    <>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex flex-col animate-pulse">
          {/* Avatar Skeleton */}
          <div className="relative aspect-[4/5] rounded-[2.5rem] bg-[var(--text-primary)]/10 mb-6" />
          
          {/* Text Skeleton */}
          <div className="space-y-3">
            <div className="h-4 w-2/3 bg-[var(--jiwa-red)]/20 rounded-full" />
            <div className="h-6 w-full bg-[var(--text-primary)]/10 rounded-full" />
            <div className="h-3 w-1/2 bg-[var(--text-primary)]/5 rounded-full" />
          </div>
        </div>
      ))}
    </>
  );
};