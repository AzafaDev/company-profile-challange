"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { containerVariants, fadeInUp, fadeInScale } from "@/lib/animations";
import { TeamCard } from "@/components/about/TeamCard";
import { PillarBento } from "@/components/about/PillarBento";

const AboutPage = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=4&seed=jiwa")
      .then((res) => res.json())
      .then((data) => setTeam(data.results));
  }, []);

  return (
    <main className="pt-20 bg-[var(--bg-primary)] transition-colors duration-500">
      
      {/* HERO SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-7 order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-[var(--jiwa-red)]" />
              <span className="font-black tracking-[0.4em] text-[10px] uppercase text-[var(--jiwa-red)]">Since 2018</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-10 italic leading-[0.85] tracking-tighter text-[var(--text-primary)]">
              Kopi Dari <br /> <span className="text-[var(--jiwa-red)]">Hati.</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-8 text-base leading-relaxed opacity-70 text-[var(--text-primary)]">
              <p>Janji Jiwa lahir dari misi menyajikan kopi kualitas dunia untuk setiap lapisan masyarakat Indonesia.</p>
              <p>Kami menyebut pelanggan kami "Teman Sejiwa", sebuah komunitas yang dibangun atas kepercayaan.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInScale} className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
              <Image src="/janji-jiwa-history.webp" alt="History" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 bg-[var(--bg-primary)] hidden md:block">
              <Quote size={32} className="text-[var(--jiwa-red)] mb-2" />
              <p className="text-[10px] font-black uppercase tracking-widest text-[var(--text-primary)]">Real Taste, Real Soul.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* PILLARS SECTION */}
      <section className="py-24 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-900/30 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <PillarBento />
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <motion.div variants={fadeInUp} className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
              <span className="font-black tracking-[0.4em] text-[10px] uppercase block mb-4 text-[var(--jiwa-red)]">The Creators</span>
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-[var(--text-primary)]">
                Meet The <span className="text-[var(--jiwa-red)]">Faces.</span>
              </h2>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-sm max-w-xs mx-auto lg:mx-0 text-center lg:text-left opacity-60 text-[var(--text-primary)]">
              Orang-orang dibalik layar yang memastikan janji kami sampai ke tangan Anda.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <TeamCard key={idx} member={member} idx={idx} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6">
        <motion.div 
          variants={fadeInScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden shadow-2xl bg-[var(--jiwa-red)] group"
        >
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none select-none flex items-center justify-center overflow-hidden">
            <h2 className="text-[20vw] font-black italic text-white">JANJI JIWA</h2>
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-12 italic tracking-tighter leading-none">Ready to Brew <br /> Your Story?</h2>
            <button className="bg-white text-black px-12 py-5 rounded-full font-black uppercase text-[11px] tracking-[0.2em] transition-all hover:scale-105 flex items-center gap-4 mx-auto shadow-xl">
              Join The Family <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;