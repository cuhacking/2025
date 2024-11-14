import type { Meta, StoryObj } from '@storybook/react'
import { EIcons } from '@cuhacking/utils/enums/icons'
import Icon from './icon'

const meta = {
  title: 'cuHacking Design System/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    variant: EIcons.ARROW,
    className: 'object-fit w-[30px]',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.values(EIcons),
    },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Arrow: Story = { args: { variant: EIcons.ARROW } }
export const Link: Story = { args: { variant: EIcons.LINK } }
export const Calendar: Story = { args: { variant: EIcons.CALENDAR } }
export const ChevronDown: Story = { args: { variant: EIcons.CHEVRON_DOWN } }
export const Phone: Story = { args: { variant: EIcons.PHONE } }
export const ChevronUp: Story = { args: { variant: EIcons.CHEVRON_UP } }
export const CustomClasses: Story = { args: { variant: EIcons.ARROW, className: 'w-[60px]' } }
