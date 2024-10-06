import { boolean, pgEnum, pgTable, serial, varchar } from 'drizzle-orm/pg-core'

export const relationshipEnum = pgEnum('relationship', ['mother', 'father', 'sibling', 'friend', 'relative', 'other'])

export const emergencyContact = pgTable('emergencyContact', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 32 }),
  relationship: relationshipEnum('relationship'),
  phoneNumber: varchar('phoneNumber', { length: 16 }).unique(),
  isPhoneNumberVerified: boolean('isPhoneNumberVerified').default(false),
})
