// github.com/jhb-software/payload-plugins/tree/main/geocoding
/* eslint-disable node/prefer-global/process */
import {adminGroups, Brands, Roles} from "@/db/collections"
import {Sponsor,
        Organization,
        ChallengePrize,
        HostToEvent,
        SponsorToEvent,
        UserToEvent,
        GeneralEvent,
        BaseEvent,
        Media,
        Emails,
        Hardware,
        Users,
        Teams } from "@/db/collections/models";
import {Constants} from "@/db/globals";
import { linkedinOAuth, githubOAuth, discordOAuth, googleOAuth } from '@/cms/auth'

import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { resendAdapter } from '@payloadcms/email-resend'
import { postgresAdapter } from "@payloadcms/db-postgres";
import { s3Storage } from '@payloadcms/storage-s3'
import sharp from "sharp";

export const baseConfig = {
  globals: [
    Constants,
  ],
  collections: [
    Organization,
    Sponsor,
    Users,
    Teams,
    Brands,
    Media,
    Emails,
    Roles,
    BaseEvent,
    Hardware,
    GeneralEvent,
    UserToEvent,
    SponsorToEvent,
    HostToEvent,
    ChallengePrize,
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
formBuilderPlugin({
  defaultToEmail: 'info@cuhacking,ca',
// redirectRelationships: ['pages'],
  fields: {
    text: true,
    textarea: true,
    select: true,
    email: true,
    state: true,
    country: true,
    checkbox: true,
    number: true,
    message: true,
    payment: false,
  },
formOverrides: {
  admin: {
    group: adminGroups.communication,
    livePreview: {
     // url: `${process.env.CUHACKING_2025_PORTAL_LOCAL_URL}/registration`,
     url: `${process.env.CUHACKING_2025_PORTAL_PUBLIC_URL}/registration`,
    }
  },
  versions: {
    drafts: true
  },
    // access: {
    // },
  },
  formSubmissionOverrides:{
  admin: {
    group: adminGroups.communication
  },
  }
}),
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
