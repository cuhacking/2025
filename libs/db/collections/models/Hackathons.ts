import type { CollectionConfig } from 'payload'
import {navAccordions} from "@/db/collections"

export const Hackathon: CollectionConfig = {
  slug: 'hackathon',
  admin: {
    useAsTitle: 'year',
    // group: navAccordions.events,
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
  ],
}

export const HackathonEvents: CollectionConfig = {
  slug: 'hackathon-event',
  admin: {
    // group: navAccordions.events,
  },
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
