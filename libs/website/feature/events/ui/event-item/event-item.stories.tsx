import type { Meta, StoryObj } from '@storybook/react'
import { createRemixStub } from '@remix-run/testing'
import { EventItem } from './event-item'

const meta: Meta<typeof EventItem> = {
  title: 'Website/Event/Event Item',
  component: EventItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
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
  argTypes: {
    event: {
      control: 'object',
      description: 'Event object containing date, title, and description.',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const InProgress: Story = {
  args: {
    event: {
      date: new Date(),
      title: 'cuHacking 2025',
      description: 'cuHacking\' flagship hackathon',
      link: 'https://cuhacking.ca',
      status: 'in-progress',
    },
  },
}
export const Upcoming: Story = {
  args: {
    event: {
      date: new Date('2024-12-15'),
      title: 'Computer Vision',
      description: 'Learn about computer vision and how it can be used to solve real-world problems.',
      link: 'https://docs.cuhacking.ca',
      status: 'upcoming',
    },
  },
}

export const Past: Story = {
  args: {
    event: {
      date: new Date('2023-09-15'),
      title: 'An Old Event',
      description: 'A past event that was really cool and awesome, you totally should\'ve been there.',
      link: 'https://eslint.cuhacking.ca',
      status: 'upcoming',
    },
  },
}

export const CustomClasses: Story = {
  args: {
    event: {
      date: new Date(),
      title: 'A super fun event',
      description: 'This description is much longer to test the text wrapping behavior in the card layout. It should wrap across multiple lines if necessary.',
      link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      status: 'past',
    },
    className: 'max-w-[400px]]',
  },
}
