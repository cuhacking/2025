import { boolean, integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core'

export const team = pgTable('team', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 64 }),
  profileImageUrl: varchar('profileImageUrl', { length: 128 }),
  projectLinkUrl: varchar('projectLinkUrl', { length: 256 }),
  teamOwnerId: integer('teamOwnerId'),
  hasSubmitted: boolean('hasSubmitted').default(false),
  teamProfileImageUrl: varchar('teamProfileImageUrl', {
    length: 128,
  }),
})
