import { MetadataRoute } from "next";
import { getPayloadClient } from "@/lib/payload";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayloadClient();
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  // --- FETCH CMS POSTS ---
  const posts = await payload.find({
    collection: "posts",
    limit: 1000,
    select: { slug: true, updatedAt: true },
  });

  // --- DYNAMIC BLOG ENTRIES ---
  const postEntries = posts.docs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // --- MAIN STATIC ROUTES ---
  const routes = ["", "/blog", "/about", "/services", "/teams"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: route === "" ? 1.0 : 0.8,
    }),
  );

  return [...routes, ...postEntries];
}
