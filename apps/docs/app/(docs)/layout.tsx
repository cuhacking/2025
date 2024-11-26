import type { ReactNode } from 'react'
/* import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle' */
import { source } from '../../source'
/* https://fumadocs.vercel.app/docs/ui/blocks/layout#notebook */
/* import { DocsLayout } from 'fumadocs-ui/layouts/docs' */
import { DocsLayout } from 'fumadocs-ui/layouts/notebook'
import { baseOptions } from '../layout.config'
import 'katex/dist/katex.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
    /* sidebar={{
     *   banner: (
     *     <RootToggle
     *       options={pages.map(page => ({
     *         title: page.title,
     *         description: page.description,
     *         url: `/${page.url}`,
     *         icon: (
     *           <page.icon
     *             className="size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
     *             style={{
     *               backgroundColor: `hsl(var(--primary)/.3)`,
     *               color: `hsl(var(--accent-foreground))`,
     *             }}
     *           />
     *         ),
     *       }))}
     *     />
     *   ),
     * }} */
    >
      {children}
    </DocsLayout>
  )
}
