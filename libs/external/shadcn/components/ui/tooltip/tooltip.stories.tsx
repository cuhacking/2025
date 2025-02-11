import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'

const meta = {
  title: 'shadcn-ui/Tooltip',
  component: TooltipContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    side: 'top',
    content: 'Tooltip content',
  },
  argTypes: {
    side: {
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'select' },
    },
    content: { control: 'text' },
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: any) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent side={args.side}>{args.content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const Bottom: Story = {
  args: {
    side: 'bottom',
  },
  render: Default.render,
}

export const Left: Story = {
  args: {
    side: 'left',
  },
  render: Default.render,
}

export const Right: Story = {
  args: {
    side: 'right',
  },
  render: Default.render,
}
