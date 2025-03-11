import type { Media } from '@cuhacking/shared/types'
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

const socials: { link: string, name: string, media: Media }[] = [
  {
    link: 'https://www.instagram.com/cuhacking/',
    name: 'Instagram',
    media: {
      src: instagram_white,
      alt: 'Instagram',
    },
  },
  {

    link: 'https://github.com/cuhacking/2025',
    name: 'Github',
    media: {
      src: github_white,
      alt: 'GitHub',
    },
  },
  {

    link: 'https://discord.com/invite/h2cQqF9aZf',
    name: 'Discord',
    media: {
      src: discord_white,
      alt: 'Discord',
    },
  },
  {
    link: 'https://docs.cuhacking.ca/',
    name: 'Docs',
    media: {
      src: docs_white,
      alt: 'Documentation',
    },
  },
  {
    link: 'https://www.figma.com/design/wc1JOWR48tBNkjcjwY3AzB/%E2%8C%A8%EF%B8%8F-cuHacking-Design-System?node-id=0-1&t=YTR1ET4Qw1wG1cjz-1',
    name: 'Figma',
    media: {
      src: figma_white,
      alt: 'Figma',
    },
  },
  {
    link: 'mailto:info@cuhacking.ca',
    name: 'Email',
    media: {
      src: email_white,
      alt: 'Email',
    },
  },
  {
    link: 'https://ca.linkedin.com/company/cuhacking',
    name: 'LinkedIn',
    media: {
      src: linkedin_white,
      alt: 'LinkedIn',
    },
  },
  {
    link: 'https://linktr.ee/cuhacking_',
    name: 'Linktree',
    media: {
      src: linktree_white,
      alt: 'Linktree',
    },
  },
]

const banner: { link: string, name: string, media: Media }
  = {
    link: 'https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=black',
    name: 'MLH Banner',
    media: {
      src: 'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/current-sponsors/cuhacking_6_sponsor_logo_mlh_banner.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9jdXJyZW50LXNwb25zb3JzL2N1aGFja2luZ182X3Nwb25zb3JfbG9nb19tbGhfYmFubmVyLnN2ZyIsImlhdCI6MTc0MTY4MDAwMywiZXhwIjoxNzczMjE2MDAzfQ.gZBil66oA5z6GezEe04hcP5os2JlzpQ2Rp3w1L3QYi4',
      alt: 'Major League Hacking 2025 Hackathon Season',
    },
  }
export const NAVBAR_CONSTANTS = {
  SOCIALS: socials,
  LINKS: links,
  LOGO: cuHackingLogo,
  HAMBURGER: {
    src: hamburger,
    alt: 'Hambuger icon',
  },
  MLH_BANNER: banner,
  CROSS: {
    src: cross,
    alt: 'Cross icon',
  },
}
