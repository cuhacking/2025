import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { envWebsiteDb } from '@cuhacking/env'
import * as schema from './schema'

const sql = postgres(envWebsiteDb.DATABASE_URL)

export const db = drizzle(sql, {
  schema,
  logger: envWebsiteDb.NODE_ENV === 'development',
})

export * from './schema/emergencyContact'
export * from './schema/program'
export * from './schema/resume'
export * from './schema/school'
export * from './schema/session'
export * from './schema/socialMedia'
export * from './schema/team'
export * from './schema/user'
export * from './schema/userPreferences'
