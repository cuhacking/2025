import { expect, test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/')

  expect(2 + 2).toBe(4)
})
