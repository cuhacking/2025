import process from 'node:process'
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

import { sharedEnv } from '../shared'

export const envDocsCalendar = createEnv({
  extends: [sharedEnv],
  server: {
    GOOGLE_CALENDAR_ID: z.string().optional(),
    GOOGLE_CALENDAR_SECRET: z.string().optional(),
  },
  experimental__runtimeEnv: {
    GOOGLE_CALENDAR_ID: process.env.GOOGLE_CALENDAR_ID,
    GOOGLE_CALENDAR_SECRET: process.env.GOOGLE_CALENDAR_SECRET,
  },
  emptyStringAsUndefined: true,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
})
