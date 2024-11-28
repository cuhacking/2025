import type { Meta, StoryObj } from '@storybook/react'
import { createRemixStub } from '@remix-run/testing'
import asciiLogo from '@website/assets/ascii-art/logos/cuhacking-1.svg'
import { Mission } from './mission'

const meta: Meta<typeof Mission> = {
  title: 'cuHacking Design System/Mission',
  component: Mission,
  tags: ['autodocs'],
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
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    logo: {
      control: 'text',
    },
  },
}

export default meta

type Story = StoryObj<typeof Mission>

export const Default: Story = { args: { logo: asciiLogo.src } }
