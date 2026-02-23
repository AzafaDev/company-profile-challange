"use client";
import React from "react";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, fadeInUp } from "@/lib/animations";
import { TestimonialCard } from "./testimonials/TestimonialCard";

const reviews = [
  {
    name: "Adit Pratama",
    role: "Coffee Enthusiast",
    comment: "Kopi Susu Gula Aren-nya juara! Konsistensi rasanya nggak pernah berubah sejak pertama kali coba di 2018.",
    rating: 5,
    avatar: "AP"
  },
  {
    name: "Siska Amelia",
    role: "Freelance Designer",
    comment: "Jiwa Toast dan Latte mereka adalah kombinasi maut buat nemenin kerja seharian. Tempatnya juga industrial banget!",
    rating: 5,
    avatar: "SA"
  },
  {
    name: "Budi Santoso",
    role: "Daily Commuter",
    comment: "Pelayanan cepat dan rasa yang selalu bikin melek pagi-pagi. Janji Jiwa emang andalan!",
    rating: 5,
    avatar: "BS"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500">
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 p-10 opacity-[0.05] dark:opacity-[0.02] select-none pointer-events-none hidden lg:block text-[var(--text-primary)]">
        <MessageSquare size={400} />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Header Content */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <span className="w-10 h-[2px] bg-[var(--jiwa-red)]" />
              <span className="font-black tracking-[0.4em] text-[10px] uppercase text-[var(--jiwa-red)]">
                Teman Sejiwa
              </span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-black italic tracking-tighter leading-[0.9] mb-8 text-center lg:text-left text-[var(--text-primary)]">
              Voices Of <br /> Our <span className="text-[var(--jiwa-red)]">Soul.</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="opacity-60 text-base md:text-lg mb-8 text-center lg:text-left max-w-sm mx-auto lg:mx-0 text-[var(--text-primary)]">
              Cerita jujur dari mereka yang telah menjadikan Janji Jiwa bagian dari perjalanan harian mereka.
            </motion.p>
            
            {/* Social Proof Stats */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <div>
                <p className="text-2xl font-black text-[var(--jiwa-red)]">4.9/5</p>
                <p className="text-[10px] font-bold uppercase opacity-50 text-[var(--text-primary)]">Average Rating</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[var(--text-primary)]">10k+</p>
                <p className="text-[10px] font-bold uppercase opacity-50 text-[var(--text-primary)]">Reviews</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Testimonial Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {reviews.map((rev, idx) => (
              <TestimonialCard key={idx} rev={rev} index={idx} />
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;