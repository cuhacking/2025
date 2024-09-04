import { expect, test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/')

  // Expect h1 to contain a substring.
  // See https://playwright.dev/docs/api/class-locator#locator-textcontent
  expect(await page.locator('h1').textContent()).toContain('Welcome')
})
