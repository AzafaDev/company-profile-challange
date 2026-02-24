"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import { containerVariants, fadeInUp } from "@/lib/animations";
import { MemberCard } from "@/components/teams/MemberCard";

const TeamsPage = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- DATA FETCHING ---
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6&seed=jiwa-pro")
      .then((res) => res.json())
      .then((data) => {
        setTeam(data.results);
        setLoading(false);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // --- SEO STRUCTURED DATA ---
  const teamJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Janji Jiwa Team Members",
    numberOfItems: team.length,
    itemListElement: team.map((member: any, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${member.name.first} ${member.name.last}`,
      image: member.picture.large,
    })),
  };

  return (
    <main className="pt-30 min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamJsonLd) }}
      />

      {/* --- HEADER SECTION --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-3 rounded-2xl bg-[var(--jiwa-red)]/10 text-[var(--jiwa-red)]"
          >
            <Coffee size={32} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6"
          >
            The <span className="text-[var(--jiwa-red)]">Dream</span> Team.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-xl opacity-60 text-base md:text-lg leading-relaxed"
          >
            Individu yang berdedikasi memberikan yang terbaik untuk setiap
            cangkir kopi Teman Sejiwa.
          </motion.p>
        </div>
      </section>

      {/* --- TEAM GRID --- */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {loading
            ? [...Array(6)].map((_, n) => (
                <div
                  key={n}
                  className="h-72 rounded-[3rem] animate-pulse bg-[var(--text-primary)]/[0.05]"
                />
              ))
            : team.map((member, idx) => (
                <MemberCard key={idx} member={member} idx={idx} />
              ))}
        </motion.div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="mt-32 px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto p-12 md:p-16 rounded-[4rem] text-center border-2 border-dashed border-[var(--jiwa-red)] relative"
        >
          <h2 className="text-3xl md:text-5xl font-black italic mb-6">
            Ready to <span className="text-[var(--jiwa-red)]">Brew</span> with
            us?
          </h2>
          <button className="px-12 py-5 rounded-full font-black uppercase text-[11px] tracking-[0.2em] transition-all hover:scale-105 bg-[var(--jiwa-red)] text-white shadow-xl shadow-red-900/20">
            Join The Community
          </button>
        </motion.div>
      </section>
    </main>
  );
};

export default TeamsPage;
