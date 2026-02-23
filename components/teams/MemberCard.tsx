"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, ExternalLink, Quote } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface MemberCardProps {
  member: any;
  idx: number;
}

export const MemberCard = ({ member, idx }: MemberCardProps) => {
  const roles = ["Chief Executive", "Head of Roastery", "Creative Director", "Operations Lead", "Lead Barista", "Quality Control"];
  const role = roles[idx % roles.length];

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="p-8 rounded-[3rem] border border-[var(--text-primary)]/10 transition-all duration-300 group relative overflow-hidden bg-[var(--text-primary)]/[0.02]"
    >
      {/* Decoration Background */}
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
        <Quote size={80} className="text-[var(--text-primary)]" />
      </div>

      <div className="flex items-center gap-6 mb-8">
        {/* Profile Image with Dashed Border */}
        <div className="relative w-20 h-20 flex-shrink-0">
          <div 
            className="absolute inset-0 rounded-full border-2 border-dashed group-hover:rotate-45 transition-transform duration-500 border-[var(--jiwa-red)]" 
          />
          <div className="absolute inset-1.5 rounded-full overflow-hidden border border-[var(--text-primary)]/10 shadow-sm bg-[var(--bg-primary)]">
            <Image
              src={member.picture.large}
              alt={member.name.first}
              width={80}
              height={80}
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-black tracking-tight text-[var(--text-primary)]">
            {member.name.first} {member.name.last}
          </h3>
          <p className="text-[10px] font-black uppercase tracking-widest text-[var(--jiwa-red)]">
            {role}
          </p>
        </div>
      </div>

      <p className="text-sm opacity-60 leading-relaxed mb-8 text-[var(--text-primary)]">
        Berdedikasi dalam menjaga standar Janji Jiwa dan memastikan setiap Teman Sejiwa mendapatkan pengalaman terbaik.
      </p>

      {/* Socials & Profile Link */}
      <div className="flex items-center justify-between pt-6 border-t border-[var(--text-primary)]/10">
        <div className="flex gap-4">
          <Linkedin size={16} className="cursor-pointer hover:text-[var(--jiwa-red)] transition-colors text-[var(--text-primary)]" />
          <Twitter size={16} className="cursor-pointer hover:text-[var(--jiwa-red)] transition-colors text-[var(--text-primary)]" />
        </div>
        <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[var(--jiwa-red)] transition-all hover:gap-4">
          Profile <ExternalLink size={12} />
        </button>
      </div>
    </motion.div>
  );
};