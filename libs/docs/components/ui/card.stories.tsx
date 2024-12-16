import type { Meta, StoryObj } from '@storybook/react'
import { Card } from 'fumadocs-ui/components/card'
import { HomeIcon } from 'lucide-react'

const meta: Meta<typeof Card> = {
  title: '📚 Docs Site/Card',
  parameters: {
    layout: 'centered',
  },
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'boolean',
      description: 'Toggle to show or hide the icon',
    },
    title: {
      control: 'text',
      description: 'The title of the card',
    },
    description: {
      control: 'text',
      description: 'The description text for the card',
    },
    href: {
      control: 'text',
      description: 'The destination URL when the card is clicked',
    },
  },
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    title: 'Title',
    description: 'Description',
    href: 'https://fumadocs.vercel.app/docs/ui/mdx/card#card',
    icon: true,
  },
  render: args => (
    <div>
      <Card
        {...args}
        icon={args.icon ? <HomeIcon /> : undefined}
      />
    </div>
  ),
}

export const WithoutHref: Story = {
  args: {
    title: 'Title',
    description: 'This card does not have a destination URL',
    icon: true,
  },
  render: args => (
    <div>
      <Card
        {...args}
        icon={args.icon ? <HomeIcon /> : undefined}
      />
    </div>
  ),
}
