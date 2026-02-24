"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface TeamCardProps {
  member: {
    name: { first: string; last: string };
    picture: { large: string };
  };
  idx: number;
}

const ROLES = ["Founder", "Head Barista", "Operations", "Quality Control"];

export const TeamCard = ({ member, idx }: TeamCardProps) => {
  // --- LOGIC ---
  const memberName = `${member.name.first} ${member.name.last}`;
  const memberRole = useMemo(() => ROLES[idx] || "Team Member", [idx]);

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative p-10 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 transition-all duration-500 text-center bg-[var(--bg-primary)] hover:border-[var(--jiwa-red)]/20"
    >
      {/* --- IMAGE CONTAINER --- */}
      <div className="relative w-28 h-28 mx-auto mb-6">
        {/* Animated Dashed Border */}
        <div className="absolute inset-0 rounded-full border border-dashed border-[var(--jiwa-red)]/40 group-hover:rotate-180 transition-transform duration-1000" />

        {/* Profile Picture */}
        <div className="absolute inset-2 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 shadow-inner bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={member.picture.large}
            alt={memberName}
            fill
            sizes="112px"
            className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
          />
        </div>
      </div>

      {/* --- INFO --- */}
      <div className="space-y-2">
        <h4 className="font-bold text-lg text-[var(--text-primary)]">
          {memberName}
        </h4>
        <p className="text-[9px] font-black uppercase tracking-widest text-[var(--jiwa-red)]">
          {memberRole}
        </p>
      </div>
    </motion.div>
  );
};
