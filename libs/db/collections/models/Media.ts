import type { CollectionConfig, Payload } from 'payload'

import { navAccordions } from '@/db/collections/navAccordions'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: navAccordions.inventory,
    defaultColumns: [
      'filename',
      'alt',
      'prefix',
      'mimeType',
      'filesize',
      'updatedAt',
      'createdAt',
      'id',
    ],
    pagination: {
      defaultLimit: 50,
      limits: [10, 20, 50],
    },
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    displayPreview: true,
    focalPoint: true,
  },
}

export async function seedMedia(payload: Payload) {
  try {
    await Promise.all(
      mediaSeedData.map(async (media) => {
  const res = await fetch(media.url, { method: 'GET' })

  const data = await res.arrayBuffer()

        await payload.create({
    collection: 'media',
    file: {
      name: media.filename,
      data: Buffer.from(data),
      mimetype: 'image/png',
      size: data.byteLength,
    },
    data: { alt: media.alt || media.filename },
        })
      }),
    )
    console.log('Media seed data successfully inserted!')
  }
  catch (error) {
    console.error('Error seeding media data:', error)
  }
}

export const mediaSeedData = [
  {
alt: "cuHacking 2025 Symbol Yellow",
url: "https://github.com/user-attachments/assets/2fe04bd8-3e5e-481f-97d2-646faab32276",
filename: "cuhacking-symbol-yellow.png",
  },
  {
alt: "cuHacking 2025 Symbol Orange",
    url: "https://github.com/user-attachments/assets/84742531-fbca-4c4c-8206-e543a82cb287",
    filename: "cuhacking-symbol-orange.png"
  },
  {
alt: "cuHacking 2025 Symbol Red",
    url: "https://github.com/user-attachments/assets/c63ced75-bf94-4510-9dad-17ca47b9f7b0",
    filename: "cuhacking-symbol-red.png"
  },
  {
alt: "cuHacking 2025 Symbol Pink",
    url: "https://github.com/user-attachments/assets/b4067d69-22b4-4819-9541-aff88418826d",
    filename: "cuhacking-symbol-pink.png"
  },
  {
alt: "cuHacking 2025 Symbol Purple",
    url: "https://github.com/user-attachments/assets/c91ce1ca-b8b7-40d4-91a8-1217d42bce6f",
    filename: "cuhacking-symbol-purple.png"
  },
  {
alt: "cuHacking 2025 Symbol Blue",
    url: "https://github.com/user-attachments/assets/48ab646b-790a-46ef-bd36-4f968d445602",
    filename: "cuhacking-symbol-blue.png"
  },
  {
alt: "cuHacking 2025 Symbol Sky",
    url: "https://github.com/user-attachments/assets/a015ce79-8735-46d5-9598-0a33eeed0628",
    filename: "cuhacking-symbol-sky.png"
  },
  {
alt: "cuHacking 2025 Symbol Teal",
    url: "https://github.com/user-attachments/assets/9c9a4171-1d3e-4f17-9158-8fe7daa51e5a",
    filename: "cuhacking-symbol-teal.png"
  },
  {
alt: "cuHacking 2025 Symbol White",
    url: "https://github.com/user-attachments/assets/dd5a291f-146d-4dc5-b9e8-32bd43ca0df5",
    filename: "cuhacking-symbol-white.png"
  },
  {
alt: "cuHacking 2025 Symbol Green",
    url: "https://github.com/user-attachments/assets/ac2cf41b-61a7-4009-a9fd-937050ee763d",
    filename: "cuhacking-symbol-green.png"
  },
  {
alt: "cuHacking 2025 Symbol Black",
    url: "https://github.com/user-attachments/assets/164d52be-5a96-436b-b92d-f2aebd16a7d2",
    filename: "cuhacking-symbol-black.png"
  }
]
