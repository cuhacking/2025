import type { CollectionConfig } from 'payload'
import { navAccordions } from '@/db/collections/navAccordions'

export const UserToEvent: CollectionConfig = {
  slug: 'user-to-event',
  admin: {
    group: navAccordions.relations,
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
    // {
    //   name: 'role',
    //   type: 'relationship',
    //   relationTo: 'roles',
    //   required: true,
    // },
  ],
}
