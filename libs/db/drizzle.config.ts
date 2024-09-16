import type { Config } from 'drizzle-kit'

import { envWebsiteDb } from '@cuhacking/env'

export default {
  dialect: 'postgresql',
  schema: './src/schema/index.ts',
  out: './drizzle',
  dbCredentials: {
    url: envWebsiteDb.DATABASE_URL,
  },
} satisfies Config
