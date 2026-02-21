"use client";
import { useState } from "react"; // Tambahkan useState
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function BlogClientContent({ posts }: { posts: any[] }) {
  // Tentukan berapa banyak post yang muncul di awal (misal: 6)
  const [visiblePosts, setVisiblePosts] = useState(4);

  const showMorePosts = () => {
    setVisiblePosts((prev) => prev + 2);
  };

  const currentPosts = posts.slice(0, visiblePosts);
  const hasMore = visiblePosts < posts.length;

  return (
    <div className="flex flex-col items-center">
      {" "}
      {/* Container utama */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-20 w-full">
        <AnimatePresence>
          {currentPosts.map((post, index) => {
            const isLarge = index % 3 === 0;
            const gridSpan = isLarge ? "md:col-span-8" : "md:col-span-4";

            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
                className={`${gridSpan} group cursor-pointer`}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative aspect-[16/9] md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden mb-8 shadow-sm bg-stone-200">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                      priority={index < 2} 
                      className="object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                    />
                    <div className="absolute top-6 left-6 flex gap-2">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-stone-900">
                        {post.category}
                      </span>
                      <span className="px-3 py-1 bg-stone-900/80 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-white">
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 px-2">
                    <div className="flex items-center gap-4">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold">
                        {new Date(post.date).toLocaleDateString("id-ID", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                      <div className="w-1 h-1 rounded-full bg-amber-800" />
                      <p className="text-[10px] uppercase tracking-[0.3em] text-amber-800 font-black">
                        By {post.author}
                      </p>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 leading-tight group-hover:text-amber-800 transition-colors max-w-2xl">
                      {post.title}
                    </h2>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
      {/* Tombol Load More yang Brutalist */}
      {hasMore && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={showMorePosts}
          className="mt-32 px-12 py-4 border border-stone-900 text-[10px] uppercase tracking-[0.5em] font-black text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-500 ease-in-out"
        >
          Load More Stories —
        </motion.button>
      )}
    </div>
  );
}
