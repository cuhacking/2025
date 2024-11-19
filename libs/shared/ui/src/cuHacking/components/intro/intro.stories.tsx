import github_green from '@cuhacking/ui/assets/icons/socials/github-green-1.svg'
import instagram_green from '@cuhacking/ui/assets/icons/socials/instagram-green-1.svg'
import linkedin_green from '@cuhacking/ui/assets/icons/socials/linkedin-green-1.svg'
import linktree_green from '@cuhacking/ui/assets/icons/socials/linktree-green-1.svg'
import email_green from '@cuhacking/ui/assets/icons/socials/email-green-1.svg'
import discord_green from '@cuhacking/ui/assets/icons/socials/discord-green-1.svg'
import docs_green from '@cuhacking/ui/assets/icons/socials/docs-green-1.svg'
import figma_green from '@cuhacking/ui/assets/icons/socials/figma-green-1.svg'
import type { Meta, StoryObj } from '@storybook/react';
import Intro from './intro'; 

const socials: { link: string, media: Media}[] = [
  {
    link: 'https://github.com',
    media: { src: github_green.src, alt: 'GitHub' }
  },
  {
    link: 'https://instagram.com',
    media: { src: instagram_green.src, alt: 'Instagram' } 
  },
  {
    link: 'https://linkedin.com',
    media: { src: linkedin_green.src, alt: 'LinkedIn' }
  },
  {
    link: 'https://linktr.ee',
    media: { src: linktree_green.src, alt: 'Linktree' } 
  },
  {
    link: 'mailto:example@email.com',
    media: { src: email_green.src, alt: 'Email' }
  },
  {
    link: 'https://discord.com',
    media: { src: discord_green.src, alt: 'Discord' } 
  },
  {
    link: 'https://docs.com',
    media: { src: docs_green.src, alt: 'Documentation' } 
  },
  {
    link: 'https://figma.com',
    media: { src: figma_green.src, alt: 'Figma' }
  }
]


const meta: Meta<typeof Intro> = {
  title: 'cuHacking Design System/Intro',
  component: Intro,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    socials: socials
  }, 
  argTypes: {
    socials: {
      control: { type: 'object' },
    }
  },
};

export default meta;

type Story = StoryObj<typeof Intro>;

export const Default: Story = {};
