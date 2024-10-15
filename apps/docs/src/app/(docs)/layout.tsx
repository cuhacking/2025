import './fumadocs.global.css'
import 'katex/dist/katex.css'
import { DocsLayout } from 'fumadocs-ui/layout'
import { HomeLayout } from 'fumadocs-ui/home-layout'
import type { ReactNode } from 'react'
import { RootProvider } from 'fumadocs-ui/provider'
import type { Metadata } from 'next'
import { docsOptions, homeOptions } from './layout.config'

export const metadata: Metadata = {
  title: 'cuHacking DevDocs',
  description:
    'Documentation platform for the cuHacking development team, serving as a central hub for all things development-related at cuHacking.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>
          <HomeLayout {...homeOptions}>
            <DocsLayout {...docsOptions}>{children}</DocsLayout>
          </HomeLayout>
        </RootProvider>
      </body>
    </html>
  )
}
