import { remarkMermaid } from '@theguild/remark-mermaid'
import { fileGenerator, remarkDocGen } from 'fumadocs-docgen'
import { defineConfig, defineDocs } from 'fumadocs-mdx/config'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
})

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMath, remarkMermaid, [remarkDocGen, { generators: [fileGenerator()] }]],
    // Place it at first so that it won't be changed by syntax highlighter
    rehypePlugins: v => [rehypeKatex, ...v],
  },
},
)
