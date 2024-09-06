import { test as base, expect } from '@playwright/test'

import { DocsLayout } from './pom'

import { clickAndGoToPage } from './helpers/click-and-go-to-page'

const test = base.extend<{ docsLayoutPage: DocsLayout }>({
  docsLayoutPage: async ({ page }, use) => {
    const docsLayoutPage = new DocsLayout(page)
    await docsLayoutPage.goto()
    await use(docsLayoutPage)
  },
})

const GITHUB_BASE_URL = 'https://github.com/cuhacking'
const GITHUB_ORG_BASE_URL = 'https://github.com/orgs/cuhacking'
const DOCS_BASE_URL = 'http://localhost:3000'

const CUHACKING_2025_PLATFORM_GITHUB_PROJECT_BOARD_URL = `${GITHUB_ORG_BASE_URL}/projects/4`
const CUHACKING_2025_PLATFORM_GITHUB_REPOSITORY_URL = `${GITHUB_BASE_URL}/2025`
const CUHACKING_2025_PLATFORM_GITHUB_INDEX_PAGE_URL = `${GITHUB_BASE_URL}/2025/blob/main/apps/docs/src/content/docs/index.mdx`
const CUHACKING_2025_LANDING_PAGE_GITHUB_REPOSITORY_URL = `${GITHUB_BASE_URL}/landing-page`

const CUHACKING_2025_DOCS_URL = `${DOCS_BASE_URL}/docs`

const CUHACKING_2025_LANDING_PAGE_URL = 'https://www.cuhacking.ca/'

/* ---------------- MOBILE + DESKTOP + TABLET ---------------- */
test.describe(`Common MOBILE, TABLET and DESKTOP Layout Elements`, {
  tag: '@smoke',
}, () => {
  test(`should contain title page`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.page).toHaveTitle(/Welcome to the Docs/)
  })

  test(`should contain cuHacking logo icon in header`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.cuHackingLogoIcon).toBeVisible()
  })

  test(`should take user to docs home page when cuHacking logo icon is clicked in header`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.cuHackingLogoIcon.click()
    await expect(docsLayoutPage.page).toHaveURL(CUHACKING_2025_DOCS_URL)
  })

  test(`should contain cuHacking logo Text in header`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.cuHackingLogoText).toBeVisible()
  })

  test(`should take user to docs home page when cuHacking logo text is clicked in header`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.cuHackingLogoText.click()
    await expect(docsLayoutPage.page).toHaveURL(CUHACKING_2025_DOCS_URL)
  })

  test(`should contain last updated text in docs page footer for`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.lastUpdatedText).toBeVisible()
  })
})

/* ---------------- MOBILE + TABLET ---------------- */
test.describe(`Common MOBILE and TABLET Layout Elements`, {
  tag: '@smoke',
}, () => {
  test.beforeEach(async () => {
    const device = test.info().project.name
    if (device.includes('desktop')) {
      test.skip()
    }
  })

  test(`should have quick links section visible in mobile/tablet header`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.quickLinks).toBeVisible()
  })

  test(`should have "Edit on Github" button visible in mobile/tablet quick links`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.quickLinks.click()
    await expect(docsLayoutPage.editOnGitHubButton).toBeVisible()
  })

  test(`should take user to github index page when "Edit on Github" button is clicked from mobile/tablet`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.quickLinks.click()
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.editOnGitHubButton, CUHACKING_2025_PLATFORM_GITHUB_INDEX_PAGE_URL)
  })
})

/* ---------------- MOBILE + TABLET MENU ---------------- */
test.describe(`Common MOBILE and TABLET Menu Elements`, {
  tag: '@smoke',
}, () => {
  test.beforeEach(async ({ docsLayoutPage }) => {
    await docsLayoutPage.goto()
    const device = test.info().project.name
    if (device.includes('mobile')) {
      await docsLayoutPage.hamburgerIcon.click()
    }
    else if (device.includes('tablet')) {
      await docsLayoutPage.kebabIcon.click()
    }
    else {
      test.skip()
    }
  })

  test(`should have docs pages section dropdown menu visible for mobile/tablet`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.sectionsDropdownButton).toBeVisible()
  })

  test(`should have website button visible from website dropdown for mobile/tablet`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.websiteDropdownButton.click()
    await expect(docsLayoutPage.mobileWebsiteLink).toBeVisible()
  })

  test(`should take user to landing page when website button is clicked for mobile/tablet`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.websiteDropdownButton.click()
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.mobileWebsiteLink, CUHACKING_2025_LANDING_PAGE_URL)
  })

  test(`should have website source button visible from website dropdown for mobile/tablet`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.websiteDropdownButton.click()
    await expect(docsLayoutPage.mobileWebsiteSourceLink).toBeVisible()
  })

  test(`should take user to landing page repository when website source button is clicked for mobile/tablet`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.websiteDropdownButton.click()
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.mobileWebsiteSourceLink, CUHACKING_2025_LANDING_PAGE_GITHUB_REPOSITORY_URL)
  })

  test(`should have hacker portal app button visible from hacker portal dropdown for mobile/tablet`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.hackerPortalDropdownButton.click()
    await expect(docsLayoutPage.mobileHackerAppLink).toBeVisible()
  })

  test(`should take user to hacker portal app when app button is clicked for mobile/tablet`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.hackerPortalDropdownButton.click()
    await docsLayoutPage.mobileHackerAppLink.click()
    await expect(docsLayoutPage.page).toHaveURL(DOCS_BASE_URL)
  })

  test(`should have hacker portal source button visible from hacker portal dropdown for mobile/tablet`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.hackerPortalDropdownButton.click()
    await expect(docsLayoutPage.mobileHackerPortalSourceLink).toBeVisible()
  })

  test(`should take user to hacker portal source repository when source button is clicked for mobile/tablet`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.hackerPortalDropdownButton.click()
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.mobileHackerPortalSourceLink, CUHACKING_2025_PLATFORM_GITHUB_REPOSITORY_URL)
  })

  test(`should have hacker portal project board button visible from hacker portal dropdown for mobile/tablet`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.hackerPortalDropdownButton.click()
    await expect(docsLayoutPage.mobileHackerPortalProjectBoardLink).toBeVisible()
  })

  test(`should take user to hacker portal project board when project board button is clicked mobile/tablet`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.hackerPortalDropdownButton.click()
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.mobileHackerPortalProjectBoardLink, CUHACKING_2025_PLATFORM_GITHUB_PROJECT_BOARD_URL)
  })

  test(`should have github button visible from mobile/tablet menu`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.mobileGithubIcon).toBeVisible()
  })

  test(`should take user to github repository when github button is clicked for mobile/tablet`, async ({ docsLayoutPage }) => {
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.mobileGithubIcon, CUHACKING_2025_PLATFORM_GITHUB_REPOSITORY_URL)
  })

  test(`should have theme toggle visible for mobile/tablet`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.themeToggle).toBeVisible()
  })
})

/* ---------------- TABLET + DESKTOP ---------------- */
test.describe('Common TABLET and DESKTOP Layout Elements', {
  tag: '@smoke',
}, () => {
  test.beforeEach(async () => {
    const device = test.info().project.name
    if (device.includes('mobile')) {
      test.skip()
    }
  })

  test(`should contain search bar in tablet/desktop header`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.searchBar).toBeVisible()
  })

  test(`should show search modal when search bar clicked in tablet/desktop header`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.searchBar.click()
    await expect(docsLayoutPage.searchDialog).toBeVisible()
  })

  test(`should have docs pages section dropdown menu visible in tablet/desktop sidebar`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.sectionsDropdownButton).toBeVisible()
  })

  test(`should contain sidebar toggle in tablet/desktop sidebar`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.sideBarToggle).toBeVisible()
  })
})

/* ---------------- UNIQUE DESKTOP HEADER ---------------- */
test.describe('Unique DESKTOP Header Elements', {
  tag: '@smoke',
}, () => {
  test.beforeEach(async () => {
    const device = test.info().project.name
    if (device.includes('mobile') || device.includes('tablet')) {
      test.skip()
    }
  })

  test('should contain Website dropdown button in desktop header', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.websiteDropdownButton).toBeVisible()
  })

  test('should contain Website link inside Website Dropdown', async ({ docsLayoutPage }) => {
    await docsLayoutPage.websiteDropdownButton.click()
    await expect(docsLayoutPage.websiteLink).toBeVisible()
  })

  test('should contain Website Source link inside Website Dropdown', async ({ docsLayoutPage }) => {
    await docsLayoutPage.websiteDropdownButton.click()
    await expect(docsLayoutPage.websiteSourceLink).toBeVisible()
  })

  test('should contain Hacker Portal dropdown button in desktop header', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.hackerPortalDropdownButton).toBeVisible()
  })

  test('should contain Hacker Portal App link inside Hacker Portal Dropdown', async ({ docsLayoutPage }) => {
    await docsLayoutPage.hackerPortalDropdownButton.click()
    await expect(docsLayoutPage.hackerPortalLink).toBeVisible()
  })

  test('should take user to Hacker Portal App when Hacker Portal App link inside Hacker Portal Dropdown is clicked', async ({ docsLayoutPage }) => {
    await docsLayoutPage.hackerPortalDropdownButton.click()
    await docsLayoutPage.hackerPortalLink.click()
    await expect(docsLayoutPage.page).toHaveURL(DOCS_BASE_URL)
  })

  test('should contain Hacker Portal Source link inside Hacker Portal Dropdown', async ({ docsLayoutPage }) => {
    await docsLayoutPage.hackerPortalDropdownButton.click()
    await expect(docsLayoutPage.hackerPortalSourceLink).toBeVisible()
  })

  test('should take user to Hacker Portal GitHub Repository when Hacker Portal App link inside Hacker Portal Dropdown is clicked', async ({ docsLayoutPage }) => {
    await docsLayoutPage.hackerPortalDropdownButton.click()
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.hackerPortalSourceLink, CUHACKING_2025_PLATFORM_GITHUB_REPOSITORY_URL)
  })

  test('should contain Hacker Portal Project Board link inside Hacker Portal Dropdown', async ({ docsLayoutPage }) => {
    await docsLayoutPage.hackerPortalDropdownButton.click()
    await expect(docsLayoutPage.hackerPortalProjectBoardLink).toBeVisible()
  })

  test('should take user to Hacker Portal Project Board when Hacker Portal App link inside Hacker Portal Dropdown is clicked', async ({ docsLayoutPage }) => {
    await docsLayoutPage.hackerPortalDropdownButton.click()
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.hackerPortalProjectBoardLink, CUHACKING_2025_PLATFORM_GITHUB_PROJECT_BOARD_URL)
  })

  test('should contain theme toggle in desktop header', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.themeToggle).toBeVisible()
  })

  test('should contain GitHub icon in desktop header', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.gitHubIcon).toBeVisible()
  })

  test('should take user to cuHacking Hacker Portal GitHub repository when GitHub icon is clicked', async ({ docsLayoutPage }) => {
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.gitHubIcon, CUHACKING_2025_PLATFORM_GITHUB_REPOSITORY_URL)
  })
})

/* ---------------- UNIQUE DESKTOP FLOATING TABLE ---------------- */
test.describe('Unique Floating Table of Contents DESKTOP Elements', {
  tag: '@smoke',
}, () => {
  test.beforeEach(async () => {
    const device = test.info().project.name
    if (device.includes('mobile') || device.includes('tablet')) {
      test.skip()
    }
  })

  test('should contain \'Edit on GitHub\' button in floating table of contents', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.editOnGitHubButton).toBeVisible()
  })

  test('should take user to current docs page file on the cuHacking Hacker Portal GitHub repository when the \'Edit on GitHub\' icon is clicked', async ({ docsLayoutPage }) => {
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.editOnGitHubButton, CUHACKING_2025_PLATFORM_GITHUB_INDEX_PAGE_URL)
  })
})

/* ---------------- UNIQUE MOBILE HEADER ---------------- */
test.describe('Unique MOBILE Header Elements', {
  tag: '@smoke',
}, () => {
  test.beforeEach(async () => {
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

/* ---------------- UNIQUE TABLET HEADER ---------------- */
test.describe('Unique TABLET Header Elements', {
  tag: '@smoke',
}, () => {
  test.beforeEach(async () => {
    const device = test.info().project.name
    if (device.includes('desktop') || device.includes('mobile')) {
      test.skip()
    }
  })

  test('should have kebab icon visible', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.kebabIcon).toBeVisible()
  })
})
