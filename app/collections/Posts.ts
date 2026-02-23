import { revalidatePath } from "next/cache";
import { CollectionConfig } from "payload";

// Fungsi helper untuk mengubah judul menjadi slug (format-url-seperti-ini)
const formatSlug = (val: string): string =>
  val
    .replace(/ /g, '-')           // Ganti spasi dengan dash (-)
    .replace(/[^\w-]+/g, '')      // Hapus karakter non-alfanumerik kecuali dash
    .toLowerCase();               // Ubah jadi huruf kecil

export const Posts: CollectionConfig = {
  slug: "posts",
  hooks: {
    afterChange: [
      ({ doc }) => {
        // Membersihkan cache halaman daftar blog
        revalidatePath("/blog");
        // Membersihkan cache halaman detail blog yang spesifik menggunakan slug dari data
        if (doc?.slug) {
          revalidatePath(`/blog/${doc.slug}`);
        }
      }
    ],
    afterDelete: [
      ({ doc }) => {
        // Membersihkan cache halaman daftar blog
        revalidatePath("/blog");
        // Membersihkan cache halaman detail blog yang spesifik menggunakan slug dari data
        if (doc?.slug) {
          revalidatePath(`/blog/${doc.slug}`);
        }
      }
    ]
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      unique: true, // Tidak boleh ada slug yang sama di database
      admin: {
        position: 'sidebar', // Muncul di kolom kanan (sidebar) dashboard agar rapi
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            // Jika admin mengisi slug manual, tetap kita format. 
            // Jika kosong, kita buatkan otomatis dari title.
            if (value) return formatSlug(value);
            if (data?.title) return formatSlug(data.title);
            return value;
          },
        ],
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
    },
    {
      name: "author",
      type: "text",
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayOnly",
        },
      },
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
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export const Media: CollectionConfig = {
  slug: "media",
  hooks: {
    afterChange: [
      ({ doc }) => {
        // Membersihkan cache halaman daftar blog
        revalidatePath("/blog");
        // Membersihkan cache halaman detail blog yang spesifik menggunakan slug dari data
        if (doc?.slug) {
          revalidatePath(`/blog/${doc.slug}`);
        }
      }
    ],
    afterDelete: [
      ({ doc }) => {
        // Membersihkan cache halaman daftar blog
        revalidatePath("/blog");
        // Membersihkan cache halaman detail blog yang spesifik menggunakan slug dari data
        if (doc?.slug) {
          revalidatePath(`/blog/${doc.slug}`);
        }
      }
    ]
  },
  upload: {
    // staticDir sudah tidak terlalu terpakai jika menggunakan Vercel Blob, 
    // tapi Payload tetap membutuhkannya sebagai fallback lokal.
    staticDir: "media",
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true, // Bagus untuk aksesibilitas (SEO)
    },
  ],
};