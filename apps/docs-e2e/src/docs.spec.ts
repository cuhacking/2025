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
const GITHUB_ORG_BASE_URL = 'https://github.com/orgs/cuhacking'
const DOCS_BASE_URL = 'http://localhost:3000'

const CUHACKING_2025_GITHUB_PROJECT_BOARD_URL = `${GITHUB_ORG_BASE_URL}/projects/4`
const CUHACKING_2025_GITHUB_REPOSITORY_URL = `${GITHUB_BASE_URL}/2025`
const CUHACKING_2025_GITHUB_INDEX_PAGE_URL = `${GITHUB_BASE_URL}/2025/blob/main/apps/docs/content/docs/index.mdx`

const CUHACKING_2025_FOR_HACKERS_BY_HACKERS = `${GITHUB_BASE_URL}/2025/graphs/contributors`
const CUHACKING_2025_LANDING_PAGE_URL = 'https://cuhacking.ca/'
const CUHACKING_2025_LINKTREE_URL = 'https://linktr.ee/cuhacking_'
const CUHACKING_2025_PORTAL_URL = 'https://portal.cuhacking.ca/'

// TODO: Uncomment when the links are available - see tests below
// const CUHACKING_2025_DESIGN_URL = 'https://design.cuhacking.ca/'
// const CUHACKING_2025_ESLINT_URL = 'https://eslint.cuhacking.ca/rules'

const CUHACKING_2025_DISCORD_URL = 'https://discord.com/invite/h2cQqF9aZf'
// const CUHACKING_2025_INSTAGRAM_URL = 'https://www.instagram.com/cuhacking/'

// TODO: Uncomment when the link works - see test below
// const CUHACKING_2025_LINKED_IN_URL = 'https://www.linkedin.com/company/cuhacking/'
const CUHACKING_2025_FIGMA_URL = 'https://www.figma.com/design/wc1JOWR48tBNkjcjwY3AzB/%E2%8C%A8%EF%B8%8F-cuHacking-Design-System?node-id=0-1&t=YTR1ET4Qw1wG1cjz-1'

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

  test(`should check for 'Next page' Button`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.nextButton).toBeVisible()
  })

  test(`should contain 'Edit on Github' button`, async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.editOnGithubButton).toBeVisible()
  })

  test(`should load index page when 'Edit on Github' is clicked`, async ({ docsLayoutPage }) => {
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.editOnGithubButton, CUHACKING_2025_GITHUB_INDEX_PAGE_URL)
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
  test('should contain website link', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.websiteLink).toBeVisible()
  })

  test('should take user to website when website link clicked', async ({ docsLayoutPage }) => {
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.websiteLink, CUHACKING_2025_LANDING_PAGE_URL)
  })

  test('should contain Portal link', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.portalLink).toBeVisible()
  })

  test('should take user to Portal when Portal link is clicked', async ({ docsLayoutPage }) => {
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.portalLink, CUHACKING_2025_PORTAL_URL)
  })

  test('should contain design link', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.designLink).toBeVisible()
  })

  // TODO: Uncomment when the link is available

  // test('should take user to design site when design link clicked', async ({ docsLayoutPage }) => {
  //   await clickAndGoToPage(docsLayoutPage, docsLayoutPage.designLink, CUHACKING_2025_DESIGN_URL)
  // })

  test('should contain Eslint link', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.eslintLink).toBeVisible()
  })
  // TODO: Uncomment when the link is available

  // test('should take user to eslint site when eslint link clicked', async ({ docsLayoutPage }) => {
  //   await clickAndGoToPage(docsLayoutPage, docsLayoutPage.eslintLink, CUHACKING_2025_ESLINT_URL)
  // })

  test('should contain discord link', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.discordLink).toBeVisible()
  })

  test('should take user to Discord link site when Discord link clicked', async ({ docsLayoutPage }) => {
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.discordLink, CUHACKING_2025_DISCORD_URL)
  })

  test('should contain Instagram link', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.instagramLink).toBeVisible()
  })

  // TODO: Instagram link requires auth to view

  // test('should take user to Instagram when Instagram link clicked', async ({ docsLayoutPage }) => {
  //   await clickAndGoToPage(docsLayoutPage, docsLayoutPage.instagramLink, CUHACKING_2025_INSTAGRAM_URL)
  // })

  test('should contain LinkedIn link', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.linkedinLink).toBeVisible()
  })

  // TODO: LinkedIn link requires auth to view

  // test('should take user to LinkedIn when LinkedIn link clicked', async ({ docsLayoutPage }) => {
  //   await clickAndGoToPage(docsLayoutPage, docsLayoutPage.linkedinLink, CUHACKING_2025_LINKED_IN_URL)
  // })

  test('should contain Linktree link', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.linktreeLink).toBeVisible()
  })

  test('should take user to Linktree when Linktree link is clicked', async ({ docsLayoutPage }) => {
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.linktreeLink, CUHACKING_2025_LINKTREE_URL)
  })

  test('should contain Figma link', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.figmaLink).toBeVisible()
  })

  test('should take user to Figma when Figma link is clicked', async ({ docsLayoutPage }) => {
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.figmaLink, CUHACKING_2025_FIGMA_URL)
  })

  test('should contain Project board link', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.projectBoardLink).toBeVisible()
  })

  test('should take user to Project board when Project board link is clicked', async ({ docsLayoutPage }) => {
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.projectBoardLink, CUHACKING_2025_GITHUB_PROJECT_BOARD_URL)
  })

  test('should contain Github link', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.githubLink).toBeVisible()
  })

  test('should take user to Github repo when Github link is clicked', async ({ docsLayoutPage }) => {
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.githubLink, CUHACKING_2025_GITHUB_REPOSITORY_URL)
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
  test.beforeEach(async () => {
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

  test(`should check for theme toggle`, async ({ docsLayoutPage }) => {
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

/* ---------------- UNIQUE DESKTOP FLOATING TABLE ---------------- */
test.describe('Unique DESKTOP Floating Table Elements', {
  tag: '@smoke',
}, () => {
  test.beforeEach(async () => {
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

  test(`should click "For Hackers by Hackers" link`, async ({ docsLayoutPage }) => {
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.forHackersByHackers, CUHACKING_2025_FOR_HACKERS_BY_HACKERS)
  })

  // test('should take user to current docs page file on the cuHacking Hacker Portal GitHub repository when the \'Edit on GitHub\' icon is clicked', async ({ docsLayoutPage }) => {
  // FIXME: navigate to a different page, click the button, and check that the url is the corresponding file on the GitHub repo.
  // Currently the test checks it against the index page instead of the current page. Also see TODO in `(docs)/page.tsx`.
  // await clickAndGoToPage(docsLayoutPage, docsLayoutPage.editOnGitHubButton, CUHACKING_2025_PLATFORM_GITHUB_INDEX_PAGE_URL)
  // })
})
