/* eslint-disable node/prefer-global/process */
import type { MetaFunction } from 'remix'
import { Home } from '@website/pages/home'
import { stringify } from 'qs-esm'

export const meta: MetaFunction = () => {
  return [
    { title: 'Home | cuHacking' },
    {
      property: 'og:title',
      content: 'Home | cuHacking',
    },
    {
      name: 'description',
      content: 'cuHacking\'s hackathon is coming to you March 14th',
    },
  ]
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
    'CPRT',
    'Level One',
    'Carleton Impact',
    'Netlify',
    'Nx',
  ],
}

async function fetchSponsorData(name: string) {
  try {
    const query = {
      name: {
        equals: name,
      },
    }
    const stringifiedQuery = stringify({ where: query }, { addQueryPrefix: true })

    const response = await fetch(`https://axiom.cuhacking.ca/api/brands${stringifiedQuery}`)
    /* const response = await fetch(`http://localhost:8000/api/brands${stringifiedQuery}`) */

    if (!response.ok) {
      throw new Error(`Failed to fetch sponsor data: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()

    if (!data?.docs?.length) {
      console.warn(`No data found for sponsor: ${name}`)
    }

    return {
      name,
      logo: data?.docs?.[0]?.symbol?.url || '',
      link: data?.docs?.[0]?.domain ? `https://${data?.docs?.[0]?.domain}` : '',
    }
  }
  catch (error) {
    console.error(`Error fetching sponsor ${name}:`, error)
    return { name, logo: '', link: '' }
  }
}

async function mapSponsor(tiers) {
  const result = {}
  for (const [tierName, sponsorNames] of Object.entries(tiers)) {
    result[tierName] = await Promise.all(sponsorNames.map(fetchSponsorData))
  }
  return result
}

export async function loader() {
  try {
    const [sponsors, partners] = await Promise.all([
      mapSponsor(presentSponsorsInput),
      mapSponsor(presentPartnersInput),
    ])

    const sponsorshipData = {
      text: [
        { content: 'cuHacking has been supported by top tech companies, financial institutions, and local startups, all dedicated to fostering innovation.', isCallToAction: false },
        { content: 'Their resources and mentorship empower participants to create impactful solutions, making our event a success year after year.', isCallToAction: false },
        { content: '', isCallToAction: false },
        { content: 'Empower tomorrow\'s tech leaders with your support — become a sponsor and drive innovation forward', isCallToAction: true },
      ],
      sponsors,
      partners,
    }

    const apiUrl = process.env.NODE_ENV === 'development' ? 'localhost:8000' : 'axiom.cuhacking.ca'
    const websiteContentRequest = await fetch(`http://${apiUrl}/api/globals/2025`)
    const websiteContentResponse = await websiteContentRequest.json()
    const websiteContent = websiteContentResponse.website

    return { sponsorshipData, ...websiteContent }
  }
  catch (error) {
    console.error('Error loading sponsorship data:', error)
    return { text: [], sponsors: {}, partners: {} }
  }
}

export default function Index() {
  return (
    <Home />
  )
}
