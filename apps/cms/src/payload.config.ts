// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres';
import { s3Storage } from '@payloadcms/storage-s3';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { User, Student } from '@cuhacking/db/collections/models/User';
import { Media } from '@cuhacking/db/collections/models/Media';
import { SocialLink } from '@cuhacking/db/collections/globals/SocialLink';
import { EventRole } from '@cuhacking/db/collections/models/Event-Role';
import { UserToEvent } from '@cuhacking/db/collections/models/User-To-Event';
import {
  Hackathon,
  HackathonEvents,
} from '@cuhacking/db/collections/models/Hackathon';
import {
  OrganizationSponsor
} from '@cuhacking/db/collections/models/Organization-Sponsor'
import {
  BaseEvent,
  GeneralEvent,
} from '@cuhacking/db/collections/models/Event';
import {
  ChallengePrize,
  Challenge,
} from '@cuhacking/db/collections/models/Challenge';
import {
  UserToOrganization,
  Organization,
  Sponsor,
} from '@cuhacking/db/collections/models/Organization';
import { Criteria } from '@cuhacking/db/collections/models/Criteria';
import {
  ApplicationForm,
  ApplicationResponse,
  QuestionResponse,
  ApplicationQuestion,
} from '@cuhacking/db/collections/models/Application';
import { HostToEvent } from '@cuhacking/db/collections/models/Host-To-Event';
import { SponsorToEvent } from '@cuhacking/db/collections/models/Sponsor-To-Event';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: User.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  serverURL: process.env.PAYLOAD_PUBLIC_EXTERNAL_SERVER_URL,
  cors: process.env.CORS_WHITELIST_ORIGINS
    ? process.env.CORS_WHITELIST_ORIGINS.split(',')
    : [],
  csrf: process.env.CSRF_WHITELIST_ORIGINS
    ? process.env.CSRF_WHITELIST_ORIGINS.split(',')
    : [],
  globals: [SocialLink],
  collections: [
    Hackathon,
    HackathonEvents,
    User,
    Student,
    Media,
    BaseEvent,
    GeneralEvent,
    EventRole,
    UserToEvent,
    Challenge,
    ChallengePrize,
    ApplicationForm,
    ApplicationResponse,
    QuestionResponse,
    ApplicationQuestion,
    Organization,
    UserToOrganization,
    Sponsor,
    SponsorToEvent,
    OrganizationSponsor,
    HostToEvent,
    Criteria,
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
    // payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
});
