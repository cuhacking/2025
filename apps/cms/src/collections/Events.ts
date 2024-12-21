import type { CollectionConfig } from 'payload';

export const Events: CollectionConfig = {
  slug: 'events',
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
      name: 'room',
      type: 'text',
    },
    {
      name: 'type',
      type: 'select',
      options: ['workshop', 'networking', 'social', 'food', 'other'],
    },
    {
      name: 'hackathon',
      type: 'relationship',
      relationTo: 'hackathons',
    },
  ],
};
