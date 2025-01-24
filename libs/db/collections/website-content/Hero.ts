import type { CollectionConfig } from 'payload'
import { isAdmin } from '@cuhacking/db/access/isAdmin'

export const Hero: CollectionConfig = {
  slug: 'hero',
  access: {
    read: () => true,
    update: isAdmin,
    create: isAdmin,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'organization',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'text',
      required: true,
    },
    {
      name: 'callToAction',
      type: 'text',
      required: true,
    },
  ],
}
