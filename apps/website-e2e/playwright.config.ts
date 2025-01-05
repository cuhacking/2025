import { fileURLToPath } from 'node:url'
/* eslint-disable node/prefer-global/process */
import { workspaceRoot } from '@nx/devkit'
import { nxE2EPreset } from '@nx/playwright/preset'

import { defineConfig, devices } from '@playwright/test'

const __filename = fileURLToPath(import.meta.url)

// For CI, you may want to set BASE_URL to the deployed application.
const baseURL = process.env.BASE_URL || 'http://localhost:3000'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  fullyParallel: !process.env.CI,
  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 2 : undefined,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'pnpm nx start website --verbose',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    cwd: workspaceRoot,
  },
  // reporter: [['html']],
  projects: [
    {
      name: 'chromium (desktop)',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox (desktop)',
      use: { ...devices['Desktop Firefox'] },
      testIgnore: ['./src/lighthouse.spec.ts'],
    },
    {
      name: 'webkit (desktop)',
      use: { ...devices['Desktop Safari'] },
      testIgnore: ['./src/lighthouse.spec.ts'],
    },
    {
      name: 'webkit (tablet)',
      use: { ...devices['iPad Mini'] },
      testIgnore: ['./src/lighthouse.spec.ts'],
    },
    {
      name: 'chromium (mobile)',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'webkit (mobile)',
      use: { ...devices['iPhone 12'] },
      testIgnore: ['./src/lighthouse.spec.ts'],
    },
    // Uncomment for branded browsers
    /* {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    } */
  ],

  // Ignore Chromium projects in CI to speed up runs
  ignore: process.env.CI
    ? ['chromium (desktop)', 'chromium (mobile)']
    : [],

})
