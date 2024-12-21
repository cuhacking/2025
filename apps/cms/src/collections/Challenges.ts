import type { CollectionConfig } from 'payload';

export const Challenges: CollectionConfig = {
  slug: 'challenges',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'prizes',
      type: 'textarea',
    },
    {
      name: 'judgingRubric',
      type: 'textarea',
    },
    {
      name: 'sponsor',
      type: 'relationship',
      relationTo: 'sponsors',
    },
    {
      name: 'hackathon',
      type: 'relationship',
      relationTo: 'hackathons',
    },
  ],
};
