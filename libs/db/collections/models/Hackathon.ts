import type { CollectionConfig } from 'payload'

export const Hackathon: CollectionConfig = {
  slug: 'hackathon',
  admin: {
    useAsTitle: 'year',
  },
  fields: [
    {
      name: 'year',
      type: 'number',
      required: true,
      unique: true,
    },
    {
      name: 'baseEvent',
      type: 'relationship',
      relationTo: 'base-event',
      unique: true,
    },
    {
      name: 'hackathonEvents',
      type: 'join',
      on: 'hackathon',
      collection: 'hackathon-event',
    },
    {
      name: 'challenges',
      type: 'join',
      on: 'event',
      collection: 'challenge',
    },

  ],
}

export const HackathonEvents: CollectionConfig = {
  slug: 'hackathon-event',
  fields: [
    {
      name: 'event',
      type: 'relationship',
      relationTo: 'general-event',
    },
    {
      name: 'hackathon',
      type: 'relationship',
      relationTo: 'hackathon',
    },
  ],
}
