import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react"; // Untuk render body content dari Sanity
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Ambil data spesifik berdasarkan slug
async function getPostDetail(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    "category": category,
    "author": author->name,
    "date": publishedAt,
    "readTime": readTime,
    "img": mainImage.asset->url,
    body // Ini adalah array blok konten dari Sanity
  }`;

  const data = await client.fetch(query, { slug });
  return data;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, ' ')} | Bean & Beyond`,
    description: `${slug.replace(/-/g, ' ')} | Bean & Beyond`,
  };
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
 const post = await getPostDetail(slug);
  if (!post)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Post not found.
      </div>
    );

  return (
    <main className="min-h-screen bg-[#F9F7F2] pb-40">
      {/* HERO SECTION - Full Width Image */}
      <section className="relative h-[70vh] w-full bg-stone-200 overflow-hidden">
        <Image
          src={post.img}
          alt={post.title}
          className="w-full h-full object-cover grayscale brightness-75"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9F7F2] to-transparent" />

        <div className="absolute bottom-0 left-0 w-full px-6 md:px-24 pb-12">
          <div className="max-w-4xl">
            <Link
              href="/blog"
              className="inline-block mb-8 text-[10px] uppercase tracking-[0.4em] font-black text-stone-500 hover:text-amber-800 transition-colors"
            >
              ← Back to Journal
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-stone-900 text-white text-[9px] font-black uppercase tracking-widest">
                {post.category}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold">
                {post.readTime}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[0.9] tracking-tighter">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="px-6 md:px-24 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Metadata Sidebar */}
          <aside className="md:col-span-3 border-t border-stone-200 pt-8">
            <div className="space-y-12">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">
                  Written by
                </p>
                <p className="text-sm font-bold text-stone-900 uppercase tracking-tighter">
                  {post.author}
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">
                  Published
                </p>
                <p className="text-sm font-bold text-stone-900 uppercase tracking-tighter">
                  {new Date(post.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="pt-8 border-t border-stone-100">
                <p className="text-[10px] leading-relaxed text-stone-400 italic">
                  "Kopi yang baik layak mendapatkan perhatian yang tenang."
                </p>
              </div>
            </div>
          </aside>

          {/* Main Article Body */}
          <article className="md:col-span-8 md:col-start-5 prose prose-stone prose-lg max-w-none">
            {/* PortableText digunakan untuk merender Rich Text dari Sanity */}
            <div className="text-stone-800 leading-relaxed font-light">
              <PortableText value={post.body} components={RichTextComponents} />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

// Custom styling untuk Rich Text agar tetap Brutalist
const RichTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-4xl font-serif text-stone-900 mt-16 mb-8 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-serif text-stone-900 mt-12 mb-6">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="mb-8 text-lg md:text-xl text-stone-700 font-light leading-relaxed">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-amber-800 pl-6 my-12 italic text-2xl text-stone-600 font-serif">
        {children}
      </blockquote>
    ),
  },
};
