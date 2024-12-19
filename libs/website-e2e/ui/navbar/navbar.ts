import { test as base, expect } from '@playwright/test'
import { CUHACKING_2025_DISCORD_URL, CUHACKING_2025_DOCS_URL, CUHACKING_2025_EMAIL_URL, CUHACKING_2025_FIGMA_URL, CUHACKING_2025_GITHUB_REPOSITORY_URL, CUHACKING_2025_LINKTREE_URL, CUHACKING_2025_WEBSITE_URL } from '@website-e2e/shared/constants'
import { clickAndGoToPage } from '@website-e2e/shared/utils/click-and-go-to-page'
import { CUHACKING_WEBSITE_ABOUT_URL, CUHACKING_WEBSITE_EVENTS_URL, CUHACKING_WEBSITE_FAQ_URL, CUHACKING_WEBSITE_SPONSORS_URL } from './constants'
import { NavbarLayout } from './pom'

// TODO: Split tests into separate files
// TODO: Add tests for navigation through website on mobile navbar

const test = base.extend<{ navbarLayoutPage: NavbarLayout }>({
  navbarLayoutPage: async ({ page }, use) => {
    const navbarLayoutPage = new NavbarLayout(page)
    await navbarLayoutPage.goto()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(navbarLayoutPage)
  },
})

export function navbarMobileTabletDesktop() {
  test.describe('NAVBAR - Common Mobile, Table, and Desktop layout elements', {
    tag: '@smoke',
  }, () => {
    test('should return to home page when cuHacking logo on navbar is clicked', async ({ navbarLayoutPage }) => {
      navbarLayoutPage.cuHackingLogoIconNav.click()
      await expect(navbarLayoutPage.page).toHaveURL(CUHACKING_2025_WEBSITE_URL)
    })
    test('should contain navbar', async ({ navbarLayoutPage }) => {
      await expect(navbarLayoutPage.navbarSection).toBeVisible()
    })
  })
}

export function navbarTabletDesktop() {
  test.describe('NAVBAR - Common Tablet and Desktop links', {
    tag: '@smoke',
  }, () => {
    test.beforeEach(async () => {
      const device = test.info().project.name
      if (device.includes('mobile')) {
        test.skip()
      }
    })

    test('should contain About link in navbar', async ({ navbarLayoutPage }) => {
      await expect(navbarLayoutPage.aboutLink).toBeVisible()
    })

    test('should take user to About section from navbar', async ({ navbarLayoutPage }) => {
      await navbarLayoutPage.aboutLink.click()
      await expect(navbarLayoutPage.page).toHaveURL(CUHACKING_WEBSITE_ABOUT_URL)
    })

    test('should contain Events link in navbar', async ({ navbarLayoutPage }) => {
      await expect(navbarLayoutPage.eventsLink).toBeVisible()
    })

    test('should take user to Events section from navbar', async ({ navbarLayoutPage }) => {
      await navbarLayoutPage.eventsLink.click()
      await expect(navbarLayoutPage.page).toHaveURL(CUHACKING_WEBSITE_EVENTS_URL)
    })

    test('should contain Sponsors link in navbar', async ({ navbarLayoutPage }) => {
      await expect(navbarLayoutPage.sponsorsLink).toBeVisible()
    })

    test('should take user to Sponsors section from navbar', async ({ navbarLayoutPage }) => {
      await navbarLayoutPage.sponsorsLink.click()
      await expect(navbarLayoutPage.page).toHaveURL(CUHACKING_WEBSITE_SPONSORS_URL)
    })

    test('should contain FAQ link in navbar', async ({ navbarLayoutPage }) => {
      await expect(navbarLayoutPage.faqLink).toBeVisible()
    })

    test('should take user to FAQ section from navbar', async ({ navbarLayoutPage }) => {
      await navbarLayoutPage.faqLink.click()
      await expect(navbarLayoutPage.page).toHaveURL(CUHACKING_WEBSITE_FAQ_URL)
    })
  })
}

export function navbarMobile() {
  test.describe('NAVBAR - Mobile links', {
    tag: '@smoke',
  }, () => {
    test.beforeEach(async ({ navbarLayoutPage }) => {
      const device = test.info().project.name
      if (device.includes('desktop') || device.includes('tablet')) {
        test.skip()
        return
      }
      await navbarLayoutPage.hamburgerIcon.click()
    })

    test('should contain Discord link in navbar', async ({ navbarLayoutPage }) => {
      await expect(navbarLayoutPage.discordLinkNavbar).toBeVisible()
    })

    test('should take user to Discord page from navbar', async ({ navbarLayoutPage }) => {
      const res = await clickAndGoToPage(navbarLayoutPage, navbarLayoutPage.discordLinkNavbar)
      await expect(res).toHaveURL(CUHACKING_2025_DISCORD_URL)
    })

    test('should contain Instagram link in navbar', async ({ navbarLayoutPage }) => {
      await expect(navbarLayoutPage.instagramLinkNavbar).toBeVisible()
    })

    // TODO: Instagram requires auth
    // test('should take user to Instagram page from Navbar', async ({ navbarLayoutPage }) => {
    //   const res = await clickAndGoToPage(navbarLayoutPage, navbarLayoutPage.instagramLinkNavbar)
    //   await expect(res).toHaveURL(CUHACKING_2025_INSTAGRAM_URL)
    // })

    test('should contain LinkedIn link in navbar', async ({ navbarLayoutPage }) => {
      await expect(navbarLayoutPage.linkedinLinkNavbar).toBeVisible()
    })

    // TODO: Update when auth w/Playwright is implemented
    // test('should take user to LinkedIn page from Navbar', async ({ navbarLayoutPage }) => {
    //   const res = await clickAndGoToPage(navbarLayoutPage, navbarLayoutPage.linkedinLinkNavbar)
    //   await expect(res).toHaveURL(CUHACKING_2025_LINKED_IN_URL)
    // })

    test('should contain Linktree link in navbar', async ({ navbarLayoutPage }) => {
      await expect(navbarLayoutPage.linktreeLinkNavbar).toBeVisible()
    })

    test('should take user to Linktree page from navbar', async ({ navbarLayoutPage }) => {
      const res = await clickAndGoToPage(navbarLayoutPage, navbarLayoutPage.linktreeLinkNavbar)
      await expect(res).toHaveURL(CUHACKING_2025_LINKTREE_URL)
    })

    test('should contain Figma link in navbar', async ({ navbarLayoutPage }) => {
      await expect(navbarLayoutPage.figmaLinkNavbar).toBeVisible()
    })

    test('should take user to Figma page from navbar', async ({ navbarLayoutPage }) => {
      const res = await clickAndGoToPage(navbarLayoutPage, navbarLayoutPage.figmaLinkNavbar)
      expect(res.url()).toMatch(new RegExp(`^${CUHACKING_2025_FIGMA_URL}`))
    })

    test('should contain GitHub link in navbar', async ({ navbarLayoutPage }) => {
      await expect(navbarLayoutPage.githubLinkNavbar).toBeVisible()
    })

    test('should take user to GitHub page from navbar', async ({ navbarLayoutPage }) => {
      const res = await clickAndGoToPage(navbarLayoutPage, navbarLayoutPage.githubLinkNavbar)
      await expect(res).toHaveURL(CUHACKING_2025_GITHUB_REPOSITORY_URL)
    })

    test('should contain Email link in navbar', async ({ navbarLayoutPage }) => {
      await expect(navbarLayoutPage.emailLinkNavbar).toBeVisible()
    })

    test('should take user to Email page from navbar', async ({ navbarLayoutPage }) => {
      const href = navbarLayoutPage.emailLinkNavbar
      await expect(href).toHaveAttribute('href', CUHACKING_2025_EMAIL_URL)
    })

    test('should contain Docs link in navbar', async ({ navbarLayoutPage }) => {
      await expect(navbarLayoutPage.docsLinkNavbar).toBeVisible()
    })

    test('should take user to Docs page from navbar', async ({ navbarLayoutPage }) => {
      const res = await clickAndGoToPage(navbarLayoutPage, navbarLayoutPage.docsLinkNavbar)
      await expect(res).toHaveURL(CUHACKING_2025_DOCS_URL)
    })
  })
  test.describe('NAVBAR - Mobile elements', {
    tag: '@smoke',
  }, () => {
    test.beforeEach(async () => {
      const device = test.info().project.name
      if (device.includes('desktop') || device.includes('tablet')) {
        test.skip()
      }
    })
    test('should contain hamburger icon in navbar', async ({ navbarLayoutPage }) => {
      await expect(navbarLayoutPage.hamburgerIcon).toBeVisible()
    })
  })
}
