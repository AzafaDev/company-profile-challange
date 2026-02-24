"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

// Components
import { TestimonialCard } from "./testimonials/TestimonialCard";

// Animations
import { containerVariants, fadeInUp } from "@/lib/animations";
import { STATS, TESTIMONIAL_DATA } from "@/const/home";

const Testimonials = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500">
      {/* --- DECORATIVE BACKGROUND --- */}
      <div
        className="absolute top-0 right-0 p-10 opacity-[0.05] dark:opacity-[0.02] select-none pointer-events-none hidden lg:block text-[var(--text-primary)]"
        aria-hidden="true"
      >
        <MessageSquare size={400} strokeWidth={1} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* --- LEFT COLUMN: HEADER & STATS --- */}
          <header className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
            >
              <span className="w-10 h-[2px] bg-[var(--jiwa-red)]" />
              <span className="font-black tracking-[0.4em] text-[10px] uppercase text-[var(--jiwa-red)]">
                Teman Sejiwa
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-black italic tracking-tighter leading-[0.9] mb-8 text-center lg:text-left text-[var(--text-primary)]"
            >
              Voices Of <br /> Our{" "}
              <span className="text-[var(--jiwa-red)]">Soul.</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="opacity-60 text-base md:text-lg mb-10 text-center lg:text-left max-w-sm mx-auto lg:mx-0 text-[var(--text-primary)] font-medium leading-relaxed"
            >
              Cerita jujur dari mereka yang telah menjadikan Janji Jiwa bagian
              dari perjalanan harian mereka.
            </motion.p>

            {/* Social Proof Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center lg:justify-start gap-12 pt-8 border-t border-zinc-200 dark:border-zinc-800/50"
            >
              {STATS.map((stat, i) => (
                <div key={i}>
                  <p className={`text-3xl font-black ${stat.color} mb-1`}>
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 text-[var(--text-primary)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </header>

          {/* --- RIGHT COLUMN: TESTIMONIAL FEED --- */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {TESTIMONIAL_DATA.map((rev, idx) => (
              <TestimonialCard
                key={`${rev.name}-${idx}`}
                rev={rev}
                index={idx}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
