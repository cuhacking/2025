import { test as base, expect } from '@playwright/test'

import { DocsLayout } from './pom'

const test = base.extend<{ docsLayoutPage: DocsLayout }>({
  docsLayoutPage: async ({ page }, use) => {
    const docsLayoutPage = new DocsLayout(page)
    await docsLayoutPage.goto()
    await use(docsLayoutPage)
  },
})

const DOCS_HOME_PAGE_URL = 'http://localhost:3000/docs'
const CUHACKING_HACKER_PORTAL_GITHUB_REPOSITORY_URL = 'https://github.com/cuhacking/hackathon'
const CUHACKING_HACKER_PORTAL_GITHUB_PROJECT_BOARD_URL = 'https://github.com/orgs/cuhacking/projects/4'

test('should contain page title', async ({ docsLayoutPage }) => {
  await expect(docsLayoutPage.page).toHaveTitle(/Welcome to the Docs/)
})

test.describe('should contain desktop header elements', {
  tag: '@smoke',
}, () => {
  test('should contain cuHacking logo icon in desktop header', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.cuHackingLogoIcon).toBeVisible()
  })

  test('should take user to docs home page when cuHacking logo icon is clicked', async ({ docsLayoutPage }) => {
    await docsLayoutPage.cuHackingLogoIcon.click()
    await expect(docsLayoutPage.page).toHaveURL(DOCS_HOME_PAGE_URL)
  })

  test('should contain cuHacking logo Text in desktop header', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.cuHackingLogoText).toBeVisible()
  })

  test('should take user to docs home page when cuHacking logo text is clicked', async ({ docsLayoutPage }) => {
    await docsLayoutPage.cuHackingLogoText.click()
    await expect(docsLayoutPage.page).toHaveURL(DOCS_HOME_PAGE_URL)
  })

  test('should contain Landing Page dropdown button in desktop header', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.landingPageDropdownButton).toBeVisible()
  })

  test('should contain Landing Page Website link inside Landing Page Dropdown', async ({ docsLayoutPage }) => {
    await docsLayoutPage.landingPageDropdownButton.click()
    await expect(docsLayoutPage.landingPageWebsiteLink).toBeVisible()
  })

  test('should contain Landing Page Website Source link inside Landing Page Dropdown', async ({ docsLayoutPage }) => {
    await docsLayoutPage.landingPageDropdownButton.click()
    await expect(docsLayoutPage.landingPageWebsiteSourceLink).toBeVisible()
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
    await expect(docsLayoutPage.page).toHaveURL('http://localhost:3000')
  })

  test('should contain Hacker Portal Source link inside Hacker Portal Dropdown', async ({ docsLayoutPage }) => {
    await docsLayoutPage.hackerPortalDropdownButton.click()
    await expect(docsLayoutPage.hackerPortalSourceLink).toBeVisible()
  })

  test('should take user to Hacker Portal GitHub Repository when Hacker Portal App link inside Hacker Portal Dropdown is clicked', async ({ docsLayoutPage }) => {
    await docsLayoutPage.hackerPortalDropdownButton.click()
    const pagePromise = docsLayoutPage.page.context().waitForEvent('page')
    await docsLayoutPage.hackerPortalSourceLink.click()
    const newPage = await pagePromise
    await expect(newPage).toHaveURL(CUHACKING_HACKER_PORTAL_GITHUB_REPOSITORY_URL)
  })

  test('should contain Hacker Portal Project Board link inside Hacker Portal Dropdown', async ({ docsLayoutPage }) => {
    await docsLayoutPage.hackerPortalDropdownButton.click()
    await expect(docsLayoutPage.hackerPortalProjectBoardLink).toBeVisible()
  })

  test('should take user to Hacker Portal Project Board when Hacker Portal App link inside Hacker Portal Dropdown is clicked', async ({ docsLayoutPage }) => {
    await docsLayoutPage.hackerPortalDropdownButton.click()
    const pagePromise = docsLayoutPage.page.context().waitForEvent('page')
    await docsLayoutPage.hackerPortalProjectBoardLink.click()
    const newPage = await pagePromise
    await expect(newPage).toHaveURL(CUHACKING_HACKER_PORTAL_GITHUB_PROJECT_BOARD_URL)
  })

  test('should contain search bar in desktop header', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.searchBar).toBeVisible()
  })

  test('should show search modal when search bar in desktop header is clicked', async ({ docsLayoutPage }) => {
    await docsLayoutPage.searchBar.click()
    await expect(docsLayoutPage.searchDialog).toBeVisible()
  })

  test('should contain theme toggle in desktop header', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.themeToggle).toBeVisible()
  })

  test('should contain GitHub icon in desktop header', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.gitHubIcon).toBeVisible()
  })

  test('should take user to cuHacking Hacker Portal GitHub repository when GitHub icon is clicked', async ({ docsLayoutPage }) => {
    const pagePromise = docsLayoutPage.page.context().waitForEvent('page')
    await docsLayoutPage.gitHubIcon.click()
    const newPage = await pagePromise
    await expect(newPage).toHaveURL(CUHACKING_HACKER_PORTAL_GITHUB_REPOSITORY_URL)
  })
})

test.describe('should contain desktop sidebar elements', {
  tag: '@smoke',
}, () => {
  test('should contain sidebar toggle in desktop sidebar', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.sideBarToggle).toBeVisible()
  })
})

test.describe('should contain floating table of contents elements', {
  tag: '@smoke',
}, () => {
  test('should contain \'Edit on GitHub\' button in floating table of contents', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.editOnGitHubButton).toBeVisible()
  })

  test('should take user to current docs page file on the cuHacking Hacker Portal GitHub repository when the \'Edit on GitHub\' icon is clicked', async ({ docsLayoutPage }) => {
    const pagePromise = docsLayoutPage.page.context().waitForEvent('page')
    await docsLayoutPage.editOnGitHubButton.click()
    const newPage = await pagePromise
    await expect(newPage).toHaveURL(`${CUHACKING_HACKER_PORTAL_GITHUB_REPOSITORY_URL}/blob/main/src/content/docs/index.mdx`)
  })
})

test.describe('should contain docs page elements', {
  tag: '@smoke',
}, () => {
  test('should contain last updated text in docs page footer', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.lastUpdatedText).toBeVisible()
  })
})

// TODO: complete test suite for mobile
test.describe('should contain mobile header elements', {
  tag: '@smoke',
}, () => {
  test('should contain cuHacking Logo Icon in mobile header', async ({ docsLayoutPage }) => {
    await docsLayoutPage.page.setViewportSize({
      width: 320,
      height: 480,
    })
    await expect(docsLayoutPage.cuHackingLogoIcon).toBeVisible()
  })

  test('should contain hamburger icon in mobile header', async ({ docsLayoutPage }) => {
    await docsLayoutPage.page.setViewportSize({
      width: 320,
      height: 480,
    })
    await expect(docsLayoutPage.hamburgerIcon).toBeVisible()
  })
})
