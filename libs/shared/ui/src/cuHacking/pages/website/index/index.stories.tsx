import type { Meta, StoryObj } from '@storybook/react';
import Index from './index';

const meta = {
  title: 'cuHacking Design System/Pages/Index',
  component: Index,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  render: () => <Index />,
};
