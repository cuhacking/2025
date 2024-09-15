import process from 'node:process'
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

import { sharedEnv } from '../shared'
import { envWebsiteDb } from './db'

export const envWebsiteServer = createEnv({
  extends: [sharedEnv, envWebsiteDb],
  shared: {
    PORT: z.coerce.number().default(3000),
  },
  server: {
    AUTH_SECRET: z.string(),

    AUTH_GOOGLE_ID: z.string().optional(),
    AUTH_GOOGLE_SECRET: z.string().optional(),
  },
  experimental__runtimeEnv: {
    PORT: process.env.PORT,
  },
  emptyStringAsUndefined: true,
  // skipValidation: !!process.env.['SKIP_ENV_VALIDATION'],
})
