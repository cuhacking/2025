import type { Meta, StoryObj } from '@storybook/react'
import { Registration } from './registration'

const meta = {
  title: '🌀 Portal/Registration',
  component: Registration,
  tags: ['autodocs'],
  args: {
  },
  argTypes: {
  },
} satisfies Meta<typeof Registration>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
