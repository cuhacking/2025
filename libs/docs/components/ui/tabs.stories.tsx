import type { Meta, StoryObj } from '@storybook/react'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'

const meta: Meta<typeof Tabs> = {
  title: '📚 Docs Site/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    items: {
      control: 'array',
      description: 'The list of tab items',
      defaultValue: ['Javascript', 'Rust', 'Typescript'],
    },
    defaultIndex: {
      control: 'number',
      description: 'The default active tab index',
      defaultValue: 0,
    },
    persist: {
      control: 'boolean',
      description: 'Persist active tab state in localStorage',
      defaultValue: false,
    },
    groupId: {
      control: 'text',
      description: 'The group id for persistent tabs (used as localStorage key)',
    },
  },
}

export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  args: {
    items: ['Javascript', 'Rust', 'Typescript'],
    defaultIndex: 0,
  },
  render: args => (
    <Tabs items={args.items} defaultIndex={args.defaultIndex}>
      <Tab value="Javascript">Hello World in Javascript</Tab>
      <Tab value="Rust">Rust is fast</Tab>
      <Tab value="Typescript">Typescript is great for typing</Tab>
    </Tabs>
  ),
}

export const Persistent: Story = {
  args: {
    items: ['Javascript', 'Rust'],
    persist: true,
    groupId: 'language',
  },
  render: args => (
    <Tabs items={args.items} persist groupId={args.groupId}>
      <Tab value="Javascript">Value is shared! Try refreshing to see persistence.</Tab>
      <Tab value="Rust">Rust is fast and persistent!</Tab>
    </Tabs>
  ),
}

export const DefaultValue: Story = {
  args: {
    items: ['Javascript', 'Rust'],
    defaultIndex: 1,
  },
  render: args => (
    <Tabs items={args.items} defaultIndex={args.defaultIndex}>
      <Tab value="Javascript">Javascript is weird</Tab>
      <Tab value="Rust">Rust is fast</Tab>
    </Tabs>
  ),
}
