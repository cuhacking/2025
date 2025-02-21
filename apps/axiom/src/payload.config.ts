// THEME CREDITS: github.com/akhrarovsaid/payload-theme-quantum-leap
// github.com/jhb-software/payload-plugins/tree/main/geocoding
import path from "node:path";
// import {linkedinOAuth} from './endpoints/auth/linkedin'
/* eslint-disable node/prefer-global/process */
import { fileURLToPath } from "node:url";
// import { googleOAuth } from '@cuhacking/cms/endpoints/auth/google'
import { Users, Brands, Media } from "@/db/collections/models";
// import {Settings} from '@/db/collections/globals/Settings'
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fields, formBuilderPlugin } from'@payloadcms/plugin-form-builder'


const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    // autoLogin:
    // process.env.NEXT_PUBLIC_ENABLE_AUTOLOGIN === 'true'
    //   ? {
    //       email: 'hasithdev@gmail.com',
    //       password: 'admin',
    //       prefillOnly: true,
    //     }
    //   : false,
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
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  cors: process.env.CORS_WHITELIST_ORIGINS
    ? process.env.CORS_WHITELIST_ORIGINS.split(",")
    : [],
  csrf: process.env.CSRF_WHITELIST_ORIGINS
    ? process.env.CSRF_WHITELIST_ORIGINS.split(",")
    : [],
  globals: [
  ],
  collections: [Users, Brands, Media],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "",
  sharp,
  typescript: {
    outputFile: path.resolve("../../libs/db/payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
    generateSchemaOutputFile: path.resolve("../../libs/db/schema.ts"),
  }),
  plugins: [
    formBuilderPlugin({
      fields: {
        text: true,
        textarea: true,
        select: true,
        wherehear: {
          ...fields.select,
          hasMany: true,
          options: [
            { label: 'Linked In', value: 'Linked In' },
            { label: 'Instagram', value: 'Instagram' },
            { label: 'Career Fair', value: 'Career Fair' }
          ]
        },
        workshop: {
          ...fields.select,
          hasMany: true,
          options: [
            { label: 'QNX', value: 'QNX' },
            { label: 'GROQ', value: 'GROQ' },
            { label: 'SOLACE', value: 'SOLACE' }
          ]
        },
        email: true,
        state: true,
        country: true,
        checkbox: true,
        number: true,
        message: true,
        payment: false
      },
      formOverrides: {
        slug: 'forms',
        admin: { group: 'Forms' },
        access: {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          read: ({ req }) => true,
          update: () => false,
        },
        fields: ({ defaultFields }) => {
          return [
            ...defaultFields,
            {
              name: 'hearaboutus',
              type: 'select',
              required: true,
              hasMany: true,
              options: [
                { label: 'Linked In', value: 'Linked In' },
                { label: 'Instagram', value: 'Instagram' },
                { label: 'Career Fair', value: 'Career Fair' }
              ]
            },
            {
              name: 'workshop',
              type: 'select',
              required: true,
              hasMany: true,
              options: [
                { label: 'QNX', value: 'QNX' },
                { label: 'GROQ', value: 'GROQ' },
                { label: 'SOLACE', value: 'SOLACE' }
              ]
            }
          ]
        }
      }
    }),
/*     s3Storage({
      collections: {
        media: {
          prefix:
            process.env.NODE_ENV === "production" ? "./media" : "./media-dev",
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
    }), */
    // googleOAuth,
    // linkedinOAuth
    // payloadCloudPlugin(),
  ],
});
