import type { Meta, StoryObj } from '@storybook/react'
import { ShinyButton } from './shiny-button'

const meta: Meta<typeof ShinyButton> = {
  title: '🐺 Indie UI/Shiny Button',
  parameters: {
    layout: 'centered',
  },
  component: ShinyButton,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    // title: {
    //   control: { type: 'text' },
    // },
    // description: {
    //   control: { type: 'text' },
    // },
    // icon: {
    //   control: { type: 'object' },
    // },
    // index: {
    //   control: { type: 'number' },
    // },
  },
}

export default meta

type Story = StoryObj<typeof ShinyButton>
export const UserExperience: Story = {
  args: {
    // title: 'User Experience',
    // description: 'The platform should reliably meet the needs of hackers, judges, sponsors, and organizers.',
    // icon: <User />,
    // index: 1,
  },
  render: args => (
    <div>
      <ShinyButton {...args} />
    </div>
  ),
}
