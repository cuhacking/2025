import type { GlobalConfig } from 'payload'
import { validateURL } from '@/db/shared/utils/validate-url'

export const Links: GlobalConfig = {
  slug: 'links',
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ['type', 'platform'],
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      required: true,
      label: 'Link Type',
      options: [
        { label: 'Social Media', value: 'social' },
        { label: 'Custom Domain', value: 'custom' },
      ],
    },
    {
      name: 'platform',
      type: 'select',
      label: 'Social Media Platform',
      required: false,
      options: [
        { label: 'LinkedIn', value: 'linkedin' },
        { label: 'GitHub', value: 'github' },
        { label: 'Discord', value: 'discord' },
        { label: 'Instagram', value: 'instagram' },
        { label: 'Linktree', value: 'linktree' },
        { label: 'Behance', value: 'behance' },
      ],
      admin: {
        condition: data => data.type === 'social',
      },
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      label: 'URL',
      validate: (url: string, { type }: { type: string }) => {
        // Base URL validation
        const isValid = validateURL(url)
        if (!isValid)
          return 'Invalid URL.'

        // If it's a custom domain, ensure it ends with cuhacking.ca
        if (type === 'custom' && !url.endsWith('.cuhacking.ca')) {
          return 'Custom domains must end with .cuhacking.ca.'
        }

        return true
      },
    },
  ],
}

export const CustomDomains: GlobalConfig = {
  slug: 'custom-domains',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
      label: 'Domain Name',
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      label: 'Domain URL',
      validate: (url: string) => {
        const isValid = /^https:\/\/[\w-]+\.cuhacking\.ca$/.test(url)
        if (!isValid)
          return 'Custom domains must end with .cuhacking.ca.'
        return true
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
  ],
}
