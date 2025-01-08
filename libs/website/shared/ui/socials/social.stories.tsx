import type { Media } from '@cuhacking/shared/types/media'
import type { Meta, StoryObj } from '@storybook/react'
import discord_green from '@cuhacking/shared/assets/icons/socials/discord-green-1.svg'
import docs_green from '@cuhacking/shared/assets/icons/socials/docs-green-1.svg'
import email_green from '@cuhacking/shared/assets/icons/socials/email-green-1.svg'
import figma_green from '@cuhacking/shared/assets/icons/socials/figma-green-1.svg'
import github_green from '@cuhacking/shared/assets/icons/socials/github-green-1.svg'
import instagram_green from '@cuhacking/shared/assets/icons/socials/instagram-green-1.svg'
import linkedin_green from '@cuhacking/shared/assets/icons/socials/linkedin-green-1.svg'
import linktree_green from '@cuhacking/shared/assets/icons/socials/linktree-green-1.svg'

import { createRemixStub } from '@remix-run/testing'
import { Socials } from './socials'

const meta: Meta<typeof Socials> = {
  title: 'cuHacking Design System/Socials',
  component: Socials,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (story) => {
      const remixStub = createRemixStub([
        {
          path: '/*',
          action: () => ({ redirect: '/' }),
          loader: () => ({ redirect: '/' }),
          Component: () => story(),
        },
      ])

      return remixStub({ initialEntries: ['/'] })
    },
  ],
  argTypes: {
    socials: {
      control: { type: 'object' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Socials>

// Adjusted story with img src handling
export const Default: Story = {
  args: {
    socials: [
      {
        link: 'https://discord.com',
        media: { src: discord_green.src, alt: 'Discord' } as Media,
        name: 'Discord',
      },
      {
        link: 'https://docs.cuhacking.ca',
        media: { src: docs_green.src, alt: 'Docs' } as Media,
        name: 'Docs',
      },
      {
        link: 'mailto:contact@cuhacking.ca',
        media: { src: email_green.src, alt: 'Email' } as Media,
        name: 'Mail',
      },
      {
        link: 'https://figma.com',
        media: { src: figma_green.src, alt: 'Figma' } as Media,
        name: 'Figma',
      },
      {
        link: 'https://github.com/cuhacking',
        media: { src: github_green.src, alt: 'GitHub' } as Media,
        name: 'GitHub',
      },
      {
        link: 'https://instagram.com/cuhacking',
        media: { src: instagram_green.src, alt: 'Instagram' } as Media,
        name: 'Instagram',
      },
      {
        link: 'https://linkedin.com/company/cuhacking',
        media: { src: linkedin_green.src, alt: 'LinkedIn' } as Media,
        name: 'LinkedIn',
      },
      {
        link: 'https://linktr.ee/cuhacking',
        media: { src: linktree_green.src, alt: 'Linktree' } as Media,
        name: 'Linktree',
      },
    ],
  },
}
