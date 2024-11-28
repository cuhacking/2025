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
        answer: 'FAQ stands for Frequently Asked Questions.',
      },
      {
        question: 'How do I use Storybook?',
        answer: 'Storybook is a development environment for UI components.',
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

export const CustomFAQs: Story = {
  args: {
    questions: [
      {
        question: 'What is the purpose of an FAQ?',
        answer: 'The purpose of an FAQ is to provide quick answers to common questions.',
      },
      {
        question: 'How do I contribute to this project?',
        answer: 'You can contribute by opening pull requests and submitting issues.',
      },
    ],
  },
}

export const LongFAQs: Story = {
  args: {
    questions: [
      {
        question: 'What are the benefits of using this FAQ system in a project?',
        answer: 'This FAQ system allows users to find answers to their most frequently asked questions without needing to contact support or search through documentation.',
      },
      {
        question: 'How do I use the accordion component in my React project?',
        answer: 'You can use the accordion component by importing it from our component library, passing the necessary props such as "type" and "collapsible", and wrapping your FAQ items inside it.',
      },
    ],
  },
}
