import type { Meta, StoryObj } from '@storybook/react'
import { EIcons } from '@cuhacking/utils/enums/icons'
import Socials from './socials' // Adjust this path to where your `Socials` component is located

const meta: Meta<typeof Socials> = {
  title: 'cuHacking Design System/Socials',
  component: Socials,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    socials: {
      control: { type: 'object' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Socials>

// Helper to generate social links
function generateSocials(variant: 'white' | 'green') {
  return [
    {
      link: 'https://github.com',
      icon: variant === 'white' ? EIcons.GITHUB_WHITE : EIcons.GITHUB_GREEN,
    },
    {
      link: 'https://instagram.com',
      icon: variant === 'white' ? EIcons.INSTAGRAM_WHITE : EIcons.INSTAGRAM_GREEN,
    },
    {
      link: 'https://linkedin.com',
      icon: variant === 'white' ? EIcons.LINKEDIN_WHITE : EIcons.LINKEDIN_GREEN,
    },
    {
      link: 'https://linktr.ee',
      icon: variant === 'white' ? EIcons.LINKTREE_WHITE : EIcons.LINKTREE_GREEN,
    },
    {
      link: 'mailto:example@email.com',
      icon: variant === 'white' ? EIcons.EMAIL_WHITE : EIcons.EMAIL_GREEN,
    },
    {
      link: 'https://discord.com',
      icon: variant === 'white' ? EIcons.DISCORD_WHITE : EIcons.DISCORD_GREEN,
    },
  ]
}

export const WhiteIcons: Story = {
  args: {
    socials: generateSocials('white'),
  },
}

export const GreenIcons: Story = {
  args: {
    socials: generateSocials('green'),
  },
}
