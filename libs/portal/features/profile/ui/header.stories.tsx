import type { Meta, StoryObj } from '@storybook/react'
import { UserProfileStatus } from '@cuhacking/portal/types/user'
import { createRemixStub } from '@remix-run/testing'
import { Header } from './header'

const meta: Meta<typeof Header > = {
  title: '🌀 Portal/Profile/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    status: UserProfileStatus.notComplete,
    avatarUrl: '',
    firstName: 'Hasith',
    lastName: 'De Alwis',
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
}

export default meta
type Story = StoryObj<typeof meta>

export const InComplete: Story = {}
export const Complete: Story = {
  args: {
    firstName: 'Hasith',
    lastName: 'De Alwis',
    status: UserProfileStatus.complete,
  },
}
