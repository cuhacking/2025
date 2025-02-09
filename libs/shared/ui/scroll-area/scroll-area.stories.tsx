import type { Meta, StoryObj } from '@storybook/react'
import { ScrollArea } from './scroll-area'

const meta: Meta<typeof ScrollArea> = {
  title: 'cuHacking Design System/ScrollArea',
  parameters: {
    layout: 'centered',
  },
  component: ScrollArea,
  argTypes: {
    className: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof ScrollArea>

export const VerticalScroll: Story = {
  args: {
    children: (
      <div className="h-[300px] w-[200px] overflow-auto">
        <div className="h-[500px] flex flex-col gap-3">
          <p>Scroll down to see more content...</p>
          <p>Scroll down to see more content...</p>
          <p>Scroll down to see more content...</p>
          <p>Scroll down to see more content...</p>
          <p>Scroll down to see more content...</p>
          <p>Scroll down to see more content...</p>
          <p>Scroll down to see more content...</p>
          <p>Scroll down to see more content...</p>
        </div>
      </div>
    ),
  },
}

export const HorizontalScroll: Story = {
  args: {
    children: (
      <div className="w-[300px] overflow-auto">
        <div className="w-[500px] flex gap-3">
          <p>Scroll left to see more content...</p>
          <p>Scroll left to see more content...</p>
          <p>Scroll left to see more content...</p>
          <p>Scroll left to see more content...</p>
        </div>
      </div>
    ),
  },
}
