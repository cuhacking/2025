// TODO: Investigate node global process usage

import { fileURLToPath } from 'node:url'
import { nxE2EPreset } from '@nx/playwright/preset'

import { defineConfig, devices } from '@playwright/test'

const __filename = fileURLToPath(import.meta.url)

// // For CI, you may want to set BASE_URL to the deployed application.
// const baseURL = process.env.BASE_URL || 'http://127.0.0.1:3000'

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
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  retries: 2,
  use: {
    // baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  /* Run your local dev server before starting the tests */
  //   webServer: {
  //     command: 'pnpm nx start risk-form-filler',
  //     // url: 'http://127.0.0.1:3000',
  //     // reuseExistingServer: !process.env.CI,
  //     cwd: workspaceRoot,
  //     timeout: 120 * 1000,
  //   },
  projects: [
    {
      name: 'chromium (desktop)',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
