import type { Meta, StoryObj } from '@storybook/react'
import asciiLogo from '@website/assets/ascii-art/logos/cuhacking-1.svg'
import { Mission } from './mission'

const meta: Meta<typeof Mission> = {
  title: 'cuHacking Design System/Mission',
  component: Mission,
  tags: ['autodocs'],
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

export const DefaultMission: Story = { args: { logo: asciiLogo.src } }
