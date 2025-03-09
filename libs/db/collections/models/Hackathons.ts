import type { CollectionConfig } from 'payload'
import { navAccordions } from '@/db/collections/navAccordions'

export const Hackathons: CollectionConfig = {
  slug: 'hackathons',
  admin: {
    useAsTitle: 'year',
    group: navAccordions.events,
  },
  fields: [
    {
      name: 'year',
      type: 'number',
      required: true,
      unique: true,
        defaultValue: () => 2025
    },
      {
      type: 'row',
fields: [
      {
        name: 'name',
        type: 'text',
        defaultValue: () => 'cuHacking 6'
      },
]
      },
      {
 type: 'row',
  fields: [
     {
        name: 'location',
        type: 'text',
       defaultValue: () => 'Carleton University, Richcraft Hall'
      },
      {
        name: 'start',
        type: 'date',
           admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'h:mm a, EEEE, do MMMM, yyyy',
          minDate: new Date(),
        },
        },
        defaultValue: () => new Date(2025, 2, 15, -4, 0, 0)
      },
      {
        name: 'end',
        type: 'date',
           admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'h:mm a, EEEE, do MMMM, yyyy',
          minDate: new Date(),
        },
        },
        defaultValue: () => new Date(2025, 2, 17, -4, 0, 0)
      },
  ]
      },
      {
        label: 'Sponsors',
        type: 'collapsible',
        admin: {
          initCollapsed: true,
        },
        fields: [
    {
      name: 'tera',
      type: 'relationship',
      relationTo: 'brands',
    },
    {
      name: 'mega',
      type: 'relationship',
      relationTo: 'brands',
    },
    {
      name: 'kilo',
      type: 'relationship',
      relationTo: 'brands',
    },
    {
      name: 'centi',
      type: 'relationship',
      relationTo: 'brands',
    },
  ]
      },
{
      name: "organizers",
    type: 'join',
        collection: 'users',
        on: 'group',
        // where: {
        //   group: {
        //    equals: 'Organizer'
        //   }
        // }
    },
      {
        name: 'schedule',
        type: 'group',
        fields: [

        ]
      },
      {
        name: 'judges',
    type: 'join',
        collection: 'users',
        on: 'group',
          // where: {
          //   group: {
          //     equals: 'Judge',
          //   },
          // },
      },
      {
       name: 'mentors',
    type: 'join',
        collection: 'users',
        on: 'group',
          // where: {
          //   group: {
          //     equals: 'Judge',
          //   },
          // },
      },
      {
        name: 'hackers',
    type: 'join',
        collection: 'users',
        on: 'group',
          // where: {
          //   group: {
          //     equals: 'Judge',
          //   },
          // },
      },
      {
        name: 'volunteers',
    type: 'join',
        collection: 'users',
        on: 'group',
          // where: {
          //   group: {
          //     equals: 'Judge',
          //   },
          // },
      },
       ]
}
