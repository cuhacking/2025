import type { ReactNode } from 'react'
import codeofconduct from '@cuhacking/shared/assets/logos/codeofconduct/code-of-conduct.svg'
import netlify_logo from '@cuhacking/shared/assets/logos/sponsors/netlify-white.svg'
import Link from 'fumadocs-core/link'
import { Callout } from 'fumadocs-ui/components/callout'
import { Step, Steps } from 'fumadocs-ui/components/steps'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import defaultComponents from 'fumadocs-ui/mdx'
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page'
import { notFound } from 'next/navigation'
import { source } from '../../../source'

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page)
    notFound()

  const MDX = page.data.body

  const footer = (
    <>
      <a
        href="https://github.com/cuhacking/2025/graphs/contributors"
        target="_blank"
        rel="noreferrer noopener"
        className="text-xs text-center"
      >
        Made with 💚 for Hackers by Hackers
      </a>
      <a href="https://netlify.com" target="_blank" rel="noopener noreferrer" className="flex hover:scale-110 duration-300 transition text-cyan-300 hover:text-green-500 items-center gap-x-3">
        Powered by
        <img className="w-24" src={netlify_logo.src} />
      </a>
      <a href="https://github.com/cuhacking/2025/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer" className="flex hover:scale-110 duration-300 transition text-white-300 hover:text-green-500 items-center gap-x-1 text-sm underline">
        View our Code of Conduct
        <img className="w-8" src={codeofconduct.src} />
      </a>
    </>
  )
  /* eslint-disable react/no-nested-components */
  /* THIS IS AUTO GENERATED */
  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      /* lastUpdate={new Date()} */
      editOnGithub={{
        owner: 'cuhacking',
        repo: '2025',
        sha: 'main',
        path: `apps/docs/content/docs/${page.file.path}`,
      }}
      tableOfContent={{
        footer,
      }}
      tableOfContentPopover={{ footer }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{
          ...defaultComponents,
          Tab,
          Tabs,

          InstallTabs: ({
            items,
            children,
          }: {
            items: string[]
            children: ReactNode
          }) => (
            <Tabs items={items} id="package-manager">
              {children}
            </Tabs>
          ),
          Step,
          Steps,
          Callout,
          Link,
        }}
        />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page)
    notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  }
}
