import { Metadata } from "next";
import { Suspense } from "react";
import BlogClient from "@/components/blog/BlogClient";
import { BlogSkeleton, SidebarSkeleton } from "@/components/blog/BlogSkeleton";
import { getPayloadClient } from "@/lib/payload";

// --- 1. SEO METADATA ---
export const metadata: Metadata = {
  title: "Journal | Janji Jiwa",
  description:
    "Temukan kumpulan cerita, tips kopi, dan kabar terbaru dari Janji Jiwa.",
  openGraph: {
    title: "Janji Jiwa Journal | Cerita Tentang Kopi",
    description: "Kumpulan artikel edukasi dan gaya hidup kopi asli Indonesia.",
    images: ["/og-blog.png"],
    type: "website",
  },
};

// --- 2. LOADING STATE (Skeleton UI) ---
function BlogLoading() {
  return (
    <div className="pt-32 min-h-screen bg-[var(--bg-primary)]">
      <section className="py-16 px-6 max-w-7xl mx-auto">
        {/* Title Skeleton */}
        <div className="h-16 w-64 bg-[var(--text-primary)]/5 rounded-3xl mb-16 animate-pulse" />
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar Skeleton */}
          <div className="lg:w-1/4">
            <SidebarSkeleton />
          </div>
          
          {/* Feed Skeleton */}
          <div className="lg:w-3/4 space-y-10">
            {[1, 2, 3].map((i) => (
              <BlogSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// --- 3. MAIN PAGE COMPONENT ---
export default async function BlogPage() {
  return (
    <Suspense fallback={<BlogLoading />}>
      <BlogDataFetch />
    </Suspense>
  );
}

// --- 4. DATA FETCHING & SANITIZATION ---
async function BlogDataFetch() {
  const payload = await getPayloadClient();
  
  // Fetch data dari Payload dengan depth 1 agar image (relation) berubah jadi object
  const data = await payload.find({
    collection: "posts",
    depth: 1,
    sort: "-date", // Urutkan dari yang terbaru
  });

  // Sanitasi data agar siap digunakan oleh Client Component tanpa error serialisasi
  const sanitizedPosts = data.docs.map((doc: any) => {
    // Logika pengambilan URL Image dari Media Relation
    const imageData = doc.image && typeof doc.image === "object" ? doc.image : null;
    const imageUrl = imageData?.url || "/placeholder.webp";

    return {
      id: doc.id,
      title: doc.title || "Untitled Post",
      slug: doc.slug,
      content: doc.content, // RichText data
      excerpt: doc.excerpt || "Baca selengkapnya tentang artikel ini...",
      author: doc.author,
      // Format tanggal lokal Indonesia
      date: doc.date
        ? new Date(doc.date).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        : "Baru saja",
      category: doc.category || "Story",
      image: imageUrl,
    };
  });

  // JSON-LD untuk SEO Google (Blog Schema)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Janji Jiwa Journal",
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}/blog`,
    description: "Wadah cerita inspirasi dan edukasi kopi dari Janji Jiwa.",
    publisher: {
      "@type": "Organization",
      name: "Janji Jiwa",
      logo: {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_SERVER_URL}/logo.png`
      }
    },
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