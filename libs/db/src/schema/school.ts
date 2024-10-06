import { pgEnum, pgTable, serial, varchar } from 'drizzle-orm/pg-core'

export const levelOfStudyEnum = pgEnum('levelOfStudy', ['graduateSchool', 'highSchool'])

export const school = pgTable('school', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 128 }),
  levelOfStudy: levelOfStudyEnum('levelOfStudy'),
})
