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
  readonly searchIcon: Locator
  readonly searchModal: Locator
  readonly quickLinks: Locator

  // Mobile + Tablet Elements
  readonly sectionsDropdownButton: Locator
  readonly mobileWebsiteLink: Locator
  readonly mobileHackerPortalSourceLink: Locator
  readonly mobileHackerAppLink: Locator
  readonly mobileWebsiteSourceLink: Locator
  readonly mobileGithubIcon: Locator
  readonly mobileHackerPortalProjectBoardLink: Locator

  // Desktop Sidebar
  readonly sideBarToggle: Locator

  // Desktop Floating Table of Contents
  readonly editOnGitHubButton: Locator

  // Docs Page Footer
  readonly lastUpdatedText: Locator

  // Search Dialog
  readonly searchDialog: Locator

  // Tablet Header
  readonly kebabIcon: Locator

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
    this.searchIcon = page.getByRole('button', { name: 'Open Search' })
    this.searchModal = page.getByPlaceholder('Search')
    this.quickLinks = page.getByRole('button', { name: 'On this page Quick Links' })

    // Mobile + Tablet Elements
    this.sectionsDropdownButton = page.getByRole('button', { name: 'Home Leave none behind' })
    this.mobileWebsiteLink = page.getByRole('link', { name: 'Website' })
    this.mobileHackerPortalSourceLink = page.getByRole('link', { name: 'Source', exact: true })
    this.mobileHackerAppLink = page.getByRole('link', { name: 'App' })
    this.mobileWebsiteSourceLink = page.getByRole('link', { name: 'Source (legacy)' })
    this.mobileGithubIcon = page.getByRole('link', { name: 'Github' })
    this.mobileHackerPortalProjectBoardLink = page.getByRole('link', { name: 'Project Board' })

    // Desktop Sidebar
    this.sideBarToggle = page.getByLabel('Collapse Sidebar')

    // Desktop Floating Table of Contents
    this.editOnGitHubButton = page.getByRole('link', { name: 'Edit on GitHub' })

    // Docs Page Footer
    this.lastUpdatedText = page.getByRole('article').getByText('Last updated on').last()

    // Search Dialog
    this.searchDialog = page.getByRole('dialog').getByPlaceholder('Search')

    // Tablet Header
    this.kebabIcon = page.locator('#nd-nav').getByRole('button').nth(1)
  }

  async goto() {
    await this.page.goto('http://localhost:3000/docs')
  }
}
