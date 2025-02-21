import type { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ['name', 'description'],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Brand Metadata',
          description: 'General Information',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              label: 'Name',
              defaultValue: 'cuHacking',
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
              label: 'Description',
              defaultValue: 'Carleton University\'s Official Hackathon',
            },
            {
              name: 'year',
              type: 'number',
              required: true,
              label: 'Year',
              defaultValue: 2025,
            },
            {
              name: 'domain',
              type: 'text',
              required: true,
              label: 'Domain',
              defaultValue: 'cuhacking.ca',
              admin: {
                description: 'Enter the primary domain (e.g., example.com)',
              },
              validate: (value) => {
                if (!/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(value)) {
                  return 'Invalid domain format. Example: example.com'
                }
                return true
              },
            },
            {
              name: 'subdomains',
              type: 'array',
              label: 'Subdomains',
              labels: {
                singular: 'Subdomain',
                plural: 'Subdomains',
              },
              fields: [
                {
                  name: 'subdomain',
                  type: 'text',
                  required: true,
                  label: 'Subdomain',
                  validate: (value) => {
                    if (!/^[a-z0-9-]+$/i.test(value)) {
                      return 'Invalid subdomain format. Use only letters, numbers, and hyphens.'
                    }
                    return true
                  },
                },
                {
                  name: 'fullSubdomain',
                  type: 'text',
                  required: true,
                  label: 'Full Subdomain URL',
                  hooks: {
                    beforeChange: [
                      ({ siblingData, data }) => {
                        if (siblingData.subdomain && data.domain) {
                          return `${siblingData.subdomain}.${data.domain}`
                        }
                        return ''
                      },
                    ],
                  },
                  admin: {
                    readOnly: true,
                    description: 'Auto-generated based on the subdomain and brand domain.',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Social Media',
          fields: [
            {
              name: 'socialMedia',
              type: 'group',
              fields: [
                {
                  name: 'links',
                  type: 'array',
                  fields: [
                    {
                      name: 'platform',
                      type: 'select',
                      required: true,
                      label: 'Platform',
                      options: [
                        { label: 'LinkedIn', value: 'linkedin' },
                        { label: 'GitHub', value: 'github' },
                        { label: 'Discord', value: 'discord' },
                        { label: 'Instagram', value: 'instagram' },
                      ],
                      admin: {
                        description: 'Select the social media platform.',
                      },
                    },
                    {
                      name: 'prefix',
                      type: 'text',
                      required: true,
                      label: 'URL Prefix',
                      admin: {
                        readOnly: false,
                      },
                      hooks: {
                        beforeChange: [
                          ({ siblingData, value }) => {
                            const platformPrefixes = {
                              linkedin: 'https://linkedin.com/in/',
                              github: 'https://github.com/',
                              discord: 'https://discord.com/users/',
                              instagram: 'https://instagram.com/',
                            }

                            if (siblingData.platform && !value) {
                              return platformPrefixes[siblingData.platform] || ''
                            }

                            return value
                          },
                        ],
                      },
                    },
                    {
                      name: 'customPath',
                      type: 'text',
                      required: false,
                      label: 'Custom Path',
                      admin: {
                        description: 'Enter the username or profile ID.',
                      },
                    },
                    {
                      name: 'fullUrl',
                      type: 'text',
                      required: true,
                      label: 'Full URL',
                      hooks: {
                        beforeChange: [
                          ({ siblingData }) => {
                            return `${siblingData.prefix}${siblingData.customPath || ''}`
                          },
                        ],
                      },
                      admin: {
                        readOnly: true,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
