import type { Locator, Page } from '@playwright/test'

export class DocsLayout {
  // Page object
  readonly page: Page

  // Mobile + Tablet + Desktop
  readonly cuHackingLogoIcon: Locator
  readonly cuHackingLogoText: Locator
  readonly nextButton: Locator
  readonly editOnGithubButton: Locator

  // Mobile + Tablet + Desktop Links
  readonly websiteLink: Locator
  readonly portalLink: Locator
  readonly designLink: Locator
  readonly eslintLink: Locator
  readonly discordLink: Locator
  readonly instagramLink: Locator
  readonly linkedinLink: Locator
  readonly linktreeLink: Locator
  readonly figmaLink: Locator
  readonly projectBoardLink: Locator
  readonly githubLink: Locator

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
    this.nextButton = page.getByRole('link', { name: 'Next Tech Stack' })
    this.editOnGithubButton = page.getByRole('link', { name: 'Edit on GitHub' })

    // Mobile + Tablet + Desktop Links
    this.websiteLink = page.getByRole('link', { name: 'Website', exact: true })
    this.portalLink = page.getByRole('link', { name: 'Portal' })
    this.designLink = page.getByRole('link', { name: 'Design', exact: true })
    this.eslintLink = page.getByRole('link', { name: 'ESLint' })
    this.discordLink = page.locator('div:nth-child(7) > a').first()
    this.instagramLink = page.locator('div:nth-child(7) > a:nth-child(2)').first()
    this.linkedinLink = page.locator('div:nth-child(7) > a:nth-child(3)').first()
    this.linktreeLink = page.locator('div:nth-child(7) > a:nth-child(4)')
    this.figmaLink = page.locator('.flex > a:nth-child(5)').first()
    this.projectBoardLink = page.locator('.flex > a:nth-child(6)').first()
    this.githubLink = page.getByLabel('GitHub')

    // Mobile + Tablet
    this.onThisPage = page.getByRole('button', { name: 'On this page Our Priorities' })
    this.forHackersByHackers = page.getByRole('link', { name: 'Made with 💚 for Hackers by' })

    // Tablet + Desktop
    this.searchBar = page.getByRole('button', { name: 'Search ⌘ K' })
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
