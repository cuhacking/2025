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
    link: 'https://www.instagram.com/cuhacking/',
    media: { src: instagram_green, alt: 'Instagram' },
  },
  {
    link: 'https://github.com/cuhacking/2025',
    media: { src: github_green, alt: 'GitHub' },
  },
  {
    link: 'https://discord.gg/fh2KseMysN',
    media: { src: discord_green, alt: 'Discord' },
  },
  {
    link: 'https://docs.cuhacking.ca/',
    media: { src: docs_green, alt: 'Documentation' },
  },
  {
    link: 'https://www.figma.com/design/wc1JOWR48tBNkjcjwY3AzB/%E2%8C%A8%EF%B8%8F-cuHacking-Design-System?node-id=1512-3204&t=aOMNy0KT02qD4MhD-1',
    media: { src: figma_green, alt: 'Figma' },
  },
  {
    link: 'mailto:info@cuhacking.ca',
    media: { src: email_green, alt: 'Email' },
  },
  {
    link: 'https://ca.linkedin.com/company/cuhacking',
    media: { src: linkedin_green, alt: 'LinkedIn' },
  },
  {
    link: 'https://linktr.ee/cuhacking_?fbclid=PAZXh0bgNhZW0CMTEAAaZcB9hM3ZkwE4vR0NjpoFmPrg3gfXxlm5NdhqMy-eKHv-VXw8ekbvCznlM_aem_wSxlDGzbFI7sVeAAUVTAoQ',
    media: { src: linktree_green, alt: 'Linktree' },
  },
]
export const WELCOME_CONSTATNTS = {
  SOCIALS: socials,
}
