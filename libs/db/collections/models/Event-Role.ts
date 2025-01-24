// HALP create event roles
import type { CollectionConfig } from 'payload'

export const EventRole: CollectionConfig = {
  slug: 'event-role',
  admin: {
    useAsTitle: 'label',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
    },
    {
      name: 'value',
      type: 'text',
    },
  ],
}
