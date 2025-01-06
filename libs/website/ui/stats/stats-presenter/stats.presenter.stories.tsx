import type { Meta, StoryObj } from '@storybook/react'
import SchoolImg from '@website/assets/ascii-art/50-schools-1.svg'
import ProjectsImg from '@website/assets/ascii-art/60-projects-1.svg'
import AttendeesImg from '@website/assets/ascii-art/300-attendees-1.svg'
import ApplicationsImg from '@website/assets/ascii-art/1000-applications-1.svg'
import { StatPresenter } from './stats.presenter'

const meta: Meta<typeof StatPresenter> = {
  title: 'Website/Stats/Stat Presenter',
  component: StatPresenter,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    stats: [
      { imgUrl: ProjectsImg.src, title: 'Projects' },
      { imgUrl: SchoolImg.src, title: 'Schools' },
      { imgUrl: ApplicationsImg.src, title: 'Applications' },
      { imgUrl: AttendeesImg.src, title: 'Attendees' },
    ],
  },
  argTypes: {
    stats: {
      control: {
        type: 'object',
      },
      table: {
        type: { summary: 'Array<{ imgUrl: string, title: string }>' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
