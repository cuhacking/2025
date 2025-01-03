import type { Locator, Page } from '@playwright/test'
import { CUHACKING_2025_WEBSITE_URL } from '@website-e2e/shared/constants'

export class SponsorshipSectionLayout {
  readonly sponsorshipPackage: Locator
  readonly sponsorsSection: Locator

  readonly page: Page
  constructor(page: Page) {
    this.page = page
    this.sponsorsSection = page.locator('#sponsors')
    this.sponsorshipPackage = page.getByRole('link', { name: 'Sponsorship Package' })
  }

  async goto() {
    await this.page
      .goto(CUHACKING_2025_WEBSITE_URL)
  }
}
