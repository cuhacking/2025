import type { CollectionConfig, Payload } from 'payload';
import { authenticated } from '@/db/access';
import { navAccordions } from '@/db/collections/navAccordions';

export const OrganizerTeams: CollectionConfig = {
  slug: 'organizerTeams',
  admin: {
    group: navAccordions.featured,
    defaultColumns: ['name', 'symbol','event', 'id'],
    useAsTitle: 'name',
  },
  access: {
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'symbol',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'name',
      type: 'text',
      defaultValue: 'Volunteer',
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

export async function seedOrganizerTeams(payload: Payload) {
  try {
    for (const organizerTeam of organizerTeamSeedData) {
      const existingMedia = await payload.find({
        collection: 'media',
        where: {
          alt: { equals: organizerTeam.symbol.alt },
        },
      });

      const selectedImage = existingMedia.docs.length > 0 ? existingMedia.docs[0].id : null;

      await payload.create({
        collection: 'organizerTeams',
        data: {
          name: organizerTeam.name,
          symbol: selectedImage,
          users: [],
        },
      });
    }

    console.log('✅ Organizer Teams seed data successfully inserted!');
  } catch (error) {
    console.error('❌ Error seeding organizer teams data:', error);
  }
}

export const organizerTeamSeedData = [
  { name: 'Co-Leads', symbol: { alt: 'cuHacking 2025 Symbol Pink' } },
  { name: 'Advisors', symbol: { alt: 'cuHacking 2025 Symbol White' } },
  { name: 'Community Engagement', symbol: { alt: 'cuHacking 2025 Symbol Blue' } },
  { name: 'Hacker Experience', symbol: { alt: 'cuHacking 2025 Symbol Purple' } },
  { name: 'Sponsorship', symbol: { alt: 'cuHacking 2025 Symbol Orange' } },
  { name: 'Logistics', symbol: { alt: 'cuHacking 2025 Symbol Yellow' } },
  { name: 'Design', symbol: { alt: 'cuHacking 2025 Symbol Green' } },
  { name: 'Development', symbol: { alt: 'cuHacking 2025 Symbol Red' } },
  { name: 'Volunteer', symbol: { alt: 'cuHacking 2025 Symbol Teal' } },
];
