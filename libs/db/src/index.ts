import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { envWebsiteDb } from '@cuhacking/env'
import * as schema from './schema'

const sql = postgres(envWebsiteDb.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/hackathon')

export const db = drizzle(sql, {
  schema,
  logger: envWebsiteDb.NODE_ENV === 'development',
})

export * from './schema/user'
export * from './schema/session'
