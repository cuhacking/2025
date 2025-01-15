import type { Meta, StoryObj } from '@storybook/react'
import { User } from 'lucide-react'
import React from 'react'
import { FUIFeatureSectionWithCards } from './feature'

const meta: Meta<typeof FUIFeatureSectionWithCards> = {
  title: '🚜 Farm UI/Feature',
  parameters: {
    layout: 'centered',
  },
  component: FUIFeatureSectionWithCards,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    features: {
      control: { type: 'object' },
    },
  },
}

export default meta

type Story = StoryObj<typeof FUIFeatureSectionWithCards>
export const UserExperience: Story = {
  args: {
    title: 'User Experience',
    description: 'The platform should reliably meet the needs of hackers, judges, sponsors, and organizers.',
    features: [
      {
        title: 'Hackers',
        desc: 'Hackers should be able to easily navigate the platform, find the information they need, and submit their projects.',
        icon: <User />,
      },
      {
        title: 'Judges',
        desc: 'Judges should be able to easily view and evaluate projects, and provide feedback to hackers.',
        icon: <User />,
      },
      {
        title: 'Sponsors',
        desc: 'Sponsors should be able to easily view and support projects, and engage with hackers.',
        icon: <User />,
      },
    ],
  },
  render: args => (
    <div>
      <FUIFeatureSectionWithCards {...args} />
    </div>
  ),
}
