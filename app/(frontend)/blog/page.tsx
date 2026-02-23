import { Suspense } from "react";
import BlogClient from "@/components/blog/BlogClient";
import { BlogSkeleton, SidebarSkeleton } from "@/components/blog/BlogSkeleton";
import { getPayloadClient } from "@/lib/payload";

// Komponen Loading State yang rapi
function BlogLoading() {
  return (
    <div className="pt-24 min-h-screen bg-[var(--bg-primary)]">
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="h-20 w-64 bg-[var(--text-primary)]/5 rounded-3xl mb-16 animate-pulse" />
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

  const sanitizedPosts = data.docs.map((doc: any) => ({
    id: doc.id,
    title: doc.title,
    slug: doc.slug,
    content: doc.content,
    excerpt: doc.excerpt,
    author: doc.author,

    date: new Date(doc.date).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    category: doc.category,
    image: doc.image?.url || "/placeholder.webp",
  }));

  console.log(sanitizedPosts);

  return <BlogClient allPosts={sanitizedPosts} />;
}