"use client";

export const HeroBackgroundText = () => (
  // Wrapper: Posisi tengah, z-index paling belakang, sembunyi di mobile
  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full select-none pointer-events-none whitespace-nowrap z-0 hidden lg:block overflow-hidden">
    {/* Teks Raksasa: Warna & Opacity otomatis mengikuti CSS Variable tema */}
    <h1
      className="text-[25vw] font-black leading-none uppercase italic transition-opacity duration-500"
      style={{
        color: "var(--text-primary)",
        opacity: "var(--bg-text-opacity, 0.02)",
      }}
    >
      KOPI DARI HATI
    </h1>
  </div>
);
