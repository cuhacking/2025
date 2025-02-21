import type { CollectionConfig } from 'payload'

export const Brands: CollectionConfig = {
  slug: 'brands',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'description', 'id', 'updatedAt', 'createdAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
      defaultValue: 'cuHacking',
      admin: {
        width: '50%',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
      defaultValue: 'Carleton University\'s Official Hackathon',
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      label: 'Media',
      required: false,
    },
    {
      name: 'links',
      type: 'array',
      label: 'Links',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      required: false,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: false,
        },
        {
          name: 'link',
          type: 'text',
          required: false,
        },
      ],
    },
    {
      name: 'relatedBrands',
      type: 'relationship',
      relationTo: 'brands',
      hasMany: true,
      required: false,
      label: 'Related Brands',
      admin: {
        description:
          'Other brands related to this one (e.g., sponsors, partners, student clubs).',
      },
    },
  ],
}
