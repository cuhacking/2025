import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import ContactPage from './contact'

export default {
  title: 'Components/Forms/ContactForm',
  component: ContactPage,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#121212' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
} as Meta

const Template: StoryFn = () => (
  <div className="w-[800px]">
    <ContactPage />
  </div>
)

export const Default = Template.bind({})
Default.storyName = 'Contact Form'
Default.parameters = {
  docs: {
    description: {
      story: 'Default contact form with email and message fields',
    },
  },
}

export const Loading = Template.bind({})
Loading.storyName = 'Loading State'
Loading.args = {
  isLoading: true,
}
Loading.parameters = {
  docs: {
    description: {
      story: 'Contact form in loading state while submitting',
    },
  },
}

export const Success = Template.bind({})
Success.storyName = 'Success State'
Success.args = {
  isSuccess: true,
}
Success.parameters = {
  docs: {
    description: {
      story: 'Contact form after successful submission',
    },
  },
}

export const Error = Template.bind({})
Error.storyName = 'Error State'
Error.args = {
  error: 'Failed to send message. Please try again.',
}
Error.parameters = {
  docs: {
    description: {
      story: 'Contact form showing error state',
    },
  },
}

export const Mobile = Template.bind({})
Mobile.storyName = 'Mobile View'
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
  docs: {
    description: {
      story: 'Contact form in mobile viewport',
    },
  },
}

// Component Variants
export const WithoutLogo = Template.bind({})
WithoutLogo.storyName = 'Without Logo'
WithoutLogo.args = {
  showLogo: false,
}
WithoutLogo.parameters = {
  docs: {
    description: {
      story: 'Contact form without the cuHacking logo',
    },
  },
}

export const WithPrefilledEmail = Template.bind({})
WithPrefilledEmail.storyName = 'Prefilled Email'
WithPrefilledEmail.args = {
  defaultEmail: 'test@cuhacking.com',
}
WithPrefilledEmail.parameters = {
  docs: {
    description: {
      story: 'Contact form with pre-filled email field',
    },
  },
}

// Interaction test stories
export const ValidationError = Template.bind({})
ValidationError.storyName = 'Validation Error'
ValidationError.args = {
  validationErrors: {
    email: 'Please enter a valid email address',
    message: 'Message is required',
  },
}
ValidationError.parameters = {
  docs: {
    description: {
      story: 'Contact form displaying validation errors',
    },
  },
}

export const CharacterCount = Template.bind({})
CharacterCount.storyName = 'Character Count'
CharacterCount.args = {
  showCharacterCount: true,
  maxLength: 500,
}
CharacterCount.parameters = {
  docs: {
    description: {
      story: 'Contact form with character count in message field',
    },
  },
}
