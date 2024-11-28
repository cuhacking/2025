import balsamiq from '@cuhacking/shared/assets/logos/sponsors/balsamiq.white.svg'
import digitalOcean from '@cuhacking/shared/assets/logos/sponsors/digital-ocean.white.svg'
import ea from '@cuhacking/shared/assets/logos/sponsors/ea.white.svg'
import rbc from '@cuhacking/shared/assets/logos/sponsors/rbc.white.svg'

const presentSponsors = [
  { name: 'RBC', logo: rbc, link: 'https://www.rbc.com' },
  { name: 'Balsamiq', logo: balsamiq, link: 'https://balsamiq.com' },
]

const pastSponsors = [
  { name: 'Electronic Arts', logo: ea, link: 'https://www.ea.com' },
  { name: 'Digital Ocean', logo: digitalOcean, link: 'https://www.digitalocean.com' },
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
