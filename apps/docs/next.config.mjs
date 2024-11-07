import { composePlugins, withNx } from '@nx/next'
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX(
);

/** @type {import('next').NextConfig} */
const config = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
    reactStrictMode: true,
    output: 'standalone',
  }
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
]


export default composePlugins(...plugins)(withMDX(config))

// export default withMDX(config);
