import { test as base, expect } from '@playwright/test'
import { CUHACKING_2025_DISCORD_URL, CUHACKING_2025_DOCS_URL, CUHACKING_2025_EMAIL_URL, CUHACKING_2025_FIGMA_URL, CUHACKING_2025_GITHUB_REPOSITORY_URL, CUHACKING_2025_LINKTREE_URL, CUHACKING_2025_WEBSITE_URL } from '@website-e2e/shared/constants'
import { clickAndGoToPage } from '@website-e2e/shared/utils/click-and-go-to-page'
import { FooterLayout } from './pom'

const test = base.extend<{ footerLayout: FooterLayout }>({
  footerLayout: async ({ page }, use) => {
    const footerLayout = new FooterLayout(page)
    await footerLayout.goto()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(footerLayout)
  },
})

export function footerMobileTabletDesktop() {
  test.describe('FOOTER - Common Mobile, Tablet, and Desktop layout elements', () => {
    test('should contain footer', async ({ footerLayout }) => {
      await expect(footerLayout.footerSection).toBeVisible()
    })
    test('should contain cuHacking logo in footer', async ({ footerLayout }) => {
      await expect(footerLayout.cuHackingLogoFooter).toBeVisible()
    })

    test('should return to home page when cuHacking logo in footer is clicked', async ({ footerLayout }) => {
      footerLayout.cuHackingLogoFooter.click()
      await expect(footerLayout.page).toHaveURL(CUHACKING_2025_WEBSITE_URL)
    })
  })

  test.describe('FOOTER - Common Mobile, Tablet, and Desktop links', () => {
    test('should contain Discord link in footer', async ({ footerLayout }) => {
      await expect(footerLayout.discordLinkFooter).toBeVisible()
    })

    test('should take user to Discord page from footer', async ({ footerLayout }) => {
      const res = await clickAndGoToPage(footerLayout, footerLayout.discordLinkFooter)
      await expect(res).toHaveURL(CUHACKING_2025_DISCORD_URL)
    })

    test('should contain Instagram link in footer', async ({ footerLayout }) => {
      await expect(footerLayout.instagramLinkFooter).toBeVisible()
    })

    // TODO: Instagram requires auth
    // test('should take user to Instagram page from footer', async ({ footerLayout }) => {
    //   const res = await clickAndGoToPage(footerLayout, footerLayout.instagramLinkFooter)
    //   await expect(res).toHaveURL(CUHACKING_2025_INSTAGRAM_URL)
    // })

    test('should contain LinkedIn link in footer', async ({ footerLayout }) => {
      await expect(footerLayout.linkedinLinkFooter).toBeVisible()
    })

    // TODO: Update when auth w/Playwright is implemented
    // test('should take user to LinkedIn page from footer', async ({ footerLayout }) => {
    //   const res = await clickAndGoToPage(footerLayout, footerLayout.linkedinLinkFooter)
    //   await expect(res).toHaveURL(CUHACKING_2025_LINKED_IN_URL)
    // })

    test('should contain Linktree link in footer', async ({ footerLayout }) => {
      await expect(footerLayout.linktreeLinkFooter).toBeVisible()
    })

    test('should take user to Linktree page from footer', async ({ footerLayout }) => {
      const res = await clickAndGoToPage(footerLayout, footerLayout.linktreeLinkFooter)
      await expect(res).toHaveURL(CUHACKING_2025_LINKTREE_URL)
    })

    test('should contain Figma link in footer', async ({ footerLayout }) => {
      await expect(footerLayout.figmaLinkFooter).toBeVisible()
    })

    test('should take user to Figma page from footer', async ({ footerLayout }) => {
      const res = await clickAndGoToPage(footerLayout, footerLayout.figmaLinkFooter)
      expect(res.url()).toMatch(new RegExp(`^${CUHACKING_2025_FIGMA_URL}`))
    })

    test('should contain GitHub link in footer', async ({ footerLayout }) => {
      await expect(footerLayout.githubLinkFooter).toBeVisible()
    })

    test('should take user to GitHub page from footer', async ({ footerLayout }) => {
      const res = await clickAndGoToPage(footerLayout, footerLayout.githubLinkFooter)
      await expect(res).toHaveURL(CUHACKING_2025_GITHUB_REPOSITORY_URL)
    })

    test('should contain Email link in footer', async ({ footerLayout }) => {
      await expect(footerLayout.emailLinkFooter).toBeVisible()
    })

    test('should take user to Email page from footer', async ({ footerLayout }) => {
      const href = footerLayout.emailLinkFooter
      await expect(href).toHaveAttribute('href', CUHACKING_2025_EMAIL_URL)
    })

    test('should contain Docs link in footer', async ({ footerLayout }) => {
      await expect(footerLayout.docsLinkFooter).toBeVisible()
    })

    test('should take user to Docs page from footer', async ({ footerLayout }) => {
      const res = await clickAndGoToPage(footerLayout, footerLayout.docsLinkFooter)
      await expect(res).toHaveURL(CUHACKING_2025_DOCS_URL)
    })
  })
}
