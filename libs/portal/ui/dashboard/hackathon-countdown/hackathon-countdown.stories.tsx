import type { Meta, StoryObj } from '@storybook/react'
import { HackathonCountdown } from './hackathon-countdown'

const meta = {
  title: '🌀 Portal/Hackathon Countdown',
  component: HackathonCountdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    date: new Date(2025, 3, 14),
  },
  argTypes: {
    date: { control: 'date' },
  },
} satisfies Meta<typeof HackathonCountdown>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
