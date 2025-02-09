import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

const meta = {
  title: 'cuHacking Design System/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: <AvatarImage src="https://via.placeholder.com/40" alt="User" />,
  },
  argTypes: {},
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithImage: Story = {
  args: {
    children: <AvatarImage src="https://via.placeholder.com/40" alt="User" />,
  },
}

export const WithFallback: Story = {
  args: {
    children: <AvatarFallback>JD</AvatarFallback>,
  },
}
