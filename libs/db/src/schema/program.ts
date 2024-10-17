import { integer, pgEnum, pgTable, serial, varchar } from 'drizzle-orm/pg-core'
import { school } from './school'

export const programTypeEnum = pgEnum('programType', ['bachelor', 'master', 'diploma', 'certificate'])

export const program = pgTable('program', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 128 }),
  schoolId: integer('schoolId').references(() => school.id),
  programType: programTypeEnum('programType'),
})
