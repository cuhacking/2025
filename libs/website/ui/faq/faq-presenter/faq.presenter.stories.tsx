import type { Meta, StoryObj } from '@storybook/react'
import { FAQPresenter } from './faq.presenter'

const meta = {
  title: 'Website/FAQ Presenter',
  component: FAQPresenter,
  tags: ['autodocs'],
  args: {
    questions: [
      {
        question: 'What is an FAQ?',
        answers: ['FAQ stands for Frequently Asked Questions.'],
      },
      {
        question: 'How do I use Storybook?',
        answers: [
          'Storybook is a development environment for UI components.',
          'Use it with Chromatic for a collaborative experience with your design team',
        ],
      },
    ],
  },
  argTypes: {
    questions: {
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof FAQPresenter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
