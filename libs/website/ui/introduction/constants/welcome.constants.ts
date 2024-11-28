import discord_green from '@cuhacking/shared/assets/icons/socials/discord-green-1.svg'
import docs_green from '@cuhacking/shared/assets/icons/socials/docs-green-1.svg'
import email_green from '@cuhacking/shared/assets/icons/socials/email-green-1.svg'
import figma_green from '@cuhacking/shared/assets/icons/socials/figma-green-1.svg'
import github_green from '@cuhacking/shared/assets/icons/socials/github-green-1.svg'
import instagram_green from '@cuhacking/shared/assets/icons/socials/instagram-green-1.svg'
import linkedin_green from '@cuhacking/shared/assets/icons/socials/linkedin-green-1.svg'
import linktree_green from '@cuhacking/shared/assets/icons/socials/linktree-green-1.svg'

interface Media {
  src: string
  alt: string
}

const socials: { link: string, media: Media }[] = [
  {
    link: 'https://github.com',
    media: { src: github_green, alt: 'GitHub' },
  },
  {
    link: 'https://instagram.com',
    media: { src: instagram_green, alt: 'Instagram' },
  },
  {
    link: 'https://linkedin.com',
    media: { src: linkedin_green, alt: 'LinkedIn' },
  },
  {
    link: 'https://linktr.ee',
    media: { src: linktree_green, alt: 'Linktree' },
  },
  {
    link: 'mailto:example@email.com',
    media: { src: email_green, alt: 'Email' },
  },
  {
    link: 'https://discord.com',
    media: { src: discord_green, alt: 'Discord' },
  },
  {
    link: 'https://docs.com',
    media: { src: docs_green, alt: 'Documentation' },
  },
  {
    link: 'https://figma.com',
    media: { src: figma_green, alt: 'Figma' },
  },
]
export const WELCOME_CONSTATNTS = {
  SOCIALS: socials,
}
