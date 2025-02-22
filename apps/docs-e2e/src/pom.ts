import type { Locator, Page } from '@playwright/test'

export class DocsLayout {
  readonly page: Page

  // Mobile + Tablet + Desktop
  readonly cuHackingLogoIcon: Locator
  readonly cuHackingLogoText: Locator
  readonly nextButton: Locator
  readonly editOnGithubButton: Locator

  // Mobile + Tablet
  readonly onThisPage: Locator
  readonly forHackersByHackers: Locator

  // Tablet + Desktop
  readonly searchBar: Locator
  readonly searchModal: Locator
  readonly themeToggle: Locator
  readonly sideBarToggle: Locator
  readonly overviewSidebar: Locator

  // TODO: add test for language toggle once it's implemented
  // readonly languageToggle: Locator

  // Unique Mobile
  readonly hamburgerIcon: Locator
  readonly searchIcon: Locator

  constructor(page: Page) {
    // TODO: add test for language toggle once it's implemented
    // this.languageToggle = page.locator('data-testid=languageToggle');

    this.page = page

    // Mobile + Tablet + Desktop
    this.cuHackingLogoIcon = page.getByRole('img', { name: 'cuHacking logo' }).first()
    this.cuHackingLogoText = page.getByRole('link', { name: 'cuHacking logo cuHacking' }).first()
    this.nextButton = page.getByRole('link', { name: /Next/i })
    this.editOnGithubButton = page.getByRole('link', { name: 'Edit on GitHub' })

    // Mobile + Tablet
    this.onThisPage = page.getByRole('heading', { name: 'On this page' }).or(page.getByRole('button', { name: 'On this page' }))
    this.forHackersByHackers = page.getByRole('link', { name: 'Made with 💚 for Hackers by' })

    // Tablet + Desktop
    this.searchBar = page.getByRole('button', { name: 'Search ⌘ K' }).or(page.getByRole('button', { name: 'Search Ctrl K' }))
    this.searchModal = page.getByLabel('Close Search')
    this.themeToggle = page.getByRole('button', { name: 'Toggle Theme' })
    this.sideBarToggle = page.getByRole('button', { name: 'Collapse Sidebar' })
    this.overviewSidebar = page.getByRole('link', { name: 'Overview' })

    // Unique Mobile
    this.hamburgerIcon = page.getByLabel('Toggle Sidebar')
    this.searchIcon = page.getByLabel('Open Search')
  }

  async goto() {
    await this.page
      .goto('http://localhost:3000')
  }
}
