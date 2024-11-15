import type { Meta, StoryObj } from '@storybook/react'
import type { IEvent } from 'libs/website/feature/events/models/event'
import EventContainer from './event.container'

const meta: Meta<typeof EventContainer> = {
  title: 'cuHacking Design System/Event Container',
  component: EventContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof meta>

const mockEvents: IEvent[] = [
  {
    title: 'Hackathon 2024',
    description: 'Join us for a 48-hour hackathon with exciting challenges, workshops, and prizes.',
    date: new Date('2024-03-15T10:00:00'),
    registrationLink: 'https://example.com/register/hackathon2024',
  },
  {
    title: 'Tech Talks Series',
    description: 'Learn about the latest trends in AI, Web3, and Cybersecurity from industry experts.',
    date: new Date('2024-04-20T13:30:00'),
    registrationLink: 'https://example.com/register/techtalks',
  },
  {
    title: 'Women in Tech Meetup',
    description: 'An inclusive meetup to connect, network, and learn from women in technology.',
    date: new Date('2024-05-05T17:00:00'),
    registrationLink: 'https://example.com/register/womenintech',
  },
  {
    title: 'Startup Pitch Night',
    description: 'Watch startups pitch their ideas to investors and network with founders and entrepreneurs.',
    date: new Date('2024-06-10T18:00:00'),
    registrationLink: 'https://example.com/register/startuppitchnight',
  },
]

export const Default: Story = {
  args: {
    events: mockEvents,
  },
}
