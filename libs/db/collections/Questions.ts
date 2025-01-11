import type { CollectionConfig } from 'payload'

export const Questions: CollectionConfig = {
  slug: 'questions',
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
      label: 'Question Text',
    },
    {
      name: 'type',
      type: 'select',
      options: ['text', 'textarea', 'multiple-choice', 'file-upload'],
      required: true,
      label: 'Question Type',
    },
    {
      name: 'options',
      type: 'array',
      label: 'Options (Only for multiple-choice)',
      fields: [
        {
          name: 'option',
          type: 'text',
        },
      ],
      admin: {
        condition: (_, siblingData) => siblingData.type === 'multiple-choice', // Show only for multiple-choice questions
      },
    },
    {
      name: 'required',
      type: 'checkbox',
      label: 'Required',
      defaultValue: false,
    },
  ],
}
