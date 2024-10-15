import path from 'node:path'
import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { netlifyPlugin } from '@netlify/remix-adapter/plugin'

export default defineConfig({
  plugins: [remix(), netlifyPlugin(), tsconfigPaths()],
  resolve: {
    alias: {
      '@cuhacking/api': path.resolve(__dirname, '../../libs/api/src'),
      '@cuhacking/auth': path.resolve(__dirname, '../../libs/auth/src'),
      '@cuhacking/db': path.resolve(__dirname, '../../libs/api/src'),
      '@cuhacking/utils': path.resolve(__dirname, '../../libs/api/src'),
      '@cuhacking/env': path.resolve(__dirname, '../../libs/api/src'),
    },
  },
  build: {
    target: 'es2022',
    rollupOptions: {
      external: ['@cuhacking/api', '@cuhacking/auth', '@cuhacking/db', '@cuhacking/utils', '@cuhacking/env'],
    },
  },
  publicDir: path.resolve(__dirname, '../../apps/website/public'),
})
