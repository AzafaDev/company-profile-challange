"use client";
import React from "react";
import { Coffee, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export const PillarBento = () => (
  <motion.div 
    variants={fadeInUp}
    className="grid grid-cols-1 md:grid-cols-12 gap-6"
  >
    {/* Main Pillar */}
    <div className="md:col-span-8 p-10 md:p-16 rounded-[3.5rem] border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between min-h-[450px] bg-[var(--bg-primary)]">
      <div className="w-16 h-16 rounded-3xl flex items-center justify-center mb-10 shadow-lg bg-[var(--jiwa-red)]/10 text-[var(--jiwa-red)]">
        <Coffee size={32} />
      </div>
      <div>
        <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none mb-8 text-[var(--text-primary)]">
          Brewing <span className="text-[var(--jiwa-red)]">Culture.</span>
        </h2>
        <p className="max-w-md text-base md:text-lg opacity-70 text-[var(--text-primary)]">
          Melampaui sekadar rasa, kami membangun standar baru melalui tiga pilar utama yang membentuk karakter setiap cangkir.
        </p>
      </div>
    </div>

    {/* Small Pillar 1 */}
    <div className="md:col-span-4 p-10 rounded-[3.5rem] text-white flex flex-col justify-between relative overflow-hidden group shadow-xl bg-[var(--jiwa-red)]">
      <span className="text-8xl font-black opacity-20 italic group-hover:scale-110 transition-transform duration-500">01</span>
      <div>
        <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">The Quality</h3>
        <p className="text-sm opacity-80 leading-relaxed">Biji kopi pilihan dari petani lokal, diproses dengan presisi tinggi.</p>
      </div>
    </div>

    {/* Small Pillar 2 */}
    <div className="md:col-span-4 p-10 rounded-[3.5rem] flex flex-col justify-between min-h-[350px] group transition-all bg-zinc-900 dark:bg-zinc-800">
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10">
        <Heart size={24} fill="var(--jiwa-red)" color="var(--jiwa-red)" />
      </div>
      <div className="text-white">
        <h3 className="text-2xl font-black uppercase tracking-tighter mb-3">The Passion</h3>
        <p className="text-sm opacity-60 leading-relaxed">Setiap barista menyeduh dengan empati dan kehangatan.</p>
      </div>
    </div>

    {/* Community Section */}
    <div className="md:col-span-8 p-10 md:p-14 rounded-[3.5rem] border-2 border-dashed border-zinc-300 dark:border-zinc-700 flex flex-col md:flex-row items-center gap-10 bg-[var(--bg-primary)]">
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-4xl font-black italic tracking-tighter mb-4 text-[var(--text-primary)]">Community Rooted.</h3>
        <p className="text-sm max-w-sm opacity-60 text-[var(--text-primary)]">Menjadi ruang inklusif bagi Teman Sejiwa untuk bertukar ide.</p>
      </div>
      <div className="flex -space-x-4">
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="w-14 h-14 rounded-full border-4 border-[var(--bg-primary)] bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shadow-md">
            <Users size={20} className="text-[var(--jiwa-red)]" />
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);