import process from 'node:process'
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const sharedEnv = createEnv({
  shared: {
    NODE_ENV: z.enum(['development', 'test', 'production']).optional(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
})
