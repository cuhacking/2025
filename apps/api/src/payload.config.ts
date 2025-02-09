import path from 'node:path'
// import {linkedinOAuth} from './endpoints/auth/linkedin'
/* eslint-disable node/prefer-global/process */
import { fileURLToPath } from 'node:url'
import { googleOAuth } from '@cuhacking/cms/endpoints/auth/google'
import { Users } from '@cuhacking/db/collections/models/User'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import { buildConfig } from 'payload'
import sharp from 'sharp'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    // autoLogin:
    // process.env.NEXT_PUBLIC_ENABLE_AUTOLOGIN === 'true'
    //   ? {
    //       email: 'test@example.com',
    //       password: 'test',
    //       prefillOnly: true,
    //     }
    //   : false,
    user: Users.slug,
    routes: {
      // createFirstUser: '/create-account',
    },
    importMap: {
      baseDir: path.resolve('../../../../src'),
    },
    components: {
  graphics: {
        Icon: '/components/icon#Icon',
        Logo: '/components/logo#Logo',
      },
            // https://dev.to/aaronksaunders/payload-cms-add-a-custom-create-account-screen-in-admin-ui-2pdg
      // https://www.youtube.com/watch?v=X-6af837WbY
      views: {
        'login': {
          Component: '/components/oauth#OAuth',
          path: '/login',
        },
        'create-account': {
          Component: '/components/oauth#OAuth',
          path: '/create-account',
        },
      },
    },
 meta: {
      description: 'cuHacking 2025 CMS',
      icons: [
        {
          type: 'image/png',
          rel: 'icon',
          url: '/assets/favicon.ico',
        },
      ],
      titleSuffix: '- cuHacking 2025',
    },
  },
  serverURL: process.env.PAYLOAD_PUBLIC_EXTERNAL_SERVER_URL,
  cors: process.env.CORS_WHITELIST_ORIGINS
    ? process.env.CORS_WHITELIST_ORIGINS.split(',')
    : [],
  csrf: process.env.CSRF_WHITELIST_ORIGINS
    ? process.env.CSRF_WHITELIST_ORIGINS.split(',')
    : [],
  // globals: [SocialLink],
  collections: [
    Users,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
generateSchemaOutputFile: path.resolve('../../libs/db/schema.ts'),
  }),
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix:
            process.env.NODE_ENV === 'production' ? './media' : './media-dev',
        },
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        forcePathStyle: true, // Important for using Supabase
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION || '',
        endpoint: process.env.S3_ENDPOINT || '',
      },
    }),
    googleOAuth,
    // linkedinOAuth
    // payloadCloudPlugin(),
  ],
})
