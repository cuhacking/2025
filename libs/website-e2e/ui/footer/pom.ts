import type { Locator, Page } from '@playwright/test'
import { CUHACKING_2025_WEBSITE_URL } from '@website-e2e/shared/constants'

export class FooterLayout {
  readonly page: Page
  readonly cuHackingLogoFooter: Locator
  readonly footerSection: Locator

  // --------LINKS--------
  readonly discordLinkFooter: Locator
  readonly instagramLinkFooter: Locator
  readonly linkedinLinkFooter: Locator
  readonly linktreeLinkFooter: Locator
  readonly figmaLinkFooter: Locator
  readonly githubLinkFooter: Locator
  readonly emailLinkFooter: Locator
  readonly docsLinkFooter: Locator

  constructor(page: Page) {
    this.page = page
    // --------MOBILE + TABLET + DESKTOP--------
    this.footerSection = page.locator('footer')

    this.cuHackingLogoFooter = page.getByRole('img', { name: 'cuHacking logo' }).last()
    this.discordLinkFooter = this.footerSection.getByRole('link', { name: 'Discord' })
    this.instagramLinkFooter = this.footerSection.getByRole('link', { name: 'Instagram' })
    this.linkedinLinkFooter = this.footerSection.getByRole('link', { name: 'LinkedIn' })
    this.linktreeLinkFooter = this.footerSection.getByRole('link', { name: 'Linktree' })
    this.figmaLinkFooter = this.footerSection.getByRole('link', { name: 'Figma' })
    this.githubLinkFooter = this.footerSection.getByRole('link', { name: 'GitHub' })
    this.emailLinkFooter = this.footerSection.getByRole('link', { name: 'Email' })
    this.docsLinkFooter = this.footerSection.getByRole('link', { name: 'Docs' })
  }

  async goto() {
    await this.page.goto(CUHACKING_2025_WEBSITE_URL)
  }
}
