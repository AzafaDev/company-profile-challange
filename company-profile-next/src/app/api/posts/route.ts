import { createClient } from "@sanity/client";
import { NextResponse } from "next/server";
import { author } from "../../../../../studio-company-profile/schemaTypes/author";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_WRITE_TOKEN,
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const category = formData.get("category") as string;
    const content = formData.get("content") as string;
    const image = formData.get("image") as File;
    const readTime = formData.get("readTime") as string;

    let imageAsset;

    // 1. Upload Gambar ke Sanity jika ada
    if (image) {
      const arrayBuffer = await image.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      imageAsset = await client.assets.upload("image", buffer, {
        filename: image.name,
      });
    }

    // 2. Create Post dengan referensi image asset
    const result = await client.create({
      _type: "post",
      title,
      slug: {
        _type: "slug",
        current: `${title.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
      },
      author: {
        _type: "reference",
        _ref: '423518b3-246e-471d-8da0-bb567aaef335',
      },
      category,
      publishedAt: new Date().toISOString(),
      readTime: readTime || "5 min read",
      // Link gambar ke asset yang baru diupload
      mainImage: imageAsset
        ? {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: imageAsset._id,
            },
          }
        : undefined,
      body: [
        {
          _type: "block",
          children: [{ _type: "span", text: content }],
          style: "normal",
        },
      ],
    });

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    console.error("UPLOAD ERROR:", error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
