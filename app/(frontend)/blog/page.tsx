import BlogClient from "@/components/blog/BlogClient";
import { getPayloadClient } from "@/lib/payload";

export default async function BlogPage() {
  const payload = await getPayloadClient();
  
  // Ambil data dari koleksi 'posts'
  const data = await payload.find({
    collection: "posts",
    depth: 1, // Agar data image (koleksi media) ikut terbawa
    sort: "-date", // Urutkan dari yang terbaru
  });

  // Bersihkan data agar siap dipakai di frontend
  const sanitizedPosts = data.docs.map((doc: any) => ({
    id: doc.id,
    title: doc.title,
    content: doc.content,
    excerpt: doc.excerpt,
    author: doc.author,
    // Format tanggal: 2024-01-01 -> 01 Jan 2024
    date: new Date(doc.date).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    category: doc.category,
    // Ambil URL gambar dari relasi media
    image: doc.image.url, 
  }));

  return <BlogClient allPosts={sanitizedPosts} />;
}