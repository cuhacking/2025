import github_green from '@cuhacking/ui/assets/icons/socials/github-green-1.svg';
import instagram_green from '@cuhacking/ui/assets/icons/socials/instagram-green-1.svg';
import linkedin_green from '@cuhacking/ui/assets/icons/socials/linkedin-green-1.svg';
import linktree_green from '@cuhacking/ui/assets/icons/socials/linktree-green-1.svg';
import email_green from '@cuhacking/ui/assets/icons/socials/email-green-1.svg';
import discord_green from '@cuhacking/ui/assets/icons/socials/discord-green-1.svg';
import docs_green from '@cuhacking/ui/assets/icons/socials/docs-green-1.svg';
import figma_green from '@cuhacking/ui/assets/icons/socials/figma-green-1.svg';
import github_white from '@cuhacking/ui/assets/icons/socials/github-white-1.svg';
import instagram_white from '@cuhacking/ui/assets/icons/socials/instagram-white-1.svg';
import linkedin_white from '@cuhacking/ui/assets/icons/socials/linkedin-white-1.svg';
import linktree_white from '@cuhacking/ui/assets/icons/socials/linktree-white-1.svg';
import email_white from '@cuhacking/ui/assets/icons/socials/email-white-1.svg';
import discord_white from '@cuhacking/ui/assets/icons/socials/discord-white-1.svg';
import docs_white from '@cuhacking/ui/assets/icons/socials/docs-white-1.svg';
import figma_white from '@cuhacking/ui/assets/icons/socials/figma-white-1.svg';
import arrow from '@cuhacking/ui/assets/icons/arrow-1.svg';
import hamburger from '@cuhacking/ui/assets/icons/hamburger-1.svg';
import calendar from '@cuhacking/ui/assets/icons/calendar-1.svg';
import chevron_down from '@cuhacking/ui/assets/icons/chevron-down-1.svg';
import chevron_up from '@cuhacking/ui/assets/icons/chevron-up-1.svg';
import link from '@cuhacking/ui/assets/icons/link-1.svg';
import phone from '@cuhacking/ui/assets/icons/phone-1.svg';
import minus from '@cuhacking/ui/assets/icons/minus-1.svg';
import plus from '@cuhacking/ui/assets/icons/plus-1.svg';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from './icon';

const meta = {
  title: 'cuHacking Design System/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Array of icons for simplicity
const icons = [
  { src: github_green, alt: 'GitHub Green' },
  { src: instagram_green, alt: 'Instagram Green' },
  { src: linkedin_green, alt: 'LinkedIn Green' },
  { src: linktree_green, alt: 'Linktree Green' },
  { src: email_green, alt: 'Email Green' },
  { src: discord_green, alt: 'Discord Green' },
  { src: docs_green, alt: 'Docs Green' },
  { src: figma_green, alt: 'Figma Green' },
  { src: github_white, alt: 'GitHub White' },
  { src: instagram_white, alt: 'Instagram White' },
  { src: linkedin_white, alt: 'LinkedIn White' },
  { src: linktree_white, alt: 'Linktree White' },
  { src: email_white, alt: 'Email White' },
  { src: discord_white, alt: 'Discord White' },
  { src: docs_white, alt: 'Docs White' },
  { src: figma_white, alt: 'Figma White' },
  { src: arrow, alt: 'Arrow' },
  { src: hamburger, alt: 'Hamburger' },
  { src: calendar, alt: 'Calendar' },
  { src: chevron_down, alt: 'Chevron Down' },
  { src: chevron_up, alt: 'Chevron Up' },
  { src: link, alt: 'Link' },
  { src: phone, alt: 'Phone' },
  { src: minus, alt: 'Minus' },
  { src: plus, alt: 'Plus' },
];

export const GitHubGreen: Story = {
  args: {
    media: { src: github_green.src, alt: 'GitHub Green' },
  },
};

export const InstagramGreen: Story = {
  args: {
    media: { src: instagram_green.src, alt: 'Instagram Green' },
  },
};

export const LinkedInGreen: Story = {
  args: {
    media: { src: linkedin_green.src, alt: 'LinkedIn Green' },
  },
};

export const LinktreeGreen: Story = {
  args: {
    media: { src: linktree_green.src, alt: 'Linktree Green' },
  },
};

export const EmailGreen: Story = {
  args: {
    media: { src: email_green.src, alt: 'Email Green' },
  },
};

export const DiscordGreen: Story = {
  args: {
    media: { src: discord_green.src, alt: 'Discord Green' },
  },
};

export const DocsGreen: Story = {
  args: {
    media: { src: docs_green.src, alt: 'Docs Green' },
  },
};

export const FigmaGreen: Story = {
  args: {
    media: { src: figma_green.src, alt: 'Figma Green' },
  },
};

export const GitHubWhite: Story = {
  args: {
    media: { src: github_white.src, alt: 'GitHub White' },
  },
};

export const InstagramWhite: Story = {
  args: {
    media: { src: instagram_white.src, alt: 'Instagram White' },
  },
};

export const LinkedInWhite: Story = {
  args: {
    media: { src: linkedin_white.src, alt: 'LinkedIn White' },
  },
};

export const LinktreeWhite: Story = {
  args: {
    media: { src: linktree_white.src, alt: 'Linktree White' },
  },
};

export const EmailWhite: Story = {
  args: {
    media: { src: email_white.src, alt: 'Email White' },
  },
};

export const DiscordWhite: Story = {
  args: {
    media: { src: discord_white.src, alt: 'Discord White' },
  },
};

export const DocsWhite: Story = {
  args: {
    media: { src: docs_white.src, alt: 'Docs White' },
  },
};

export const FigmaWhite: Story = {
  args: {
    media: { src: figma_white.src, alt: 'Figma White' },
  },
};

export const Arrow: Story = {
  args: {
    media: { src: arrow.src, alt: 'Arrow' },
  },
};

export const Hamburger: Story = {
  args: {
    media: { src: hamburger.src, alt: 'Hamburger' },
  },
};

export const Calendar: Story = {
  args: {
    media: { src: calendar.src, alt: 'Calendar' },
  },
};

export const ChevronDown: Story = {
  args: {
    media: { src: chevron_down.src, alt: 'Chevron Down' },
  },
};

export const ChevronUp: Story = {
  args: {
    media: { src: chevron_up.src, alt: 'Chevron Up' },
  },
};

export const Link: Story = {
  args: {
    media: { src: link.src, alt: 'Link' },
  },
};

export const Phone: Story = {
  args: {
    media: { src: phone.src, alt: 'Phone' },
  },
};

export const Minus: Story = {
  args: {
    media: { src: minus.src, alt: 'Minus' },
  },
};

export const Plus: Story = {
  args: {
    media: { src: plus.src, alt: 'Plus' },
  },
};
