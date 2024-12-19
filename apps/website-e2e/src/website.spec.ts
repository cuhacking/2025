// import type { Browser } from 'playwright'
// import { chromium, expect, test } from '@playwright/test'
import { test as base, expect } from '@playwright/test'
import { clickAndGoToPage } from '@website-e2e/utils/click-and-go-to-page'
import { WebsiteLayout } from './pom'

const test = base.extend<{ websiteLayoutPage: WebsiteLayout }>({
  websiteLayoutPage: async ({ page }, use) => {
    const websiteLayoutPage = new WebsiteLayout(page)
    await websiteLayoutPage.goto()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(websiteLayoutPage)
  },
})

const CUHACKING_2025_WEBSITE_URL = 'http://localhost:3000'

// TODO: Add LinkedIn and Instagram links once auth w/Playwright is implemented
// const CUHACKING_2025_LINKED_IN_URL = 'https://www.linkedin.com/company/cuhacking/'
// const CUHACKING_2025_INSTAGRAM_URL = 'https://www.instagram.com/cuhacking/'
const CUHACKING_2025_GITHUB_REPOSITORY_URL = 'https://github.com/cuhacking/2025'
const CUHACKING_2025_LINKTREE_URL = 'https://linktr.ee/cuhacking_'
const CUHACKING_2025_DISCORD_URL = 'https://discord.com/invite/h2cQqF9aZf'
const CUHACKING_2025_FIGMA_URL = 'https://www.figma.com/design/wc1JOWR48tBNkjcjwY3AzB/%E2%8C%A8%EF%B8%8F-cuHacking-Design-System'
const CUHACKING_2025_EMAIL_URL = 'mailto:info@cuhacking.ca'
const CUHACKING_2025_DOCS_URL = 'https://docs.cuhacking.ca/'
const CUHACKING_2025_SPONSORSHIP_PACKAGE = 'https://drive.google.com/file/d/1mchFDm7D8lqmVO7Y8H3WOvE2yYwNWUOm/view'
const CUHACKING_WEBSITE_ABOUT_URL = `${CUHACKING_2025_WEBSITE_URL}/#about`
const CUHACKING_WEBSITE_EVENTS_URL = `${CUHACKING_2025_WEBSITE_URL}/#events`
const CUHACKING_WEBSITE_SPONSORS_URL = `${CUHACKING_2025_WEBSITE_URL}/#sponsors`
const CUHACKING_WEBSITE_FAQ_URL = `${CUHACKING_2025_WEBSITE_URL}/#faq`

/* ---------------- MOBILE + DESKTOP + TABLET ---------------- */
test.describe('Common MOBILE, TABLE, and DESKTOP layout elements', {
  tag: '@smoke',
}, () => {
  test('should contain cuHacking logo', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.cuHackingLogoIconNav).toBeVisible()
  })

  test('should return to home page when cuHacking logo on navbar is clicked', async ({ websiteLayoutPage }) => {
    websiteLayoutPage.cuHackingLogoIconNav.click()
    await expect(websiteLayoutPage.page).toHaveURL(CUHACKING_2025_WEBSITE_URL)
  })

  test('should contain cuHacking logo in footer', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.cuHackingLogoFooter).toBeVisible()
  })

  test('should return to home page when cuHacking logo in footer is clicked', async ({ websiteLayoutPage }) => {
    websiteLayoutPage.cuHackingLogoFooter.click()
    await expect(websiteLayoutPage.page).toHaveURL(CUHACKING_2025_WEBSITE_URL)
  })

  test('should contain sponsorship package link', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.sponsorshipPackage).toBeVisible()
  })

  test('should return to home page when cuHacking logo in footer is clicked', async ({ websiteLayoutPage }) => {
    const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.cuHackingLogoFooter)
    await expect(res).toHaveURL(CUHACKING_2025_WEBSITE_URL)
  })
  test('should contain footer', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.footerSection).toBeVisible()
  })

  test('should contain navbar', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.navbarSection).toBeVisible()
  })

  test('should contain welcome section', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.welcomeSection).toBeVisible()
  })

  test('should contain about section', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.aboutSection).toBeVisible()
  })

  test('should contain events section', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.eventsSection).toBeVisible()
  })

  test('should contain sponsors section', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.sponsorsSection).toBeVisible()
  })

  test('should contain FAQ section', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.faqSection).toBeVisible()
  })

  test('should contain a sponsorship package', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.sponsorshipPackage).toBeVisible()
  })
  test('should go to sponsorship package when sponsorship package is clicked', async ({ websiteLayoutPage }) => {
    const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.sponsorshipPackage)
    await expect(res).toHaveURL(CUHACKING_2025_SPONSORSHIP_PACKAGE)
  })
})

test.describe(`Common MOBILE, TABLET and DESKTOP links`, {
  tag: '@smoke',
}, () => {
  test('should contain Discord link in footer', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.discordLinkFooter).toBeVisible()
  })

  test('should take user to Discord page from footer', async ({ websiteLayoutPage }) => {
    const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.discordLinkFooter)
    await expect(res).toHaveURL(CUHACKING_2025_DISCORD_URL)
  })

  test('should contain Instagram link in footer', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.instagramLinkFooter).toBeVisible()
  })

  // TODO: Instagram requires auth
  // test('should take user to Instagram page from footer', async ({ websiteLayoutPage }) => {
  //   const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.instagramLinkFooter)
  //   await expect(res).toHaveURL(CUHACKING_2025_INSTAGRAM_URL)
  // })

  test('should contain LinkedIn link in footer', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.linkedinLinkFooter).toBeVisible()
  })

  // TODO: Update when auth w/Playwright is implemented
  // test('should take user to LinkedIn page from footer', async ({ websiteLayoutPage }) => {
  //   const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.linkedinLinkFooter)
  //   await expect(res).toHaveURL(CUHACKING_2025_LINKED_IN_URL)
  // })

  test('should contain Linktree link in footer', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.linktreeLinkFooter).toBeVisible()
  })

  test('should take user to Linktree page from footer', async ({ websiteLayoutPage }) => {
    const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.linktreeLinkFooter)
    await expect(res).toHaveURL(CUHACKING_2025_LINKTREE_URL)
  })

  test('should contain Figma link in footer', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.figmaLinkFooter).toBeVisible()
  })

  test('should take user to Figma page from footer', async ({ websiteLayoutPage }) => {
    const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.figmaLinkFooter)
    expect(res.url()).toMatch(new RegExp(`^${CUHACKING_2025_FIGMA_URL}`))
  })

  test('should contain GitHub link in footer', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.githubLinkFooter).toBeVisible()
  })

  test('should take user to GitHub page from footer', async ({ websiteLayoutPage }) => {
    const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.githubLinkFooter)
    await expect(res).toHaveURL(CUHACKING_2025_GITHUB_REPOSITORY_URL)
  })

  test('should contain Email link in footer', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.emailLinkFooter).toBeVisible()
  })

  test('should take user to Email page from footer', async ({ websiteLayoutPage }) => {
    const href = websiteLayoutPage.emailLinkFooter
    await expect(href).toHaveAttribute('href', CUHACKING_2025_EMAIL_URL)
  })

  test('should contain Docs link in footer', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.docsLinkFooter).toBeVisible()
  })

  test('should take user to Docs page from footer', async ({ websiteLayoutPage }) => {
    const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.docsLinkFooter)
    await expect(res).toHaveURL(CUHACKING_2025_DOCS_URL)
  })

  test('should contain Discord link in welcome section', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.discordLinkWelcome).toBeVisible()
  })

  test('should take user to Discord page from welcome section', async ({ websiteLayoutPage }) => {
    const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.discordLinkWelcome)
    await expect(res).toHaveURL(CUHACKING_2025_DISCORD_URL)
  })

  test('should contain Instagram link in welcome section', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.instagramLinkWelcome).toBeVisible()
  })

  // TODO: Instagram requires auth
  // test('should take user to Instagram page from welcome section', async ({ websiteLayoutPage }) => {
  //   const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.instagramLinkWelcome)
  //   await expect(res).toHaveURL(CUHACKING_2025_INSTAGRAM_URL)
  // })

  test('should contain LinkedIn link in welcome section', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.linkedinLinkWelcome).toBeVisible()
  })

  // TODO: LinkedIn requires auth
  // test('should take user to LinkedIn page from welcome section', async ({ websiteLayoutPage }) => {
  //   const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.linkedinLinkWelcome)
  //   await expect(res).toHaveURL(CUHACKING_2025_LINKED_IN_URL)
  // })

  test('should contain Linktree link in welcome section', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.linktreeLinkWelcome).toBeVisible()
  })

  test('should take user to Linktree page from welcome section', async ({ websiteLayoutPage }) => {
    const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.linktreeLinkWelcome)
    await expect(res).toHaveURL(CUHACKING_2025_LINKTREE_URL)
  })

  test('should contain Figma link in welcome section', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.figmaLinkWelcome).toBeVisible()
  })

  test('should take user to Figma page from welcome section', async ({ websiteLayoutPage }) => {
    const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.figmaLinkWelcome)
    expect(res.url()).toMatch(new RegExp(`^${CUHACKING_2025_FIGMA_URL}`))
  })

  test('should contain GitHub link in welcome section', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.githubLinkWelcome).toBeVisible()
  })

  test('should take user to GitHub page from welcome section', async ({ websiteLayoutPage }) => {
    const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.githubLinkWelcome)
    await expect(res).toHaveURL(CUHACKING_2025_GITHUB_REPOSITORY_URL)
  })

  test('should contain Email link in welcome section', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.emailLinkWelcome).toBeVisible()
  })

  test('should take user to Email page from welcome section', async ({ websiteLayoutPage }) => {
    const href = websiteLayoutPage.emailLinkWelcome
    await expect(href).toHaveAttribute('href', CUHACKING_2025_EMAIL_URL)
  })

  test('should contain Docs link in welcome section', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.docsLinkWelcome).toBeVisible()
  })

  test('should take user to Docs page from welcome section', async ({ websiteLayoutPage }) => {
    const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.docsLinkWelcome)
    await expect(res).toHaveURL(CUHACKING_2025_DOCS_URL)
  })
})

test.describe('Common TABLET and DESKTOP links', {
  tag: '@smoke',
}, () => {
  test.beforeEach(async () => {
    const device = test.info().project.name
    if (device.includes('mobile')) {
      test.skip()
    }
  })

  test('should contain About link in navbar', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.aboutLink).toBeVisible()
  })

  test('should take user to About section from navbar', async ({ websiteLayoutPage }) => {
    await websiteLayoutPage.aboutLink.click()
    await expect(websiteLayoutPage.page).toHaveURL(CUHACKING_WEBSITE_ABOUT_URL)
  })

  test('should contain Events link in navbar', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.eventsLink).toBeVisible()
  })

  test('should take user to Events section from navbar', async ({ websiteLayoutPage }) => {
    await websiteLayoutPage.eventsLink.click()
    await expect(websiteLayoutPage.page).toHaveURL(CUHACKING_WEBSITE_EVENTS_URL)
  })

  test('should contain Sponsors link in navbar', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.sponsorsLink).toBeVisible()
  })

  test('should take user to Sponsors section from navbar', async ({ websiteLayoutPage }) => {
    await websiteLayoutPage.sponsorsLink.click()
    await expect(websiteLayoutPage.page).toHaveURL(CUHACKING_WEBSITE_SPONSORS_URL)
  })

  test('should contain FAQ link in navbar', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.faqLink).toBeVisible()
  })

  test('should take user to FAQ section from navbar', async ({ websiteLayoutPage }) => {
    await websiteLayoutPage.faqLink.click()
    await expect(websiteLayoutPage.page).toHaveURL(CUHACKING_WEBSITE_FAQ_URL)
  })
})

// ------- MOBILE ---------
test.describe('Common MOBILE Layout elements', {
  tag: '@smoke',
}, () => {
  test.beforeEach(async () => {
    const device = test.info().project.name
    if (device.includes('desktop') || device.includes('tablet')) {
      test.skip()
    }
  })
  test('should contain hamburger icon in navbar', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.hamburgerIcon).toBeVisible()
  })
})

test.describe('Common MOBILE Links', {
  tag: '@smoke',
}, () => {
  test.beforeEach(async ({ websiteLayoutPage }) => {
    const device = test.info().project.name
    if (device.includes('desktop') || device.includes('tablet')) {
      test.skip()
      return
    }
    await websiteLayoutPage.hamburgerIcon.click()
  })

  test('should contain Discord link in navbar', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.discordLinkNavbar).toBeVisible()
  })

  test('should take user to Discord page from navbar', async ({ websiteLayoutPage }) => {
    const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.discordLinkNavbar)
    await expect(res).toHaveURL(CUHACKING_2025_DISCORD_URL)
  })

  test('should contain Instagram link in navbar', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.instagramLinkNavbar).toBeVisible()
  })

  // TODO: Instagram requires auth
  // test('should take user to Instagram page from Navbar', async ({ websiteLayoutPage }) => {
  //   const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.instagramLinkNavbar)
  //   await expect(res).toHaveURL(CUHACKING_2025_INSTAGRAM_URL)
  // })

  test('should contain LinkedIn link in navbar', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.linkedinLinkNavbar).toBeVisible()
  })

  // TODO: Update when auth w/Playwright is implemented
  // test('should take user to LinkedIn page from Navbar', async ({ websiteLayoutPage }) => {
  //   const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.linkedinLinkNavbar)
  //   await expect(res).toHaveURL(CUHACKING_2025_LINKED_IN_URL)
  // })

  test('should contain Linktree link in navbar', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.linktreeLinkNavbar).toBeVisible()
  })

  test('should take user to Linktree page from navbar', async ({ websiteLayoutPage }) => {
    const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.linktreeLinkNavbar)
    await expect(res).toHaveURL(CUHACKING_2025_LINKTREE_URL)
  })

  test('should contain Figma link in navbar', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.figmaLinkNavbar).toBeVisible()
  })

  test('should take user to Figma page from navbar', async ({ websiteLayoutPage }) => {
    const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.figmaLinkNavbar)
    expect(res.url()).toMatch(new RegExp(`^${CUHACKING_2025_FIGMA_URL}`))
  })

  test('should contain GitHub link in navbar', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.githubLinkNavbar).toBeVisible()
  })

  test('should take user to GitHub page from navbar', async ({ websiteLayoutPage }) => {
    const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.githubLinkNavbar)
    await expect(res).toHaveURL(CUHACKING_2025_GITHUB_REPOSITORY_URL)
  })

  test('should contain Email link in navbar', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.emailLinkNavbar).toBeVisible()
  })

  test('should take user to Email page from navbar', async ({ websiteLayoutPage }) => {
    const href = websiteLayoutPage.emailLinkNavbar
    await expect(href).toHaveAttribute('href', CUHACKING_2025_EMAIL_URL)
  })

  test('should contain Docs link in navbar', async ({ websiteLayoutPage }) => {
    await expect(websiteLayoutPage.docsLinkNavbar).toBeVisible()
  })

  test('should take user to Docs page from navbar', async ({ websiteLayoutPage }) => {
    const res = await clickAndGoToPage(websiteLayoutPage, websiteLayoutPage.docsLinkNavbar)
    await expect(res).toHaveURL(CUHACKING_2025_DOCS_URL)
  })
})

// TODO: Update when auth w/Playwright is implemented
// const CUHACKING_2025_LINKED_IN_URL = 'https://www.linkedin.com/company/cuhacking/'

// import getPort from 'get-port'
// import { playAudit } from 'playwright-lighthouse'

// const lighthouseTest = test.extend<{ Page }, { port: number, browser: Browser }>({
//   port: [
//     async (use) => {
//       // Assign a unique port for each playwright worker to support parallel tests
//       const port = await getPort()
//       await use(port)
//     },
//     { scope: 'worker' },
//   ],

//   browser: [
//     async ({ port }, use) => {
//       const browser = await chromium.launch({
//         args: [`--remote-debugging-port=${port}`],
//       })
//       await use(browser)
//     },
//     { scope: 'worker' },
//   ],
// })

// const thresholdsConfig = {
//   'performance': 90,
//   'accessibility': 90,
//   'best-practices': 90,
//   'seo': 90,
//   // 'pwa': 50,
// }

// TODO: re-activate after website refactor (three.js/spline)
// lighthouseTest('should pass lighthouse audits', async ({ page, port }) => {
//   await page.goto('/')

//   await playAudit({
//     page,
//     port,
//     thresholds: thresholdsConfig,
//     reports: {
//       formats: {
//         // json: true, // defaults to false
//         html: true, // defaults to false
//         // csv: true, // defaults to false
//       },
//       name: `latest-report`, // defaults to `lighthouse-${new Date().getTime()}`
//       directory: `${process.cwd()}../../../lighthouse-report`, // defaults to `${process.cwd()}/lighthouse`
//     },
//   })
// })
