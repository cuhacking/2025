import type { GlobalConfig } from 'payload'

const SOCIAL_MEDIA_DOMAINS = [
  'behance.net',
  'figma.com',
  'discord.com',
  'github.com',
  'instagram.com',
  'linkedin.com',
  'linktr.ee',
] as const

export const SocialLinks: GlobalConfig = {
  slug: 'social-links',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'brands',
      type: 'relationship',
      relationTo: 'brands',
      hasMany: true,
      defaultValue: async ({ req }) => {
        const brands = await req.payload.find({
          collection: 'brands',
          where: {
            domain: {
              in: SOCIAL_MEDIA_DOMAINS,
            },
          },
        })

        return brands?.docs?.map(brand => brand.id) || []
      },
    },
  ],
}
