import type { DocsLayoutProps } from 'fumadocs-ui/layout'
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle'
import { Library as DocumentationPageIcon, Laptop as HackerPortalIcon, Bird as LandingPageIcon } from 'lucide-react'
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
      text: 'Docs Home',
      url: '/docs',
      icon: <DocumentationPageIcon />,
    },
    {
      text: 'Landing Page',
      url: 'https://www.cuhacking.ca',
      icon: <LandingPageIcon />,
    },
    {
      text: 'Hacker Portal',
      url: '/',
      icon: <HackerPortalIcon />,
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
