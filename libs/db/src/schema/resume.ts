import { boolean, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core'

export const resume = pgTable('resume', {
  id: serial('id').primaryKey(),
  fileLink: varchar('fileLink', { length: 128 }),
  hasPrivacyToggle: boolean('hasPrivacyToggle').default(false),
  uploadedAt: timestamp('uploadedAt').defaultNow(),
})
