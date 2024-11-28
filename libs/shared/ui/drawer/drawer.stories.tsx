import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from '../button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './drawer'

const meta = {
  title: 'cuHacking Design System/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    shouldScaleBackground: true,
  },
  argTypes: {
    shouldScaleBackground: {
      control: { type: 'boolean' },
    },
    direction: {
      control: { type: 'select', options: ['left', 'right', 'top', 'bottom'] },
    },
  },
} satisfies Meta<typeof Drawer>

export default meta

type Story = StoryObj<typeof Drawer>

// Default story
export const Default: Story = {
  render: args => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="default">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>
            This is a description of the drawer's content.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 py-2">
          <p>Here is some drawer content!</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="secondary">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const NestedDrawer: Story = {
  render: args => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="default">Open Parent Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Parent Drawer</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 py-2">
          <p>Content of the parent drawer.</p>
          <Drawer {...args}>
            <DrawerTrigger asChild>
              <Button variant="secondary">Open Nested Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Nested Drawer</DrawerTitle>
              </DrawerHeader>
              <div className="px-4 py-2">
                <p>This is a nested drawer inside the parent drawer.</p>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="secondary">Close Nested Drawer</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="default">Close Parent Drawer</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const RightDrawer: Story = {
  render: args => (
    <Drawer {...args} direction="right">
      <DrawerTrigger asChild>
        <Button variant="default">Open Parent Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="h-full bg-g-nav-drawer-background backdrop-blur-[100px]">
        <DrawerHeader>
          <DrawerTitle>Parent Drawer</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 py-2">
          <p>Content of the parent drawer.</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="default">Close Parent Drawer</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}
