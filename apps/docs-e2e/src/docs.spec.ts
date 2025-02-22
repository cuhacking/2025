import { test as base, expect } from '@playwright/test'
import { clickAndGoToPage } from './helpers/click-and-go-to-page'
import { DocsLayout } from './pom'

const test = base.extend<{ docsLayoutPage: DocsLayout, context }>({
  context: async ({ browser }, use) => {
    const context = await browser.newContext() // Create a new context
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(context)
    await context.close()
  },

  docsLayoutPage: async ({ context }, use) => {
    const page = await context.newPage()
    const docsLayoutPage = new DocsLayout(page)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(docsLayoutPage)
  },
})

test.beforeEach(async ({ docsLayoutPage }) => {
  await docsLayoutPage.goto()
})

test.afterEach(async ({ docsLayoutPage }) => {
  await docsLayoutPage.page.evaluate(() => {
    localStorage.clear()
    sessionStorage.clear()
  })
  await docsLayoutPage.page.close()
})

const GITHUB_BASE_URL = 'https://github.com/cuhacking'
const CUHACKING_2025_FOR_HACKERS_BY_HACKERS = `${GITHUB_BASE_URL}/2025/graphs/contributors`

/* ---------------- MOBILE + DESKTOP + TABLET ---------------- */
test.describe(`Common MOBILE, TABLET and DESKTOP Layout Elements`, {
  tag: '@smoke',
}, () => {
  test(`should contain title page`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.page).toHaveTitle(/Overview/)
  })

  test(`should contain cuHacking logo icon in header`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.cuHackingLogoIcon).toBeVisible()
  })

  test(`should contain cuHacking logo Text in header`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.cuHackingLogoText).toBeVisible()
  })

  test(`should check for 'Next page' Button`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.nextButton).toBeVisible()
  })

  test(`should contain 'Edit on Github' button`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.editOnGithubButton).toBeVisible()
  })
})

/* ---------------- TABLET + DESKTOP + MOBILE LINKS---------------- */
test.describe('Common MOBILE, TABLET and DESKTOP Links', {
  tag: '@smoke',
}, () => {
  test.beforeEach(async ({ docsLayoutPage }) => {
    const device = test.info().project.name
    if (device.includes('mobile')) {
      await docsLayoutPage.hamburgerIcon.click()
    }
  })
})

/* ---------------- MOBILE + TABLET ---------------- */
test.describe(`Common MOBILE and TABLET Layout Elements`, {
  tag: '@smoke',
}, () => {
  test.beforeEach(async ({ docsLayoutPage }) => {
    await docsLayoutPage.goto()
    const device = test.info().project.name
    if (device.includes('desktop')) {
      test.skip()
    }
  })
  test(`should have 'On this page' section visible in mobile/tablet header`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.onThisPage).toBeVisible()
  })

  test(`should have "For Hackers by Hackers" text visible in mobile/tablet for On this page`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.onThisPage.click()
    await expect(docsLayoutPage.forHackersByHackers).toBeVisible()
  })

  test(`should click "For Hackers by Hackers" link mobile/tablet`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.onThisPage.click()
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.forHackersByHackers, CUHACKING_2025_FOR_HACKERS_BY_HACKERS)
  })
})

/* ---------------- TABLET + DESKTOP ---------------- */
test.describe('Common TABLET and DESKTOP Layout Elements', {
  tag: '@smoke',
}, () => {
  test.beforeEach(async ({ docsLayoutPage }) => {
    await docsLayoutPage.goto()
    const device = test.info().project.name
    if (device.includes('mobile')) {
      test.skip()
    }
  })
  test(`should contain Search Bar`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.searchBar).toBeVisible()
  })

  // Disabled due to test hanging
  // test(`should contain Search Modal`, async ({ docsLayoutPage }) => {
  //   docsLayoutPage.page.on('dialog', dialog => dialog.accept())
  //   await docsLayoutPage.searchBar.click()
  //   await expect(docsLayoutPage.searchModal).toBeVisible()
  // })

  test.skip(`should check for theme toggle`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.themeToggle).toBeVisible()
  })

  test(`should check for sidebar visibility`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.sideBarToggle).toBeVisible()
  })

  test(`should check for sidebar 'overview' visability`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.overviewSidebar).toBeVisible()
  })
})

/* ---------------- UNIQUE MOBILE HEADER ---------------- */
test.describe('Unique MOBILE Header Elements', {
  tag: '@smoke',
}, () => {
  test.beforeEach(async ({ docsLayoutPage }) => {
    await docsLayoutPage.goto()
    const device = test.info().project.name
    if (device.includes('desktop') || device.includes('tablet')) {
      test.skip()
    }
  })
  test('should contain hamburger icon', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.hamburgerIcon).toBeVisible()
  })

  test('should contain search icon', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.searchIcon).toBeVisible()
  })

  test('should show search modal when search icon is clicked', async ({ docsLayoutPage }) => {
    await docsLayoutPage.searchIcon.click()
    await expect(docsLayoutPage.searchModal).toBeVisible()
  })
})

/* ---------------- UNIQUE DESKTOP FLOATING TABLE ---------------- */
test.describe('Unique DESKTOP Floating Table Elements', {
  tag: '@smoke',
}, () => {
  test.beforeEach(async ({ docsLayoutPage }) => {
    await docsLayoutPage.goto()
    const device = test.info().project.name
    if (device.includes('mobile') || device.includes('tablet')) {
      test.skip()
    }
  })

  test(`should have 'On this page' section visible in header`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.onThisPage).toBeVisible()
  })

  test(`should have "For Hackers by Hackers" text visible in for On this page`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.forHackersByHackers).toBeVisible()
  })

  test(`should be able to click "For Hackers by Hackers" link`, async ({ docsLayoutPage }) => {
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.forHackersByHackers, CUHACKING_2025_FOR_HACKERS_BY_HACKERS)
  })
})
