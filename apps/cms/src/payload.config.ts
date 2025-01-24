// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { s3Storage } from '@payloadcms/storage-s3'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from '@cuhacking/db/collections/Users'
import { Media } from '@cuhacking/db/collections/Media'
import { SocialLinks } from '@cuhacking/db/collections/SocialLinks'
import { Sponsors } from '@cuhacking/db/collections/Sponsors'
import { Hackathons } from '@cuhacking/db/collections/Hackathons'
import { Events } from '@cuhacking/db/collections/Events'
import { Challenges } from '@cuhacking/db/collections/Challenges'
import { Schedule } from '@cuhacking/db/collections/Schedule'
import { Organizations } from '@cuhacking/db/collections/Organizations'
import { Welcome } from '@cuhacking/db/collections/Welcome'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  cors:  "*",
  csrf: ["*"],
  collections: [
    Hackathons,
    Users,
    Media,
    SocialLinks,
    Sponsors,
    Events,
    Challenges,
    Schedule,
    Organizations,
    Welcome
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
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
          prefix: process.env.NODE_ENV  === "production" ? "./media" : "./media-dev"
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
    // payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
