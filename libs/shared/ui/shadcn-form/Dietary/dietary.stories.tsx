import type { Meta, StoryObj } from '@storybook/react'
import { DietaryForm } from './dietary'

const meta = {
  title: 'Portal/Forms/Dietary',
  component: DietaryForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    id: 'forms-portal-dietary',
  },
  args: {
    className: 'w-full max-w-3xl',
    isLoading: false,
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
  },
} satisfies Meta<typeof DietaryForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const PreFilled: Story = {
  args: {
    defaultValues: {
      mealRestriction: 'vegetarian',
      allergy: 'peanuts',
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
    className: 'max-w-2xl bg-slate-50 p-8 rounded-lg',
  },
}
