"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useThemeStore } from "@/store/useThemeStore";
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ALL_POSTS = [
  {
    id: 1,
    title: "Ekspedisi Gayo: Mencari Biji Kopi Arabika Terbaik",
    excerpt: "Perjalanan tim roastery kami mendaki pegunungan Gayo untuk memastikan setiap ceri kopi dipetik pada kematangan sempurna.",
    author: "Rian Ardianto",
    date: "22 Feb 2026",
    category: "Story",
    image: "/janji-jiwa-services-4.webp",
  },
  {
    id: 2,
    title: "Mengenal Teknik V60 untuk Rasa Kopi yang Lebih Clean",
    excerpt: "Panduan lengkap bagi pemula yang ingin mencoba menyeduh kopi sendiri di rumah dengan metode pour-over.",
    author: "Siska Amelia",
    date: "20 Feb 2026",
    category: "Tips",
    image: "/janji-jiwa-services-2.webp",
  },
  {
    id: 3,
    title: "Janji Jiwa Raih Penghargaan Brand Of The Year 2026",
    excerpt: "Terima kasih Teman Sejiwa! Berkat dukunganmu, kami kembali meraih posisi teratas dalam kategori kopi retail.",
    author: "Admin Jiwa",
    date: "18 Feb 2026",
    category: "News",
    image: "/janji-jiwa-services-3.webp",
  },
  {
    id: 4,
    title: "Jiwa Toast x Beef Truffle: Sensasi Mewah di Setiap Gigitan",
    excerpt: "Menu kolaborasi terbaru yang menggabungkan aroma mewah minyak truffle dengan daging sapi panggang yang juicy.",
    author: "Chef Junaidi",
    date: "15 Feb 2026",
    category: "Menu",
    image: "/janji-jiwa-overview.webp",
  },
  {
    id: 5,
    title: "Mengapa Susu Oat Menjadi Pilihan Terbaik untuk Latte?",
    excerpt: "Eksplorasi rasa antara perpaduan espresso robusta dengan tekstur creamy dari oatmilk pilihan kami.",
    author: "Barista Rendy",
    date: "12 Feb 2026",
    category: "Tips",
    image: "/janji-jiwa-history.webp",
  },
  {
    id: 6,
    title: "Komitmen Kami Terhadap Lingkungan: Zero Plastic Policy",
    excerpt: "Langkah nyata Janji Jiwa dalam mengurangi sampah plastik sekali pakai di seluruh gerai Indonesia mulai tahun ini.",
    author: "Green Team",
    date: "10 Feb 2026",
    category: "News",
    image: "/janji-jiwa-hero.webp",
  },
  {
    id: 7,
    title: "Sejarah Singkat Es Kopi Susu Gula Aren di Indonesia",
    excerpt: "Bagaimana sebuah minuman sederhana bisa mengubah tren gaya hidup masyarakat urban dalam satu dekade terakhir.",
    author: "Sejarawan Kopi",
    date: "08 Feb 2026",
    category: "Story",
    image: "/janji-jiwa-services-3.webp",
  },
  {
    id: 8,
    title: "Review: Matcha Latte dengan Tambahan Espresso (Dirty Matcha)",
    excerpt: "Perpaduan rasa pahit teh hijau dan kuatnya kopi yang ternyata menjadi favorit baru para pelanggan setia kami.",
    author: "Food Blogger",
    date: "05 Feb 2026",
    category: "Menu",
    image: "/janji-jiwa-services-2.webp",
  },
];

const BlogPage = () => {
  const { theme } = useThemeStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const JIWA_RED = "#B22222";
  const IS_DARK = theme === "dark";
  const TEXT_PRIMARY = IS_DARK ? "#F5F5F5" : "#1A1A1A";
  const BG_MAIN = IS_DARK ? "#0D0D0D" : "#FFFFFF";
  const CARD_BG = IS_DARK ? "#161616" : "#FBFBFB";
  const BORDER = IS_DARK ? "#262626" : "#EAEAEA";

  // LOGIC FILTER
  const filteredPosts = ALL_POSTS.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Stories" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // LOGIC PAGINATION
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const categories = ["All Stories", "Story", "Tips", "News", "Menu"];

  return (
    <main className="pt-24 min-h-screen transition-colors duration-500" style={{ backgroundColor: BG_MAIN }}>
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-black tracking-[0.4em] text-[10px] uppercase block mb-4" style={{ color: JIWA_RED }}>
            Journal & News
          </span>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter" style={{ color: TEXT_PRIMARY }}>
            Explore <span style={{ color: JIWA_RED }}>Our Soul.</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT: SIDEBAR */}
          <aside className="lg:w-1/4">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" style={{ color: TEXT_PRIMARY }} size={18} />
                <input
                  type="text"
                  placeholder="Cari artikel..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-12 pr-6 py-4 rounded-2xl border outline-none text-sm transition-all focus:ring-2 focus:ring-red-800/10"
                  style={{ backgroundColor: CARD_BG, borderColor: BORDER, color: TEXT_PRIMARY }}
                />
              </div>

              <div className="p-8 rounded-[2rem] border" style={{ borderColor: BORDER }}>
                <h4 className="font-black uppercase text-[10px] tracking-widest mb-6" style={{ color: JIWA_RED }}>
                  Categories
                </h4>
                <ul className="space-y-4 text-sm font-bold" style={{ color: TEXT_PRIMARY }}>
                  {categories.map((cat) => (
                    <li
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setCurrentPage(1);
                      }}
                      className="cursor-pointer transition-all flex items-center justify-between group"
                      style={{ opacity: selectedCategory === cat ? 1 : 0.4 }}
                    >
                      <span className={`transition-transform duration-300 ${selectedCategory === cat ? "translate-x-2 text-red-700" : "group-hover:translate-x-2"}`}>
                        {cat}
                      </span>
                      {selectedCategory === cat && <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: JIWA_RED }} />}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* RIGHT: LIST */}
          <div className="lg:w-3/4">
            {currentPosts.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 mb-16">
                {currentPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group flex flex-col md:flex-row rounded-[2.5rem] border overflow-hidden transition-all duration-500 hover:border-red-900/30 hover:shadow-2xl hover:shadow-black/5"
                    style={{ backgroundColor: CARD_BG, borderColor: BORDER }}
                  >
                    <div className="relative h-64 md:h-auto md:w-72 lg:w-80 shrink-0 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-white shadow-lg" style={{ backgroundColor: JIWA_RED }}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 md:p-10 flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4 opacity-40 text-[10px] font-bold uppercase tracking-widest" style={{ color: TEXT_PRIMARY }}>
                          <User size={12} /> {post.author}
                          <span className="w-1 h-1 rounded-full bg-current"></span>
                          <Calendar size={12} /> {post.date}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black leading-tight mb-4 tracking-tight line-clamp-2" style={{ color: TEXT_PRIMARY }}>
                          {post.title}
                        </h2>
                        <p className="text-sm opacity-50 leading-relaxed line-clamp-2 md:line-clamp-3 mb-6" style={{ color: TEXT_PRIMARY }}>
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-auto pt-6 border-t" style={{ borderColor: BORDER }}>
                        <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all hover:gap-4" style={{ color: JIWA_RED }}>
                          Continue Reading <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="py-32 text-center border-2 border-dashed rounded-[3rem]" style={{ borderColor: BORDER }}>
                <p className="text-lg font-bold opacity-30" style={{ color: TEXT_PRIMARY }}>Tidak ada artikel ditemukan.</p>
              </div>
            )}

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 border-t pt-10" style={{ borderColor: BORDER }}>
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-4 rounded-full border transition-all disabled:opacity-10"
                  style={{ borderColor: BORDER, color: TEXT_PRIMARY }}
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className="w-12 h-12 rounded-full font-black text-xs transition-all"
                      style={{
                        backgroundColor: currentPage === i + 1 ? JIWA_RED : "transparent",
                        color: currentPage === i + 1 ? "#fff" : TEXT_PRIMARY,
                        border: `1px solid ${currentPage === i + 1 ? JIWA_RED : BORDER}`,
                      }}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-4 rounded-full border transition-all disabled:opacity-10"
                  style={{ borderColor: BORDER, color: TEXT_PRIMARY }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;