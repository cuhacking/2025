/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.js')

/** @type {import("next").NextConfig} */
const config = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/t/j/:teamId',
        destination: '/teams/join/:teamId',
        permanent: true,
      },
    ]
  },
}

export default config
