import type { Meta, StoryObj } from '@storybook/react'
import Logo from '@cuhacking/ui/assets/logos/cuhacking/logo-1.svg'
import { EIcons } from '@cuhacking/utils/enums/icons'
import Navbar from './navbar'

const meta = {
  title: 'cuHacking Design System/Navigation/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  args: {

  },
  argTypes: {
    links: {
      control: { type: 'object' },
    },
    logo: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Navbar>

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

export default meta

type Story = StoryObj<typeof Navbar>

export const CustomNavbar: Story = {
  args: {
    links: [
      { name: 'ABOUT', link: '/#about' },
      { name: 'EVENTS', link: '/#schedule' },
      { name: 'SPONSORS', link: '/#sponsors' },
      { name: 'FAQ', link: '/#contact' },
    ],
    logo: Logo.src,
    socials,
  },
}
