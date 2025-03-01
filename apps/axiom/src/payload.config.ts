// THEME CREDITS: github.com/akhrarovsaid/payload-theme-quantum-leap
// github.com/jhb-software/payload-plugins/tree/main/geocoding
/* eslint-disable node/prefer-global/process */
import path from "node:path";
import { s3Storage } from '@payloadcms/storage-s3'
import { fileURLToPath } from "node:url";
import { linkedinOAuth, githubOAuth, discordOAuth, googleOAuth } from '@/cms/endpoints/auth'
import {Brands} from "@/db/collections"
import { Media, Users, Emails } from "@/db/collections/models";
import {Website, SocialLinks} from "@/db/collections/globals";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    autoLogin:
    process.env.NODE_ENV==="development"
      && {
          email: process.env.LOCAL_DEV_EMAIL_ADDRESS,
          password: process.env.LOCAL_DEV_PASSWORD,
          prefillOnly: true,
        },
    user: Users.slug,
    routes: {
      // createFirstUser: '/create-account',
    },
    importMap: {
      baseDir: path.resolve("../../../../src"),
    },
    components: {
      // https://payload-visual-guide.vercel.app/
      // beforeDashboard: ["/components/before-dashboard#BeforeDashboard"],
      // afterDashboard: ["/components/after-dashboard#AfterDashboard"],
      beforeLogin: ['/components/BeforeLogin#BeforeLogin'],
      afterLogin: ["/components/AfterLogin#AfterLogin"],
      graphics: {
        Icon: "/components/icon#Icon",
        Logo: "/components/logo#Logo",
      },
      Nav: '/components/Nav#Nav',
      // https://dev.to/aaronksaunders/payload-cms-add-a-custom-create-account-screen-in-admin-ui-2pdg
      // https://www.youtube.com/watch?v=X-6af837WbY
      views: {
      //   'login': {
      //     Component: '/components/oauth#OAuth',
      //     path: '/login',
      //   },
      //   'create-account': {
      //     Component: '/components/oauth#OAuth',
      //     path: '/create-account',
      //   },
        dashboard: {
          Component: '/components/Dashboard#Dashboard',
        },
      },
    },
    avatar: {
      Component: '/components/Avatar#Avatar',
    },
    theme: 'dark',
    meta: {
      description: "cuHacking 2025 CMS",
      icons: [
        {
          type: "image/ico",
          rel: "icon",
          url: "/assets/favicon.ico",
        },
      ],
      titleSuffix: "- cuHacking 2025",
    },
  },
  serverURL: process.env.NODE_ENV == 'production' ? process.env.CUHACKING_2025_AXIOM_PUBLIC_URL : process.env.CUHACKING_2025_AXIOM_LOCAL_URL,
  cors: process.env.CORS_WHITELIST_ORIGINS
    ? process.env.CORS_WHITELIST_ORIGINS.split(",")
    : [],
  csrf: process.env.CSRF_WHITELIST_ORIGINS
    ? process.env.CSRF_WHITELIST_ORIGINS.split(",")
    : [],
  globals: [
    Website,
    SocialLinks
  ],
  collections: [Users, Brands, Media, Emails],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve("../../libs/db/payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
    generateSchemaOutputFile: path.resolve("../../libs/db/schema.ts"),
  }),
  plugins: [
    linkedinOAuth,
    githubOAuth,
    discordOAuth,
    googleOAuth,
    s3Storage({
      collections: {
        media: {
          prefix:
             "./media",
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
});
