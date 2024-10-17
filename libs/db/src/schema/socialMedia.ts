import { integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core'

import { user } from './user'

export const socialMedia = pgTable('socialMedia', {
  id: serial('id').primaryKey(),
  userId: integer('userId')
    .references(() => user.id),
  platformName: varchar('platformName', { length: 16 }),
  profileUrl: varchar('profileUrl', { length: 128 }),
})
