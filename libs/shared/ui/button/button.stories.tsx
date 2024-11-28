import type { Meta, StoryObj } from '@storybook/react'
import {
  ChevronRightIcon,
  EnvelopeOpenIcon,
  ReloadIcon,
} from '@radix-ui/react-icons'
import { fn } from '@storybook/test'
import React from 'react'
import { Button } from './button'
// HALP: REANME WEBSITE-LIB TO LIBS/WEBSITE
const meta = {
  title: 'cuHacking Design System/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Button',
    variant: 'default',
    onClick: fn(),
  },
  argTypes: {
    variant: {
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'ghost',
        'link',
      ],
      control: { type: 'select' },
    },
    asChild: {
      control: {
        disable: true,
      },
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Destructive: Story = { args: { variant: 'destructive' } }
export const Outline: Story = { args: { variant: 'outline' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const Link: Story = { args: { variant: 'link' } }

export const Icon: Story = {
  args: {
    variant: 'outline',
    size: 'icon',
    children: (
      <ChevronRightIcon className="size-4" />
    ),
  },
  argTypes: {
    children: { control: { disable: true } },
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <EnvelopeOpenIcon className="mr-2 size-4" />
        Login with Email
      </>
    ),
  },
  argTypes: {
    children: { control: { disable: true } },
  },
}

export const Loading: Story = {
  args: {
    variant: 'secondary',
    disabled: true,
    children: (
      <>
        <ReloadIcon className="mr-2 size-4 animate-spin" />
        Please wait
      </>
    ),
  },
  argTypes: {
    children: { control: { disable: true } },
  },
}
