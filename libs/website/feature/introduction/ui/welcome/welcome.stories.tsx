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
import { Welcome } from './welcome'

const socials: { link: string, media: Media }[] = [
  {
    link: 'https://github.com',
    media: { src: github_green.src, alt: 'GitHub' },
  },
  {
    link: 'https://instagram.com',
    media: { src: instagram_green.src, alt: 'Instagram' },
  },
  {
    link: 'https://linkedin.com',
    media: { src: linkedin_green.src, alt: 'LinkedIn' },
  },
  {
    link: 'https://linktr.ee',
    media: { src: linktree_green.src, alt: 'Linktree' },
  },
  {
    link: 'mailto:example@email.com',
    media: { src: email_green.src, alt: 'Email' },
  },
  {
    link: 'https://discord.com',
    media: { src: discord_green.src, alt: 'Discord' },
  },
  {
    link: 'https://docs.com',
    media: { src: docs_green.src, alt: 'Documentation' },
  },
  {
    link: 'https://figma.com',
    media: { src: figma_green.src, alt: 'Figma' },
  },
]

const meta: Meta<typeof Welcome> = {
  title: 'cuHacking Design System/Intro',
  component: Welcome,
  tags: ['autodocs'],
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
  parameters: {
    layout: 'centered',
  },
  args: {
    socials,
  },
  argTypes: {
    socials: {
      control: { type: 'object' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Welcome>

export const Default: Story = {}
