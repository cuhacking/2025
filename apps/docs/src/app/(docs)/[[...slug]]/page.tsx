import type { Metadata } from 'next'
import { DocsBody, DocsPage } from 'fumadocs-ui/page'
import { notFound } from 'next/navigation'
import { Edit } from 'lucide-react'
import packageJson from '../../../../../../package.json'
import { getPage, getPages } from '../source'

export default async function Page({
  params,
}: {
  params: { slug?: string[] }
}) {
  const page = getPage(params.slug)

  if (page == null) {
    notFound()
  }

  const MDX = page.data.exports.default
  const path = `src/content/(docs)/${page.file.path}`
  const gitHubRepoUrl = packageJson.repository.url.replace(/\.git$/, '') // Remove .git suffix

  const footer = (
    <>
      <a
        href={`${gitHubRepoUrl}/blob/main/apps/(docs)/${path}`}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-secondary/80 h-9 px-3 text-xs gap-1.5"
      >
        <Edit className="size-3" />
        Edit on GitHub
      </a>
      <a
        href={`${gitHubRepoUrl}/graphs/contributors`}
        target="_blank"
        rel="noreferrer noopener"
        className="text-xs text-center"
      >
        Made with 🩶 for Hackers by Hackers
      </a>
    </>
  )

  return (
    <DocsPage
      toc={page.data.exports.toc}
      lastUpdate={page.data.exports.lastModified}
      full={page.data.full}
      tableOfContent={{
        footer,
      }}
      tableOfContentPopover={{ footer }}
    >
      <DocsBody>
        <h1>{page.data.title}</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          {page.data.description}
        </p>
        <MDX />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return getPages().map(page => ({
    slug: page.slugs,
  }))
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug)

  if (page == null)
    notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata
}
