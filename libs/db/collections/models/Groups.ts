import type { CollectionConfig, Payload } from 'payload';
import { navAccordions } from '@/db/collections/navAccordions';

export const Groups: CollectionConfig = {
  slug: 'groups',
  access: {
    admin: () => true,
  },
  admin: {
    group: navAccordions.featured,
    defaultColumns: ['name', 'symbol', 'event', 'users', 'id'],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      defaultValue: 'Hacker',
      unique: true,
    },
    {
      name: 'symbol',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'event',
      type: 'relationship',
      relationTo: 'hackathons',
      unique: true,
    },
    {
      name: 'users',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
    },
  ],
};

export async function seedGroups(payload: Payload, req: any) {
  try {
    const groupData = [
      {
        name: 'Hacker',
        imageAlt: 'cuHacking 2025 Symbol Yellow',
      },
      {
        name: 'Mentor',
        imageAlt: 'cuHacking 2025 Symbol Blue',
      },
      {
        name: 'Sponsor',
        imageAlt: 'cuHacking 2025 Symbol Pink',
      },
      {
        name: 'Judge',
        imageAlt: 'cuHacking 2025 Symbol White',
      },
      {
        name: 'Organizer',
        imageAlt: 'cuHacking 2025 Symbol Green',
      },
    ];

    for (const group of groupData) {
      const existingMedia = await payload.find({
        collection: 'media',
        where: {
          alt: { equals: group.imageAlt },
        },
      });

      const selectedImage = existingMedia.docs.length > 0 ? existingMedia.docs[0].id : null;

      await payload.create({
        collection: 'groups',
        data: {
          name: group.name,
          symbol: selectedImage,
          users: [],
        },
      });
    }

    console.log('✅ Group seed data successfully inserted!');
  } catch (error) {
    console.error('❌ Error seeding group data:', error);
  }
}
