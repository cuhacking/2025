import type { CollectionConfig, Payload } from 'payload'
import { navAccordions } from '@/db/collections/navAccordions'

export const Groups: CollectionConfig = {
  slug: 'groups',
  access: {
    admin:() => true,
  },
  admin: {
    group: navAccordions.featured,
    defaultColumns: [
      'image',
      'group',
      'users',
      'id'
    ],
    useAsTitle: 'group',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media'
    },
    {
      name: 'group',
      type: 'radio',
      options: [
        'Hacker',
        'Mentor',
        'Sponsor',
        'Judge',
        'Organizer'
      ],
      defaultValue: 'Hacker',
      unique: true
    },
    {
      name: 'users',
      type: 'join',
      collection: 'users',
      on: 'group'
    }
  ],
}

export async function seedGroups(payload: Payload) {
  try {
    const uploadedImages = {}

    for (const group of [
      {
        group: 'Hacker',
        image: 'https://github.com/user-attachments/assets/2fe04bd8-3e5e-481f-97d2-646faab32276',
      },
      {
        group: 'Mentor',
        image: 'https://github.com/user-attachments/assets/48ab646b-790a-46ef-bd36-4f968d445602',
      },
      {
        group: 'Sponsor',
        image: 'https://github.com/user-attachments/assets/c91ce1ca-b8b7-40d4-91a8-1217d42bce6f',
      },
      {
        group: 'Judge',
        image: 'https://github.com/user-attachments/assets/dd5a291f-146d-4dc5-b9e8-32bd43ca0df5',
      },
      {
        group: 'Organizer',
        image: 'https://github.com/user-attachments/assets/ac2cf41b-61a7-4009-a9fd-937050ee763d',
      },
    ]) {

      if (!uploadedImages[group.image]) {
        const imageUpload = await payload.create({
          collection: 'media',
          data: {
            alt: `${group.group} Group Logo`,
          },
          file: {
            url: group.image,
          },
        })

        uploadedImages[group.image] = imageUpload.id
      }

      await payload.create({
        collection: 'groups',
        data: {
          group: group.group,
          image: uploadedImages[group.image],
          users: [],
        },
      })
    }

    console.log('✅ Group seed data successfully inserted!')
  } catch (error) {
    console.error('❌ Error seeding group data:', error)
  }
}

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
