/* eslint-disable antfu/no-top-level-await */
// import type { Where } from 'payload'
import onePassword from '@cuhacking/shared/assets/logos/sponsors/1password.white.svg'
import balsamiq from '@cuhacking/shared/assets/logos/sponsors/balsamiq.white.svg'
// import beeceptor from '@cuhacking/shared/assets/logos/sponsors/beeceptor.svg'
import bloomberg from '@cuhacking/shared/assets/logos/sponsors/bloomberg.white.svg'
// import cse from '@cuhacking/shared/assets/logos/sponsors/cse.svg'
import digitalOcean from '@cuhacking/shared/assets/logos/sponsors/digital-ocean.white.svg'
import ea from '@cuhacking/shared/assets/logos/sponsors/ea.white.svg'
// import fullscript from '@cuhacking/shared/assets/logos/sponsors/fullscript.svg'
// import gadget from '@cuhacking/shared/assets/logos/sponsors/gadget.svg'
import github from '@cuhacking/shared/assets/logos/sponsors/github.white.svg'
// import incogni from '@cuhacking/shared/assets/logos/sponsors/incogni.svg'
// import kefc from '@cuhacking/shared/assets/logos/sponsors/kefc.svg'
import marchNetworks from '@cuhacking/shared/assets/logos/sponsors/march-networks.white.svg'
// import merryDairy from '@cuhacking/shared/assets/logos/sponsors/merry-dairy.svg'
// import mlhColoured from '@cuhacking/shared/assets/logos/sponsors/mlh-coloured.svg'
import mlh from '@cuhacking/shared/assets/logos/sponsors/mlh.white.svg'
// import nordPass from '@cuhacking/shared/assets/logos/sponsors/nord-pass.svg'
// import nordVpn from '@cuhacking/shared/assets/logos/sponsors/nord-vpn.svg'
// import qnx from '@cuhacking/shared/assets/logos/sponsors/qnx.svg'
import rbc from '@cuhacking/shared/assets/logos/sponsors/rbc.white.svg'
// import redbull from '@cuhacking/shared/assets/logos/sponsors/redbull.svg'
// import saily from '@cuhacking/shared/assets/logos/sponsors/saily.svg'
// import standoutStickers from '@cuhacking/shared/assets/logos/sponsors/standout-stickers.white.svg'
import techDomains from '@cuhacking/shared/assets/logos/sponsors/techdomains.white.svg'
// import wolframRed from '@cuhacking/shared/assets/logos/sponsors/wolfram.red.svg'
import wolfram from '@cuhacking/shared/assets/logos/sponsors/wolfram.white.svg'
import { stringify } from 'qs-esm'

async function fetchSponsorData(name: string) {
  const query = { name: { equals: name } }
  const stringifiedQuery = stringify({ where: query }, { addQueryPrefix: true })

  const response = await fetch(`http://localhost:8000/api/brands${stringifiedQuery}`)
  const data = await response.json()

  return {
    logo: data?.docs?.[0]?.symbol?.url || '',
    domain: data?.docs?.[0]?.domain || '',
  }
}

const presentSponsors = await Promise.all(
  [
    { name: 'QNX' },
    { name: 'FullScript' },
    { name: 'CSE' },
    { name: 'Gadget' },
    { name: 'MLH' },
    { name: 'StandOut Stickers', link: 'http://hackp.ac/mlh-StandOutStickers-hackathons' },
    { name: 'KEFC' },
    { name: 'Beeceptor' },
    { name: 'Red Bull' },
    { name: 'Wolfram' },
    { name: 'The Merry Dairy' },
    { name: 'NordVPN' },
    { name: 'NordPass' },
    { name: 'incogni' },
    { name: 'Saily' },
  ].map(async (sponsor) => {
    const { logo, domain } = await fetchSponsorData(sponsor.name)
    return {
      name: sponsor.name,
      logo,
      link: sponsor.link || (domain ? `https://${domain}` : ''),
    }
  }),
)

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
