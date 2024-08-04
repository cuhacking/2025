/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import createMDX from 'fumadocs-mdx/config'
import { fileGenerator, remarkDocGen, remarkInstall } from 'fumadocs-docgen'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

await import('./src/env.js')

const withMDX = createMDX({
  rootContentPath: './src/content',
  mdxOptions: {
    lastModifiedTime: 'git',
    remarkPlugins: [
      [remarkMath],
      [remarkInstall, { Tabs: 'InstallTabs' }],
      [remarkDocGen, { generators: [fileGenerator()] }],
    ],
    rehypePlugins: v => [rehypeKatex, ...v],
  },
})

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'standalone',
}

export default withMDX(config)
