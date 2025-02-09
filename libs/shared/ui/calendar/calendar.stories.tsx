import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from './calendar'

const meta: Meta<typeof Calendar> = {
  title: 'cuHacking Design System/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  args: {
    mode: 'single',
  },
}

export default meta

type Story = StoryObj<typeof Calendar>

export const Default: Story = {}

export const WithRangeSelection: Story = {
  args: {
    mode: 'range',
  },
}
