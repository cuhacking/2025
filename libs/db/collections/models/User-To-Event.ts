import type { CollectionConfig } from 'payload'

export const UserToEvent: CollectionConfig = {
  slug: 'user-to-event',
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'user',
      required: true,
    },
    {
      name: 'event',
      type: 'relationship',
      relationTo: 'general-event',
      required: true,
    },
    {
      name: 'role',
      type: 'relationship',
      relationTo: 'event-role',
      required: true,
    },
  ],
}
