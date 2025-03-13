// github.com/jhb-software/payload-plugins/tree/main/geocoding
/* eslint-disable node/prefer-global/process */
import {navAccordions,
        Brands,
        Groups,
OrganizerTeams,
       } from "@/db/collections"

import {
        ChallengePrize,
        Events,
        Media,
        Emails,
        Hardware,
        Users,
        Hackathons,
         } from "@/db/collections/models";
import { Website, Portal} from "@/db/globals";
import { linkedinOAuth, githubOAuth, discordOAuth, googleOAuth } from '@/cms/auth'

import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { resendAdapter } from '@payloadcms/email-resend'
import { postgresAdapter } from "@payloadcms/db-postgres";
import { s3Storage } from '@payloadcms/storage-s3'
import sharp from "sharp";

export const baseConfig = {
defaultDepth: 3,
  globals: [
    Website,
    Portal
  ],
  collections: [
    Groups,
    Users,
    Brands,
    Media,
    Emails,
    OrganizerTeams,
    Hardware,
    Events,
        Hackathons,
    Challenges,
  ],
  blocks:[
   // TeamBlock
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
    group: navAccordions.communication,
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
    slug: 'form-submissions',
    fields: ({ defaultFields }) => {
      return [
        ...defaultFields,
        {
          name: 'submittedBy',
          type: 'relationship',
          relationTo: 'users',
          admin: {
            readOnly: true
          }
        },
      ]
    },
    admin: {
      group: navAccordions.communication
    },
  }
}),
    s3Storage({
    enabled: process.env.NODE_ENV !== "development",
    collections: {
      media: {
        prefix: "./media",
      },
    },
    bucket: process.env.S3_BUCKET || "",
    config: {
      forcePathStyle: true, // Important for using Supabase
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
      },
      region: process.env.S3_REGION || "",
      endpoint: process.env.S3_ENDPOINT || "",
    },
  }),
],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
    generateSchemaOutputFile: "../../libs/db/schema.ts", // resolves from location of payload.config.ts
  }),
  secret: process.env.PAYLOAD_SECRET,
  serverURL: process.env.NODE_ENV === 'development' ? process.env.CUHACKING_2025_AXIOM_LOCAL_URL : process.env.CUHACKING_2025_AXIOM_PUBLIC_URL,
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
