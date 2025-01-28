import type { CollectionConfig } from 'payload'

export const OrganizationSponsor: CollectionConfig = {
  slug: 'organization-sponsor',
  admin: {
    useAsTitle: '',
  },
  fields: [
    {
      name: 'organization',
      type: 'relationship',
      relationTo: 'organization',
      required: true,
      admin: {
        description: 'The organization recieving the sponsorship',
      },
    },
    {
      name: 'sponsor',
      type: 'relationship',
      relationTo: 'sponsor',
      required: true,
      admin: {
        description: 'The organization giving the sponsorship',
      },
    },
    {
      name: 'sponsorshipType',
      type: 'select',
      options: [
        {
          label: 'In-kind',
          value: 'inKind',
        },
        {
          label: 'Monetary',
          value: 'monetary',
        },
      ],
    },
    {
      name: 'inKindOffer',
      type: 'textarea',
      admin: {
        description: 'Brief Description of what the organization will recieve from the in-kind sponsor',
        condition: (_, siblingData) => { return siblingData.sponsorshipType === 'inKind' },
      },
    },
    {
      name: 'moneyRecieved',
      type: 'number',
      admin: {
        description: 'How much money do we recieve',
        condition: (_, siblingData) => siblingData.sponsorshipType === 'monetary',
      },
    },
    {
      name: 'start',
      type: 'date',
      admin: {
        description: 'When did this sponsorship commence.',
      },
    },
    {
      name: 'end',
      type: 'date',
      admin: {
        description: 'Anticipated end date of sponsorship.',
      },
    },
  ],
}
