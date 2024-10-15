import { createMDXSource } from 'fumadocs-mdx'
import { loader } from 'fumadocs-core/source'
import { createElement } from 'react'

import {
  GitPullRequestCreateArrow as ContributionGuidelinesIcon,
  Dock as HomeIcon,
  BookOpenText as KnowledgeBaseIcon,
  Library as LibrariesIcon,
  Layers as ToolsIcon,
  icons,
} from 'lucide-react'
import { map } from '../../../.map'

export const pages = [
  {
    title: 'Home',
    description: 'Leave none behind regardless of our development cost.',
    url: '',
    icon: HomeIcon,
  },
  {
    title: 'Tools Overview',
    description: 'Explore the suite of software we use.',
    url: 'tools-overview',
    icon: ToolsIcon,
  },
  {
    title: 'Contribution Guidelines',
    description: 'Understand our collaboration process.',
    url: 'contribution-guidelines',
    icon: ContributionGuidelinesIcon,
  },
  {
    title: 'Knowledge Base',
    description: 'Curated resources to accelerate your learning.',
    url: 'knowledge-base',
    icon: KnowledgeBaseIcon,
  },
  {
    title: 'Libraries',
    description: 'Libraries within this monorepo used within the applications.',
    url: 'libraries',
    icon: LibrariesIcon,
  },
]

export const { getPage, getPages, pageTree } = loader({
  baseUrl: '/',
  rootDir: 'docs',
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      // return createElement(HomeIcon)
      return
    }

    if (icon in icons)
      return createElement(icons[icon as keyof typeof icons])
  },

  source: createMDXSource(map),
})
