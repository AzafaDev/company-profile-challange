"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      text: "Secangkir kopi yang jujur. Bean & Beyond berhasil membawa cita rasa pegunungan Sidama langsung ke meja kerja saya.",
      author: "Adrian Utama",
      role: "Coffee Enthusiast"
    },
    {
      text: "Desain dan rasa yang berjalan beriringan. V60 mereka adalah yang terbaik yang pernah saya coba di Jakarta.",
      author: "Sarah Jenkins",
      role: "Creative Director"
    }
  ];

  return (
    <section className="py-32 bg-stone-900 text-stone-100 px-6 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Label Kecil - Konsisten dengan Hero & Overview */}
        <div className="inline-block bg-amber-800 px-3 py-1 mb-16">
          <span className="text-white text-[10px] uppercase tracking-[0.3em] font-bold">
            Customer Voice
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative"
            >
              {/* Petik Besar Sebagai Aksen (Tipis & Elegan) */}
              <span className="absolute -top-10 -left-4 text-8xl font-serif text-stone-800 italic select-none">
                “
              </span>

              <div className="relative z-10">
                <p className="text-2xl md:text-3xl font-serif leading-snug tracking-tight mb-8 italic font-light">
                  {rev.text}
                </p>
                
                <div className="flex items-center gap-4">
                  {/* Garis Horizontal Kecil */}
                  <div className="w-8 h-[1px] bg-amber-800" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white">
                      {rev.author}
                    </p>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 mt-1">
                      {rev.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Section - Aksen Penutup Homepage */}
        <div className="mt-32 pt-16 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <h4 className="text-4xl md:text-6xl font-serif tracking-tighter text-stone-700">
            Ready for a <span className="italic text-stone-500">better cup?</span>
          </h4>
          <button className="px-10 py-4 bg-white text-stone-900 rounded-full text-[10px] uppercase tracking-[0.4em] font-black hover:bg-amber-800 hover:text-white transition-all shadow-xl">
            Visit Our Store
          </button>
        </div>
      </div>
    </section>
  );
}