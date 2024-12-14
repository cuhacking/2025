import type { Meta, StoryObj } from '@storybook/react'
import { RainbowButton } from './rainbow-button'

const meta: Meta = {
  title: 'Magic UI/Rainbow Button',
  component: RainbowButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
}

export default meta

type Story = StoryObj

export const Default: Story = {
}
