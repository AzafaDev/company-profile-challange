import { revalidatePath } from "next/cache";
import { CollectionConfig } from "payload";

const formatSlug = (val: string): string =>
  val.replace(/ /g, '-').replace(/[^\w-]+/g, '').toLowerCase();

export const Posts: CollectionConfig = {
  slug: "posts",
  hooks: {
    afterChange: [({ doc }) => {
      revalidatePath("/blog");
      if (doc?.slug) revalidatePath(`/blog/${doc.slug}`);
    }],
    afterDelete: [({ doc }) => {
      revalidatePath("/blog");
      if (doc?.slug) revalidatePath(`/blog/${doc.slug}`);
    }]
  },
  admin: { useAsTitle: "title" },
  fields: [
    {
      type: "tabs", // Menggunakan Tabs agar Dashboard Admin rapi
      tabs: [
        {
          label: "Content",
          fields: [
            { name: "title", type: "text", required: true },
            { name: "content", type: "richText", required: true },
            { name: "excerpt", type: "textarea", required: true },
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
        {
          label: "SEO & Metadata",
          fields: [
            {
              name: "metaTitle",
              type: "text",
              label: "Meta Title (SEO)",
              admin: { description: "Muncul sebagai judul di Google. Ideal: 50-60 karakter." }
            },
            {
              name: "metaDescription",
              type: "textarea",
              label: "Meta Description (SEO)",
              admin: { description: "Ringkasan di hasil pencarian Google. Ideal: 150-160 karakter." }
            },
          ],
        },
        {
          label: "Settings",
          fields: [
            { name: "author", type: "text", required: true },
            { name: "date", type: "date", required: true },
            {
              name: "category",
              type: "select",
              required: true,
              options: [
                { label: "Story", value: "Story" },
                { label: "Tips", value: "Tips" },
                { label: "News", value: "News" },
                { label: "Menu", value: "Menu" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      admin: { position: 'sidebar' },
      hooks: {
        beforeValidate: [({ value, data }) => {
          if (value) return formatSlug(value);
          if (data?.title) return formatSlug(data.title);
          return value;
        }],
      },
    },
  ],
};

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: "media",
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
      { name: 'og', width: 1200, height: 630, position: 'centre' }, // Ukuran ideal share sosmed
    ],
    adminThumbnail: 'thumbnail',
  },
  access: { read: () => true },
  fields: [
    { name: "alt", type: "text", required: true },
  ],
};