import { postgresAdapter } from '@payloadcms/db-postgres';
import { s3Storage } from '@payloadcms/storage-s3';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
// import {googleOAuth} from './endpoints/auth/google'
// import {linkedinOAuth} from './endpoints/auth/linkedin'
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { Users } from '@cuhacking/db/collections/models/User';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  routes:{
   // login: '/auth/login',
  },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components:{
      // https://dev.to/aaronksaunders/payload-cms-add-a-custom-create-account-screen-in-admin-ui-2pdg
      // https://www.youtube.com/watch?v=X-6af837WbY
views: {
        // 'create-account': {
        //   Component: 'apps/cms/src/components/CreateAccountViewComponent',
        //   path: '/create-account',
        // },
        // 'login': {
        //   Component: 'apps/cms/src/components/Users/CreateAccountViewComponent',
        //   path: '/login',
        // },
    }
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
  typescript: {
    outputFile: path.resolve(
      dirname + '../../../../libs/db/types/',
      'payload-types.ts',
    ),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
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
// googleOAuth,
// linkedinOAuth
    // payloadCloudPlugin(),
  ],
});
