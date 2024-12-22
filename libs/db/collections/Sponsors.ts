import type { CollectionConfig } from 'payload'

export const Sponsors: CollectionConfig = {
  slug: 'sponsors',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media', // Assuming a media collection exists for file uploads
    },
    {
      name: 'link',
      type: 'text',
      required: true,
      validate: (value) => {
        try {
          // eslint-disable-next-line no-new
          new URL(value)
          return true
        }
        catch {
          return 'Invalid URL format'
        }
      },
    },
  ],
}
