import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from '@cuhacking/shared/types/auth'
import { createRemixStub } from '@remix-run/testing'
import { AuthenticationField } from './authentication-field'

const meta = {
  title: '🌀 Portal/AuthenticationField',
  component: AuthenticationField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    provider: Provider.google,
    link: 'https://google.com',
  },
  decorators: [
    (story) => {
      const remixStub = createRemixStub([
        {
          path: '/*',
          action: () => ({ redirect: '/' }),
          loader: () => ({ redirect: '/' }),
          Component: () => story(),
        },
      ])

      return remixStub({ initialEntries: ['/'] })
    },
  ],
  argTypes: {
    provider: {
      options: [
        'google',
        'discord',
        'instagram',
        'behance',
        'linkedin',
        'github',
      ],
      control: { type: 'select' },
    },
    userTag: { control: 'text' },
  },
} satisfies Meta<typeof AuthenticationField>

export default meta
type Story = StoryObj<typeof meta>

export const Google: Story = { args: { provider: Provider.google } }
export const Discord: Story = { args: { provider: Provider.discord } }
export const Instagram: Story = { args: { provider: Provider.instagram } }
export const Behance: Story = { args: { provider: Provider.behance } }
export const LinkedIn: Story = { args: { provider: Provider.linkedIn } }
export const GitHub: Story = { args: { provider: Provider.gitHub } }

export const WithUserTag: Story = {
  args: {
    provider: Provider.gitHub,
    userTag: '@octocat',
  },
}
