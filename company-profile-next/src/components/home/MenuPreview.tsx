"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const menuItems = [
  {
    id: "V",
    title: "Java Preanger",
    desc: "Notes of brown sugar & lime",
    img: "/menu-1.avif",
    link: "/services/#series-1",
  },
  {
    id: "VI",
    title: "Ethiopia Guji",
    desc: "Light roast, floral & berry",
    img: "menu-2.avif",
    link: "/services/#series-2",
  },
  {
    id: "VII",
    title: "Signature Latte",
    desc: "Double shot with oat milk",
    img: "menu-3.avif",
    link: "/services/#series-3",
  },
];

export default function MenuPreview() {
  return (
    <section className="py-32 bg-[#F9F7F2] px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header - Konsisten dengan Style Overview */}
        <div className="mb-20">
          <div className="inline-block bg-stone-900 px-3 py-1 mb-6">
            <span className="text-white text-[10px] uppercase tracking-[0.3em] font-bold">
              The Selection
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-stone-900 tracking-tighter">
            Curated{" "}
            <span className="italic font-light text-stone-400">Goods.</span>
          </h2>
        </div>

        {/* Grid Menu - Menggunakan rounded-3xl agar sinkron dengan Hero & Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group cursor-pointer"
            >
              <Link href={item.link}>
                {/* Image Container: rounded-3xl & shadow halus */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-sm bg-stone-200 mb-8">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Overlay ID Romawi (Melanjutkan urutan Hero & Overview) */}
                  <div className="absolute top-6 left-6 z-20 text-white/80 text-[10px] uppercase tracking-[0.4em] font-bold">
                    Series {item.id}
                  </div>

                  {/* Efek Gelap Saat Hover */}
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-all duration-500" />
                </div>

                {/* Teks Deskripsi */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-serif text-stone-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-stone-400 text-[10px] uppercase tracking-[0.2em] font-black">
                      {item.desc}
                    </p>
                  </div>
                  {/* Arrow Icon */}
                  <div className="h-10 w-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Link ke Menu Lengkap */}
        <div className="mt-20 border-t border-stone-200 pt-10 flex justify-end">
          <Link href="/services" className="group flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-900">
              Full Collection
            </span>
            <div className="w-12 h-[1px] bg-stone-900 group-hover:w-20 transition-all duration-500"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
