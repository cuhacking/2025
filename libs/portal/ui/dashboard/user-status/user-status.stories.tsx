import type { Meta, StoryObj } from '@storybook/react'
import { UserStatus } from './user-status'

const meta = {
  title: '🌀 Portal/User Status',
  component: UserStatus,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
  },
  argTypes: {
  },
} satisfies Meta<typeof UserStatus>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
