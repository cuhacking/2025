import type { Meta, StoryObj } from '@storybook/react'
import { Callout } from 'fumadocs-ui/components/callout'

const meta: Meta<typeof Callout> = {
  title: '📚 Docs Site/Callout',
  parameters: {
    layout: 'centered',
  },
  component: Callout,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['info', 'warn', 'error'],
      control: { type: 'select' },
      description: 'The type of callout (info, warn, error)',
    },
    title: {
      control: 'text',
      description: 'The title of the callout',
    },
    children: {
      control: 'text',
      description: 'The content inside the callout',
    },
  },
}

export default meta

type Story = StoryObj<typeof Callout>

export const Default: Story = {
  args: {
    title: 'Callout',
    type: 'info',
    children: 'This is a default callout. You can edit this text.',
  },
  render: args => (
    <div>
      <Callout {...args}>{args.children}</Callout>
    </div>
  ),
}

export const Warn: Story = {
  args: {
    title: 'Warn Callout',
    type: 'warn',
    children: 'This is a warning callout. Pay attention to this message.',
  },
  render: args => (
    <div>
      <Callout {...args}>{args.children}</Callout>
    </div>
  ),
}

export const Error: Story = {
  args: {
    title: 'Error Callout',
    type: 'error',
    children: 'This is an error callout. Action may be required.',
  },
  render: args => (
    <div>
      <Callout {...args}>{args.children}</Callout>
    </div>
  ),
}
