"use client";
import { fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

// Tambahkan delay: number di sini
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  delay?: number; // Pakai tanda tanya (?) agar opsional
}

export const FeatureCard = ({ icon: Icon, title, desc, delay }: FeatureCardProps) => (
  <motion.div 
    variants={fadeInUp}
    // Jika kamu ingin pakai stagger otomatis, delay ini tidak wajib dipakai di transisi,
    // tapi harus ada di definisi agar TS tidak marah.
    className="p-6 rounded-2xl border border-zinc-200/50 dark:border-transparent hover:border-zinc-300 dark:hover:border-zinc-800 transition-all bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md"
  >
    <div className="mb-4 w-10 h-10 rounded-full flex items-center justify-center bg-[var(--jiwa-red)]/10 text-[var(--jiwa-red)]">
      <Icon size={20} />
    </div>

    <h4 className="font-bold text-sm uppercase tracking-wider mb-2 text-zinc-900 dark:text-zinc-100">
      {title}
    </h4>

    <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium">
      {desc}
    </p>
  </motion.div>
);