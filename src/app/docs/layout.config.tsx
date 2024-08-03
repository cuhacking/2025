import type { DocsLayoutProps } from 'fumadocs-ui/layout'
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle'
import { Github, Laptop as HackerPortalIcon, Bird as LandingPageIcon } from 'lucide-react'
import Image from 'next/image'
import type { HomeLayoutProps } from 'fumadocs-ui/home-layout'
import { pageTree, pages } from '@/app/docs/source'

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (
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
    url: '/docs',
  },
  githubUrl: 'https://github.com/cuhacking/hackathon',
  links: [
    {
      type: 'menu',
      text: 'Landing Page',
      icon: <LandingPageIcon />,
      items: [
        {
          text: 'Website',
          url: 'https://www.cuhacking.ca',
          icon: <LandingPageIcon />,
        },
        {
          text: 'Source',
          url: 'https://www.cuhacking.ca',
          icon: <Github />,
        },
      ],
    },
    {
      type: 'menu',
      text: 'Hacker Portal',
      icon: <HackerPortalIcon />,
      items: [
        {
          text: 'App',
          url: '/',
          icon: <HackerPortalIcon />,
        },
        {
          text: 'Source',
          url: 'https://github.com/cuhacking/hackathon',
          icon: <Github />,
        },
        {
          text: 'Project Board',
          url: 'https://github.com/orgs/cuhacking/projects/4',
          icon: <Github />,
        },
      ],
    },
  ],
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
          url: `/docs/${page.url}`,
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
