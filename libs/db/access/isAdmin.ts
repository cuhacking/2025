import type { User } from '@cuhacking/db/types/payload-types'
import type { Access, FieldAccess } from 'payload'

export const isAdmin: Access<User> = ({ req: { user } }) => {
  return Boolean(user?.roles?.find(role => role.includes('superAdmin')))
}

export const isAdminFieldLevel: FieldAccess<{ id: string }, User> = ({ req: { user } }) => {
  return Boolean(user?.roles?.find(role => role.includes('superAdmin')))
}
