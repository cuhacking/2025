// github.com/jhb-software/payload-plugins/tree/main/geocoding
/* eslint-disable node/prefer-global/process */
import {Brands} from "@/db/collections"
import { Media, Emails, Users } from "@/db/collections/models";
import {Website, SocialLinks} from "@/db/collections/globals";
import { linkedinOAuth, githubOAuth, discordOAuth, googleOAuth } from '@/cms/endpoints/auth'

// Adapters
import { resendAdapter } from '@payloadcms/email-resend'
import { postgresAdapter } from "@payloadcms/db-postgres";
import { s3Storage } from '@payloadcms/storage-s3'
import sharp from "sharp";

export const baseConfig = {
  globals: [
    Website,
    SocialLinks
  ],
  collections: [
    Users,
    Brands,
    Media,
    Emails
  ],
  email: resendAdapter({
    defaultFromAddress: 'info@cuhacking.ca',
    defaultFromName: 'cuHacking Team',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  plugins: [
    linkedinOAuth,
    githubOAuth,
    discordOAuth,
    googleOAuth,
    process.env.NODE_ENV==='production' && s3Storage({
    collections: {
      media: {
        prefix: "./media",
      },
    },
    bucket: process.env.S3_BUCKET || "",
    config: {
      forcePathStyle: true, // Important for using Supabase
      credentials: {
        accessKeyId: process.env.S3_ACCESSKEYID || "",
        secretAccessKey: process.env.S3_SECRET_ACCESSKEY || "",
      },
      region: process.env.S3_REGION || "",
      endpoint: process.env.S3_ENDPOINT || "",
    },
  }),
].filter(Boolean),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
    generateSchemaOutputFile: "../../libs/db/schema.ts", // resolves from location of payload.config.ts
  }),
  secret: process.env.PAYLOAD_SECRET,
  serverURL: process.env.NODE_ENV == 'production' ? process.env.CUHACKING_2025_AXIOM_PUBLIC_URL : process.env.CUHACKING_2025_AXIOM_LOCAL_URL,
  cors: process.env.CORS_WHITELIST_ORIGINS
    ? process.env.CORS_WHITELIST_ORIGINS.split(",")
    : [],
  csrf: process.env.CSRF_WHITELIST_ORIGINS
    ? process.env.CSRF_WHITELIST_ORIGINS.split(",")
    : [],
  sharp,
  typescript: {
    outputFile: "../../libs/db/payload-types.ts",
  },
}
