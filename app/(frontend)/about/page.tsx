"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { containerVariants, fadeInUp, fadeInScale } from "@/lib/animations";
import { TeamCard } from "@/components/about/TeamCard";
import { PillarBento } from "@/components/about/PillarBento";
import { TeamSkeleton } from "@/components/about/TeamSkeleton";
import { useUserStore } from "@/store/useUserStore";

// --- SEO STRUCTURED DATA ---
const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: "Janji Jiwa",
    description:
      "Penyedia kopi kualitas dunia untuk masyarakat Indonesia sejak 2018.",
    foundingDate: "2018",
    brand: { "@type": "Brand", name: "Janji Jiwa" },
  },
};

const AboutPage = () => {
  const { fetchAboutUsers, isLoading, aboutUsers } = useUserStore();

  // --- DATA FETCHING ---
  useEffect(() => {
    fetchAboutUsers();
  }, []);

  return (
    <main className="pt-30 bg-(--bg-primary) transition-colors duration-500 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* --- HERO SECTION --- */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-0.5 bg-(--jiwa-red)" />
              <span className="font-black tracking-[0.4em] text-[10px] uppercase text-(--jiwa-red)">
                Since 2018
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-10 italic leading-[0.85] tracking-tighter text-(--text-primary)">
              Kopi Dari <br /> <span className="text-(--jiwa-red)">Hati.</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-8 text-base leading-relaxed opacity-70 text-(--text-primary)">
              <p>
                Janji Jiwa lahir dari misi menyajikan kopi kualitas dunia untuk
                setiap lapisan masyarakat Indonesia.
              </p>
              <p>
                Kami menyebut pelanggan kami "Teman Sejiwa", sebuah komunitas
                yang dibangun atas kepercayaan.
              </p>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            variants={fadeInScale}
            className="lg:col-span-5 order-1 lg:order-2 relative"
          >
            <div className="relative aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl rotate-2 border-4 border-white dark:border-zinc-800">
              <Image
                src="/janji-jiwa-history.webp"
                alt="History"
                fill
                className="object-cover"
                priority
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-(--bg-primary) hidden md:block">
              <Quote size={32} className="text-(--jiwa-red) mb-2" />
              <p className="text-[10px] font-black uppercase tracking-widest text-(--text-primary)">
                Real Taste, Real Soul.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- PILLARS SECTION --- */}
      <section className="py-24 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-900/30 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <PillarBento />
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <motion.div
              variants={fadeInUp}
              className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
            >
              <span className="font-black tracking-[0.4em] text-[10px] uppercase block mb-4 text-(--jiwa-red)">
                The Creators
              </span>
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-(--text-primary)">
                Meet The <span className="text-(--jiwa-red)">Faces.</span>
              </h2>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-sm max-w-xs mx-auto lg:mx-0 text-center lg:text-left opacity-60 text-(--text-primary)"
            >
              Orang-orang dibalik layar yang memastikan janji kami sampai ke
              tangan Anda.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
            {isLoading ? (
              <TeamSkeleton />
            ) : (
              aboutUsers.map((member, idx) => (
                <TeamCard key={member.login.uuid} member={member} idx={idx} />
              ))
            )}
          </div>
        </motion.div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6 mb-12">
        <motion.div
          variants={fadeInScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden shadow-2xl bg-(--jiwa-red) group"
        >
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none select-none flex items-center justify-center overflow-hidden">
            <h2 className="text-[15vw] font-black italic text-white whitespace-nowrap">
              JANJI JIWA JANJI JIWA
            </h2>
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-12 italic tracking-tighter leading-none">
              Ready to Brew <br /> Your Story?
            </h2>
            <button className="bg-white text-black px-12 py-5 rounded-full font-black uppercase text-[11px] tracking-[0.2em] transition-all hover:scale-110 active:scale-95 flex items-center gap-4 mx-auto shadow-xl group"
            aria-label="join-button"
            >
              Join The Family
              <ArrowRight
                size={18}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;
