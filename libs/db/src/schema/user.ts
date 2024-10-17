import { boolean, date, integer, pgEnum, pgTable, serial, smallint, text, varchar } from 'drizzle-orm/pg-core'
import { resume } from './resume'
import { school } from './school'
import { emergencyContact } from './emergencyContact'
import { team } from './team'

export const genderEnum = pgEnum('gender', ['male', 'female', 'other'])
export const phoneNumberCountryCodeEnum = pgEnum('phoneNumberCountryCode', ['+1'])
export const ethnicityEnum = pgEnum('ethnicity', ['black', 'white', 'asian', 'hispanic', 'middle-eastern'])

export const user = pgTable('user', {
  id: serial('id').primaryKey(),
  firstName: varchar('firstName', { length: 32 }).notNull(),
  middleName: varchar('middleName', { length: 32 }),
  lastName: varchar('lastName', { length: 32 }).notNull(),
  preferredName: varchar('preferredName', { length: 32 }),
  email: varchar('email', { length: 64 }).unique().notNull(),
  isEmailVerified: boolean('isEmailVerified').default(false),
  avatarUrl: varchar('avatarUrl', { length: 128 }),
  profileDescription: text('profileDescription'),
  dateOfBirth: date('dateOfBirth'),
  gender: genderEnum('gender'),
  phoneNumberCountryCode: phoneNumberCountryCodeEnum('phoneNumberCountryCode'),
  phoneNumber: varchar('phoneNumber', { length: 16 }).unique(),
  isPhoneNumberVerified: boolean('isPhoneNumberVerified').default(false),
  numHackathonsAttended: smallint('numHackathonsAttended').default(0),
  anyOtherComments: text('anyOtherComments'),
  isDomestic: boolean('isDomestic'),
  ethnicity: ethnicityEnum('ethnicity'),
  estimatedGradYear: integer('estimatedGradYear'),
  agreeToMlhReqs: boolean('agreeToMlhReqs').default(false),
  resumeId: integer('resumeId').references(() => resume.id),
  schoolId: integer('schoolId').references(() => school.id),
  emergencyContactId: integer('emergencyContactId').references(() => emergencyContact.id),
  teamId: integer('teamId').references(() => team.id),
})
