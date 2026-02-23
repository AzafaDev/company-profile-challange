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

/**
 * 1. SEO DYNAMIC METADATA
 * Memastikan judul & deskripsi di Google sesuai dengan yang diinput di CMS
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "posts",
    where: { slug: { equals: slug } },
    depth: 1,
  });

  const post = result.docs[0];
  if (!post) return { title: "Post Not Found" };

  const postImage = post.image as any;

  return {
    title: post.metaTitle || `${post.title} | Janji Jiwa Journal`,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SERVER_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: [{ url: postImage?.url || "/og-image.jpg" }],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: [postImage?.url || "/og-image.jpg"],
    },
  };
}

export default async function PostDetailPage({ params }: PageProps) {
  // UNWRAP PARAMS (Standar Next.js 15)
  const { slug } = await params;
  const payload = await getPayloadClient();

  // FETCH DATA UTAMA
  const result = await payload.find({
    collection: "posts",
    where: { slug: { equals: slug } },
    depth: 1,
  });

  const post = result.docs[0];
  if (!post) return notFound();

  // IMAGE HANDLING
  const imageData = typeof post.image !== "number" ? post.image : null;
  const imageUrl = imageData?.url || "/placeholder.webp";
  const imageAlt = (typeof imageData !== "string" && imageData?.alt) || post.title;

  // FETCH RELATED POSTS (Untuk meningkatkan internal linking SEO)
  const relatedResult = await payload.find({
    collection: "posts",
    where: { 
      and: [
        { category: { equals: post.category } }, 
        { slug: { not_equals: slug } }
      ] 
    },
    limit: 2,
    depth: 1,
  });

  /**
   * 2. JSON-LD SCHEMA
   * Script ini tidak terlihat di UI, tapi sangat disukai Google untuk Rich Snippets
   */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": imageUrl,
    "datePublished": post.date,
    "author": { "@type": "Person", "name": post.author },
    "description": post.excerpt,
    "publisher": {
      "@type": "Organization",
      "name": "Janji Jiwa",
      "logo": { "@type": "ImageObject", "url": `${process.env.NEXT_PUBLIC_SERVER_URL}/logo.png` }
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-20 transition-colors duration-300">
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* NAVIGASI */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--jiwa-red)] mb-12 hover:gap-4 transition-all group"
        >
          <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-1" /> 
          Back to Journal
        </Link>

        {/* HEADER */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white bg-[var(--jiwa-red)] shadow-lg shadow-red-900/20">
              {post.category}
            </span>
            <div className="flex items-center gap-5 text-[10px] font-bold uppercase tracking-widest text-[var(--text-primary)]/50">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[var(--jiwa-red)]" />
                {new Date(post.date).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter leading-[0.95] text-[var(--text-primary)] mb-10">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 pt-8 border-t border-[var(--text-primary)]/20">
            <div className="w-12 h-12 rounded-full bg-[var(--jiwa-red)] flex items-center justify-center text-white border-4 border-[var(--bg-primary)] shadow-xl">
              <User size={24} />
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--jiwa-red)] mb-0.5">Author</p>
              <p className="text-base font-bold text-[var(--text-primary)]">{post.author}</p>
            </div>
          </div>
        </header>

        {/* HERO IMAGE */}
        <div className="relative aspect-[16/9] rounded-[3.5rem] overflow-hidden mb-16 border-2 border-[var(--text-primary)]/10 shadow-2xl">
          <Image 
            src={imageUrl} 
            alt={imageAlt} 
            fill 
            className="object-cover" 
            priority 
          />
        </div>

        {/* BODY ARTICLE */}
        <article className="max-w-none">
          <div className="text-2xl md:text-3xl font-medium italic text-[var(--text-primary)]/80 border-l-8 border-[var(--jiwa-red)] pl-8 mb-16 leading-relaxed bg-[var(--text-primary)]/[0.03] py-8 pr-8 rounded-r-[2rem]">
            "{post.excerpt}"
          </div>
          
          <RichTextParser content={post.content} />
        </article>

        {/* RELATED STORIES */}
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
                    date: new Date(relatedDoc.date).toLocaleDateString("id-ID", { day: 'numeric', month: 'short', year: 'numeric' }),
                    image: typeof relatedDoc.image !== "number" ? relatedDoc.image?.url : "/placeholder.webp"
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