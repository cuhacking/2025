import { boolean, integer, pgEnum, pgTable, serial } from 'drizzle-orm/pg-core'
import { user } from './user'

export const preferredLanguageEnum = pgEnum('preferredLanguage', ['EN'])
export const eventPreferencesEnum = pgEnum('eventPreferences', ['hardware', 'software'])
export const shirtSizeEnum = pgEnum('shirtSize', ['XS', 'S', 'M', 'L', 'XL', 'XXL'])
export const pronounsEnum = pgEnum('pronouns', ['he/him', 'she/her', 'they/them', 'other'])
export const dietRestrictionsEnum = pgEnum('dietRestrictions', ['allergies', 'vegan', 'none'])
export const trackPreferencesEnum = pgEnum('trackPreferences', ['hardware', 'software'])
export const interestsEnum = pgEnum('interests', ['languages'])
export const disabilitiesEnum = pgEnum('disabilities', ['mobility', 'visual', 'hearing', 'cognitive', 'mental'])
export const applicableSkillsEnum = pgEnum('applicableSkills', ['JavaScript', 'TypeScript', 'Python', 'Java'])

export const userPreferences = pgTable('userPreferences', {
  id: serial('id').primaryKey(),
  userId: integer('userId').references(() => user.id),
  preferredLanguage: preferredLanguageEnum('preferredLanguage').default('EN'),
  eventPreferences: eventPreferencesEnum('eventPreferences'),
  privacyMode: boolean('privacyMode').default(false),
  isSubscribedToNewsletter: boolean('isSubscribedToNewsletter').default(false),
  shirtSize: shirtSizeEnum('shirtSize'),
  pronouns: pronounsEnum('pronouns'),
  dietRestrictions: dietRestrictionsEnum('dietRestrictions').array(),
  trackPreferences: trackPreferencesEnum('trackPreferences').array(),
  interests: interestsEnum('interests').array(),
  disabilities: disabilitiesEnum('disabilities').array(),
  applicableSkills: applicableSkillsEnum('applicableSkills').array(),
})
