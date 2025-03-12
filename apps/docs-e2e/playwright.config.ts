// TODO: Investigate node global process usage
/* eslint-disable node/prefer-global/process */
import { fileURLToPath } from 'node:url'
import { workspaceRoot } from '@nx/devkit'
import { nxE2EPreset } from '@nx/playwright/preset'

import { defineConfig, devices } from '@playwright/test'

import 'dotenv/config'

const __filename = fileURLToPath(import.meta.url)

const baseURL = process.env.CUHACKING_2025_DOCS_SITE_LOCAL_URL

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  fullyParallel: !process.env.CI,
  workers: process.env.CI ? 6 : undefined,
  retries: 2,
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'pnpm nx dev docs --verbose',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    cwd: workspaceRoot,
    timeout: 120 * 3000,
  },
  // reporter: [['html']],
  projects: [
    {
      name: 'chromium (desktop)',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox (desktop)',
    //   use: { ...devices['Desktop Firefox'] },
    //   testIgnore: ['./src/lighthouse.spec.ts'],
    // },
    // {
    //   name: 'webkit (desktop)',
    //   use: { ...devices['Desktop Safari'] },
    //   testIgnore: ['./src/lighthouse.spec.ts'],
    // },
    // {
    //   name: 'webkit (tablet)',
    //   use: { ...devices['iPad Mini'] },
    //   testIgnore: ['./src/lighthouse.spec.ts'],
    // },
    {
      name: 'chromium (mobile)',
      use: { ...devices['Pixel 5'] },
    },
    // {
    //   name: 'webkit (mobile)',
    //   use: { ...devices['iPhone 12'] },
    //   testIgnore: ['./src/lighthouse.spec.ts'],
    // },
  ],
})
