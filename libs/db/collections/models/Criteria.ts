import type { CollectionConfig } from 'payload'

export const Criteria: CollectionConfig = {
  slug: 'criteria',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'What is this the criteria for?',
      },
    },
    {
      name: 'rubric',
      type: 'array',
      admin: {
        description: 'Individual criteria for a rubric',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'generalDescription',
          type: 'text',
        },
        {
          name: 'grades',
          type: 'array',
          admin: {
            description: 'Should outline the grading schema',
          },
          fields: [
            {
              name: 'level',
              type: 'number',
            },
            {
              name: 'description',
              type: 'richText',
              admin: {
                description: 'What do you need to achieve to accomplish this. Use clear bulelt points.',
              },
            },
          ],
        },
        {
          name: 'weight',
          type: 'number',
          // @ts-expect-error TS bug with paylaodcms
          validate: (value: string) => {
            if (typeof value === 'number' && value <= 100 && value > 0) {
              return true
            }
            return 'Number must be below 100 and greater than 0'
          },
        },
      ],
    },
  ],
}
