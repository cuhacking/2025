import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

const sql = postgres('abcd') // TODO: Replace with env var

export const db = drizzle(sql, {
  schema,
  // logger: env.NODE_ENV === 'development',
})
