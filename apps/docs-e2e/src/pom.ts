import type { Locator, Page } from '@playwright/test'

export class DocsLayout {
  // Page object
  readonly page: Page

  // Desktop Header
  readonly cuHackingLogoIcon: Locator
  readonly cuHackingLogoText: Locator
  readonly websiteDropdownButton: Locator
  readonly websiteLink: Locator
  readonly websiteSourceLink: Locator
  readonly hackerPortalDropdownButton: Locator
  readonly hackerPortalLink: Locator
  readonly hackerPortalSourceLink: Locator
  readonly hackerPortalProjectBoardLink: Locator
  readonly searchBar: Locator
  readonly themeToggle: Locator
  // TODO: add test for language toggle once it's implemented
  // readonly languageToggle: Locator
  readonly gitHubIcon: Locator

  // Mobile Header
  readonly hamburgerIcon: Locator

  // Desktop Sidebar
  readonly sideBarToggle: Locator

  // Desktop Floating Table of Contents
  readonly editOnGitHubButton: Locator

  // Docs Page Footer
  readonly lastUpdatedText: Locator

  // Search Dialog
  readonly searchDialog: Locator

  constructor(page: Page) {
    this.page = page

    // Desktop Header
    this.cuHackingLogoIcon = page.getByRole('img', { name: 'cuHacking logo' })
    this.cuHackingLogoText = page.getByRole('link', { name: 'cuHacking logo cuHacking' })
    this.websiteDropdownButton = page.getByRole('button', { name: 'Website' })
    this.websiteLink = page.getByRole('dialog').getByRole('link', { name: 'Website' })
    this.websiteSourceLink = page.getByRole('dialog').getByRole('link', { name: 'Source' })
    this.hackerPortalDropdownButton = page.getByRole('button', { name: 'Hacker Portal' })
    this.hackerPortalLink = page.getByRole('dialog').getByRole('link', { name: 'App' })
    this.hackerPortalSourceLink = page.getByRole('dialog').getByRole('link', { name: 'Source' })
    this.hackerPortalProjectBoardLink = page.getByRole('dialog').getByRole('link', { name: 'Project Board' })
    this.searchBar = page.getByRole('button', { name: 'Search ⌘ K' })
    this.themeToggle = page.getByRole('button', { name: 'Toggle Theme' })

    // TODO: add test for language toggle once it's implemented
    // this.languageToggle = page.locator('data-testid=languageToggle');
    this.gitHubIcon = page.locator('div').filter({ hasText: /^Search⌘K$/ }).getByRole('link')

    // Mobile Header
    this.hamburgerIcon = page.getByLabel('Toggle Sidebar')

    // Desktop Sidebar
    this.sideBarToggle = page.getByLabel('Collapse Sidebar')

    // Desktop Floating Table of Contents
    this.editOnGitHubButton = page.getByRole('link', { name: 'Edit on GitHub' })

    // Docs Page Footer
    this.lastUpdatedText = page.getByRole('article').getByText('Last updated on').last()

    // Search Dialog
    this.searchDialog = page.getByRole('dialog').getByPlaceholder('Search')
  }

  async goto() {
    await this.page.goto('http://localhost:3000/docs')
  }
}
