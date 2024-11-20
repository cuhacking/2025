import type { Meta, StoryObj } from '@storybook/react'
import type { Event } from '../../types/event'
import { createRemixStub } from '@remix-run/testing'
import { EventPresenter } from './event-presenter'

const meta: Meta<typeof EventPresenter> = {
  title: 'Website/Event/Event Presenter',
  component: EventPresenter,
  tags: ['autodocs'],
  decorators: [
    (story) => {
      const remixStub = createRemixStub([
        {
          path: '/*',
          action: () => ({ redirect: '/' }),
          loader: () => ({ redirect: '/' }),
          Component: () => story(),
        },
      ])

      return remixStub({ initialEntries: ['/'] })
    },
  ],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof meta>

const mockEvents: Event[] = [
  {
    title: 'Hackathon 2024',
    description: 'Join us for a 48-hour hackathon with exciting challenges, workshops, and prizes.',
    date: new Date('2024-03-15T10:00:00'),
    link: 'https://example.com/register/hackathon2024',
    status: 'past',
  },
  {
    title: 'Tech Talks Series',
    description: 'Learn about the latest trends in AI, Web3, and Cybersecurity from industry experts.',
    date: new Date('2024-04-20T13:30:00'),
    link: 'https://example.com/register/techtalks',
    status: 'past',

  },
  {
    title: 'Women in Tech Meetup',
    description: 'An inclusive meetup to connect, network, and learn from women in technology.',
    date: new Date('2024-05-05T17:00:00'),
    link: 'https://example.com/register/womenintech',
    status: 'past',

  },
  {
    title: 'Startup Pitch Night',
    description: 'Watch startups pitch their ideas to investors and network with founders and entrepreneurs.',
    date: new Date('2024-06-10T18:00:00'),
    link: 'https://example.com/register/startuppitchnight',
    status: 'upcoming',

  },
]

export const Default: Story = {
  args: {
    events: mockEvents,
  },
}
