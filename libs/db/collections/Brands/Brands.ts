import type { CollectionBeforeChangeHook, CollectionConfig } from 'payload/types'

const SOCIAL_MEDIA_PLATFORMS = [
  { key: 'github', domain: 'github.com', label: 'GitHub' },
  { key: 'linkedin', domain: 'linkedin.com', label: 'LinkedIn' },
  { key: 'instagram', domain: 'instagram.com', label: 'Instagram' },
  { key: 'discord', domain: 'discord.gg', label: 'Discord' },
  { key: 'behance', domain: 'behance.net', label: 'Behance' },
  { key: 'figma', domain: 'figma.com', label: 'Figma' },
  { key: 'linktree', domain: 'linktr.ee', label: 'Linktree' },
] as const

// function validateSocialMediaHandle(platformLabel: string, domain: string) {
//   return (value: string) => {
//     if (!value)
//       return true
//     const sanitizedValue = value.replace(/^(https?:\/\/)?(www\.)?/, '')

//     if (!sanitizedValue.includes('/')) {
//       return true
//     }

//     if (!sanitizedValue.startsWith(domain)) {
//       return `Invalid ${platformLabel} URL. Expected a link from ${domain}.`
//     }

//     const extractedHandle = sanitizedValue.replace(new RegExp(`^${domain}/?`), '')

//     if (!extractedHandle || extractedHandle.includes('/')) {
//       return `Invalid ${platformLabel} handle. Only usernames or profile handles are allowed.`
//     }

//     return true
//   }
// }

const generateSocialLinks: CollectionBeforeChangeHook = async ({ data }) => {
  SOCIAL_MEDIA_PLATFORMS.forEach(({ key, domain }) => {
    const handle = data[key]
    if (handle) {
      const sanitizedHandle = handle.replace(/^(https?:\/\/)?(www\.)?/, '')

      if (sanitizedHandle.includes(domain)) {
        const extractedHandle = sanitizedHandle.replace(new RegExp(`^${domain}/?`), '')

        // if (!extractedHandle || extractedHandle.includes('/')) {
        //   throw new Error(`Invalid ${key} URL format. Only usernames or profile handles are allowed.`)
        // }

        data[`${key}Url`] = `https://${domain}/${extractedHandle}`
        data[key] = extractedHandle
      }
      else {
        // throw new Error(`Invalid ${key} URL. Expected a link from ${domain}.`)
      }
    }
  })

  return data
}

const socialMediaFields = SOCIAL_MEDIA_PLATFORMS.map(({ key, label,
  // domain
}) => ({
  name: key,
  type: 'text',
  label,
  required: false,
  admin: { position: 'sidebar' },
  // validate: validateSocialMediaHandle(label, domain),
}))

export const Brands: CollectionConfig = {
  slug: 'brands',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'description', 'id', 'updatedAt', 'createdAt'],
  },
  hooks: {
    beforeChange: [generateSocialLinks],
  },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'Name' },
    { name: 'description', type: 'textarea', required: false, label: 'Description' },
    { name: 'domain', type: 'text', required: false, admin: { position: 'sidebar' } },
    {
      name: 'links',
      type: 'array',
      label: 'Links',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      required: false,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: false,
        },
        {
          name: 'link',
          type: 'text',
          required: false,
        },
      ],
    },
    { name: 'email', type: 'email', label: 'Email Address', required: false },
    { name: 'phone', type: 'number', label: 'Phone Number', required: false },
    { name: 'location', type: 'text', label: 'Location', required: false },
    { name: 'symbol', type: 'upload', relationTo: 'media', label: 'Symbol', required: false },
    { name: 'wordmark', type: 'upload', relationTo: 'media', label: 'Wordmark', required: false },
    ...socialMediaFields,
  ],
}
