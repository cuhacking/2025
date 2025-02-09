import type { Meta, StoryObj } from '@storybook/react'
import { LoginCallToAction } from './call-to-action'

const meta = {
  title: '🌀 Portal/Signin/Call To Action',
  component: LoginCallToAction,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LoginCallToAction>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
