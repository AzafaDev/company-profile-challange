import { BlogClientContent } from "@/components/blog/BlogClientContent";
import { client } from "@/sanity/lib/client";

// Fungsi untuk mengambil data dari Sanity
async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    "id": _id,
    title,
    "slug": slug.current,
    "category": category,
    "author": author->name,
    "date": publishedAt,
    "readTime": readTime,
    "img": mainImage.asset->url
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-[#F9F7F2] pt-40 pb-20 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-block bg-stone-900 px-3 py-1 mb-8">
              <span className="text-white text-[10px] uppercase tracking-[0.3em] font-black">
                The Journal
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-stone-900 tracking-tighter leading-none">
              Stories Behind <br />
              <span className="italic font-light text-stone-400">
                the Brew.
              </span>
            </h1>
          </div>
          <p className="text-stone-500 max-w-xs font-light leading-relaxed border-l border-stone-200 pl-6">
            Catatan kami tentang perjalanan mencari biji terbaik, teknik
            seduhan, dan budaya kopi.
          </p>
        </header>

        {/* Karena kita butuh Framer Motion (Client Side), 
            kita pisahkan bagian Grid ke komponen client */}
        <BlogClientContent posts={posts} />

        {/* NEWSLETTER (Static Server Side is fine) */}
        <div className="mt-40 p-12 md:p-20 bg-white rounded-3xl flex flex-col items-center text-center shadow-sm border border-stone-100">
          <span className="text-[10px] uppercase tracking-[0.5em] text-amber-800 font-black mb-6">
            Mailing List
          </span>
          <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-12 tracking-tighter">
            Kurasi mingguan langsung <br className="hidden md:block" /> ke inbox
            Anda.
          </h3>
          <form className="w-full max-w-md flex flex-col md:flex-row gap-6">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-transparent border-b-2 border-stone-200 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors placeholder:text-stone-300 text-sm"
            />
            <button className="text-[10px] uppercase tracking-[0.3em] font-black text-stone-900 border-b-2 border-stone-900 pb-1 hover:text-amber-800 hover:border-amber-800 transition-all">
              Subscribe —
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
