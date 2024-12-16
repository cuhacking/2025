import type { Meta, StoryObj } from '@storybook/react'
import { TypeTable } from 'fumadocs-ui/components/type-table'

const meta: Meta<typeof TypeTable> = {
  title: '📚 Docs Site/Type Table',
  component: TypeTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'object',
      description: 'The object describing the types and their properties',
      defaultValue: {
        percentage: {
          description: 'The percentage of scroll position to display the roll button',
          type: 'number',
          default: 0.2,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof TypeTable>

export const Default: Story = {
  args: {
    type: {
      percentage: {
        description: 'The percentage of scroll position to display the roll button',
        type: 'number',
        default: 0.2,
      },
    },
  },
  render: args => <TypeTable {...args} />,
}
