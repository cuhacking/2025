import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button' // Importing the Button component from the same folder
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
  title: 'Shadcn-ui/Drawer',
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
      control: 'boolean',
      description: 'Determines whether the background scales when the drawer is open.',
    },
  },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>
            This is a description of the drawer content.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>Some main content here.</p>
        </div>
        <DrawerFooter>
          <Button variant="outline">Cancel</Button>
          <DrawerClose asChild>
            <Button>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const Nested: Story = {
  render: args => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button>Open Main Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Main Drawer</DrawerTitle>
          <DrawerDescription>
            This is the main drawer containing nested content.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 space-y-4">
          <p>Main drawer content here.</p>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Nested Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Nested Drawer</DrawerTitle>
                <DrawerDescription>
                  This is the content of the nested drawer.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p>Some nested content here.</p>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button>Close Nested Drawer</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>Close Main Drawer</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}
