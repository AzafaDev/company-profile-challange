import { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: "media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card", // Ukuran khusus untuk kartu blog di UI Anda
        width: 600,
        height: 750,
        position: "centre",
      },
      {
        name: "og",
        width: 1200,
        height: 630,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"], // Membatasi hanya file gambar saja
  },
  access: {
    read: () => true, // Memungkinkan gambar diakses secara publik
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      admin: {
        description:
          "Teks deskripsi gambar untuk aksesibilitas dan SEO Google.",
      },
    },
  ],
};
