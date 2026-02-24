import { getPayloadClient } from "@/lib/payload";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Calendar, User } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { RichTextParser } from "@/components/blog/RichTextParser";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// --- 1. STATIC PARAMS (SSG) ---
// Membuat halaman statis saat build time untuk performa maksimal
export async function generateStaticParams() {
  const payload = await getPayloadClient();
  const posts = await payload.find({
    collection: "posts",
    limit: 100,
    select: { slug: true },
  });

  return posts.docs.map((post) => ({ slug: post.slug }));
}

// --- 2. DYNAMIC METADATA ---
// Mengambil metaTitle dan metaDescription dari Payload CMS
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "posts",
    where: { slug: { equals: slug } },
  });

  const post = result.docs[0];
  if (!post) return { title: "Post Not Found" };

  // Safety check untuk image object
  const postImage = typeof post.image === "object" ? (post.image as any) : null;
  const siteUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

  return {
    title: post.metaTitle || `${post.title} | Janji Jiwa`,
    description: post.metaDescription || post.excerpt,
    alternates: { canonical: `${siteUrl}/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: [{ url: postImage?.url || "/og-image.jpg" }],
      type: "article",
      publishedTime: post.date as string,
      authors: [post.author],
    },
  };
}

// --- 3. MAIN COMPONENT ---
export default async function PostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const payload = await getPayloadClient();

  // Fetch Main Post dengan depth: 1 agar relasi 'image' terisi objek Media
  const result = await payload.find({
    collection: "posts",
    where: { slug: { equals: slug } },
    depth: 1,
  });

  const post = result.docs[0];
  if (!post) return notFound();

  // Image Logic - Menangani data dari relasi Media
  const imageData =
    post.image && typeof post.image === "object" ? (post.image as any) : null;
  const imageUrl = imageData?.url || "/placeholder.webp";
  const imageAlt = imageData?.alt || post.title;

  // Fetch Related Stories - Berdasarkan kategori yang sama
  const relatedResult = await payload.find({
    collection: "posts",
    where: {
      and: [
        { category: { equals: post.category } },
        { slug: { not_equals: slug } },
      ],
    },
    limit: 2,
  });

  // Data terstruktur untuk SEO Google (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: imageUrl,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    description: post.excerpt,
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-20 transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* --- Back Navigation --- */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--jiwa-red)] mb-12 hover:gap-4 transition-all group"
        >
          <ChevronLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to Journal
        </Link>

        {/* --- Header Section --- */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white bg-[var(--jiwa-red)]">
              {post.category}
            </span>
            <div className="flex items-center gap-5 text-[10px] font-bold uppercase tracking-widest text-[var(--text-primary)]/50">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[var(--jiwa-red)]" />
                {new Date(post.date as string).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter leading-[0.95] text-[var(--text-primary)] mb-10">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 pt-8 border-t border-[var(--text-primary)]/20">
            <div className="w-12 h-12 rounded-full bg-[var(--jiwa-red)] flex items-center justify-center text-white border-4 border-[var(--bg-primary)] shadow-xl overflow-hidden relative">
              <User size={24} />
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--jiwa-red)] mb-0.5">
                Author
              </p>
              <p className="text-base font-bold text-[var(--text-primary)]">
                {post.author}
              </p>
            </div>
          </div>
        </header>

        {/* --- Featured Image --- */}
        <div className="relative aspect-[16/9] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden mb-16 border-2 border-[var(--text-primary)]/10 shadow-2xl">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* --- Article Body --- */}
        <article className="max-w-none">
          {/* Blockquote Style for Excerpt */}
          <div className="text-2xl md:text-3xl font-medium italic text-[var(--text-primary)]/80 border-l-8 border-[var(--jiwa-red)] pl-8 mb-16 leading-relaxed bg-[var(--text-primary)]/[0.03] py-8 pr-8 rounded-r-[2rem]">
            "{post.excerpt}"
          </div>

          {/* Parser untuk konten RichText dari Payload */}
          <RichTextParser content={post.content} />
        </article>

        {/* --- Related Stories Section --- */}
        {relatedResult.docs.length > 0 && (
          <section className="mt-40 pt-20 border-t-4 border-dashed border-[var(--text-primary)]/10">
            <h3 className="text-3xl md:text-5xl font-black italic tracking-tighter text-[var(--text-primary)] mb-12">
              More <span className="text-[var(--jiwa-red)]">Stories.</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {relatedResult.docs.map((relatedDoc: any) => (
                <BlogCard
                  key={relatedDoc.id}
                  post={{
                    ...relatedDoc,
                    // Format tanggal untuk kartu
                    date: new Date(relatedDoc.date).toLocaleDateString(
                      "id-ID",
                      { day: "numeric", month: "short", year: "numeric" },
                    ),
                    // Menangani gambar untuk kartu
                    image:
                      typeof relatedDoc.image === "object"
                        ? relatedDoc.image?.url
                        : "/placeholder.webp",
                  }}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
