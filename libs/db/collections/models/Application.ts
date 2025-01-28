import type { CollectionConfig } from 'payload'

export const ApplicationForm: CollectionConfig = {
  slug: 'application-form',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'event',
      type: 'relationship',
      relationTo: 'base-event',
      required: true,
    },
    {
      name: 'role',
      type: 'relationship',
      relationTo: 'event-role',
      required: true,
    },
    {
      name: 'applicationQuestions',
      type: 'join',
      on: 'relatedApplication',
      collection: 'application-question',
      required: true,
    },
    {
      name: 'acceptanceCriteria',
      type: 'relationship',
      relationTo: 'criteria',
      required: true,
    },
  ],
}

export const ApplicationQuestion: CollectionConfig = {
  slug: 'application-question',
  admin: {
    useAsTitle: 'label',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      admin: {
        description: 'Question',
      },
    },
    {
      name: 'placeholder',
      type: 'text',
      required: true,
      admin: {
        description: 'Placeholder on input line',
      },
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'LinkedIn', value: 'linkedIn' },
        { label: 'GitHub', value: 'github' },
        { label: 'Instagram', value: 'instagram' },
        { label: 'Link', value: 'link' },
        { label: 'Long Answer', value: 'longAnswer' },
        { label: 'Short Answer', value: 'shortAnswer' },
        { label: 'Select', value: 'select' },
        { label: 'Number', value: 'number' },
        { label: 'Multi-select', value: 'multiSelect' },
        { label: 'File Upload', value: 'fileUpload' },
      ],
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
        condition: (_, siblingData) => siblingData.type === 'multiSelect' || siblingData.type === 'select', // Show only for multiple-choice questions
      },
    },
    {
      name: 'isRequired',
      type: 'checkbox',
    },
    {
      name: 'relatedApplication',
      type: 'relationship',
      relationTo: 'application-form',
      required: true,
    },
  ],
}

export const ApplicationResponse: CollectionConfig = {
  slug: 'application-response',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
      admin: {
        hidden: true,
      },
      hooks: {
        // custom hook so that we can have a title
        beforeChange: [
          async ({ data, req }) => {
            const { applicant, relatedApplication } = data as any

            const applicantDoc = applicant
              ? await req.payload.findByID({ collection: 'user', id: applicant })
              : null
            const applicationDoc = relatedApplication
              ? await req.payload.findByID({ collection: 'application-form', id: relatedApplication })
              : null

            const applicantName = applicantDoc?.email || 'Unknown Applicant'
            const applicationName = applicationDoc?.name || 'Unknown Application'

            return `${applicantName} - ${applicationName}`
          },
        ],
      },
    },
    {
      name: 'applicant',
      type: 'relationship',
      relationTo: 'user',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Invitation Sent', value: 'invitationSent' },
        { label: 'Rejected', value: 'rejected' },
        { label: 'RSVP Confirmed', value: 'rsvpConfirmed' },
        { label: 'RSVP Rejected', value: 'rsvpRejected' },
        { label: 'RSVP Unanswered', value: 'rsvpUnanswered' },
      ],
    },
    {
      name: 'relatedApplication',
      type: 'relationship',
      relationTo: 'application-form',
      required: true,
    },
    {
      name: 'responses',
      type: 'join',
      on: 'relatedResponse',
      collection: 'application-question-response',
    },
  ],
}

export const QuestionResponse: CollectionConfig = {
  slug: 'application-question-response',
  fields: [
    {
      name: 'relatedQuestion',
      type: 'relationship',
      relationTo: 'application-question',
    },
    {
      name: 'relatedResponse',
      type: 'relationship',
      relationTo: 'application-response',
    },
    {
      name: 'response',
      type: 'text',
    },
  ],
}
