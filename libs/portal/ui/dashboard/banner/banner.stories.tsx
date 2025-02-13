import type { Meta, StoryObj } from '@storybook/react'
import { Banner } from './banner'

const meta = {
  title: '🌀 Portal/Banner',
  component: Banner,
  tags: ['autodocs'],
  args: {
    name: 'Hasith',
  },
  argTypes: {
    name: { control: 'text' },
  },
} satisfies Meta<typeof Banner>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
