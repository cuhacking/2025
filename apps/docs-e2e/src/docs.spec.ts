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

const DEVICES: { DEVICE: string, VIEWPORT: { width: number, height: number } }[] = [
  { DEVICE: 'desktop', VIEWPORT: { width: 1024, height: 1440 } },
  { DEVICE: 'tablet', VIEWPORT: { width: 768, height: 1024 } },
  { DEVICE: 'mobile', VIEWPORT: { width: 320, height: 480 } },
]

const NARROW_DEVICES = DEVICES.filter(device => device.DEVICE !== 'desktop')
const WIDE_DEVICES = DEVICES.filter(device => device.DEVICE !== 'mobile')

const MOBILE_DEVICE = DEVICES.find(device => device.DEVICE === 'mobile')!
const TABLET_DEVICE = DEVICES.find(device => device.DEVICE === 'tablet')!

/* ---------------- MOBILE + DESKTOP + TABLET ---------------- */
for (const { DEVICE, VIEWPORT } of DEVICES) {
  test.describe(`[${DEVICE.toUpperCase()}] - Common Layout Elements`, {
    tag: '@smoke',
  }, () => {
    test.beforeEach(async ({ docsLayoutPage }) => {
      await docsLayoutPage.page.setViewportSize(VIEWPORT)
      await docsLayoutPage.goto()
    })

    test(`should contain ${DEVICE} title page`, async ({ docsLayoutPage }) => {
      await expect(docsLayoutPage.page).toHaveTitle(/Welcome to the Docs/)
    })

    test(`should contain cuHacking logo icon in ${DEVICE} header`, async ({ docsLayoutPage }) => {
      await expect(docsLayoutPage.cuHackingLogoIcon).toBeVisible()
    })

    test(`should take user to docs home page when cuHacking logo icon is clicked in ${DEVICE} header`, async ({ docsLayoutPage }) => {
      await docsLayoutPage.cuHackingLogoIcon.click()
      await expect(docsLayoutPage.page).toHaveURL(CUHACKING_2025_DOCS_URL)
    })

    test(`should contain cuHacking logo Text in ${DEVICE} header`, async ({ docsLayoutPage }) => {
      await expect(docsLayoutPage.cuHackingLogoText).toBeVisible()
    })

    test(`should take user to docs home page when cuHacking logo text is clicked in ${DEVICE} header`, async ({ docsLayoutPage }) => {
      await docsLayoutPage.cuHackingLogoText.click()
      await expect(docsLayoutPage.page).toHaveURL(CUHACKING_2025_DOCS_URL)
    })

    test(`should contain last updated text in docs page footer for ${DEVICE}`, async ({ docsLayoutPage }) => {
      await expect(docsLayoutPage.lastUpdatedText).toBeVisible()
    })
  })
}

/* ---------------- MOBILE + TABLET ---------------- */
for (const { DEVICE, VIEWPORT } of NARROW_DEVICES) {
  test.describe(`[${DEVICE.toUpperCase()}] - Common Mobile and Tablet Layout Elements`, {
    tag: '@smoke',
  }, () => {
    test.beforeEach(async ({ docsLayoutPage }) => {
      await docsLayoutPage.page.setViewportSize(VIEWPORT)
      await docsLayoutPage.goto()
    })

    test(`should have quick links section visible in ${DEVICE} header`, async ({ docsLayoutPage }) => {
      await expect(docsLayoutPage.quickLinks).toBeVisible()
    })

    test(`should have "Edit on Github" button visible in ${DEVICE} quick links`, async ({ docsLayoutPage }) => {
      await docsLayoutPage.quickLinks.click()
      await expect(docsLayoutPage.editOnGitHubButton).toBeVisible()
    })

    test(`should take user to github index page when "Edit on Github" button is clicked from ${DEVICE}`, async ({ docsLayoutPage }) => {
      await docsLayoutPage.quickLinks.click()
      await clickAndGoToPage(docsLayoutPage, docsLayoutPage.editOnGitHubButton, CUHACKING_2025_PLATFORM_GITHUB_INDEX_PAGE_URL)
    })
  })
}

/* ---------------- MOBILE + TABLET MENU ---------------- */
for (const { DEVICE, VIEWPORT } of NARROW_DEVICES) {
  test.describe(`[${DEVICE.toUpperCase()}] - Common Mobile and Tablet Menu Elements`, {
    tag: '@smoke',
  }, () => {
    test.beforeEach(async ({ docsLayoutPage }) => {
      await docsLayoutPage.goto()
      await docsLayoutPage.page.setViewportSize(VIEWPORT)
      if (DEVICE === 'mobile') {
        await docsLayoutPage.hamburgerIcon.click()
      }
      else if (DEVICE === 'tablet') {
        await docsLayoutPage.kebabIcon.click()
      }
    })

    test(`should have docs pages section dropdown menu visible for ${DEVICE}`, async ({ docsLayoutPage }) => {
      await expect(docsLayoutPage.sectionsDropdownButton).toBeVisible()
    })

    test(`should have website button visible from website dropdown for ${DEVICE}`, async ({ docsLayoutPage }) => {
      await docsLayoutPage.websiteDropdownButton.click()
      await expect(docsLayoutPage.mobileWebsiteLink).toBeVisible()
    })

    test(`should take user to landing page when website button is clicked for ${DEVICE}`, async ({ docsLayoutPage }) => {
      await docsLayoutPage.websiteDropdownButton.click()
      await clickAndGoToPage(docsLayoutPage, docsLayoutPage.mobileWebsiteLink, CUHACKING_2025_LANDING_PAGE_URL)
    })

    test(`should have website source button visible from website dropdown for ${DEVICE}`, async ({ docsLayoutPage }) => {
      await docsLayoutPage.websiteDropdownButton.click()
      await expect(docsLayoutPage.mobileWebsiteSourceLink).toBeVisible()
    })

    test(`should take user to landing page repository when website source button is clicked for ${DEVICE}`, async ({ docsLayoutPage }) => {
      await docsLayoutPage.websiteDropdownButton.click()
      await clickAndGoToPage(docsLayoutPage, docsLayoutPage.mobileWebsiteSourceLink, CUHACKING_2025_LANDING_PAGE_GITHUB_REPOSITORY_URL)
    })

    test(`should have hacker portal app button visible from hacker portal dropdown for ${DEVICE}`, async ({ docsLayoutPage }) => {
      await docsLayoutPage.hackerPortalDropdownButton.click()
      await expect(docsLayoutPage.mobileHackerAppLink).toBeVisible()
    })

    test(`should take user to hacker portal app when app button is clicked for ${DEVICE}`, async ({ docsLayoutPage }) => {
      await docsLayoutPage.hackerPortalDropdownButton.click()
      await docsLayoutPage.mobileHackerAppLink.click()
      await expect(docsLayoutPage.page).toHaveURL(DOCS_BASE_URL)
    })

    test(`should have hacker portal source button visible from hacker portal dropdown for ${DEVICE}`, async ({ docsLayoutPage }) => {
      await docsLayoutPage.hackerPortalDropdownButton.click()
      await expect(docsLayoutPage.mobileHackerPortalSourceLink).toBeVisible()
    })

    test(`should take user to hacker portal source repository when source button is clicked for ${DEVICE}`, async ({ docsLayoutPage }) => {
      await docsLayoutPage.hackerPortalDropdownButton.click()
      await clickAndGoToPage(docsLayoutPage, docsLayoutPage.mobileHackerPortalSourceLink, CUHACKING_2025_PLATFORM_GITHUB_REPOSITORY_URL)
    })

    test(`should have hacker portal project board button visible from hacker portal dropdown for ${DEVICE}`, async ({ docsLayoutPage }) => {
      await docsLayoutPage.hackerPortalDropdownButton.click()
      await expect(docsLayoutPage.mobileHackerPortalProjectBoardLink).toBeVisible()
    })

    test(`should take user to hacker portal project board when project board button is clicked ${DEVICE}`, async ({ docsLayoutPage }) => {
      await docsLayoutPage.hackerPortalDropdownButton.click()
      await clickAndGoToPage(docsLayoutPage, docsLayoutPage.mobileHackerPortalProjectBoardLink, CUHACKING_2025_PLATFORM_GITHUB_PROJECT_BOARD_URL)
    })

    test(`should have github button visible from ${DEVICE} menu`, async ({ docsLayoutPage }) => {
      await expect(docsLayoutPage.mobileGithubIcon).toBeVisible()
    })

    test(`should take user to github repository when github button is clicked for ${DEVICE}`, async ({ docsLayoutPage }) => {
      await clickAndGoToPage(docsLayoutPage, docsLayoutPage.mobileGithubIcon, CUHACKING_2025_PLATFORM_GITHUB_REPOSITORY_URL)
    })

    test(`should have theme toggle visible for ${DEVICE}`, async ({ docsLayoutPage }) => {
      await expect(docsLayoutPage.themeToggle).toBeVisible()
    })
  })
}

/* ---------------- TABLET + DESKTOP ---------------- */
for (const { DEVICE, VIEWPORT } of WIDE_DEVICES) {
  test.describe(`[${DEVICE.toUpperCase()}] - Common Tablet and Desktop Layout Elements`, {
    tag: '@smoke',
  }, () => {
    test.beforeEach(async ({ docsLayoutPage }) => {
      await docsLayoutPage.page.setViewportSize(VIEWPORT)
      await docsLayoutPage.goto()
    })

    test(`should contain search bar in ${DEVICE} header`, async ({ docsLayoutPage }) => {
      await expect(docsLayoutPage.searchBar).toBeVisible()
    })

    test(`should show search modal when search bar clicked in ${DEVICE} header`, async ({ docsLayoutPage }) => {
      await docsLayoutPage.searchBar.click()
      await expect(docsLayoutPage.searchDialog).toBeVisible()
    })

    test(`should have docs pages section dropdown menu visible in ${DEVICE} sidebar`, async ({ docsLayoutPage }) => {
      await expect(docsLayoutPage.sectionsDropdownButton).toBeVisible()
    })

    test(`should contain sidebar toggle in ${DEVICE} sidebar`, async ({ docsLayoutPage }) => {
      await expect(docsLayoutPage.sideBarToggle).toBeVisible()
    })
  })
}

/* ---------------- UNIQUE DESKTOP HEADER ---------------- */
test.describe('[DESKTOP] - Unique Header Elements', {
  tag: '@smoke',
}, () => {
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
test.describe('[DESKTOP]- Unique Floating Table of Contents Elements', {
  tag: '@smoke',
}, () => {
  test('should contain \'Edit on GitHub\' button in floating table of contents', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.editOnGitHubButton).toBeVisible()
  })

  test('should take user to current docs page file on the cuHacking Hacker Portal GitHub repository when the \'Edit on GitHub\' icon is clicked', async ({ docsLayoutPage }) => {
    await clickAndGoToPage(docsLayoutPage, docsLayoutPage.editOnGitHubButton, CUHACKING_2025_PLATFORM_GITHUB_INDEX_PAGE_URL)
  })
})

/* ---------------- UNIQUE MOBILE HEADER ---------------- */
test.describe('[MOBILE] - Unique Header Elements', {
  tag: '@smoke',
}, () => {
  test.beforeEach(async ({ docsLayoutPage }) => {
    await docsLayoutPage.goto()
    await docsLayoutPage.page.setViewportSize(MOBILE_DEVICE.VIEWPORT)
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
test.describe('[TABLET] - Unique Header Elements', {
  tag: '@smoke',
}, () => {
  test.beforeEach(async ({ docsLayoutPage }) => {
    await docsLayoutPage.goto()
    await docsLayoutPage.page.setViewportSize(TABLET_DEVICE.VIEWPORT)
  })

  test('should have kebab icon visible', async ({ docsLayoutPage }) => {
    await expect(docsLayoutPage.kebabIcon).toBeVisible()
  })
})
