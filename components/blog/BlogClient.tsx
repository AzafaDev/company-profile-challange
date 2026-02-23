"use client";
import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";

const BlogClient = ({ allPosts }: { allPosts: any[] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const categories = ["All Stories", "Story", "Tips", "News", "Menu"];

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All Stories" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allPosts, searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <main className="pt-24 min-h-screen transition-colors duration-300 bg-[var(--bg-primary)]">
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <header className="mb-16">
          <span className="font-black tracking-[0.4em] text-[10px] uppercase block mb-4 text-[var(--jiwa-red)]">
            Journal & News
          </span>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-[var(--text-primary)]">
            Explore <span className="text-[var(--jiwa-red)]">Our Soul.</span>
          </h1>
        </header>

        <div className="flex flex-col lg:flex-row gap-12">
          <BlogSidebar 
            searchQuery={searchQuery}
            setSearchQuery={(val: string) => { setSearchQuery(val); setCurrentPage(1); }}
            selectedCategory={selectedCategory}
            setSelectedCategory={(val: string) => { setSelectedCategory(val); setCurrentPage(1); }}
            categories={categories}
          />

          <div className="lg:w-3/4">
            {currentPosts.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 mb-16">
                {currentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="py-32 text-center border-2 border-dashed rounded-[3rem] border-[var(--text-primary)]/20 bg-[var(--text-primary)]/[0.02]">
                <p className="text-lg font-bold opacity-30 text-[var(--text-primary)]">
                  Tidak ada artikel ditemukan.
                </p>
              </div>
            )}

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 border-t border-[var(--text-primary)]/20 pt-10">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-4 rounded-full border-2 border-[var(--text-primary)]/10 transition-all hover:border-[var(--jiwa-red)] disabled:opacity-10 text-[var(--text-primary)]"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-3">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-12 h-12 rounded-full font-black text-xs transition-all border-2 ${
                        currentPage === i + 1 
                          ? "bg-[var(--jiwa-red)] text-white border-[var(--jiwa-red)]" 
                          : "bg-transparent text-[var(--text-primary)] border-[var(--text-primary)]/10 hover:border-[var(--text-primary)]/40"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-4 rounded-full border-2 border-[var(--text-primary)]/10 transition-all hover:border-[var(--jiwa-red)] disabled:opacity-10 text-[var(--text-primary)]"
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

export default BlogClient;