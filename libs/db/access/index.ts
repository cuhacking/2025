import type { User } from '@/db/payload-types'
// import type { Access, AccessArgs, FieldAccess, FieldHook } from 'payload'
import type { AccessArgs, FieldHook } from 'payload'

type IsAuthenticated = (args: AccessArgs<User>) => boolean

export const authenticated: IsAuthenticated = ({ req }) => Boolean(req.user)
// export const isAdmin: Access = ({ req }) => Boolean(req.user?.roles?.includes('admin'))

// export const isAdminFieldLevel: FieldAccess = ({ req }) => Boolean(req.user?.roles?.includes('admin'))

export const admins: IsAuthenticated = ({ req: { user } }) => checkRole(['admin'], user)

export const adminsAndUser: IsAuthenticated = ({ req: { user } }) => {
  if (user) {
    if (checkRole(['admin'], user)) {
      return true
    }

    return {
      id: user.id,
    }
  }

  return false
}

export const isSameUser: IsAuthenticated  = ({ req : { user }, id }) => {
  if (!user) {
    return false;
  }

  return user.id === id
};

export const anyone: IsAuthenticated = () => true

export function checkRole(allRoles: User['roles'] = [], user: User = undefined): boolean {
  if (user) {
    if (
      allRoles.some((role) => {
        return user?.roles?.some((individualRole) => {
          return individualRole === role
        })
      })
    ) { return true }
  }

  return false
}

export const protectRoles: FieldHook<{ id: string } & User> = ({ data, req }) => {
  const isAdmin = req.user?.roles.includes('admin') || data.email === 'demo@payloadcms.com' // for the seed script

  if (!isAdmin) {
    return ['user']
  }

  const userRoles = new Set(data?.roles || [])
  userRoles.add('user')
  return [...userRoles]
}
