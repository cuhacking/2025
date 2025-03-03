import type { CollectionConfig } from 'payload'
import { authenticated } from '@/db/access'
import { adminGroups } from '@/db/collections/adminGroups'

export const Roles: CollectionConfig = {
  slug: 'roles',
  admin: {
    useAsTitle: 'name',
    group: adminGroups.featured,
  },
  access: {
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'access',
      type: 'text',
      required: true,
    },
    {
      name: 'admin',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
