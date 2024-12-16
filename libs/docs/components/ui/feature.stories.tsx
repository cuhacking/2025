import type { Meta, StoryObj } from '@storybook/react'
import { FUIFeatureSectionWithCards } from './feature'

const meta: Meta<typeof FUIFeatureSectionWithCards> = {
  title: '📚 Docs Site/Feature',
  parameters: {
    layout: 'centered',
  },
  component: FUIFeatureSectionWithCards,
  tags: ['autodocs'],
  args: {},
  argTypes: {
  },
}

export default meta

type Story = StoryObj<typeof FUIFeatureSectionWithCards>
export const UserExperience: Story = {
  args: {
  },
  render: args => (
    <div>
      <FUIFeatureSectionWithCards {...args} />
    </div>
  ),
}
