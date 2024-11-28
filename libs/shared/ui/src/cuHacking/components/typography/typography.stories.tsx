import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './typgoraphy'

const meta: Meta<typeof Typography> = {
  title: 'cuHacking Design System/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    variant: 'h1',
    children: 'This is a headline',
    className: '',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'paragraph-sm',
          'paragraph-base',
          'paragraph-xs',
        ],
      },
      table: {
        type: { summary: 'Typography variant' },
        defaultValue: { summary: 'h1' },
      },
    },
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    className: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Typography>

function createVariantStory(variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph-base' | 'paragraph-sm' | 'paragraph-xs'): Story {
  return {
    args: {
      variant,
      children: `This is ${variant} typography`,
      className: '',
    },
  }
}

export const H1: Story = createVariantStory('h1')
export const H2: Story = createVariantStory('h2')
export const H3: Story = createVariantStory('h3')
export const H4: Story = createVariantStory('h4')
export const H5: Story = createVariantStory('h5')
export const H6: Story = createVariantStory('h6')
export const ParagraphBase: Story = createVariantStory('paragraph-base')
export const ParagraphSm: Story = createVariantStory('paragraph-sm')
export const ParagraphXs: Story = createVariantStory('paragraph-xs')
