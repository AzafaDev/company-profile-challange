"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#F9F7F2] flex items-center px-6 md:px-24 overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* KIRI: CONTENT AREA */}
        <div className="lg:col-span-7 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label Kecil dengan Background Hitam (Seperti di Gambar) */}
            <div className="inline-block bg-stone-900 px-3 py-1 mb-6">
              <span className="text-white text-[10px] uppercase tracking-[0.3em] font-bold">
                Premium Coffee Roastery
              </span>
            </div>

            {/* Judul Utama dengan Aksen Angka Romawi */}
            <div className="relative">
              <h1 className="text-[12vw] lg:text-[9vw] font-serif leading-[0.8] text-stone-900 tracking-tighter">
                Beyond <br />
                <span className="italic font-light text-stone-400">
                  The Bean.
                </span>
              </h1>
              {/* Angka Romawi III yang tipis di samping */}
              <span className="absolute top-1/2 right-0 lg:-right-10 text-4xl lg:text-6xl font-serif text-stone-200 italic -translate-y-full">
                III
              </span>
            </div>

            {/* Link & CTA */}
            <div className="mt-16 flex flex-col gap-6">
              <Link href="/services" className="group flex items-center gap-5">
                <div className="h-14 w-14 rounded-full border border-amber-800/30 flex items-center justify-center group-hover:bg-amber-800 transition-all duration-500">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-amber-800 group-hover:text-white transition-colors"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-900">
                    Explore
                  </p>
                  <p className="text-sm font-serif italic text-stone-500 leading-none">
                    Collection
                  </p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* KANAN: IMAGE AREA (Editorial Style) */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] z-20">
              <Image
                src="/Hero.jpg"
                alt="Coffee Cup"
                className="w-full h-full object-cover"
                fill
                fetchPriority="high"
                priority
              />

              {/* Origin Tag (Floating inside image) */}
              <div className="absolute bottom-10 left-10 text-white z-30">
                <p className="text-amber-500 text-[10px] uppercase tracking-widest font-bold mb-1">
                  Origin
                </p>
                <p className="text-lg font-serif italic leading-tight">
                  Ethiopia, Sidama Region
                </p>
              </div>
            </div>

            {/* Decorative Frame (Garis kotak di belakang gambar) */}
            <div className="absolute -bottom-8 -right-8 w-full h-full border border-stone-200 rounded-3xl z-10 pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* FOOTER HERO: Scroll & Social */}
      <div className="absolute bottom-12 left-12 md:left-24 flex items-end gap-10">
        <div className="flex flex-col items-start gap-4">
          <div className="w-[1px] h-16 bg-gradient-to-b from-stone-900 to-transparent" />
          <span className="text-[9px] uppercase tracking-[0.5em] text-stone-900 font-bold vertical-text">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
