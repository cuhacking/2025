import type { Media } from '@cuhacking/shared/types/media'
import type { Meta, StoryObj } from '@storybook/react'
import mlhBanner from '@cuhacking/shared/assets/logos/sponsors/mlh-banner.svg'

import { createRemixStub } from '@remix-run/testing'
import { Banner } from './banner'

const meta: Meta<typeof Banner> = {
  title: 'cuHacking Design System/Banner',
  component: Banner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
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
    banner: {
      control: { type: 'object' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Banner>

// Adjusted story with img src handling
export const Default: Story = {
  args: {
    banner: [
      {
        link: 'https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=black',
        media: { src: mlhBanner.src, alt: 'Major League Hacking 2025 Hackathon Season' } as Media,
        name: 'MLH Banner',
      },
    ],
  },
}
