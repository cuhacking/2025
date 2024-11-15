import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from './separator'

const meta: Meta<typeof Separator> = {
  title: 'cuHacking Design System/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    orientation: 'horizontal',
    decorative: true,
    className: '',
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    decorative: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = { args: { orientation: 'horizontal', className: 'bg-blue-500 w-[150px]' } }
export const Vertical: Story = { args: { orientation: 'vertical', className: 'bg-red-500 h-[100px]' } }
export const Decorative: Story = { args: { decorative: true, orientation: 'horizontal', className: 'w-[200px]' } }
export const NonDecorative: Story = { args: { decorative: false, orientation: 'horizontal', className: 'bg-gray-500 w-[100px]' } }
