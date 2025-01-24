import type { GlobalConfig } from 'payload'
import { validateURL } from '@cuhacking/db/shared/utils/validate-url'

export const SocialLink: GlobalConfig = {
  access: {
    read: () => true,
  },
  slug: 'social-link',
  label: 'cuHacking Social Media Links',
  fields: [
    {
      name: 'platform',
      type: 'select',
      required: true,
      label: 'Social Media Platform',
      options: [
        {
          label: 'Website',
          value: 'website',
        },
        {
          label: 'Portal',
          value: 'portal',
        },
        {
          label: 'Design',
          value: 'design',
        },
        {
          label: 'Architecture',
          value: 'architecture',
        },
        // {
        //   label: 'Tooling',
        //   value: 'tooling',
        // },
        {
          value: 'ESLint',
          label: 'eslint',
        },
        {
          label: 'Discord',
          value: 'discord',
        },
        {
          label: 'Instagram',
          value: 'instagram',
        },
        {
          label: 'LinkedIn',
          value: 'linkedin',
        },
        {
          label: 'Linktree',
          value: 'linktree',
        },
        {
          label: 'Figma',
          value: 'figma',
        },
        {
          label: 'GitHub Project Board',
          value: 'github-project',
        },
        {
          label: 'GitHub Repository',
          value: 'github-repo',
        },
      ],
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      label: 'URL',
      validate: validateURL,
    },
    // {
    //   name: 'icon',
    //   type: 'upload', // Optional: Use an upload field for platform-specific icons
    //   relationTo: 'media', // Replace with the slug of your media collection
    // },
  ],
}
