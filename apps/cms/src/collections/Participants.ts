import type { CollectionConfig } from 'payload';

export const Participants: CollectionConfig = {
  slug: 'participants',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      options: ['organizer', 'volunteer', 'mentor', 'judge', 'sponsor-representative'],
      required: true,
    },
    {
      name: 'company',
      type: 'relationship',
      relationTo: 'sponsors',
    },
  ],
};
