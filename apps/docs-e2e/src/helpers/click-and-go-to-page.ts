import type { Locator, Page } from '@playwright/test'
import { expect } from '@playwright/test'

export async function clickAndGoToPage(layout: { page: Page }, button: Locator, expectedUrl: string) {
  const pagePromise = layout.page.context().waitForEvent('page')
  await button.click()
  const newPage = await pagePromise
  await expect(newPage).toHaveURL(expectedUrl)
}
