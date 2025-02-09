import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

const meta: Meta<typeof Popover> = {
  title: 'Shadcn-ui/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>This is a popover content.</p>
      </PopoverContent>
    </Popover>
  ),
}

export const AlignCenter: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent align="center">
        <p>This is a popover content.</p>
      </PopoverContent>
    </Popover>
  ),
}
