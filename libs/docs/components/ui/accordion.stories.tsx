import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion'

const meta: Meta<typeof Accordion> = {
  title: '📚 Docs Site/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the accordion',
    },
    asChild: {
      control: 'boolean',
      description: 'Renders the component as a child element',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the accordion',
      defaultValue: false,
    },
  },
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  args: {
    title: 'What is Fumadocs?',
    asChild: false,
    disabled: false,
  },
  render: args => (
    <Accordions>
      <Accordion {...args}>Fumadocs is a documentation UI toolkit.</Accordion>
      <Accordion title="What do we love?" {...args}>
        We love clean and efficient documentation!
      </Accordion>
    </Accordions>
  ),
}

export const Disabled: Story = {
  args: {
    title: 'What is Fumadocs?',
    asChild: false,
    disabled: true,
  },
  render: args => (
    <Accordions>
      <Accordion {...args}>This accordion is disabled.</Accordion>
    </Accordions>
  ),
}

export const Multiple: Story = {
  args: {
    title: 'What is Fumadocs?',
    asChild: false,
    disabled: false,
  },
  render: args => (
    <Accordions type="multiple">
      <Accordion {...args}>Fumadocs is a documentation UI toolkit.</Accordion>
      <Accordion title="What do we love?" {...args}>
        We love clean and efficient documentation!
      </Accordion>
    </Accordions>
  ),
}
