"use client";

import React, { useState, useMemo, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";

interface Post {
  id: string | number;
  title: string;
  category: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
}

interface BlogClientProps {
  allPosts: Post[];
}

const CATEGORIES = ["All Stories", "Story", "Tips", "News", "Menu"];
const POSTS_PER_PAGE = 4;

const BlogClient = ({ allPosts }: BlogClientProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const [currentPage, setCurrentPage] = useState(1);

  // --- FILTER LOGIC ---
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All Stories" ||
        post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allPosts, searchQuery, selectedCategory]);

  // --- PAGINATION LOGIC ---
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  // --- HANDLERS ---
  const handleSearch = useCallback((val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  }, []);

  const handleCategoryChange = useCallback((val: string) => {
    setSelectedCategory(val);
    setCurrentPage(1);
  }, []);

  return (
    <main className="pt-24 min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
      <section className="py-16 px-6 max-w-7xl mx-auto">
        {/* --- PAGE HEADER --- */}
        <header className="mb-16">
          <span className="font-black tracking-[0.4em] text-[10px] uppercase block mb-4 text-[var(--jiwa-red)]">
            Journal & News
          </span>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-[var(--text-primary)]">
            Explore <span className="text-[var(--jiwa-red)]">Our Soul.</span>
          </h1>
        </header>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* --- SIDEBAR (Filter & Search) --- */}
          <BlogSidebar
            searchQuery={searchQuery}
            setSearchQuery={handleSearch}
            selectedCategory={selectedCategory}
            setSelectedCategory={handleCategoryChange}
            categories={CATEGORIES}
          />

          {/* --- BLOG FEED --- */}
          <div className="lg:w-3/4">
            {currentPosts.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 mb-16">
                {currentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <EmptyState />
            )}

            {/* --- PAGINATION CONTROLS --- */}
            {totalPages > 1 && (
              <nav className="flex items-center justify-center gap-4 border-t border-[var(--text-primary)]/10 pt-10">
                <PaginationButton
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft size={20} />
                </PaginationButton>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <PageNumber
                      key={i}
                      active={currentPage === i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      number={i + 1}
                    />
                  ))}
                </div>

                <PaginationButton
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight size={20} />
                </PaginationButton>
              </nav>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

// --- SUB-COMPONENTS ---

const PaginationButton = ({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="p-4 rounded-full border border-[var(--text-primary)]/10 transition-all hover:border-[var(--jiwa-red)] hover:text-[var(--jiwa-red)] disabled:opacity-20 text-[var(--text-primary)]"
    aria-label="pagination-button"
  >
    {children}
  </button>
);

const PageNumber = ({
  active,
  onClick,
  number,
}: {
  active: boolean;
  onClick: () => void;
  number: number;
}) => (
  <button
    onClick={onClick}
    className={`w-12 h-12 rounded-full font-black text-xs transition-all border ${
      active
        ? "bg-[var(--jiwa-red)] text-white border-[var(--jiwa-red)] shadow-lg shadow-red-900/20"
        : "bg-transparent text-[var(--text-primary)] border-[var(--text-primary)]/10 hover:border-[var(--text-primary)]/40"
    }`}
    aria-label="pagination-button"
  >
    {number}
  </button>
);

const EmptyState = () => (
  <div className="py-32 text-center border-2 border-dashed rounded-[3rem] border-[var(--text-primary)]/10 bg-[var(--text-primary)]/[0.01]">
    <p className="text-lg font-bold opacity-30 text-[var(--text-primary)]">
      Tidak ada artikel ditemukan.
    </p>
  </div>
);

export default BlogClient;
