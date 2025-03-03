import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
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
