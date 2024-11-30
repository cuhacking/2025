import { test as base, expect } from '@playwright/test'

import { clickAndGoToPage } from './helpers/click-and-go-to-page'

import { DocsLayout } from './pom'

const test = base.extend<{ docsLayoutPage: DocsLayout }>({
  docsLayoutPage: async ({ page }, use) => {
    const docsLayoutPage = new DocsLayout(page)
    await docsLayoutPage.goto()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(docsLayoutPage)
  },
})

const GITHUB_BASE_URL = 'https://github.com/cuhacking'
// const GITHUB_ORG_BASE_URL = 'https://github.com/orgs/cuhacking'
const DOCS_BASE_URL = 'http://localhost:3000'

// const CUHACKING_2025_PLATFORM_GITHUB_PROJECT_BOARD_URL = `${GITHUB_ORG_BASE_URL}/projects/4`
const CUHACKING_2025_PLATFORM_GITHUB_REPOSITORY_URL = `${GITHUB_BASE_URL}/2025`
const CUHACKING_2025_PLATFORM_GITHUB_INDEX_PAGE_URL = `${GITHUB_BASE_URL}/2025/blob/main/apps/docs/content/docs/index.mdx`
// const CUHACKING_2025_LANDING_PAGE_GITHUB_REPOSITORY_URL = `${GITHUB_BASE_URL}/landing-page`
const CUHACKING_2025_FOR_HACKERS_BY_HACKERS = `${GITHUB_BASE_URL}/2025/graphs/contributors`

const CUHACKING_2025_LANDING_PAGE_URL = 'https://cuhacking.ca/'
// const CUHACKING_2025_LINKTREE_URL = 'https://linktr.ee/cuhacking_'
const portalLink_URL = 'https://portal.cuhacking.ca/'
// const designLink_URL = 'https://design.cuhacking.ca/'//
// const eslintLink_URL = 'https://eslint.cuhacking.ca/rules'
const discordLink_URL = 'https://discord.com/invite/h2cQqF9aZf'
const instagramLink_URL = 'https://www.instagram.com/cuhacking/'
// const linkedinLink_URL = 'https://www.linkedin.com/company/cuhacking/'
const figmaLink_URL = 'https://www.figma.com/design/wc1JOWR48tBNkjcjwY3AzB/%E2%8C%A8%EF%B8%8F-cuHacking-Design-System?node-id=0-1&t=YTR1ET4Qw1wG1cjz-1'
const projectBoardLink_URL = 'https://github.com/orgs/cuhacking/projects/4'
const linktreeLink_URL = 'https://linktr.ee/cuhacking_'

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

  test(`should take user to docs home page when cuHacking logo icon is clicked in header`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.cuHackingLogoIcon.click()
    await expect(docsLayoutPage.page).toHaveURL(DOCS_BASE_URL)
  })

  test(`should contain cuHacking logo Text in header`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.cuHackingLogoText).toBeVisible()
  })

  test(`should take user to docs home page when cuHacking logo text is clicked in header`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.cuHackingLogoText.click()
    await expect(docsLayoutPage.page).toHaveURL(DOCS_BASE_URL)
  })

  test(`Should Check for 'Tech Stack' Button`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.nextButton).toBeVisible()
  })

  test(`Should load index page when 'Edit on Github' is clicked'`, async ({ docsLayoutPage }) => {
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.editOnGithubButton, CUHACKING_2025_PLATFORM_GITHUB_INDEX_PAGE_URL)
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

  test(`Should have 'on this page' section visible in mobile/tablet header`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.onThisPage).toBeVisible()
  })

  test(`Should have "For Hackers by Hackers" text visible in mobile/tablet on this page`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.onThisPage.click()
    await expect(docsLayoutPage.forHackersByHackers).toBeVisible()
  })
  test(`Should click "For Hackers by Hackers" link mobile/tablet`, async ({ docsLayoutPage }) => {
    await docsLayoutPage.onThisPage.click()
    await expect(docsLayoutPage.forHackersByHackers).toBeVisible()
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.forHackersByHackers, CUHACKING_2025_FOR_HACKERS_BY_HACKERS)
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

  test(`Should contain Search Bar`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.searchBar).toBeVisible()
  })
  test(`Should check for theme toggle`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.themeToggle).toBeVisible()
  })
  test(`Should check for sidebar visability`, async ({ docsLayoutPage }) => {
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

  test('should contain website link', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.websiteLink).toBeVisible()
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.websiteLink, CUHACKING_2025_LANDING_PAGE_URL)
  })
  test('should contain portal link', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.portalLink).toBeVisible()
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.portalLink, portalLink_URL)
  })
  // test('should contain design link', async ({ docsLayoutPage }) => {
  //   await expect(docsLayoutPage.designLink).toBeVisible()
  //   await clickAndGoToPage(docsLayoutPage, docsLayoutPage.designLink, designLink_URL)

  // })
  // test('should contain eslint link', async ({ docsLayoutPage }) => {
  // await expect(docsLayoutPage.eslintLink).toBeVisible()
  //  await clickAndGoToPage(docsLayoutPage, docsLayoutPage.eslintLink, eslintLink_URL)

  // })
  test('should contain instagram link', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.instagramLink).toBeVisible()
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.instagramLink, instagramLink_URL)
  })
  test('should contain discord link', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.discordLink).toBeVisible()
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.discordLink, discordLink_URL)
  })
  test('should contain linktree link', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.linktreeLink).toBeVisible()
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.linktreeLink, linktreeLink_URL)
  })
  test('should contain figma link', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.figmaLink).toBeVisible()
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.figmaLink, figmaLink_URL)
  })
  test('should contain project board link', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.projectBoardLink).toBeVisible()
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.projectBoardLink, projectBoardLink_URL)
  })
  test('should contain github link', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.githubLink).toBeVisible()
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.githubLink, CUHACKING_2025_PLATFORM_GITHUB_REPOSITORY_URL)
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

  // test('should take user to current docs page file on the cuHacking Hacker Portal GitHub repository when the \'Edit on GitHub\' icon is clicked', async ({ docsLayoutPage }) => {
  // FIXME: navigate to a different page, click the button, and check that the url is the corresponding file on the GitHub repo.
  // Currently the test checks it against the index page instead of the current page. Also see TODO in `(docs)/page.tsx`.
  // await clickAndGoToPage(docsLayoutPage, docsLayoutPage.editOnGitHubButton, CUHACKING_2025_PLATFORM_GITHUB_INDEX_PAGE_URL)
  // })
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
