import { test as base, expect } from '@playwright/test'
import { CUHACKING_2025_DISCORD_URL, CUHACKING_2025_DOCS_URL, CUHACKING_2025_EMAIL_URL, CUHACKING_2025_FIGMA_URL, CUHACKING_2025_GITHUB_REPOSITORY_URL, CUHACKING_2025_LINKTREE_URL } from '@website-e2e/shared/constants'
import { clickAndGoToPage } from '@website-e2e/shared/utils/click-and-go-to-page'
import { WelcomeSectionLayout } from './pom'

const test = base.extend<{ welcomeSectionLayout: WelcomeSectionLayout }>({
  welcomeSectionLayout: async ({ page }, use) => {
    const welcomeSectionLayout = new WelcomeSectionLayout(page)
    await welcomeSectionLayout.goto()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(welcomeSectionLayout)
  },
})
export function welcomeMobileTabletDesktop() {
  test.describe('WELCOME SECTION - Common Mobile + Tablet + Desktop Layout Elements', {
    tag: '@smoke',
  }, () => {
    test('should contain welcome section', async ({ welcomeSectionLayout }) => {
      await expect(welcomeSectionLayout.welcomeSection).toBeVisible()
    })
  })
  test.describe('WELCOME SECTION - Common Mobile + Tablet + Desktop Platform Links', {
    tag: '@smoke',
  }, () => {
    test('should contain Discord link in welcome section', async ({ welcomeSectionLayout }) => {
      await expect(welcomeSectionLayout.discordLinkWelcome).toBeVisible()
    })

    test('should take user to Discord page from welcome section', async ({ welcomeSectionLayout }) => {
      const res = await clickAndGoToPage(welcomeSectionLayout, welcomeSectionLayout.discordLinkWelcome)
      await expect(res).toHaveURL(CUHACKING_2025_DISCORD_URL)
    })

    test('should contain Instagram link in welcome section', async ({ welcomeSectionLayout }) => {
      await expect(welcomeSectionLayout.instagramLinkWelcome).toBeVisible()
    })

    // TODO: Instagram requires auth
    // test('should take user to Instagram page from welcome section', async ({ welcomeSectionLayout }) => {
    //   const res = await clickAndGoToPage(welcomeSectionLayout, welcomeSectionLayout.instagramLinkWelcome)
    //   await expect(res).toHaveURL(CUHACKING_2025_INSTAGRAM_URL)
    // })

    test('should contain LinkedIn link in welcome section', async ({ welcomeSectionLayout }) => {
      await expect(welcomeSectionLayout.linkedinLinkWelcome).toBeVisible()
    })

    // TODO: LinkedIn requires auth
    // test('should take user to LinkedIn page from welcome section', async ({ welcomeSectionLayout }) => {
    //   const res = await clickAndGoToPage(welcomeSectionLayout, welcomeSectionLayout.linkedinLinkWelcome)
    //   await expect(res).toHaveURL(CUHACKING_2025_LINKED_IN_URL)
    // })

    test('should contain Linktree link in welcome section', async ({ welcomeSectionLayout }) => {
      await expect(welcomeSectionLayout.linktreeLinkWelcome).toBeVisible()
    })

    test('should take user to Linktree page from welcome section', async ({ welcomeSectionLayout }) => {
      const res = await clickAndGoToPage(welcomeSectionLayout, welcomeSectionLayout.linktreeLinkWelcome)
      await expect(res).toHaveURL(CUHACKING_2025_LINKTREE_URL)
    })

    test('should contain Figma link in welcome section', async ({ welcomeSectionLayout }) => {
      await expect(welcomeSectionLayout.figmaLinkWelcome).toBeVisible()
    })

    test('should take user to Figma page from welcome section', async ({ welcomeSectionLayout }) => {
      const res = await clickAndGoToPage(welcomeSectionLayout, welcomeSectionLayout.figmaLinkWelcome)
      expect(res.url()).toMatch(new RegExp(`^${CUHACKING_2025_FIGMA_URL}`))
    })

    test('should contain GitHub link in welcome section', async ({ welcomeSectionLayout }) => {
      await expect(welcomeSectionLayout.githubLinkWelcome).toBeVisible()
    })

    test('should take user to GitHub page from welcome section', async ({ welcomeSectionLayout }) => {
      const res = await clickAndGoToPage(welcomeSectionLayout, welcomeSectionLayout.githubLinkWelcome)
      await expect(res).toHaveURL(CUHACKING_2025_GITHUB_REPOSITORY_URL)
    })

    test('should contain Email link in welcome section', async ({ welcomeSectionLayout }) => {
      await expect(welcomeSectionLayout.emailLinkWelcome).toBeVisible()
    })

    test('should take user to Email page from welcome section', async ({ welcomeSectionLayout }) => {
      const href = welcomeSectionLayout.emailLinkWelcome
      await expect(href).toHaveAttribute('href', CUHACKING_2025_EMAIL_URL)
    })

    test('should contain Docs link in welcome section', async ({ welcomeSectionLayout }) => {
      await expect(welcomeSectionLayout.docsLinkWelcome).toBeVisible()
    })

    test('should take user to Docs page from welcome section', async ({ welcomeSectionLayout }) => {
      const res = await clickAndGoToPage(welcomeSectionLayout, welcomeSectionLayout.docsLinkWelcome)
      await expect(res).toHaveURL(CUHACKING_2025_DOCS_URL)
    })
  })
}
