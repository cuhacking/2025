import type { SerenityOptions } from '@serenity-js/playwright-test'
/* eslint-disable node/prefer-global/process */
import { fileURLToPath } from 'node:url'
import { workspaceRoot } from '@nx/devkit'
import { nxE2EPreset } from '@nx/playwright/preset'

import { defineConfig, devices } from '@playwright/test'

const __filename = fileURLToPath(import.meta.url)

// For CI, you may want to set BASE_URL to the deployed application.
const baseURL = process.env.development ? process.env.CUHACKING_2025_AXIOM_LOCAL_URL : process.env.CUHACKING_2025_AXIOM_PUBLIC_URL

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<SerenityOptions>({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  fullyParallel: !process.env.CI,
  workers: process.env.CI ? 2 : undefined,
  use: {
    crew: [
      ['@serenity-js/web:Photographer', { strategy: 'TakePhotosOfFailures' }],
    ],
    defaultActorName: 'User',
    baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'pnpm nx dev axiom --verbose',
    url: process.env.CUHACKING_2025_AXIOM_LOCAL_URL,
    reuseExistingServer: !process.env.CI,
    cwd: workspaceRoot,
  },
  reporter: [
    ['@serenity-js/playwright-test', {
      crew: [
        '@serenity-js/console-reporter',
        '@serenity-js/serenity-bdd',
        [
          '@serenity-js/core:ArtifactArchiver',
          { outputDirectory: 'target/site/serenity' },
        ],
      ],
    }],
    ['html'],
  ],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    // Uncomment for mobile browsers support
    /* {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    }, */

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
})
