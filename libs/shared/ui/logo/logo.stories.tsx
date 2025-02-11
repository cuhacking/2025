import type { Meta, StoryObj } from '@storybook/react'
import { createRemixStub } from '@remix-run/testing'
import { Logo } from './logo'

const meta = {
  title: 'cuHacking Design System/Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (story) => {
      const remixStub = createRemixStub([
        {
          path: '/*',
          action: () => ({ redirect: '/' }),
          loader: () => ({ redirect: '/' }),
          Component: () => story(),
        },
      ])

      return remixStub({ initialEntries: ['/'] })
    },
  ],
  args: {
    link: '/',
    hasAnimation: false,
    hasWordmark: false,
  },
  argTypes: {
    hasAnimation: { control: 'boolean' },
    hasWordmark: { control: 'boolean' },
    link: { control: 'text' },
  },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Wordmark: Story = {
  args: {
    hasWordmark: true,
  },
}
export const NoAnimationWithWordmark: Story = {
  args: {
    hasAnimation: false,
    hasWordmark: true,
  },
}

export const Animation: Story = {
  args: {
    hasAnimation: true,
    hasWordmark: true,
  },
}

export const CustomLink: Story = {
  args: {
    link: 'https://cuhacking.ca',
  },
}
