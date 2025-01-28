import type { CollectionConfig } from 'payload'

export const HostToEvent: CollectionConfig = {
  slug: 'host-to-event',
  admin: {
    useAsTitle: 'formattedTitle',
  },
  fields: [
    // Basic Info
    {
      name: 'formattedTitle',
      type: 'text',
      hooks: {
        beforeChange: [
          async ({ data, req }) => {
            const { event, host } = data as any

            const eventObj = event
              ? await req.payload.findByID({ collection: 'general-event', id: event })
              : null
            const organizationObj = host
              ? await req.payload.findByID({ collection: 'organization', id: host })
              : null

            const eventName = eventObj?.formattedTitle || 'Unknown User'
            const organizationName = organizationObj?.name || 'Unknown Organization'

            return `${eventName} - ${organizationName}`
          },
        ],
      },
    },
    {
      name: 'event',
      type: 'relationship',
      relationTo: 'general-event',
      required: true,
    },
    {
      name: 'host',
      type: 'relationship',
      relationTo: 'organization',
      required: true,
    },
  ],
}
