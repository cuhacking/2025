import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { TerminalText } from '../terminal-text/terminal-text'
import { GlassmorphicCard } from './glassmorphic-card'

const meta = {
  title: 'cuHacking Design System/Glassmorphic Card',
  component: GlassmorphicCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: (
      <>
        <TerminalText callToAction>
          Welcome to cuHacking
        </TerminalText>
        <TerminalText className="text-sm">
          This is our terminal text!
        </TerminalText>
      </>
    ),
    variant: 'default',
    className: 'px-1 py-2',
  },
  argTypes: {
    variant: {
      options: [
        'default',
        'info',
        'nested',
      ],
      control: { type: 'select' },
    },
    children: {
      control: {
        disable: true,
      },
    },
    className: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof GlassmorphicCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Nested: Story = { args: { variant: 'nested' } }
export const Info: Story = { args: { variant: 'info' } }
export const CustomStyles: Story = { args: { variant: 'default', className: 'px-3 py-4' } }
