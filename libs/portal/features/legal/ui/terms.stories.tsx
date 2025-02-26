import type { Meta, StoryObj } from '@storybook/react'
import { Legal } from './terms'

const meta = {
  title: '🌀 Portal/Legal',
  component: Legal,
  tags: ['autodocs'],
  args: {
  },
  argTypes: {
  },
} satisfies Meta<typeof Legal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
