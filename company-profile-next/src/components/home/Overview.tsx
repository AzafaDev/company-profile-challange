"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Overview() {
  return (
    <section className="py-32 bg-white px-6 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* SISI KIRI: IMAGE (Mengikuti Style Hero - Rounded 3xl) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Image Container - Menggunakan rounded-3xl & shadow yang sama dengan Hero */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] z-20 bg-stone-100">
                <Image
                  src="/overview.avif"
                  alt="Our Heritage"
                  className="w-full h-full object-cover"
                  fill
                  priority
                  fetchPriority="high"
                />
              </div>

              {/* Decorative Frame di Belakang (Garis Kotak) */}
              <div className="absolute -top-6 -left-6 w-full h-full border border-stone-100 rounded-3xl z-10 pointer-events-none" />
            </motion.div>
          </div>

          {/* SISI KANAN: CONTENT (Sinkron dengan Tipografi Hero) */}
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Label Hitam (Sama dengan style Hero kamu) */}
              <div className="inline-block bg-stone-900 px-3 py-1 mb-8">
                <span className="text-white text-[10px] uppercase tracking-[0.3em] font-bold">
                  The Philosophy
                </span>
              </div>

              {/* Judul dengan Aksen Romawi IV (Kelanjutan dari Hero III) */}
              <div className="relative mb-10">
                <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[0.9] tracking-tighter">
                  Crafting <br />
                  <span className="italic font-light text-stone-400">
                    Pure Honesty.
                  </span>
                </h2>
                <span className="absolute -top-4 right-0 text-5xl font-serif text-stone-100 italic">
                  IV
                </span>
              </div>

              <div className="space-y-6">
                <p className="text-stone-600 leading-relaxed font-light text-lg">
                  Bagi kami, kopi bukan sekadar minuman pagi. Ia adalah jembatan
                  antara petani di pegunungan Sidama dan cangkir hangat di meja
                  kerjamu.
                </p>
                <div className="h-[1px] w-20 bg-amber-800/30" />
                <p className="text-stone-400 text-sm italic font-light max-w-sm">
                  "Kami percaya transparansi adalah rasa terbaik dalam setiap
                  seduhan."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
