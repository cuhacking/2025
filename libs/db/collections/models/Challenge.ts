import type { CollectionConfig } from 'payload'
import { navAccordions } from '@/db/collections/navAccordions'

export const Challenge: CollectionConfig = {
  slug: 'challenge',
  admin: {
    useAsTitle: 'title',
    group: navAccordions.inventory,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'judging',
      type: 'relationship',
      relationTo: 'criteria',
      required: true,
    },
    {
      name: 'event',
      type: 'relationship',
      relationTo: 'base-event',
      required: true,
    },
    {
      name: 'challengeHost',
      type: 'relationship',
      relationTo: 'organization',
      admin: {
        description: 'Who is hosting this challenge? Leave blank if event only has one host.',
      },
      hasMany: true,
      required: false,
    },
    {
      name: 'prize',
      type: 'relationship',
      relationTo: 'challengePrize',
      required: true,
    },
  ],
}

export const ChallengePrize: CollectionConfig = {
  slug: 'challengePrize',
  admin: {
    group: navAccordions.inventory,
  },
  fields: [
    {
      name: 'formattedTitle',
      admin: {
        hidden: true,
      },
      type: 'text',
    },
    {
      name: 'prizeForPosition',
      type: 'array',
      fields: [
        {
          name: 'position',
          type: 'number',
        },
        {
          name: 'prizeMoney',
          type: 'number',
          admin: {
            description: 'In CAD, if prize is not money, estimate the cost the prize',
          },
        },
        {
          name: 'otherPrize',
          type: 'text',
          admin: {
            description: 'Typically use this for physical prizes (ex. MetaQuest for 1st place)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'If extra detail is necessary',
          },
        },
      ],
    },
    {
      name: 'miscellaneousPrizes',
      admin: {
        description: 'Prizes that are not part of the central challenge (ex. A raffle prize)',
      },
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'prizeMoney',
          type: 'number',
          admin: {
            description: 'In CAD, if prize is not money, estimate the cost the prize',
          },
        },
        {
          name: 'otherPrize',
          type: 'text',
          admin: {
            description: 'Typically use this for physical prizes (ex. MetaQuest for 1st place)',
          },
        },
      ],
    },
  ],
}
