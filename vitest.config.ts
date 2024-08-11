import { defineConfig } from 'vitest/config'

// TODO: need to define workspaces when monorepo structure is created
// see: https://vitest.dev/guide/workspace.html
export default defineConfig({
  test: {
    include: ['tests/unit-tests/**/*.ts'],
    name: 'example',
    environment: 'node',
  },
})
