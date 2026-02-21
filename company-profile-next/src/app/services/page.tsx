"use client";
import { motion } from "framer-motion";

const detailedMenu = [
  {
    series: "Series V",
    title: "Java Preanger",
    origin: "West Java, Indonesia",
    altitude: "1400 - 1600 MASL",
    process: "Washed / Dry Hulled",
    notes: "Brown Sugar, Lime, Black Tea",
    desc: "Biji kopi legendaris dari tanah Priangan. Dikenal dengan body yang tebal namun memiliki akhir yang bersih dengan sentuhan jeruk nipis yang segar.",
  },
  {
    series: "Series VI",
    title: "Ethiopia Guji",
    origin: "Shakisso, Guji Zone",
    altitude: "1900 - 2100 MASL",
    process: "Natural Process",
    notes: "Floral, Berry, Bergamot",
    desc: "Representasi sempurna dari kopi Afrika. Profil rasa yang kompleks dengan aroma bunga yang semerbak dan rasa buah beri yang manis alami.",
  },
  {
    series: "Series VII",
    title: "Signature Latte",
    origin: "House Blend (70:30)",
    altitude: "Mixed Origins",
    process: "Milk-Based Craft",
    notes: "Double Shot, Oat Milk, Toffee",
    desc: "Keseimbangan antara espresso yang intens dan tekstur oat milk yang creamy. Tanpa gula tambahan, mengandalkan kemanisan alami dari susu dan kopi.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F2] pt-40 pb-20 px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* KIRI: STICKY HEADER (Konsisten dengan Hero) */}
        <div className="lg:col-span-5 lg:sticky lg:top-40 h-fit">
          <div className="inline-block bg-stone-900 px-3 py-1 mb-8">
            <span className="text-white text-[10px] uppercase tracking-[0.3em] font-black">
              The Ledger
            </span>
          </div>
          <h1 className="text-6xl md:text-[7vw] font-serif text-stone-900 tracking-tighter leading-[0.85] mb-8">
            Detailed <br />
            <span className="italic font-light text-stone-400">Notes.</span>
          </h1>
          <p className="text-stone-500 max-w-sm font-light leading-relaxed">
            Setiap seri memiliki cerita unik. Kami mencatat setiap variabel
            untuk memastikan kualitas yang konsisten di setiap cangkir.
          </p>
          <div className="mt-12 w-24 h-[1px] bg-amber-800/30" />
        </div>

        {/* KANAN: LIST PRODUK (Detailed) */}
        <div className="lg:col-span-7 space-y-32">
          {detailedMenu.map((item, index) => (
            <motion.div
              key={index}
              id={`series-${index + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="border-b border-stone-200 pb-20 scroll-mt-40"
            >
              {/* Header Produk */}
              <div className="flex justify-between items-end mb-10">
                <div>
                  <span className="text-amber-800 text-[10px] uppercase tracking-[0.5em] font-black block mb-4">
                    {item.series}
                  </span>

                  <h2 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight">
                    {item.title}
                  </h2>
                </div>
                <span className="text-stone-300 font-serif italic text-2xl hidden md:block">
                  0{index + 1}
                </span>
              </div>

              {/* Tabel Spek (Sangat Editorial/Minimalis) */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-10 mb-10">
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-stone-400 font-bold mb-1">
                    Origin
                  </p>
                  <p className="text-sm text-stone-800 font-medium">
                    {item.origin}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-stone-400 font-bold mb-1">
                    Process
                  </p>
                  <p className="text-sm text-stone-800 font-medium">
                    {item.process}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-stone-400 font-bold mb-1">
                    Altitude
                  </p>
                  <p className="text-sm text-stone-800 font-medium">
                    {item.altitude}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-stone-400 font-bold mb-1">
                    Flavor Notes
                  </p>
                  <p className="text-sm text-amber-900 font-serif italic">
                    {item.notes}
                  </p>
                </div>
              </div>

              {/* Deskripsi */}
              <p className="text-stone-600 leading-relaxed font-light text-base max-w-xl">
                {item.desc}
              </p>
            </motion.div>
          ))}

          {/* CTA Akhir */}
          <div className="bg-stone-900 p-12 rounded-3xl text-center">
            <p className="text-stone-400 text-[10px] uppercase tracking-[0.5em] mb-6 font-bold">
              Inquiries & Orders
            </p>
            <h3 className="text-3xl font-serif text-white mb-8">
              Tertarik menyajikan kopi kami di bar Anda?
            </h3>
            <button className="bg-amber-800 text-white px-8 py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white hover:text-stone-900 transition-all">
              Request Wholesale Price
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
