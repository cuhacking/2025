import type { CollectionConfig } from 'payload'
import { adminGroups } from '../adminGroups'

export const Teams: CollectionConfig = {
  slug: 'teams',
  access: {
    admin: (req: { user }) => true,
  },
  admin: {
    group: adminGroups.featured,
    useAsTitle: 'name',
    defaultColumns: [
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      label: 'Avatar',
      admin: { readOnly: true },
    },
  ],
}
