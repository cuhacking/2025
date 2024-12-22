import type { CollectionConfig } from 'payload'

export const Applications: CollectionConfig = {
  slug: 'applications',
  fields: [
    {
      name: 'applicant',
      type: 'relationship',
      relationTo: 'participants',
      required: true,
      label: 'Applicant',
    },
    {
      name: 'responses',
      type: 'array',
      label: 'Responses',
      fields: [
        {
          name: 'question',
          type: 'relationship',
          relationTo: 'questions',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: ['pending', 'accepted', 'rejected'],
      defaultValue: 'pending',
      label: 'Application Status',
    },
  ],
}
