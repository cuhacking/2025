import type { Locator, Page } from '@playwright/test'

export async function clickAndGoToPage(
  layout: { page: Page },
  button: Locator,
) {
  const pagePromise = layout.page.context().waitForEvent('page')
  await button.click()
  return pagePromise
}
