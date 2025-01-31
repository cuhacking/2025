import onePassword from '@cuhacking/shared/assets/logos/sponsors/1password.white.svg'
import balsamiq from '@cuhacking/shared/assets/logos/sponsors/balsamiq.white.svg'
import bloomberg from '@cuhacking/shared/assets/logos/sponsors/bloomberg.white.svg'
import digitalOcean from '@cuhacking/shared/assets/logos/sponsors/digital-ocean.white.svg'
import ea from '@cuhacking/shared/assets/logos/sponsors/ea.white.svg'
import github from '@cuhacking/shared/assets/logos/sponsors/github.white.svg'
import marchNetworks from '@cuhacking/shared/assets/logos/sponsors/march-networks.white.svg'
import mlh from '@cuhacking/shared/assets/logos/sponsors/mlh.white.svg'
import rbc from '@cuhacking/shared/assets/logos/sponsors/rbc.white.svg'
import standoutStickers from '@cuhacking/shared/assets/logos/sponsors/standout-stickers.white.svg'
import techDomains from '@cuhacking/shared/assets/logos/sponsors/techdomains.white.svg'
import wolfram from '@cuhacking/shared/assets/logos/sponsors/wolfram.white.svg'

const presentSponsors = [
  { name: 'StandOut Stickers', logo: standoutStickers, link: 'http://hackp.ac/mlh-StandOutStickers-hackathons' },
]

const pastSponsors = [
  { name: 'Electronic Arts', logo: ea, link: 'https://www.ea.com' },
  { name: 'Digital Ocean', logo: digitalOcean, link: 'https://www.digitalocean.com' },
  { name: 'Balsamiq', logo: balsamiq, link: 'https://balsamiq.com' },
  { name: 'RBC', logo: rbc, link: 'https://www.rbc.com' },
  { name: '1Password', logo: onePassword, link: 'https://1password.com' },
  { name: 'Bloomberg', logo: bloomberg, link: 'https://www.bloomberg.com' },
  { name: 'GitHub', logo: github, link: 'https://github.com' },
  { name: 'March Networks', logo: marchNetworks, link: 'https://www.marchnetworks.com' },
  { name: 'MLH', logo: mlh, link: 'https://mlh.io' },
  { name: '.TECH Domains', logo: techDomains, link: 'https://get.tech' },
  { name: 'Wolfram', logo: wolfram, link: 'https://www.wolfram.com' },
]

const sponsorshipText = [
  { content: 'cuHacking has been supported by top tech companies, financial institutions, and local startups, all dedicated to fostering innovation.', isCallToAction: false },
  { content: 'Their resources and mentorship empower participants to create impactful solutions, making our event a success year after year.', isCallToAction: false },
  { content: '', isCallToAction: false },
  { content: 'Empower tomorrow\'s tech leaders with your support — become a sponsor and drive innovation forward', isCallToAction: true },
]

export const SPONSORSHIP_CONSTANTS = {
  TEXT: sponsorshipText,
  SPONSORS: {
    present: presentSponsors,
    past: pastSponsors,
  },
}
