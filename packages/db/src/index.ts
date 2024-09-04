import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { envWebsiteDb } from '@cuhacking/env'
import * as schema from './schema'

const sql = postgres(envWebsiteDb.DATABASE_URL)

export const db = drizzle(sql, {
  schema,
  logger: envWebsiteDb.NODE_ENV === 'development',
})
