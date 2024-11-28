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
import cuHackingLogo from '@cuhacking/shared/assets/logos/cuHacking/cuhacking-logo-1.svg'

const links = [
  { name: 'ABOUT', link: '/#about' },
  { name: 'EVENTS', link: '/#events' },
  { name: 'SPONSORS', link: '/#sponsors' },
  { name: 'FAQ', link: '/#faq' },
]

const socials = [
  {
    link: 'https://instagram.com',
    media: {
      src: instagram_white,
      alt: 'Instagram',
    },
  },
  {
    link: 'https://github.com',
    media: {
      src: github_white,
      alt: 'GitHub',
    },
  },
  {
    link: 'https://discord.com',
    media: {
      src: discord_white,
      alt: 'Discord',
    },
  },
  {
    link: 'https://docs.com',
    media: {
      src: docs_white,
      alt: 'Documentation',
    },
  },
  {
    link: 'https://figma.com',
    media: {
      src: figma_white,
      alt: 'Figma',
    },
  },
  {
    link: 'mailto:example@email.com',
    media: {
      src: email_white,
      alt: 'Email',
    },
  },
  {
    link: 'https://linkedin.com',
    media: {
      src: linkedin_white,
      alt: 'LinkedIn',
    },
  },
  {
    link: 'https://linktr.ee',
    media: {
      src: linktree_white,
      alt: 'Linktree',
    },
  },
]
export const NAVBAR_CONSTANTS = {
  SOCIALS: socials,
  LINKS: links,
  LOGO: cuHackingLogo,
  HAMBURGER: {
    src: hamburger,
    alt: 'Hambuger icon',
  },
  CROSS: {
    src: cross,
    alt: 'Cross icon',
  },
}
