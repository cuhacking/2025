import type { User } from '@cuhacking/db/payload-types.ts'

import type { AccessArgs, CollectionConfig } from 'payload'

type isAuthenticated = (args: AccessArgs<User>) => boolean

export const authenticated: isAuthenticated = ({ req: { user } }) => {
  return Boolean(user)
}

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
    components: {
      beforeList: [
        {
          path: '/components/before-list#BeforeList',
        },
      ],
      afterList: [
        {
          path: '/components/after-list#AfterList',
        },
      ],
      beforeListTable: [
        {
          path: '/components/before-list-table#BeforeListTable',
        },
      ],
      afterListTable: [
        {
          path: '/components/after-list-table#AfterListTable',
        },
      ],
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: true,
}
