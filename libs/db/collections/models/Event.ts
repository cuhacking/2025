import type { CollectionConfig } from 'payload'
import process from 'node:process'

export const BaseEvent: CollectionConfig = {
  slug: 'base-event',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    // Basic Info
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
      name: 'building',
      type: 'select',
      options: [
        { label: 'RB', value: 'rb' },
        { label: 'PA', value: 'pa' },
        { label: 'NN', value: 'nn' },
      ],
    },
    {
      name: 'room',
      type: 'text',
    },
    {
      name: 'start',
      type: 'date',
      required: false,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'end',
      type: 'date',
      required: false,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
  ],
}

export const GeneralEvent: CollectionConfig = {
  slug: 'general-event',
  admin: {
    useAsTitle: 'formattedTitle',
  },
  access: {
    update: async ({ req, id }) => {
      const { user } = req

      if (!user || !id) {
        return false
      }

      // check for super admin and organizer roles
      if (user?.roles?.find(role => role.includes('superAdmin'))) {
        return true
      }

      if (user?.roles?.find(role => role.includes('organizer'))) {
        return true
      }

      const event = await req.payload.findByID({
        collection: 'general-event',
        id,
        depth: 0,
      })

      // Extract the host organization IDs from the event
      const hostOrganizationIds = event?.organizations?.host
      const userOrganizationIds = user.organizations

      return !!userOrganizationIds?.docs?.some((org) => {
        if (typeof org === 'number') {
          return false
        }
        if (typeof org.organization !== 'number') {
          return false
        }
        return hostOrganizationIds?.docs?.includes(org.organization)
      })
    },
  },
  fields: [
    {
      name: 'formattedTitle',
      type: 'text',
      admin: {
        hidden: true,
      },
      hooks: {
        beforeChange: [
          async ({ data, req }) => {
            if (!data)
              return 'Error occured, try again'

            const { event } = data

            const eventObj = await req.payload.findByID({
              collection: 'base-event',
              id: event,
            })

            return eventObj?.title || 'Unknown User'
          },
        ],
      },
    },
    {
      name: 'event',
      type: 'relationship',
      relationTo: 'base-event',
      admin: {
        description: 'Create a base event to store general information of the event',
      },
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Workshop', value: 'workshop' },
        { label: 'Networking', value: 'networking' },
        { label: 'Social', value: 'social' },
        { label: 'Food', value: 'food' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'registrationLink',
      type: 'text',
      // validate: validateURL,
      hooks: {
        beforeChange: [
          ({ data }) => {
            if (data?.general_event_id) {
              const baseUrl
                = process.env.NODE_ENV === 'production'
                  ? process.env.PAYLOAD_PORTAL_URL
                  : process.env.PAYLOAD_LOCAL_PORTAL_URL
              return `${baseUrl}/events/${data.event_id}/register`
            }
            return ''
          },
        ],
      },
      admin: {
        // readOnly: true,
        description: 'Do not modify or create unless necessary.',
      },
    },
    {
      name: 'attendeeLimit',
      type: 'number',
      admin: {
        description: 'Leave blank if no attendee limit',
      },
    },
    {
      name: 'hasJudging',
      type: 'checkbox',
    },
    {
      name: 'eventMembers',
      type: 'group',
      admin: {
        description: 'Only edit for walk-ins and members not registered.',
      },
      fields: [
        {
          name: 'participants',
          type: 'join',
          on: 'event',
          collection: 'user-to-event',
          where: {
            role: {
              equals: 1, // participant role ID
            },
          },
        },
        {
          name: 'mentors',
          type: 'join',
          on: 'event',
          collection: 'user-to-event',
          where: {
            role: {
              equals: 2, // mentor role ID
            },
          },
        },
        {
          name: 'sponsorRepresentatives',
          type: 'join',
          on: 'event',
          collection: 'user-to-event',
          where: {
            role: {
              equals: 3, // sponsor role ID
            },
          },
        },
        {
          name: 'judges',
          type: 'join',
          on: 'event',
          collection: 'user-to-event',
          where: {
            role: {
              equals: 4, // judges role ID
            },
          },
          admin: {
            condition: (_, siblingData) => siblingData.hasJudging,
          },
        },
        {
          name: 'volunteer',
          type: 'join',
          on: 'event',
          collection: 'user-to-event',
          where: {
            role: {
              equals: 5, // volunteer role ID
            },
          },
        },

      ],
    },
    {
      name: 'organizations',
      type: 'group',
      fields: [
        {
          name: 'sponsor',
          type: 'join',
          on: 'event',
          collection: 'sponsor-to-event',
        },
        {
          name: 'host',
          type: 'join',
          on: 'event',
          collection: 'host-to-event',
        },
      ],
    },
    {
      name: 'calendarLinks',
      type: 'group',
      admin: {
        description: 'Should be automated in the future. Create GCal event and then add link.',
      },
      fields: [
        {
          name: 'participant',
          type: 'text',
        },

        {
          name: 'mentor',
          type: 'text',
        },
        {
          name: 'sponsor',
          type: 'text',
        },
        {
          name: 'judge',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData.hasJudging,
          },
        },
        {
          name: 'volunteer',
          type: 'text',
        },
      ],
    },
    {
      name: 'prerequisites',
      admin: {
        description: 'What should each each group bring to the event',
      },
      type: 'group',
      fields: [
        {
          name: 'participant',
          type: 'richText',
          admin: {
            description: 'What should a participant bring to the event',
          },
        },
        {
          name: 'mentor',
          type: 'richText',
          admin: {
            description: 'What should a mentor bring to the event',
          },
        },
        {
          name: 'sponsor',
          type: 'richText',
          admin: {
            description: 'What should a mentor bring to the event',
          },
        },
        {
          name: 'judge',
          type: 'richText',
          admin: {
            description: 'What should a judge bring to the event',
            condition: (_, siblingData) => siblingData.hasJudge,
          },
        },
        {
          name: 'volunteer',
          type: 'richText',
          admin: {
            description: 'What should a volunteer bring to the event',
          },
        },
      ],
    },
    {
      name: 'schedule',
      type: 'relationship',
      relationTo: 'base-event',
      hasMany: true,
    },
    {
      name: 'eventChallenges',
      type: 'join',
      on: 'event',
      collection: 'challenge',
    },
  ],
}
