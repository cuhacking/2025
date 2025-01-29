import type { User } from '@cuhacking/db/types/payload-types'
import type { Access, FieldAccess } from 'payload'

export const isOrganizer: Access<User> = ({ req: { user } }) => {
  return Boolean(user?.roles?.find(role => role.includes('organizer')))
}

export const isOrganizerFieldLevel: FieldAccess<{ id: string }, User> = ({ req: { user } }) => {
  return Boolean(user?.roles?.find(role => role.includes('organizer')))
}
