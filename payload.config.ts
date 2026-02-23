import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { Media, Posts } from "./app/collections/Posts";

// Ganti nama import menjadi vercelBlobStorage
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Posts, Media],
  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  sharp,

  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true, // Pastikan slug di koleksi Media kamu adalah 'media'
      },
      // Gunakan token dari environment variable
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
});