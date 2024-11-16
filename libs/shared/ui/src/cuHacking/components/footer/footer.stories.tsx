import type { Meta, StoryObj } from '@storybook/react'
import cuHackingLogo from '@cuhacking/ui/assets/logos/cuhacking/logo-1.svg' // Replace with the actual logo path
import { EIcons } from '@cuhacking/utils/enums/icons'
import Footer from './footer' // Adjust this import to the location of your Footer component

const socials = [
  {
    link: 'https://github.com',
    icon: EIcons.GITHUB_WHITE,
  },
  {
    link: 'https://instagram.com',
    icon: EIcons.INSTAGRAM_WHITE,
  },
  {
    link: 'https://linkedin.com',
    icon: EIcons.LINKEDIN_WHITE,
  },
  {
    link: 'https://linktr.ee',
    icon: EIcons.LINKTREE_WHITE,
  },
  {
    link: 'mailto:example@email.com',
    icon: EIcons.EMAIL_WHITE,
  },
  {
    link: 'https://discord.com',
    icon: EIcons.DISCORD_WHITE,
  },
]

const meta: Meta<typeof Footer> = {
  title: 'cuHacking Design System/Footer',
  component: Footer,
  tags: ['autodocs'],
  args: {},
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

export default meta

type Story = StoryObj<typeof Footer>

export const DefaultFooter: Story = {
  args: {
    logo: cuHackingLogo.src,
    socials,
  },
}
