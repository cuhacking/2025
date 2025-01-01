// @ts-check

// import { composePlugins, withNx } from '@nx/next'

import { createMDX } from 'fumadocs-mdx/next'

const defaultImageHostnames = [
  'avatars.githubusercontent.com',
  'raw.githubusercontent.com',
  'ccss.carleton.ca',
  'www.scesoc.ca',
  'trunkbaseddevelopment.com',
  'feature-sliced.design',
  'diataxis.fr',
  'conventionalcomments.org',
  'hairuochen.notion.site',
  'lh3.googleusercontent.com',
  'res.cloudinary.com',
  'github.com',
  'automate.org',
  'assets.ubuntu.com',
  'freebsd.org',
  'caksoylar.github.io',
  'precondition.github.io',
  'keymapdb.com',
  '12factor.net',
]

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 */
// const nextConfig = {
// nx: {
//   // Set this to true if you would like to use SVGR
//   // See: https://github.com/gregberge/svgr
//   svgr: false,
// },
// }

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  images: {
    remotePatterns: defaultImageHostnames.map(hostname => ({
      protocol: 'https',
      // eslint-disable-next-line node/prefer-global/process
      hostname: process.env.ALLOWED_IMAGE_HOSTNAME || hostname,
    })),
  },
}

const withMDX = createMDX({})

// const plugins = [
//   // Add more Next.js plugins to this list if needed.
//   withNx,
//   withMDX,
// ]

// export default composePlugins(...plugins)(nextConfig)

export default withMDX(config)
// export default withMDX(nextConfig);
