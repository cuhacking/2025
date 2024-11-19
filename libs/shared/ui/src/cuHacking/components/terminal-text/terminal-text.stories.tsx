import type { Meta, StoryObj } from '@storybook/react'
import { EIcons } from '@cuhacking/utils/enums/icons'
import arrow from '@cuhacking/ui/assets/icons/arrow-1.svg';
import hamburger from '@cuhacking/ui/assets/icons/hamburger-1.svg';
import calendar from '@cuhacking/ui/assets/icons/calendar-1.svg';
import chevron_down from '@cuhacking/ui/assets/icons/chevron-down-1.svg';
import chevron_up from '@cuhacking/ui/assets/icons/chevron-up-1.svg';
import link from '@cuhacking/ui/assets/icons/link-1.svg';
import phone from '@cuhacking/ui/assets/icons/phone-1.svg';
import minus from '@cuhacking/ui/assets/icons/minus-1.svg';
import plus from '@cuhacking/ui/assets/icons/plus-1.svg';
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
export const Arrow: Story = { args: { className: 'text-lg', callToAction: false, icon: { src: arrow.src, alt: 'Arrow'} } }
export const Link: Story = { args: { className: 'text-lg', callToAction: false, icon: { src: link.src, alt: 'Link'} } }
export const Calendar: Story = { args: { className: 'text-lg', callToAction: false, icon: { src: calendar.src, alt: 'Calendar'} } }
export const ChevronDown: Story = { args: { className: 'text-lg', callToAction: false, icon: { src: chevron_down.src, alt: 'Chevron Down'}} }
export const Phone: Story = { args: { className: 'text-lg', callToAction: false, icon: { src: phone.src, alt: 'Phone'}} }
export const ChevronUp: Story = { args: { className: 'text-lg', callToAction: false, icon: { src: chevron_up.src, alt: 'Chevron Up'}} }
