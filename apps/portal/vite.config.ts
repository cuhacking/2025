import { netlifyPlugin } from '@netlify/remix-edge-adapter/plugin'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { vitePlugin as remix } from '@remix-run/dev'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

declare module '@remix-run/node' {
  interface Future {
    v3_singleFetch: true
  }
}

export default defineConfig({
  root: __dirname,
  plugins: [
    tailwindcss(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    nxViteTsPaths(),
    netlifyPlugin(),
  ],
  server: {
    port: 3000,
    fs: {
      allow: ['../../libs/shared/', '../../libs/portal/', '..'],
    },
  },
})
