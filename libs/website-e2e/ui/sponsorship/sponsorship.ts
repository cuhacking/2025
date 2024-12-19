import { test as base, expect } from '@playwright/test'
import { CUHACKING_2025_SPONSORSHIP_PACKAGE } from './constants'
import { SponsorshipSectionLayout } from './pom'

const test = base.extend<{ sponsorshipSectionLayout: SponsorshipSectionLayout }>({
  sponsorshipSectionLayout: async ({ page }, use) => {
    const sponsorshipSectionLayout = new SponsorshipSectionLayout(page)
    sponsorshipSectionLayout.goto()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(sponsorshipSectionLayout)
  },
})
export function sponsorsMobileTabletDesktop() {
  test.describe('SPONSORS - Common MOBILE, TABLE, and DESKTOP elements', {
    tag: '@smoke',
  }, () => {
    test('should contain sponsors section', async ({ sponsorshipSectionLayout }) => {
      await expect(sponsorshipSectionLayout.sponsorsSection).toBeVisible()
    })
    test('should contain a sponsorship package', async ({ sponsorshipSectionLayout }) => {
      await expect(sponsorshipSectionLayout.sponsorshipPackage).toBeVisible()
    })
  })

  test.describe('SPONSORS - Common MOBILE, TABLET, and DESKTOP links', {
    tag: '@smoke',
  }, () => {
    test('should take user to sponsorship package when Sponsorship Package link is clicked', async ({ sponsorshipSectionLayout }) => {
      await sponsorshipSectionLayout.sponsorshipPackage.click()
      await expect(sponsorshipSectionLayout.page).toHaveURL(CUHACKING_2025_SPONSORSHIP_PACKAGE)
    })
  })
}
