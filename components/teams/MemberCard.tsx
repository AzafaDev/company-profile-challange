"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, ExternalLink, Quote } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface MemberCardProps {
  member: {
    name: { first: string; last: string };
    picture: { large: string };
  };
  idx: number;
}

const ROLES = [
  "Chief Executive",
  "Head of Roastery",
  "Creative Director",
  "Operations Lead",
  "Lead Barista",
  "Quality Control",
];

export const MemberCard = ({ member, idx }: MemberCardProps) => {
  const role = ROLES[idx % ROLES.length];

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
      className="group relative p-8 md:p-10 rounded-[3rem] border border-[var(--text-primary)]/[0.08] bg-[var(--bg-primary)] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
    >
      {/* --- BACKGROUND DECORATION --- */}
      <div
        className="absolute -top-4 -right-4 p-8 opacity-[0.03] group-hover:opacity-[0.1] group-hover:rotate-12 transition-all duration-700 pointer-events-none"
        aria-hidden="true"
      >
        <Quote
          size={120}
          className="text-[var(--text-primary)]"
          strokeWidth={1}
        />
      </div>

      <div className="flex items-center gap-6 mb-10 relative z-10">
        {/* --- PROFILE IMAGE WITH ANIMATED BORDER --- */}
        <div className="relative w-24 h-24 flex-shrink-0">
          {/* Dashed Spin Effect */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--jiwa-red)] opacity-40 group-hover:rotate-180 transition-transform duration-[1.5s] ease-in-out" />
          {/* Main Image Container */}
          <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-[var(--bg-primary)] shadow-inner bg-zinc-100 dark:bg-zinc-800">
            <Image
              src={member.picture.large}
              alt={`${member.name.first} ${member.name.last}`}
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-black tracking-tighter leading-none text-[var(--text-primary)] mb-2">
            {member.name.first} <br /> {member.name.last}
          </h3>
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--jiwa-red)]">
            {role}
          </p>
        </div>
      </div>

      {/* --- BIO TEXT --- */}
      <p className="text-sm md:text-base opacity-60 leading-relaxed mb-10 text-[var(--text-primary)] font-medium italic">
        "Berdedikasi dalam menjaga standar Janji Jiwa dan memastikan setiap
        Teman Sejiwa mendapatkan pengalaman terbaik."
      </p>

      {/* --- FOOTER: SOCIALS & PROFILE --- */}
      <div className="flex items-center justify-between pt-8 border-t border-[var(--text-primary)]/[0.08]">
        <div className="flex gap-5">
          <motion.a
            whileHover={{ scale: 1.2, color: "var(--jiwa-red)" }}
            href="#"
            className="text-[var(--text-primary)] transition-colors"
          >
            <Linkedin size={18} strokeWidth={1.5} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, color: "var(--jiwa-red)" }}
            href="#"
            className="text-[var(--text-primary)] transition-colors"
          >
            <Twitter size={18} strokeWidth={1.5} />
          </motion.a>
        </div>

        <button className="group/btn flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--jiwa-red)] transition-all">
          View Profile
          <div className="w-8 h-8 rounded-full flex items-center justify-center border border-[var(--jiwa-red)]/20 group-hover/btn:bg-[var(--jiwa-red)] group-hover/btn:text-white transition-all duration-300">
            <ExternalLink size={12} />
          </div>
        </button>
      </div>
    </motion.div>
  );
};
