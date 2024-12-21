import type { CollectionConfig } from 'payload';

export const Hackathons: CollectionConfig = {
  slug: 'hackathons',
  fields: [
    {
      name: 'year',
      type: 'number',
      required: true,
      unique: true,
    },
    {
      name: 'theme',
      type: 'text',
    },
    {
      name: 'sponsors',
      type: 'relationship',
      relationTo: 'sponsors',
      hasMany: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'participants',
      type: 'relationship',
      relationTo: 'participants',
      hasMany: true,
    },
  ],
};
