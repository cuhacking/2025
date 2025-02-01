import type { Meta, StoryObj } from '@storybook/react'
import { Stat } from './stat' // Adjust the import path as necessary

const meta = {
  title: '🌀 Portal/Stat',
  component: Stat,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Total Users',
    value: 1000,
    isHalf: false,
  },
  argTypes: {
    label: { control: 'text' },
    value: { control: 'number' },
  },
} satisfies Meta<typeof Stat>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
