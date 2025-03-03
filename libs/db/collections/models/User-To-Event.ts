import type { CollectionConfig } from 'payload'
import { adminGroups } from '@/db/collections/adminGroups'

export const UserToEvent: CollectionConfig = {
  slug: 'user-to-event',
  admin: {
    group: adminGroups.relations,
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'event',
      type: 'relationship',
      relationTo: 'base-event',
      required: true,
    },
    {
      name: 'role',
      type: 'relationship',
      relationTo: 'roles',
      required: true,
    },
  ],
}
