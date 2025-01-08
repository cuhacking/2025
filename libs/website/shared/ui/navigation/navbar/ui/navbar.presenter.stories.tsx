import type { Meta, StoryObj } from '@storybook/react'
import cross from '@cuhacking/shared/assets/icons/general/cross-1.svg'
import hamburger from '@cuhacking/shared/assets/icons/general/hamburger-1.svg'
import discord_white from '@cuhacking/shared/assets/icons/socials/discord-white-1.svg'
import docs_white from '@cuhacking/shared/assets/icons/socials/docs-white-1.svg'
import email_white from '@cuhacking/shared/assets/icons/socials/email-white-1.svg'
import figma_white from '@cuhacking/shared/assets/icons/socials/figma-white-1.svg'
import github_white from '@cuhacking/shared/assets/icons/socials/github-white-1.svg'
import instagram_white from '@cuhacking/shared/assets/icons/socials/instagram-white-1.svg'
import linkedin_white from '@cuhacking/shared/assets/icons/socials/linkedin-white-1.svg'
import linktree_white from '@cuhacking/shared/assets/icons/socials/linktree-white-1.svg'
import logo from '@cuhacking/shared/assets/logos/cuHacking/cuhacking-logo-1.svg'
import mlhBanner from '@cuhacking/shared/assets/logos/sponsors/mlh-banner.svg'
import { createRemixStub } from '@remix-run/testing'
import { NavbarPresenter } from './navbar.presenter'

const meta = {
  title: 'Website/Navigation/Navbar',
  component: NavbarPresenter,
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
    links: {
      control: { type: 'object' },
    },
    logo: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof NavbarPresenter>

const banner = [
  {
    name: 'MLH Banner',
    link: 'https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=black',
    media: {
      src: mlhBanner.src,
      alt: 'Major League Hacking 2025 Hackathon Season',
    },
  },
]

const socials = [
  {
    name: 'GitHub',
    link: 'https://github.com',
    media: {
      src: github_white.src,
      alt: 'GitHub',
    },
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com',
    media: {
      src: instagram_white.src,
      alt: 'Instagram',
    },
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com',
    media: {
      src: linkedin_white.src,
      alt: 'LinkedIn',
    },
  },
  {
    name: 'Linktree',
    link: 'https://linktr.ee',
    media: {
      src: linktree_white.src,
      alt: 'Linktree',
    },
  },
  {
    name: 'Email',
    link: 'mailto:example@email.com',
    media: {
      src: email_white.src,
      alt: 'Email',
    },
  },
  {
    name: 'Discord',
    link: 'https://discord.com',
    media: {
      src: discord_white.src,
      alt: 'Discord',
    },
  },
  {
    name: 'Documentation',
    link: 'https://docs.com',
    media: {
      src: docs_white.src,
      alt: 'Documentation',
    },
  },
  {
    name: 'Figma',
    link: 'https://figma.com',
    media: {
      src: figma_white.src,
      alt: 'Figma',
    },
  },
]

export default meta

type Story = StoryObj<typeof NavbarPresenter>
// TODO: Fix cross animation on Storybook
export const Default: Story = {
  args: {
    links: [
      { name: 'ABOUT', link: '/#about' },
      { name: 'EVENTS', link: '/#events' },
      { name: 'SPONSORS', link: '/#sponsors' },
      { name: 'FAQ', link: '/#faq' },
    ],
    logo: logo.src,
    banner,
    socials,
    hamburger: {
      src: hamburger.src,
      alt: 'Hamburger',
    },
    cross: {
      src: cross.src,
      alt: 'Cross',
    },
  },
}
