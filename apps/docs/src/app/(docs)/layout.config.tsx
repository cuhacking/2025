import Image from 'next/image'

import type { DocsLayoutProps } from 'fumadocs-ui/layout'
import type { HomeLayoutProps } from 'fumadocs-ui/home-layout'

import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle'

import {
  Figma as BrandIcon,
  /* Code as ESLintIcon, */
  Smartphone as HackerPortalIcon,
  Instagram as InstagramIcon,
  AppWindowMac as LandingPageIcon,
  Linkedin as LinkedinIcon,
  Trees as LinktreeIcon,
  SquareKanban as ProjectBoardIcon,
  /* Drill as UtilsIcon, */
} from 'lucide-react'

import { SiStorybook as StorybookIcon } from 'react-icons/si'
import { AiOutlineDiscord as DiscordIcon } from 'react-icons/ai'

import { pageTree, pages } from './source'

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (
    /* TODO: use cms */
      <>
        <Image
          src="/cuhacking-logo.svg"
          alt="cuHacking logo"
          height={24}
          width={24}
        />
        <span className="text-lg font-bold">cuHacking DevDocs</span>
      </>
    ),
    url: '/',
  },
  /* TODO: use cms  */
  links: [
    {
      text: 'Website',
      url: 'https://cuhacking.ca',
      icon: <LandingPageIcon />,
    },
    {
      text: 'Portal',
      url: 'https://portal.cuhacking.ca',
      icon: <HackerPortalIcon />,
    },
    {
      text: 'Design',
      url: 'https://www.figma.com/design/wc1JOWR48tBNkjcjwY3AzB/%E2%8C%A8%EF%B8%8F-cuHacking-Design-System?node-id=0-1&t=YTR1ET4Qw1wG1cjz-1',
      icon: <StorybookIcon />,
    },
    /* {
     *   text: 'Utils (Coming Soon)',
     *   url: 'https://utils.cuhacking.ca',
     *   icon: <UtilsIcon />,
     * },
     * {
     *   text: 'ESLint (Coming Soon)',
     *   url: 'https://eslint.cuhacking.ca/rules',
     *   icon: <ESLintIcon />,
     * }, */
    {
      text: 'Discord',
      url: 'https://discord.gg/h2cQqF9aZf',
      icon: <DiscordIcon />,
      type: 'icon',
    },
    {
      text: 'Instagram',
      url: 'https://www.instagram.com/cuhacking/',
      icon: <InstagramIcon />,
      type: 'icon',
    },
    {
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/company/cuhacking/',
      icon: <LinkedinIcon />,
      type: 'icon',
    },
    {
      text: 'Linktree',
      url: 'https://linktr.ee/cuhacking_',
      icon: <LinktreeIcon />,
      type: 'icon',
    },
    {
      text: 'Brand',
      url: 'https://www.figma.com/design/wc1JOWR48tBNkjcjwY3AzB/%E2%8C%A8%EF%B8%8F-cuHacking-Design-System?node-id=0-1&t=YTR1ET4Qw1wG1cjz-1',
      icon: <BrandIcon />,
      type: 'icon',
    },
    {
      text: 'Project Board',
      url: 'https://github.com/orgs/cuhacking/projects/4',
      icon: <ProjectBoardIcon />,
      type: 'icon',
    },
  ],
  githubUrl: 'https://github.com/cuhacking/2025',
}

// home layout configuration
export const homeOptions = {
  ...baseOptions,
}

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  sidebar: {
    banner: (
      <RootToggle
        options={pages.map(page => ({
          title: page.title,
          description: page.description,
          url: `/${page.url}`,
          icon: (
            <page.icon
              className="size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
              style={{
                backgroundColor: `hsl(var(--primary)/.3)`,
                color: `hsl(var(--accent-foreground))`,
              }}
            />
          ),
        }))}
      />
    ),
  },
  tree: pageTree,
}
