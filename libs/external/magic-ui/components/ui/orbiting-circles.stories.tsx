import type { Meta, StoryObj } from '@storybook/react'
import { Icons } from './icons'
import { OrbitingCircles } from './orbiting-circles'

const meta: Meta = {
  title: '🪄 Magic UI/Orbiting Circles',
  component: OrbitingCircles,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: false,
      description: 'The class name for the component',
      defaultValue: '',
    },
    children: {
      control: false, // Disable controls for children since they are JSX nodes
      description: 'The children nodes of the component',
    },
    reverse: {
      control: 'boolean',
      description: 'If true, the animation plays in reverse',
      defaultValue: false,
    },
    duration: {
      control: 'number',
      description: 'The duration of the animation in seconds',
      defaultValue: 20,
    },
    delay: {
      control: 'number',
      description: 'The delay before the animation starts in seconds',
      defaultValue: 10,
    },
    radius: {
      control: 'number',
      description: 'The radius of the orbit in pixels',
      defaultValue: 50,
    },
  },
}

export default meta

type Story = StoryObj

export const Default: Story = {
  args: {
    className: 'size-[30px] border-none bg-transparent',
    duration: 20,
    delay: 10,
    radius: 80,
    reverse: false,
  },
  render: args => (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Circles
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className={args.className}
        duration={args.duration}
        delay={args.delay}
        radius={args.radius}
        reverse={args.reverse}
      >
        <Icons.whatsapp />
      </OrbitingCircles>
      <OrbitingCircles
        className={args.className}
        duration={args.duration}
        delay={20} // Overridden delay
        radius={args.radius}
        reverse={args.reverse}
      >
        <Icons.notion />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className={args.className}
        duration={args.duration}
        delay={args.delay}
        radius={190} // Overridden radius
        reverse // Overridden reverse
      >
        <Icons.googleDrive />
      </OrbitingCircles>
      <OrbitingCircles
        className={args.className}
        duration={args.duration}
        delay={20} // Overridden delay
        radius={190} // Overridden radius
        reverse // Overridden reverse
      >
        <Icons.gitHub />
      </OrbitingCircles>
    </div>
  ),
}
