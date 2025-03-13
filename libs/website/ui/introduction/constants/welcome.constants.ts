import type { Media } from '@cuhacking/shared/types'
import discord_green from '@cuhacking/shared/assets/icons/socials/discord-green-1.svg'
import docs_green from '@cuhacking/shared/assets/icons/socials/docs-green-1.svg'
import email_green from '@cuhacking/shared/assets/icons/socials/email-green-1.svg'
import figma_green from '@cuhacking/shared/assets/icons/socials/figma-green-1.svg'
import github_green from '@cuhacking/shared/assets/icons/socials/github-green-1.svg'
import instagram_green from '@cuhacking/shared/assets/icons/socials/instagram-green-1.svg'
import linkedin_green from '@cuhacking/shared/assets/icons/socials/linkedin-green-1.svg'
import linktree_green from '@cuhacking/shared/assets/icons/socials/linktree-green-1.svg'

const socials: { link: string, name: string, media: Media }[] = [
  {
    link: 'https://www.instagram.com/cuhacking/',
    name: 'Instagram',
    media: { src: instagram_green, alt: 'Instagram' },
  },
  {
    link: 'https://github.com/cuhacking/2025',
    name: 'GitHub',
    media: { src: github_green, alt: 'GitHub' },
  },
  {
    link: 'https://discord.gg/5j3eD99H8H',
    name: 'Discord',
    media: { src: discord_green, alt: 'Discord' },
  },
  {
    link: 'https://docs.cuhacking.ca/',
    name: 'Docs',
    media: { src: docs_green, alt: 'Documentation' },
  },
  {
    link: 'https://www.figma.com/design/wc1JOWR48tBNkjcjwY3AzB/%E2%8C%A8%EF%B8%8F-cuHacking-Design-System?node-id=1512-3204&t=aOMNy0KT02qD4MhD-1',
    name: 'Figma',
    media: { src: figma_green, alt: 'Figma' },
  },
  {
    link: 'mailto:info@cuhacking.ca',
    name: 'Email',
    media: { src: email_green, alt: 'Email' },
  },
  {
    link: 'https://ca.linkedin.com/company/cuhacking',
    name: 'LinkedIn',
    media: { src: linkedin_green, alt: 'LinkedIn' },
  },
  {
    link: 'https://linktr.ee/cuhacking_',
    name: 'Linktree',
    media: { src: linktree_green, alt: 'Linktree' },
  },
]
export const WELCOME_CONSTANTS = {
  SOCIALS: socials,
  SPLINE_LINK: 'https://prod.spline.design/a1qdk8yVQfNTh2jB/scene.splinecode',
}
