import type { CollectionConfig } from 'payload'

export const Hackathons: CollectionConfig = {
  slug: 'hackathons',
  fields: [
    {
      name: 'year',
      type: 'number',
      required: true,
      unique: true,
    },
  ],
}
