"use client";

import React from "react";

export const HeroBackgroundText = () => (
  // Wrapper: Absolut, posisi tengah vertikal, di belakang konten utama (z-0)
  <div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen select-none pointer-events-none whitespace-nowrap z-0 hidden lg:block overflow-hidden"
    aria-hidden="true"
  >
    {/* Teks Raksasa: 
      Menggunakan text-transparent dan text-stroke untuk tampilan yang lebih modern 
      dan tidak berat secara visual.
    */}
    <h2
      className="text-[28vw] font-black leading-none uppercase italic opacity-[0.03] transition-all duration-700 tracking-tighter text-transparent"
      style={{
        WebkitTextStroke: "1px var(--text-primary)",
      }}
    >
      KOPI DARI HATI
    </h2>
  </div>
);
