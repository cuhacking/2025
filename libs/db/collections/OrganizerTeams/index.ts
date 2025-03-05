import type { CollectionConfig, Payload } from 'payload'
import { authenticated } from '@/db/access'
import { navAccordions } from '@/db/collections/navAccordions'

export const OrganizerTeams: CollectionConfig = {
  slug: 'organizerTeams',
  admin: {
    group: navAccordions.featured,
    defaultColumns: [
      'image',
      'team',
    ],
    useAsTitle: 'image',
  },
  access: {
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media'
    },
    {
      name: 'team',
      type: 'radio',
      options: [
        { label: "Advisors", value: "advisors" },
        { label: "Co-Leads", value: "coleads" },
        { label: "Community Engagement", value: "community-engagement" },
        { label: "Marketing", value: "marketing" },
        { label: "Logistics", value: "logistics" },
        { label: "Hacker Experience", value: "hacker-experience" },
        { label: "Sponsorship", value: "sponsorship" },
        { label: "Design", value: "design" },
        { label: "Development", value: "development" },
        { label: "Volunteer", value: "volunteer" },
      ],
      defaultValue: 'volunteer'
    },
    {
      name: 'users',
      type: 'join',
      collection: 'users',
      on: 'group'
    }
  ],
}

export async function seedOrganizerTeams(payload: Payload) {
  try {
    await Promise.all(
    organizerTeamSeedData.map(async (organizerTeam) => {
  // const res = await fetch(group.url, { method: 'GET' })

  // const data = await res.arrayBuffer()

        await payload.create({
    collection: 'organizerTeams',
            team: organizerTeam.team,
        })
      }),
    )
    console.log('Group seed data successfully inserted!')
  }
  catch (error) {
    console.error('Error seeding group data:', error)
  }
}

export const organizerTeamSeedData = [
  {
    team: 'Co-Leads',
    image: {
      url: 'https://github.com/user-attachments/assets/b4067d69-22b4-4819-9541-aff88418826d',
      alt: 'Co-Leads Team Logo',
    }
  },
  {
    team: 'Advisors',
    image: {
      url: 'https://github.com/user-attachments/assets/dd5a291f-146d-4dc5-b9e8-32bd43ca0df5',
      alt: 'Advisors Team Logo',
    }
  },
  {
    team: 'Community Engagement',
    image: {
      url: 'https://github.com/user-attachments/assets/48ab646b-790a-46ef-bd36-4f968d445602',
      alt: 'Community Engagement Team Logo',
    }
  },
  {
    team: 'Hacker Experience',
    image: {
      url: 'https://github.com/user-attachments/assets/c91ce1ca-b8b7-40d4-91a8-1217d42bce6f',
      alt: 'Hacker Experience Team Logo',
    }
  },
  {
    team: 'Sponsorship',
    image: {
      url: 'https://github.com/user-attachments/assets/84742531-fbca-4c4c-8206-e543a82cb287',
      alt: 'Sponsorship Team Logo',
    }
  },
  {
    team: 'Logistics',
    image: {
      url: 'https://github.com/user-attachments/assets/9c9a4171-1d3e-4f17-9158-8fe7daa51e5a',
      alt: 'Logistics Team Logo',
    }
  },
  {
    team: 'Design',
    image: {
      url: 'https://github.com/user-attachments/assets/ac2cf41b-61a7-4009-a9fd-937050ee763d',
      alt: 'Design Team Logo',
    }
  },
  {
    team: 'Development',
    image: {
      url: 'https://github.com/user-attachments/assets/c63ced75-bf94-4510-9dad-17ca47b9f7b0',
      alt: 'Development Team Logo',
    }
  },
];

// ![Yellow](https://github.com/user-attachments/assets/2fe04bd8-3e5e-481f-97d2-646faab32276)
// ![Orange](https://github.com/user-attachments/assets/84742531-fbca-4c4c-8206-e543a82cb287)
// ![Red](https://github.com/user-attachments/assets/c63ced75-bf94-4510-9dad-17ca47b9f7b0)
// ![Pink](https://github.com/user-attachments/assets/b4067d69-22b4-4819-9541-aff88418826d)
// ![Purple](https://github.com/user-attachments/assets/c91ce1ca-b8b7-40d4-91a8-1217d42bce6f)
// ![Blue](https://github.com/user-attachments/assets/48ab646b-790a-46ef-bd36-4f968d445602)
// ![Sky](https://github.com/user-attachments/assets/a015ce79-8735-46d5-9598-0a33eeed0628)
// ![Teal](https://github.com/user-attachments/assets/9c9a4171-1d3e-4f17-9158-8fe7daa51e5a)
// ![White](https://github.com/user-attachments/assets/dd5a291f-146d-4dc5-b9e8-32bd43ca0df5)

// ![Green](https://github.com/user-attachments/assets/ac2cf41b-61a7-4009-a9fd-937050ee763d)
// ![Black](https://github.com/user-attachments/assets/164d52be-5a96-436b-b92d-f2aebd16a7d2)
