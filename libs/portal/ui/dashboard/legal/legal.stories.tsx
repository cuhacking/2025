import type { Meta, StoryObj } from '@storybook/react'
import { Legal } from './legal'

const meta = {
  title: '🌀 Portal/Legals',
  component: Legal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
  },
  argTypes: {
  },
} satisfies Meta<typeof Legal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
