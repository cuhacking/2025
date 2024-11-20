import type { Meta, StoryObj } from '@storybook/react'
import balsamiq from '@cuhacking/shared/assets/logos/sponsors/balsamiq.white.svg'
import digitalOcean from '@cuhacking/shared/assets/logos/sponsors/digital-ocean.white.svg'
import ea from '@cuhacking/shared/assets/logos/sponsors/ea.white.svg'
import rbc from '@cuhacking/shared/assets/logos/sponsors/rbc.white.svg'
import { SponsorshipPresenter } from './sponsorship.presenter'

const presentSponsors = [
  { name: 'RBC', logo: rbc.src, link: 'https://www.rbc.com' },
  { name: 'Balsamiq', logo: balsamiq.src, link: 'https://balsamiq.com' },
]

const pastSponsors = [
  { name: 'Electronic Arts', logo: ea.src, link: 'https://www.ea.com' },
  { name: 'Digital Ocean', logo: digitalOcean.src, link: 'https://www.digitalocean.com' },
]

const sponsorshipText = [
  { content: 'Support the brightest minds shaping the future.', isCallToAction: false },
  { content: 'Join us as a sponsor today!', isCallToAction: true },
]

const meta: Meta<typeof SponsorshipPresenter> = {
  title: 'Website/Sponsorship',
  component: SponsorshipPresenter,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    text: sponsorshipText,
    sponsors: {
      present: presentSponsors,
      past: pastSponsors,
    },
  },
  argTypes: {
    text: {
      control: 'object',
    },
    sponsors: {
      control: 'object',
    },
  },
}

export default meta

type Story = StoryObj<typeof SponsorshipPresenter>

export const Default: Story = {}

export const PresentOnly: Story = {
  args: {
    sponsors: {
      present: presentSponsors,
      past: [],
    },
  },
}

export const PastOnly: Story = {
  args: {
    sponsors: {
      present: [],
      past: pastSponsors,
    },
  },
}
