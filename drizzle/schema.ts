import { foreignKey, pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

export const user = pgTable('user', {
  id: text('id').primaryKey().notNull(),
  name: text('name'),
  email: text('email').notNull(),
  avatarUrl: text('avatar_url'),
})

export const session = pgTable('session', {
  id: text('id').primaryKey().notNull(),
  userId: text('user_id').notNull(),
  expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'string' }).notNull(),
}, (table) => {
  return {
    sessionUserIdUserIdFk: foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'session_user_id_user_id_fk',
    }),
  }
})
