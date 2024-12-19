import type { Locator, Page } from '@playwright/test'
import { CUHACKING_2025_WEBSITE_URL } from '@website-e2e/shared/constants'

export class WelcomeSectionLayout {
  readonly page: Page
  readonly welcomeSection: Locator
  readonly discordLinkWelcome: Locator
  readonly instagramLinkWelcome: Locator
  readonly linkedinLinkWelcome: Locator
  readonly linktreeLinkWelcome: Locator
  readonly figmaLinkWelcome: Locator
  readonly githubLinkWelcome: Locator
  readonly emailLinkWelcome: Locator
  readonly docsLinkWelcome: Locator

  constructor(page: Page) {
    this.page = page
    this.welcomeSection = page.locator('#welcome')
    this.discordLinkWelcome = this.welcomeSection.getByRole('link', { name: 'Discord' })
    this.instagramLinkWelcome = this.welcomeSection.getByRole('link', { name: 'Instagram' })
    this.linkedinLinkWelcome = this.welcomeSection.getByRole('link', { name: 'LinkedIn' })
    this.linktreeLinkWelcome = this.welcomeSection.getByRole('link', { name: 'Linktree' })
    this.figmaLinkWelcome = this.welcomeSection.getByRole('link', { name: 'Figma' })
    this.githubLinkWelcome = this.welcomeSection.getByRole('link', { name: 'GitHub' })
    this.emailLinkWelcome = this.welcomeSection.getByRole('link', { name: 'Email' })
    this.docsLinkWelcome = this.welcomeSection.getByRole('link', { name: 'Docs' })
  }

  async goto() {
    await this.page.goto(CUHACKING_2025_WEBSITE_URL)
  }
}
