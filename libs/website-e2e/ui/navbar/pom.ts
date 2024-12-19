import type { Locator, Page } from '@playwright/test'
import { CUHACKING_2025_WEBSITE_URL } from '@website-e2e/shared/constants'

export class NavbarLayout {
  readonly page: Page

  // --------MOBLE--------
  readonly discordLinkNavbar: Locator
  readonly instagramLinkNavbar: Locator
  readonly linkedinLinkNavbar: Locator
  readonly linktreeLinkNavbar: Locator
  readonly figmaLinkNavbar: Locator
  readonly githubLinkNavbar: Locator
  readonly emailLinkNavbar: Locator
  readonly docsLinkNavbar: Locator
  readonly cuHackingLogoIconNav: Locator
  readonly navbarSection: Locator

  // -------- MOBILE + TABLET + DESKTOP --------
  readonly aboutLink: Locator
  readonly eventsLink: Locator
  readonly sponsorsLink: Locator
  readonly faqLink: Locator
  readonly hamburgerIcon: Locator

  constructor(page: Page) {
    this.page = page

    // --------MOBILE + TABLET + DESKTOP--------
    const navbar = page.locator('#navbar-social-media-links')
    this.discordLinkNavbar = navbar.getByRole('link', { name: 'Discord' })
    this.instagramLinkNavbar = navbar.getByRole('link', { name: 'Instagram' })
    this.linkedinLinkNavbar = navbar.getByRole('link', { name: 'LinkedIn' })
    this.linktreeLinkNavbar = navbar.getByRole('link', { name: 'Linktree' })
    this.figmaLinkNavbar = navbar.getByRole('link', { name: 'Figma' })
    this.githubLinkNavbar = navbar.getByRole('link', { name: 'GitHub' })
    this.emailLinkNavbar = navbar.getByRole('link', { name: 'Email' })
    this.docsLinkNavbar = navbar.getByRole('link', { name: 'Docs' })
    this.cuHackingLogoIconNav = page.getByRole('link', { name: 'Return to homepage' }).first()
    this.navbarSection = page.locator('#navbar')

    // ------MOBILE-------
    this.aboutLink = page.getByRole('link', { name: 'About' })
    this.eventsLink = page.getByRole('link', { name: 'Events' })
    this.sponsorsLink = page.getByRole('link', { name: 'Sponsors' }).first()
    this.faqLink = page.getByRole('link', { name: 'FAQ' })
    this.hamburgerIcon = page.getByRole('button', { name: 'Open Navigation Drawer' })
  }

  async goto() {
    await this.page
      .goto(CUHACKING_2025_WEBSITE_URL)
  }
}
