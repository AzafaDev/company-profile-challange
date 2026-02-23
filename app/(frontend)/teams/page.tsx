"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useThemeStore } from "@/store/useThemeStore";
import { Mail, Linkedin, Twitter, Coffee, Quote, ExternalLink } from "lucide-react";

interface TeamMember {
  name: { first: string; last: string };
  picture: { large: string };
  email: string;
}

const TeamsPage = () => {
  const { theme } = useThemeStore();
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  const JIWA_RED = "#B22222";
  const IS_DARK = theme === "dark";
  const TEXT_PRIMARY = IS_DARK ? "#F5F5F5" : "#1A1A1A";
  const BG_MAIN = IS_DARK ? "#0D0D0D" : "#FFFFFF";
  const CARD_BG = IS_DARK ? "#161616" : "#F9F9F7";
  const BORDER = IS_DARK ? "#262626" : "#E5E5E5";

  const getRole = (idx: number) => {
    const roles = ["Chief Executive", "Head of Roastery", "Creative Director", "Operations Lead", "Lead Barista", "Quality Control"];
    return roles[idx % roles.length];
  };

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6&seed=jiwa-pro")
      .then((res) => res.json())
      .then((data) => {
        setTeam(data.results);
        setLoading(false);
      });
  }, []);

  return (
    <main className="pt-24 min-h-screen transition-colors duration-500 pb-20" style={{ backgroundColor: BG_MAIN }}>
      
      {/* HEADER - Compact & Bold */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-3 rounded-2xl"
            style={{ backgroundColor: `${JIWA_RED}10` }}
          >
            <Coffee size={32} style={{ color: JIWA_RED }} />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6" style={{ color: TEXT_PRIMARY }}>
            The <span style={{ color: JIWA_RED }}>Dream</span> Team.
          </h1>
          <p className="max-w-xl opacity-50 text-base md:text-lg leading-relaxed" style={{ color: TEXT_PRIMARY }}>
            Sekumpulan individu yang berjanji memberikan dedikasi terbaik untuk setiap cangkir kopi yang sampai ke tangan Anda.
          </p>
        </div>
      </section>

      {/* TEAM GRID - Using Small Avatar Logic */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            [1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-64 rounded-[2.5rem] animate-pulse bg-zinc-100 dark:bg-zinc-900" />
            ))
          ) : (
            team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-[3rem] border transition-all duration-300 group relative overflow-hidden"
                style={{ backgroundColor: CARD_BG, borderColor: BORDER }}
              >
                {/* Decoration Background */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                   <Quote size={80} style={{ color: TEXT_PRIMARY }} />
                </div>

                <div className="flex items-center gap-6 mb-8">
                  {/* Small Profile Image (Safe from Pixels) */}
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <div 
                      className="absolute inset-0 rounded-full border-2 border-dashed group-hover:rotate-45 transition-transform duration-500" 
                      style={{ borderColor: JIWA_RED }}
                    />
                    <div className="absolute inset-1.5 rounded-full overflow-hidden border shadow-sm" style={{ borderColor: BORDER }}>
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
                    <h3 className="text-xl font-black tracking-tight" style={{ color: TEXT_PRIMARY }}>
                      {member.name.first} {member.name.last}
                    </h3>
                    <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: JIWA_RED }}>
                      {getRole(idx)}
                    </p>
                  </div>
                </div>

                <p className="text-sm opacity-60 leading-relaxed mb-8" style={{ color: TEXT_PRIMARY }}>
                  Berdedikasi dalam menjaga standar Janji Jiwa dan memastikan setiap Teman Sejiwa mendapatkan pengalaman terbaik.
                </p>

                <div className="flex items-center justify-between pt-6 border-t" style={{ borderColor: BORDER }}>
                  <div className="flex gap-4">
                    <Linkedin size={16} className="cursor-pointer hover:text-red-700 transition-colors" style={{ color: TEXT_PRIMARY }} />
                    <Twitter size={16} className="cursor-pointer hover:text-red-700 transition-colors" style={{ color: TEXT_PRIMARY }} />
                  </div>
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all hover:gap-4" style={{ color: JIWA_RED }}>
                    Profile <ExternalLink size={12} />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* CTA SECTION - Full Contrast */}
      <section className="mt-32 px-6">
        <motion.div 
          className="max-w-5xl mx-auto p-12 md:p-16 rounded-[4rem] text-center border-2 border-dashed relative"
          style={{ borderColor: JIWA_RED }}
        >
          <h2 className="text-3xl md:text-5xl font-black italic mb-6" style={{ color: TEXT_PRIMARY }}>
            Ready to <span style={{ color: JIWA_RED }}>Brew</span> with us?
          </h2>
          <button 
            className="px-12 py-5 rounded-full font-black uppercase text-[11px] tracking-[0.2em] transition-all hover:scale-105 shadow-xl"
            style={{ backgroundColor: JIWA_RED, color: "#fff" }}
          >
            Join The Community
          </button>
        </motion.div>
      </section>
    </main>
  );
};

export default TeamsPage;