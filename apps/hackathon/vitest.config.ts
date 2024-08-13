import { defineConfig } from 'vitest/config'

// TODO: refactor after monorepo migration
// see: https://vitest.dev/guide/workspace.html
export default defineConfig({
  test: {
    include: ['tests/unit/**/*.ts'],
    name: 'example',
    environment: 'node',
  },
})
