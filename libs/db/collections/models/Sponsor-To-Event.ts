import type { CollectionConfig } from 'payload'

export const SponsorToEvent: CollectionConfig = {
  slug: 'sponsor-to-event',
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
            const { event, sponsor } = data as any

            const eventObj = event
              ? await req.payload.findByID({ collection: 'general-event', id: event })
              : null
            const sponsorObj = sponsor
              ? await req.payload.findByID({ collection: 'sponsor', id: sponsor })
              : null

            const eventName = eventObj?.formattedTitle || 'Unknown User'
            const sponsorName = sponsorObj?.formattedTitle || 'Unknown Sponsor'

            return `${eventName} - ${sponsorName}`
          },
        ],
      },
    },
    {
      name: 'event',
      type: 'relationship',
      relationTo: 'base-event',
    },
    {
      name: 'sponsor',
      type: 'relationship',
      relationTo: 'sponsor',
    },
  ],
}
