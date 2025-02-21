import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    defaultColumns: [
      'fileName',
      'alt',
      'prefix',
      'updatedAt',
      'createdAt',
      'id',
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    // {
    //   name: 'relatedBrands',
    //   type: 'relationship',
    //   relationTo: 'brands',
    //   hasMany: true,
    //   required: false,
    //   label: 'Related Brands',
    //   admin: {
    //     description: 'Who this logo belongs to.',
    //   },
    // },
  ],
  upload: true,
}
