/* eslint-disable antfu/no-top-level-await */
// import type { Where } from 'payload'
// import beeceptor from '@cuhacking/shared/assets/logos/sponsors/beeceptor.svg'
// import cse from '@cuhacking/shared/assets/logos/sponsors/cse.svg'
// import fullscript from '@cuhacking/shared/assets/logos/sponsors/fullscript.svg'
// import gadget from '@cuhacking/shared/assets/logos/sponsors/gadget.svg'
// import incogni from '@cuhacking/shared/assets/logos/sponsors/incogni.svg'
// import kefc from '@cuhacking/shared/assets/logos/sponsors/kefc.svg'
// import merryDairy from '@cuhacking/shared/assets/logos/sponsors/merry-dairy.svg'
// import mlhColoured from '@cuhacking/shared/assets/logos/sponsors/mlh-coloured.svg'
// import nordPass from '@cuhacking/shared/assets/logos/sponsors/nord-pass.svg'
// import nordVpn from '@cuhacking/shared/assets/logos/sponsors/nord-vpn.svg'
// import qnx from '@cuhacking/shared/assets/logos/sponsors/qnx.svg'
// import redbull from '@cuhacking/shared/assets/logos/sponsors/redbull.svg'
// import saily from '@cuhacking/shared/assets/logos/sponsors/saily.svg'
// import standoutStickers from '@cuhacking/shared/assets/logos/sponsors/standout-stickers.white.svg'
// import wolframRed from '@cuhacking/shared/assets/logos/sponsors/wolfram.red.svg'
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

const presentSponsorsInput = {
  tera: ['QNX'],
  kilo: ['FullScript', 'CSE', 'Gadget', 'MLH'],
  centi: [
    'StandOut Stickers',
    'KEFC',
    'Faculty Of Science',
    'Beeceptor',
    'Red Bull',
    'Wolfram',
    'The Merry Dairy',
    'NordVPN',
    'NordPass',
    'incogni',
    'Saily',
  ],
}

const presentPartnersInput = {
  partner: [
    'Tail\'ed',
    'Sesa',
    'IEEE Carleton',
    'CAIS',
  ],
}

async function mapSponsor(tiers) {
  const result = {}

  for (const [tierName, sponsorNames] of Object.entries(tiers)) {
    const sponsorPromises = sponsorNames.map(async (name) => {
      const { logo, domain } = await fetchSponsorData(name)
      return {
        name,
        logo,
        link: domain ? `https://${domain}` : '',
      }
    })
    result[tierName] = await Promise.all(sponsorPromises)
  }
  return result
}

async function getAllSponsorsAndPartners() {
  const [presentSponsors, presentPartners] = await Promise.all([
    mapSponsor(presentSponsorsInput),
    mapSponsor(presentPartnersInput),
  ])
  return { presentSponsors, presentPartners }
}

const { presentSponsors, presentPartners } = await getAllSponsorsAndPartners()

// const pastSponsors = [
//   { name: 'Electronic Arts', logo: ea, link: 'https://www.ea.com' },
//   { name: 'Digital Ocean', logo: digitalOcean, link: 'https://www.digitalocean.com' },
//   { name: 'Balsamiq', logo: balsamiq, link: 'https://balsamiq.com' },
//   { name: 'RBC', logo: rbc, link: 'https://www.rbc.com' },
//   { name: '1Password', logo: onePassword, link: 'https://1password.com' },
//   { name: 'Bloomberg', logo: bloomberg, link: 'https://www.bloomberg.com' },
//   { name: 'GitHub', logo: github, link: 'https://github.com' },
//   { name: 'March Networks', logo: marchNetworks, link: 'https://www.marchnetworks.com' },
//   { name: 'MLH', logo: mlh, link: 'https://mlh.io' },
//   { name: '.TECH Domains', logo: techDomains, link: 'https://get.tech' },
//   { name: 'Wolfram', logo: wolfram, link: 'https://www.wolfram.com' },
// ]

const sponsorshipText = [
  { content: 'cuHacking has been supported by top tech companies, financial institutions, and local startups, all dedicated to fostering innovation.', isCallToAction: false },
  { content: 'Their resources and mentorship empower participants to create impactful solutions, making our event a success year after year.', isCallToAction: false },
  { content: '', isCallToAction: false },
  { content: 'Empower tomorrow\'s tech leaders with your support — become a sponsor and drive innovation forward', isCallToAction: true },
]

export const SPONSORSHIP_CONSTANTS = {
  TEXT: sponsorshipText,
  SPONSORS: presentSponsors,
  PARTNERS: presentPartners,
}
