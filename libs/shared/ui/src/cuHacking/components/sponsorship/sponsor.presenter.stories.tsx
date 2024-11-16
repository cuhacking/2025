import type { Meta, StoryObj } from '@storybook/react'
import balsamiq from '@cuhacking/ui/assets/logos/sponsors/balsamiq.white.svg'

import digitalOcean from '@cuhacking/ui/assets/logos/sponsors/digital-ocean.white.svg'
import ea from '@cuhacking/ui/assets/logos/sponsors/ea.white.svg'
import SponsorPresenter from './sponsor.presenter'
// Logos
import rbc from '@cuhacking/ui/assets/logos/sponsors/rbc.white.svg'

const meta = {
  title: 'cuHacking Design System/Sponsorship/Sponsor',
  component: SponsorPresenter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    sponsor: {
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof SponsorPresenter>

export default meta

type Story = StoryObj<typeof SponsorPresenter>

export const RBC: Story = {
  args: {
    sponsor: {
      name: 'RBC',
      logo: rbc.src,
      link: 'https://www.rbc.com',
    },
    isPresent: true,
  },
}
export const Balsamiq: Story = {
  args: {
    sponsor: {
      name: 'Balsamiq',
      logo: balsamiq.src,
      link: 'https://balsamiq.com',
    },
    isPresent: true,
  },
}
export const EA: Story = {
  args: {
    sponsor: {
      name: 'Electronic Arts',
      logo: ea.src,
      link: 'https://www.ea.com',
    },
    isPresent: false,
  },
}
export const DigitalOcean: Story = {
  args: {
    sponsor: {
      name: 'Digital Ocean',
      logo: digitalOcean.src,
      link: 'https://www.digitalocean.com',
    },
    isPresent: false,
  },
}
