"use client";

import React from "react";
import { Coffee, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

// --- DATA CONFIGURATION ---
const PILLARS = [
  {
    id: "01",
    title: "The Quality",
    desc: "Biji kopi pilihan dari petani lokal, diproses dengan presisi tinggi.",
    className: "md:col-span-4 bg-[var(--jiwa-red)] text-white",
    isNumber: true,
  },
  {
    id: "02",
    title: "The Passion",
    desc: "Setiap barista menyeduh dengan empati dan kehangatan.",
    className: "md:col-span-4 bg-zinc-900 dark:bg-zinc-800 text-white",
    icon: <Heart size={24} fill="var(--jiwa-red)" color="var(--jiwa-red)" />,
  },
];

export const PillarBento = () => {
  return (
    <motion.div
      variants={fadeInUp}
      className="grid grid-cols-1 md:grid-cols-12 gap-6"
    >
      {/* --- Main Hero Pillar --- */}
      <div className="md:col-span-8 p-10 md:p-16 rounded-[3.5rem] border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between min-h-[450px] bg-[var(--bg-primary)]">
        <div className="w-16 h-16 rounded-3xl flex items-center justify-center mb-10 shadow-lg bg-[var(--jiwa-red)]/10 text-[var(--jiwa-red)]">
          <Coffee size={32} />
        </div>
        <div>
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none mb-8 text-[var(--text-primary)]">
            Brewing <span className="text-[var(--jiwa-red)]">Culture.</span>
          </h2>
          <p className="max-w-md text-base md:text-lg opacity-70 text-[var(--text-primary)]">
            Melampaui sekadar rasa, kami membangun standar baru melalui tiga
            pilar utama yang membentuk karakter setiap cangkir.
          </p>
        </div>
      </div>

      {/* --- Dynamic Small Pillars --- */}
      {PILLARS.map((pillar) => (
        <div
          key={pillar.id}
          className={`p-10 rounded-[3.5rem] flex flex-col justify-between relative overflow-hidden group shadow-xl transition-all duration-500 ${pillar.className}`}
        >
          {pillar.isNumber ? (
            <span className="text-8xl font-black opacity-20 italic group-hover:scale-110 transition-transform duration-500">
              {pillar.id}
            </span>
          ) : (
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10">
              {pillar.icon}
            </div>
          )}
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">
              {pillar.title}
            </h3>
            <p
              className={`text-sm leading-relaxed ${pillar.isNumber ? "opacity-80" : "opacity-60"}`}
            >
              {pillar.desc}
            </p>
          </div>
        </div>
      ))}

      {/* --- Community Footer Section --- */}
      <div className="md:col-span-8 p-10 md:p-14 rounded-[3.5rem] border-2 border-dashed border-zinc-300 dark:border-zinc-700 flex flex-col md:flex-row items-center gap-10 bg-[var(--bg-primary)]">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-4xl font-black italic tracking-tighter mb-4 text-[var(--text-primary)]">
            Community Rooted.
          </h3>
          <p className="text-sm max-w-sm opacity-60 text-[var(--text-primary)]">
            Menjadi ruang inklusif bagi Teman Sejiwa untuk bertukar ide.
          </p>
        </div>
        <div className="flex -space-x-4">
          <AvatarGroup limit={4} />
        </div>
      </div>
    </motion.div>
  );
};

// --- HELPER COMPONENT ---
const AvatarGroup = ({ limit }: { limit: number }) => (
  <>
    {[...Array(limit)].map((_, i) => (
      <div
        key={i}
        className="w-14 h-14 rounded-full border-4 border-[var(--bg-primary)] bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shadow-md hover:z-10 transition-all hover:-translate-y-1 cursor-pointer"
      >
        <Users size={20} className="text-[var(--jiwa-red)]" />
      </div>
    ))}
  </>
);
