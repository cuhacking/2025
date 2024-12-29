import type { Meta, StoryObj } from '@storybook/react'
import { NeonGradientCard } from './neon-gradient-card'

const defaultChildren = (
  <div className="w-full h-auto overflow-hidden rounded-[calc(19px-3px)] bg-transparent">
    <img
      className="block w-full h-full object-cover m-0 p-0"
      src="https://github.com/user-attachments/assets/1a0a5cb7-95fd-49ce-a8b5-4742cccb1cc8"
      alt="2025 Docs Site Cover"
    />
  </div>
)

const meta: Meta<typeof NeonGradientCard> = {
  title: '📚 Docs Site/Neon Gradient Card',
  component: NeonGradientCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: defaultChildren,
    borderSize: 5,
    borderRadius: 20,
    neonColors: {
      firstColor: '#ff00aa',
      secondColor: '#00FFF1',
    },
    className: '',
  },
  argTypes: {
    'children': {
      control: false, // Disable control for this prop
    },
    'borderSize': {
      control: { type: 'number', min: 1, max: 20 },
    },
    'borderRadius': {
      control: { type: 'number', min: 0, max: 50 },
    },
    'neonColors': {
      control: 'object',
    },
    'neonColors.firstColor': {
      control: 'color',
    },
    'neonColors.secondColor': {
      control: 'color',
    },
    'className': {
      control: 'text',
    },
  },
}

export default meta

type Story = StoryObj<typeof NeonGradientCard>

export const Default: Story = {}
