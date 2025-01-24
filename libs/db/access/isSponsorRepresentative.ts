import type { User } from '@cuhacking/db/types/payload-types'
import type { Access, FieldAccess } from 'payload'

export const isSponsorRepresentative: Access<User> = ({ req: { user } }) => {
  return Boolean(user?.role?.find(role => role.includes('sponsorRepresentative')))
}

export const isSponsorRepresentativeFieldLevel: FieldAccess<{ id: string }, User> = ({ req: { user } }) => {
  return Boolean(user?.role?.find(role => role.includes('sponsorRepresentative')))
}
