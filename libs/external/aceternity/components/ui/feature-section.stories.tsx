import type { Meta, StoryObj } from '@storybook/react'
import { User } from 'lucide-react'
import { Feature } from './feature-section'

const meta: Meta<typeof Feature> = {
  title: '✨ Aceternity/Feature',
  parameters: {
    layout: 'centered',
  },
  component: Feature,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    icon: {
      control: { type: 'object' },
    },
    index: {
      control: { type: 'number' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Feature>
export const UserExperience: Story = {
  args: {
    title: 'User Experience',
    description: 'The platform should reliably meet the needs of hackers, judges, sponsors, and organizers.',
    icon: <User />,
    index: 1,
  },
  render: args => (
    <div>
      <Feature {...args} />
    </div>
  ),
}
