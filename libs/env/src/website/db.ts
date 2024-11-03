import process from 'node:process'
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

import { sharedEnv } from '../shared'

export const envWebsiteDb = createEnv({
  extends: [sharedEnv],
  server: {
    DATABASE_URL: z.string().url().startsWith('postgres').optional(),
  },
  experimental__runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  emptyStringAsUndefined: true,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
})
