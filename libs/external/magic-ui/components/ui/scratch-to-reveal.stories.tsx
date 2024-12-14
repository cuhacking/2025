import type { Meta, StoryObj } from '@storybook/react'
import { ScratchToReveal } from './scratch-to-reveal'

const meta: Meta = {
  title: 'Magic UI/Scratch Reveal',
  component: ScratchToReveal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'The class name for the component',
      defaultValue: 'flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100',
    },
    width: {
      control: 'number',
      description: 'Width of the scratch container.',
      defaultValue: 250,
    },
    height: {
      control: 'number',
      description: 'Height of the scratch container.',
      defaultValue: 250,
    },
    minScratchPercentage: {
      control: 'number',
      description: 'Minimum percentage of scratched area to be considered as completed (Value between 0 and 100).',
      defaultValue: 70,
    },
    onComplete: {
      action: 'onComplete',
      description: 'Callback triggered when scratching is completed.',
    },
    gradientColors: {
      control: 'array',
      description: 'Gradient colors for the scratch effect.',
      defaultValue: ['#A97CF8', '#F38CB8', '#FDCC92'],
    },
  },
}

export default meta

type Story = StoryObj

export const Default: Story = {
  args: {
    width: 250,
    height: 250,
    minScratchPercentage: 70,
    className: 'flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100',
    gradientColors: ['#A97CF8', '#F38CB8', '#FDCC92'],
  },
  render: args => (
    <ScratchToReveal
      width={args.width}
      height={args.height}
      minScratchPercentage={args.minScratchPercentage}
      className={args.className}
      gradientColors={args.gradientColors}
      onComplete={() => {
        // Handle completion logic
      }}
    >
      <p className="text-9xl">😎</p>
    </ScratchToReveal>
  ),
}
