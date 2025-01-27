import type { SerenityOptions } from '@serenity-js/playwright-test'
/* eslint-disable node/prefer-global/process */
// import { fileURLToPath } from 'node:url'
import { workspaceRoot } from '@nx/devkit'
// import { nxE2EPreset } from '@nx/playwright/preset'

import { defineConfig, devices } from '@playwright/test'

// const __filename = fileURLToPath(import.meta.url)

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
export default defineConfig<SerenityOptions>({
  testDir: './src',
  fullyParallel: !process.env.CI,
  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 2 : undefined,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    // // Serenity/JS configuration options
    // crew: [
    //   // Automatically take screenshots upon an assertion failure
    //   ['@serenity-js/web:Photographer', { strategy: 'TakePhotosOfFailures' }],
    // ],
    // defaultActorName: 'Hacker',
    crew: [
      // [ '@serenity-js/web:Photographer', { strategy: 'TakePhotosOfFailures' } ]
      ['@serenity-js/web:Photographer', { strategy: 'TakePhotosOfInteractions' }],
    ],
  },
  reporter: [
    ['line'],
    ['html', { open: 'never' }],
    ['@serenity-js/playwright-test', {
      crew: [
        ['@serenity-js/serenity-bdd', { reporter: { includeAbilityDetails: true } }],
        '@serenity-js/console-reporter',
        ['@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' }],
        // [ '@serenity-js/core:StreamReporter', { outputFile: 'target/events.ndjson' }]
      ],
    }],
  ],
  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'pnpm nx start portal --verbose',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    cwd: workspaceRoot,
  },
  // reporter: [
  //   // Serenity/JS reporting services
  //   ['@serenity-js/playwright-test', {
  //     crew: [
  //       '@serenity-js/console-reporter',
  //       '@serenity-js/serenity-bdd',
  //       [
  //         '@serenity-js/core:ArtifactArchiver',
  //         { outputDirectory: 'target/site/serenity' },
  //       ],
  //     ],
  //   }],

  //   // Any other native Playwright Test reporters
  //   ['html', { open: 'never' }],
  // ],

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
