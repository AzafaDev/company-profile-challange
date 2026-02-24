"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  delay?: number;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  desc,
  delay = 0,
}: FeatureCardProps) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay }} // Memungkinkan stagger manual jika tidak menggunakan containerVariants
    className="group p-6 rounded-3xl border border-[var(--text-primary)]/5 bg-[var(--bg-primary)] hover:border-[var(--jiwa-red)]/20 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[var(--jiwa-red)]/5"
  >
    {/* Icon Container with Hover Animation */}
    <div className="mb-5 w-12 h-12 rounded-2xl flex items-center justify-center bg-[var(--jiwa-red)]/10 text-[var(--jiwa-red)] transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110">
      <Icon size={22} strokeWidth={2.5} />
    </div>

    {/* Title */}
    <h4 className="font-black text-[11px] uppercase tracking-[0.2em] mb-3 text-[var(--text-primary)] italic">
      {title}
    </h4>

    {/* Description */}
    <p className="text-sm leading-relaxed text-[var(--text-primary)] opacity-60 font-medium group-hover:opacity-80 transition-opacity">
      {desc}
    </p>
  </motion.div>
);
