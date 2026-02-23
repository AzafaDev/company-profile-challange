import { MetadataRoute } from 'next';
import { getPayloadClient } from '@/lib/payload';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayloadClient();
  
  // 1. Ambil semua data postingan dari Payload
  const posts = await payload.find({
    collection: 'posts',
    limit: 1000, // Ambil semua post
    select: {
      slug: true,
      updatedAt: true,
    },
  });

  // 2. Format URL untuk setiap postingan blog
  const postEntries = posts.docs.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 3. Tambahkan halaman statis utama
  const routes = ['', '/blog', '/about', '/menu'].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }));

  return [...routes, ...postEntries];
}