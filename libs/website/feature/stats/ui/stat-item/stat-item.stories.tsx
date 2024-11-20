import type { Meta, StoryObj } from '@storybook/react'
import SchoolImg from '@website/assets/ascii-art/50-schools-1.svg'
import ProjectsImg from '@website/assets/ascii-art/60-projects-1.svg'
import AttendeesImg from '@website/assets/ascii-art/300-attendees-1.svg'
import ApplicationsImg from '@website/assets/ascii-art/1000-applications-1.svg'

import { StatItem } from './stat-item'

const meta: Meta<typeof StatItem> = {
  title: 'Website/Stats/Stat Item',
  component: StatItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    imgUrl: ProjectsImg.src,
    title: 'Projects',
  },
  argTypes: {
    imgUrl: {
      table: {
        disable: true,
      },
    },
    title: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Projects: Story = { args: { title: 'Projects', imgUrl: ProjectsImg.src } }
export const School: Story = { args: { title: 'Schools', imgUrl: SchoolImg.src } }
export const Applications: Story = { args: { title: 'Application', imgUrl: ApplicationsImg.src } }
export const Attendees: Story = { args: { title: 'Attendees', imgUrl: AttendeesImg.src } }
