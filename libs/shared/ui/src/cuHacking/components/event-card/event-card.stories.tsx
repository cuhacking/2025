import type { Meta, StoryObj } from '@storybook/react'
import type { IEvent } from '../../../../../../website/feature/events/models/event'
import EventCard from './event-card'

const meta: Meta<typeof EventCard> = {
  title: 'cuHacking Design System/Event Card',
  component: EventCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    event: {
      date: new Date(),
      title: 'Sample Event Title',
      description: 'This is a description for a sample event.',
      registrationLink: 'https://cuhacking.ca',
    } as IEvent,
  },
  argTypes: {
    event: {
      control: 'object',
      description: 'Event object containing date, title, and description.',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const ComputerVisionEvent: Story = {
  args: {
    event: {
      date: new Date('2023-09-15'),
      title: 'Computer Vision',
      description: 'Learn about computer vision and how it can be used to solve real-world problems.',
      registrationLink: 'https://cuhacking.ca',
    },
  },
}
export const CustomClasses: Story = {
  args: {
    event: {
      date: new Date(),
      title: 'Event with a Long Description',
      description: 'This description is much longer to test the text wrapping behavior in the card layout. It should wrap across multiple lines if necessary.',
      registrationLink: 'https://cuhacking.ca',
    },
    className: 'max-w-[100px]',
  },
}
