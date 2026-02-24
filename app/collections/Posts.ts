import { revalidatePath } from "next/cache";
import { CollectionConfig } from "payload";

const formatSlug = (val: string): string =>
  val
    ?.replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .toLowerCase()
    .replace(/-{2,}/g, "-")
    .trim();

export const Posts: CollectionConfig = {
  slug: "posts",
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePath("/blog");
        if (doc?.slug) revalidatePath(`/blog/${doc.slug}`);
      },
    ],
    afterDelete: [
      ({ doc }) => {
        revalidatePath("/blog");
        if (doc?.slug) revalidatePath(`/blog/${doc.slug}`);
      },
    ],
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "author", "category", "date"],
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            { name: "title", type: "text", required: true },
            {
              name: "content",
              type: "richText",
              required: true,
              admin: {
                description:
                  "Tulis isi konten selengkap mungkin untuk Teman Sejiwa.",
              },
            },
            {
              name: "excerpt",
              type: "textarea",
              required: true,
              admin: {
                description:
                  "Ringkasan pendek untuk halaman depan blog (max 160 karakter).",
              },
            },
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
              admin: {
                description: "Ideal: 50-60 karakter.",
              },
            },
            {
              name: "metaDescription",
              type: "textarea",
              label: "Meta Description (SEO)",
              admin: {
                description: "Ideal: 150-160 karakter.",
              },
            },
          ],
        },
        {
          label: "Settings",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "author",
                  type: "text",
                  required: true,
                  admin: { width: "50%" },
                },
                {
                  name: "date",
                  type: "date",
                  required: true,
                  admin: { width: "50%" },
                },
              ],
            },
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
      admin: {
        position: "sidebar",
        description: "URL unik. Digenerate otomatis dari judul jika kosong.",
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) return formatSlug(value);
            if (data?.title) return formatSlug(data.title);
            return value;
          },
        ],
      },
    },
  ],
};
