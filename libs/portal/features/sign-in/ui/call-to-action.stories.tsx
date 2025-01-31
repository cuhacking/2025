import type { Meta, StoryObj } from '@storybook/react'
import { SignInCallToAction } from './call-to-action'

const meta = {
  title: '🌀 Portal/Signin/Call To Action',
  component: SignInCallToAction,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SignInCallToAction>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
