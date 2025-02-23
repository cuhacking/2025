/* eslint-disable perfectionist/sort-imports */ // so that payload imports stay together
/* eslint-disable react/no-missing-key */
import config from '@payload-config'
import { getPayload } from 'payload'

import {
  Landmark as ArchitectureIcon,
  Figma as BrandIcon,
  Code as ESLintIcon,
  Map as GraphIcon,
  Smartphone as HackerPortalIcon,
  Instagram as InstagramIcon,
  AppWindowMac as LandingPageIcon,
  Linkedin as LinkedinIcon,
  Trees as LinktreeIcon,
  SquareKanban as ProjectBoardIcon,
  Drill as UtilsIcon,
} from 'lucide-react'
import { AiOutlineDiscord as DiscordIcon } from 'react-icons/ai'
import { SiStorybook as StorybookIcon } from 'react-icons/si'

import Image from 'next/image'

import type { HomeLayoutProps } from 'fumadocs-ui/layouts/home'
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

const ICONS = new Map<string, JSX.Element>([
  ['Website', <LandingPageIcon />],
  ['Portal', <HackerPortalIcon />],
  ['Design', <StorybookIcon />],
  ['Architecture', <ArchitectureIcon />],
  ['Graph', <GraphIcon />],
  ['Tooling', <UtilsIcon />],
  ['ESLint', <ESLintIcon />],
  ['Discord', <DiscordIcon />],
  ['Instagram', <InstagramIcon />],
  ['LinkedIn', <LinkedinIcon />],
  ['Linktree', <LinktreeIcon />],
  ['Brand', <BrandIcon />],
  ['Project Board', <ProjectBoardIcon />],
])

const ICON_TYPE_ENTRIES = new Set([
  'Instagram',
  'Linktree',
  'Discord',
  'LinkedIn',
  'Brand',
  'Project Board',
])

async function getBrandLinks() {
  const payload = await getPayload({ config })

  const query = await payload.find({
    collection: 'brands',
    where: { name: { equals: 'cuHacking' } },
    select: { links: true },

  })
  console.table(query.docs[0].links)

  if (!query.docs.length)
    return { linkMap: new Map(), nameMap: new Map() }

  const { linkMap, nameMap } = query.docs[0].links.reduce(
    (acc, { name, link }) => {
      acc.linkMap.set(name, link)
      acc.nameMap.set(name, name)
      return acc
    },
    { linkMap: new Map<string, string>(), nameMap: new Map<string, string>() },
  )

  return { linkMap, nameMap }
}

const { linkMap, nameMap } = await getBrandLinks()

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image src="/cuhacking_logo_gradient.svg" alt="cuHacking logo" height={24} width={24} />
        <span className="text-lg font-bold text-lime-500">
          cuHacking
          {' '}
          <span className="text-yellow-500">Dev</span>
          <span className="text-orange-500">Docs</span>
        </span>
      </>
    ),
    url: '/',
  },
  links: Array.from(nameMap).map(([key, text]) => ({
    text,
    label: `${text}-link`,
    url: linkMap.get(key),
    icon: ICONS.get(key),
    ...(ICON_TYPE_ENTRIES.has(key) ? { type: 'icon' } : {}),
  })),
  githubUrl: linkMap.get('GitHub'),
}

export const homeOptions: HomeLayoutProps = { ...baseOptions }
