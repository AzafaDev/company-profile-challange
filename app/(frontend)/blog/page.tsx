import { Metadata } from "next";
import { Suspense } from "react";
import BlogClient from "@/components/blog/BlogClient";
import { BlogSkeleton, SidebarSkeleton } from "@/components/blog/BlogSkeleton";
import { getPayloadClient } from "@/lib/payload";

// 1. Metadata Best Practice untuk SEO Blog
export const metadata: Metadata = {
  title: "Journal",
  description: "Temukan kumpulan cerita, tips kopi, dan kabar terbaru dari Janji Jiwa. Inspirasi dalam setiap cangkir Kopi Dari Hati.",
  openGraph: {
    title: "Janji Jiwa Journal | Cerita Tentang Kopi",
    description: "Kumpulan artikel edukasi dan gaya hidup kopi asli Indonesia.",
    images: ["/og-blog.png"],
  },
};

// Komponen Loading State yang rapi
function BlogLoading() {
  return (
    <div className="pt-24 min-h-screen bg-[var(--bg-primary)]">
      <section className="py-16 px-6 max-w-7xl mx-auto">
        {/* Skeleton Title */}
        <div className="h-16 w-48 bg-[var(--jiwa-red)]/10 rounded-2xl mb-12 animate-pulse" />
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/4">
            <SidebarSkeleton />
          </div>
          <div className="lg:w-3/4 space-y-8">
            {[1, 2, 3].map((i) => <BlogSkeleton key={i} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default async function BlogPage() {
  return (
    <Suspense fallback={<BlogLoading />}>
      <BlogDataFetch />
    </Suspense>
  );
}

async function BlogDataFetch() {
  const payload = await getPayloadClient();
  const data = await payload.find({
    collection: "posts",
    depth: 1,
    sort: "-date",
  });

  // Sanitasi data dengan penanganan error sederhana
  const sanitizedPosts = data.docs.map((doc: any) => ({
    id: doc.id,
    title: doc.title || "Untitled Post",
    slug: doc.slug,
    content: doc.content,
    excerpt: doc.excerpt || "Baca selengkapnya tentang artikel ini...",
    author: doc.author,
    date: doc.date 
      ? new Date(doc.date).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long", // Diubah ke long agar lebih estetik (Januari, dsb)
          year: "numeric",
        })
      : "Baru saja",
    category: doc.category || "Lifestyle",
    image: typeof doc.image === 'string' ? doc.image : doc.image?.url || "/placeholder.webp",
  }));

  // JSON-LD untuk Artikel List agar Google menampilkan 'Rich Snippets'
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Janji Jiwa Journal",
    "description": "Cerita dibalik setiap cangkir kopi Janji Jiwa",
    "publisher": {
      "@type": "Organization",
      "name": "Janji Jiwa"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient allPosts={sanitizedPosts} />
    </>
  );
}