import type { Meta, StoryObj } from '@storybook/react'
import { EmergencyContacts } from './emergency-contact'

const meta = {
  title: 'Forms/Portal/Emergency Contacts',
  component: EmergencyContacts,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    id: 'forms-emergency-contacts',
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    className: 'w-full max-w-3xl',
    isLoading: false,
    defaultValues: {
      fullName: '',
      relationship: '',
      phoneNumber: '',
    },
  },
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to style the form wrapper',
    },
    isLoading: {
      control: 'boolean',
      description: 'Controls the loading state of the form',
    },
    onSubmitSuccess: {
      action: 'form submitted',
    },
    defaultValues: {
      control: 'object',
      description: 'Default values for the emergency contact fields',
    },
  },
} satisfies Meta<typeof EmergencyContacts>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const PreFilled: Story = {
  args: {
    defaultValues: {
      fullName: 'Sarah Johnson',
      relationship: 'Spouse',
      phoneNumber: '+1 (555) 123-4567',
    },
  },
}

export const Loading: Story = {
  args: {
    isLoading: true,
  },
}

export const CustomStyling: Story = {
  args: {
    className: 'max-w-2xl bg-slate-950 p-8 rounded-lg',
  },
}
