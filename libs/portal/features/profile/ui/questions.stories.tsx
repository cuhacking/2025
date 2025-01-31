import type { Meta, StoryObj } from '@storybook/react';
import { createRemixStub } from '@remix-run/testing';
import { Questions } from './questions';

const meta: Meta<typeof Questions> = {
  title: '🌀 Portal/Profile/Questions',
  component: Questions,
  tags: ['autodocs'],
  decorators: [
    (story) => {
      const remixStub = createRemixStub([
        {
          path: '/*',
          action: () => ({ redirect: '/' }),
          loader: () => ({ redirect: '/' }),
          Component: () => story(),
        },
      ]);

      return remixStub({ initialEntries: ['/'] });
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default View of the Component
export const Default: Story = {};
