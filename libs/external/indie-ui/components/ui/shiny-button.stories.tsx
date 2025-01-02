import type { Meta, StoryObj } from '@storybook/react'
import { ShinyButton } from './shiny-button'

const meta: Meta<typeof ShinyButton> = {
  title: '🐺 Indie UI/Shiny Button',
  parameters: {
    layout: 'centered',
  },
  component: ShinyButton,
  tags: ['autodocs'],
  args: {
    text: 'Hello, World',
  },
  argTypes: {
    text: {
      control: 'text',
    },

  },
}

export default meta

type Story = StoryObj<typeof ShinyButton>
export const Default: Story = {}
