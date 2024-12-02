import type { Meta, StoryObj } from '@storybook/react'
import discord_white from '@cuhacking/shared/assets/icons/socials/discord-white-1.svg'
import docs_white from '@cuhacking/shared/assets/icons/socials/docs-white-1.svg'
import email_white from '@cuhacking/shared/assets/icons/socials/email-white-1.svg'
import figma_white from '@cuhacking/shared/assets/icons/socials/figma-white-1.svg'
import github_white from '@cuhacking/shared/assets/icons/socials/github-white-1.svg'
import instagram_white from '@cuhacking/shared/assets/icons/socials/instagram-white-1.svg'
import linkedin_white from '@cuhacking/shared/assets/icons/socials/linkedin-white-1.svg'
import linktree_white from '@cuhacking/shared/assets/icons/socials/linktree-white-1.svg'
import cuHackingLogo from '@cuhacking/shared/assets/logos/cuHacking/cuhacking-logo-1.svg'
import { createRemixStub } from '@remix-run/testing'
import { FooterPresenter } from './footer.presenter'

const meta: Meta<typeof FooterPresenter> = {
  title: 'Website/Navigation/Footer',
  component: FooterPresenter,
  tags: ['autodocs'],
  args: {},
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
    logo: {
      control: { type: 'text' },
      description: 'Logo image source URL',
    },
    socials: {
      control: { type: 'object' },
      description: 'Array of social media links with icons',
    },
  },
}

const socials = [
  {
    link: 'https://discord.com/invite/your-discord',
    media: {
      src: discord_white.src,
      alt: 'Discord',
    },
  },
  {
    link: 'https://docs.yourwebsite.com',
    media: {
      src: docs_white.src,
      alt: 'Docs',
    },
  },
  {
    link: 'mailto:contact@yourwebsite.com',
    media: {
      src: email_white.src,
      alt: 'Email',
    },
  },
  {
    link: 'https://figma.com/your-project',
    media: {
      src: figma_white.src,
      alt: 'Figma',
    },
  },
  {
    link: 'https://github.com/your-org',
    media: {
      src: github_white.src,
      alt: 'GitHub',
    },
  },
  {
    link: 'https://instagram.com/your-org',
    media: {
      src: instagram_white.src,
      alt: 'Instagram',
    },
  },
  {
    link: 'https://linkedin.com/in/your-org',
    media: {
      src: linkedin_white.src,
      alt: 'LinkedIn',
    },
  },
  {
    link: 'https://linktree.com/your-linktree',
    media: {
      src: linktree_white.src,
      alt: 'Linktree',
    },
  },
]

export default meta

type Story = StoryObj<typeof FooterPresenter>

export const DefaultFooter: Story = {
  args: {
    logo: cuHackingLogo.src,
    socials,
  },
}
