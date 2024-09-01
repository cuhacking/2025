import path from 'node:path'
import { defineConfig } from 'vitest/config'
// TODO: refactor after monorepo migration
// see: https://vitest.dev/guide/workspace.html
const config = defineConfig({
  test: {
    include: ['tests/unit/**/*.ts'],
    name: 'discord-to-github-bot',
    environment: 'node',
    alias: {
      '@services/': new URL('./src/services/', import.meta.url).pathname,
    },
  },
})
export default config
