import { composePlugins, withNx } from '@nx/next'
import createMDX from 'fumadocs-mdx/config'
import { fileGenerator, remarkDocGen, remarkInstall } from 'fumadocs-docgen'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypeMermaid from 'rehype-mermaid'

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 */
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    // svgr: false,
    // reactStrictMode: true,
    // output: 'standalone',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // eslint-disable-next-line node/prefer-global/process
        hostname: process.env.ALLOWED_IMAGE_HOSTNAME || 'avatars.githubusercontent.com',
      },
    ],
  },
}

const withMDX = createMDX({
  rootContentPath: './src/content',
  mdxOptions: {
    lastModifiedTime: 'git',
    remarkPlugins: [
      [remarkMath],
      [remarkInstall, { Tabs: 'InstallTabs' }],
      [remarkDocGen, { generators: [fileGenerator()] }],
    ],
    rehypePlugins: v => [
      rehypeKatex,
      [rehypeMermaid, { strategy: 'inline-svg' }],
      ...v,
    ],
  },
})

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
]

export default composePlugins(...plugins)(withMDX(nextConfig))
