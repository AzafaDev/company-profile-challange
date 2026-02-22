"use client";
import React from "react";
import { Star, Quote, MessageSquare } from "lucide-react";
import { useThemeStore } from "@/store/useThemeStore";
import { motion } from "framer-motion";

const Testimonials = () => {
  const { theme } = useThemeStore();
  const JIWA_RED = "#B22222";
  const TEXT_COLOR = theme === "dark" ? "#f5f5f5" : "#1a1a1a";
  const CARD_BG = theme === "dark" ? "#161616" : "#ffffff";

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

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-transparent">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 p-10 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <MessageSquare size={400} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Header Content (Sticky on Desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <span className="w-10 h-[2px]" style={{ backgroundColor: JIWA_RED }} />
              <span className="font-black tracking-[0.4em] text-[10px] uppercase" style={{ color: JIWA_RED }}>
                Teman Sejiwa
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter leading-[0.9] mb-8 text-center lg:text-left" style={{ color: TEXT_COLOR }}>
              Voices Of <br /> Our <span style={{ color: JIWA_RED }}>Soul.</span>
            </h2>
            <p className="opacity-50 text-base md:text-lg mb-8 text-center lg:text-left max-w-sm mx-auto lg:mx-0" style={{ color: TEXT_COLOR }}>
              Cerita jujur dari mereka yang telah menjadikan Janji Jiwa bagian dari perjalanan harian mereka.
            </p>
            
            {/* Social Proof Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <div>
                <p className="text-2xl font-black" style={{ color: JIWA_RED }}>4.9/5</p>
                <p className="text-[10px] font-bold uppercase opacity-50">Average Rating</p>
              </div>
              <div>
                <p className="text-2xl font-black" style={{ color: TEXT_COLOR }}>10k+</p>
                <p className="text-[10px] font-bold uppercase opacity-50">Reviews</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Testimonial Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {reviews.map((rev, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`p-8 md:p-10 rounded-[2.5rem] relative group border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-all duration-500 shadow-sm hover:shadow-2xl ${idx === 1 ? 'md:mt-12' : ''}`}
                style={{ backgroundColor: CARD_BG }}
              >
                {/* Large Quote Icon for Each Card */}
                <Quote 
                  className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity" 
                  size={48} 
                  style={{ color: JIWA_RED }} 
                />

                <div className="flex gap-1 mb-8">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={12} fill={JIWA_RED} stroke={JIWA_RED} />
                  ))}
                </div>

                <blockquote 
                  className="text-lg md:text-xl font-bold leading-relaxed italic mb-10 tracking-tight"
                  style={{ color: TEXT_COLOR }}
                >
                  "{rev.comment}"
                </blockquote>

                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xs font-black text-white shadow-lg"
                    style={{ backgroundColor: JIWA_RED }}
                  >
                    {rev.avatar}
                  </div>
                  <div>
                    <p className="font-black text-sm uppercase tracking-widest" style={{ color: TEXT_COLOR }}>
                      {rev.name}
                    </p>
                    <p className="text-[10px] opacity-40 font-bold uppercase tracking-wider" style={{ color: TEXT_COLOR }}>
                      {rev.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;