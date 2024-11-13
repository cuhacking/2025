import type { Meta, StoryObj } from '@storybook/react'
import { EIcons } from '@cuhacking/utils/enums/icons'
import TerminalText from './terminal-text'

const meta = {
  title: 'cuHacking Design System/Terminal Text',
  component: TerminalText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: (
      <>
        <p>Hello, cuHacking enjoyers!!</p>
      </>
    ),
    className: 'px-3 py-1',
    callToAction: false,
  },
  argTypes: {
    icon: {
      options: Object.values(EIcons),
      control: { type: 'select' },
    },
    children: {
      control: {
        disable: true,
      },
    },
    callToAction: {
      control: { type: 'check' },
    },
  },
} satisfies Meta<typeof TerminalText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const ExtraLarge: Story = { args: { className: 'text-lg md:text-xl lg:text-3xl', callToAction: false } }
export const CallToAction: Story = { args: { className: 'text-lg', callToAction: true } }
export const Arrow: Story = { args: { className: 'text-lg', callToAction: false, icon: EIcons.ARROW } }
export const Link: Story = { args: { className: 'text-lg', callToAction: false, icon: EIcons.LINK } }
export const Calendar: Story = { args: { className: 'text-lg', callToAction: false, icon: EIcons.CALENDAR } }
export const ChevronDown: Story = { args: { className: 'text-lg', callToAction: false, icon: EIcons.CHEVRON_DOWN } }
export const Phone: Story = { args: { className: 'text-lg', callToAction: false, icon: EIcons.PHONE } }
export const ChevronUp: Story = { args: { className: 'text-lg', callToAction: false, icon: EIcons.CHEVRON_UP } }
