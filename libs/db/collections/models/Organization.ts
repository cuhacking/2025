import type { CollectionConfig } from 'payload'
import { isAdmin } from '@cuhacking/db/access/isAdmin'
import { validateURL } from '@cuhacking/db/shared/utils/validate-url'

export const Organization: CollectionConfig = {
  slug: 'organization',
  access: {
    update: isAdmin,
    create: isAdmin,
  },
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
      name: 'type',
      type: 'select',
      options: [
        { label: 'Sponsor', value: 'sponsor' },
        { label: 'CUSA Club', value: 'cusaClub' },
        { label: 'University', value: 'university' },
      ],
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'members',
      type: 'join',
      on: 'organization',
      collection: 'user-to-organization',
    },
  ],
}

export const Sponsor: CollectionConfig = {
  slug: 'sponsor',
  admin: {
    useAsTitle: 'formattedTitle',
  },
  fields: [
    {
      name: 'baseOrganization',
      type: 'relationship',
      relationTo: 'organization',
    },
    {
      name: 'formattedTitle',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
      hooks: {
        beforeChange: [
          async ({ data, req }) => {
            const { baseOrganization } = data as any

            const orgObject = baseOrganization
              ? await req.payload.findByID({ collection: 'organization', id: baseOrganization }) || 'Unammed'
              : 'Unammed'

            return orgObject?.name || orgObject
          },
        ],
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media', // Assuming a media collection exists for file uploads
    },
    {
      name: 'markettingWebsite',
      type: 'text',
      required: true,
      validate: validateURL,
    },
    {
      name: 'hiringPortal',
      type: 'text',
      required: true,
      validate: validateURL,
    },

  ],
}

export const UserToOrganization: CollectionConfig = {
  slug: 'user-to-organization',
  admin: {
    useAsTitle: 'formattedTitle',
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
            const { user, organization } = data as any

            const userObj = user
              ? await req.payload.findByID({ collection: 'user', id: user })
              : null
            const organizationObj = organization
              ? await req.payload.findByID({ collection: 'organization', id: organization })
              : null

            const userEmail = userObj?.email || 'Unknown User'
            const organizationName = organizationObj?.name || 'Unknown Organization'

            return `${userEmail} - ${organizationName}`
          },
        ],
      },
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'user',
      // @ts-expect-error - this is a bug with payload, not us
      validate: async (_, { data, req }: { data: { user: any, organization: any }, req: any }) => {
        const { user, organization } = data as any

        const org = await req.payload.findByID({
          collection: 'organization',
          id: organization,
        })
        const isSponsor = org?.type === 'sponsor'

        if (isSponsor) {
          const userData = await req.payload.findByID({
            collection: 'user',
            id: user,
          })

          const isSponsorRepresentative = userData?.roles.find((role: string) => role === 'sponsorRepresentative')
          // Not a sponsor rep and is part of a sponsor organization
          if (!isSponsorRepresentative) {
            return 'Invalid user role'
          }
        }
        return true
      },
    },
    {
      name: 'role',
      type: 'text',
      admin: {
        description: 'Use terminology specific to the organization',
      },
      required: true,
    },
    {
      name: 'organization',
      type: 'relationship',
      relationTo: 'organization',
    },
  ],
}

/**
 * - Creating Events, confusing to have base events
 * - don't need a judge
 * - make the schedule, base
 */
