import type { Meta, StoryObj } from '@storybook/react'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './command'

const meta: Meta<typeof CommandDialog> = {
  title: 'cuHacking Design System/CommandDialog',
  component: CommandDialog,
  args: {
    open: true,
  },
}

export default meta

type Story = StoryObj<typeof CommandDialog>

export const Default: Story = {
  render: (args: any) => {
    return (
      <CommandDialog {...args}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandGroup>
            <CommandItem>Item 1</CommandItem>
            <CommandItem>Item 2</CommandItem>
            <CommandItem>Item 3</CommandItem>
          </CommandGroup>
          <CommandEmpty>No items found</CommandEmpty>
        </CommandList>
      </CommandDialog>
    )
  },
}

export const Empty: Story = {
  render: (args: any) => {
    return (
      <CommandDialog {...args}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No options available</CommandEmpty>
        </CommandList>
      </CommandDialog>
    )
  },
}

export const WithShortcuts: Story = {
  render: (args: any) => {
    return (
      <CommandDialog {...args}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandGroup>
            <CommandItem>Item 1</CommandItem>
            <CommandItem>Item 2</CommandItem>
            <CommandItem>Item 3</CommandItem>
          </CommandGroup>
          <CommandEmpty>No items found</CommandEmpty>
        </CommandList>
        <CommandShortcut>Ctrl + S</CommandShortcut>
      </CommandDialog>
    )
  },
}
