"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface TeamCardProps {
  member: any;
  idx: number;
}

export const TeamCard = ({ member, idx }: TeamCardProps) => {
  const roles = ["Founder", "Head Barista", "Operations", "Quality Control"];
  
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative p-10 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 transition-all duration-500 text-center bg-[var(--bg-primary)]"
    >
      <div className="relative w-28 h-28 mx-auto mb-6">
        <div 
          className="absolute inset-0 rounded-full border border-dashed group-hover:rotate-180 transition-transform duration-1000 border-[var(--jiwa-red)]/40" 
        />
        <div className="absolute inset-2 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 shadow-inner bg-zinc-100 dark:bg-zinc-800">
          <Image 
            src={member.picture.large} 
            alt={member.name.first} 
            fill 
            className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500" 
          />
        </div>
      </div>
      <h4 className="font-bold text-lg text-[var(--text-primary)]">
        {member.name.first} {member.name.last}
      </h4>
      <p className="text-[9px] font-black uppercase tracking-widest mt-2 text-[var(--jiwa-red)]">
        {roles[idx] || "Team Member"}
      </p>
    </motion.div>
  );
};