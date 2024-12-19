import type { Locator, Page } from '@playwright/test'

// TODO: Refactor link locators once we have a CMS
export class WebsiteLayout {
  // Page object
  readonly page: Page

  // Website Sections
  readonly welcomeSection: Locator
  readonly aboutSection: Locator
  readonly eventsSection: Locator
  readonly sponsorsSection: Locator
  readonly faqSection: Locator
  readonly navbarSection: Locator
  readonly footerSection: Locator

  // Mobile + Tablet + Desktop Elements
  readonly cuHackingLogoIconNav: Locator
  readonly cuHackingLogoFooter: Locator
  readonly sponsorshipPackage: Locator

  // Mobile + Tablet + Desktop Platform Links
  readonly discordLinkNavbar: Locator
  readonly instagramLinkNavbar: Locator
  readonly linkedinLinkNavbar: Locator
  readonly linktreeLinkNavbar: Locator
  readonly figmaLinkNavbar: Locator
  readonly githubLinkNavbar: Locator
  readonly emailLinkNavbar: Locator
  readonly docsLinkNavbar: Locator

  readonly discordLinkWelcome: Locator
  readonly instagramLinkWelcome: Locator
  readonly linkedinLinkWelcome: Locator
  readonly linktreeLinkWelcome: Locator
  readonly figmaLinkWelcome: Locator
  readonly githubLinkWelcome: Locator
  readonly emailLinkWelcome: Locator
  readonly docsLinkWelcome: Locator

  readonly discordLinkFooter: Locator
  readonly instagramLinkFooter: Locator
  readonly linkedinLinkFooter: Locator
  readonly linktreeLinkFooter: Locator
  readonly figmaLinkFooter: Locator
  readonly githubLinkFooter: Locator
  readonly emailLinkFooter: Locator
  readonly docsLinkFooter: Locator

  // Mobile + Tablet + Desktop Navigation Links
  readonly aboutLink: Locator
  readonly eventsLink: Locator
  readonly sponsorsLink: Locator
  readonly faqLink: Locator

  // Mobile + Tablet
  readonly hamburgerIcon: Locator

  // Tablet + Desktop
  readonly searchBar: Locator
  readonly searchModal: Locator
  readonly themeToggle: Locator
  readonly sideBarToggle: Locator
  readonly overviewSidebar: Locator

  constructor(page: Page) {
    this.page = page

    this.welcomeSection = page.locator('#welcome')
    this.aboutSection = page.locator('#about')
    this.eventsSection = page.locator('#events')
    this.sponsorsSection = page.locator('#sponsors')
    this.faqSection = page.locator('#faq')
    this.navbarSection = page.locator('#navbar')
    this.footerSection = page.locator('footer')

    this.cuHackingLogoIconNav = page.getByRole('link', { name: 'Return to homepage' }).first()
    this.cuHackingLogoFooter = page.getByRole('img', { name: 'cuHacking logo' }).last()
    this.sponsorshipPackage = page.getByRole('link', { name: 'Sponsorship Package' })

    this.hamburgerIcon = page.getByRole('button', { name: 'Open Navigation Drawer' })

    const navbar = page.locator('#navbar-social-media-links')
    this.discordLinkNavbar = navbar.getByRole('link', { name: 'Discord' })
    this.instagramLinkNavbar = navbar.getByRole('link', { name: 'Instagram' })
    this.linkedinLinkNavbar = navbar.getByRole('link', { name: 'LinkedIn' })
    this.linktreeLinkNavbar = navbar.getByRole('link', { name: 'Linktree' })
    this.figmaLinkNavbar = navbar.getByRole('link', { name: 'Figma' })
    this.githubLinkNavbar = navbar.getByRole('link', { name: 'GitHub' })
    this.emailLinkNavbar = navbar.getByRole('link', { name: 'Email' })
    this.docsLinkNavbar = navbar.getByRole('link', { name: 'Docs' })

    const welcome = page.locator('#welcome')
    this.discordLinkWelcome = welcome.getByRole('link', { name: 'Discord' })
    this.instagramLinkWelcome = welcome.getByRole('link', { name: 'Instagram' })
    this.linkedinLinkWelcome = welcome.getByRole('link', { name: 'LinkedIn' })
    this.linktreeLinkWelcome = welcome.getByRole('link', { name: 'Linktree' })
    this.figmaLinkWelcome = welcome.getByRole('link', { name: 'Figma' })
    this.githubLinkWelcome = welcome.getByRole('link', { name: 'GitHub' })
    this.emailLinkWelcome = welcome.getByRole('link', { name: 'Email' })
    this.docsLinkWelcome = welcome.getByRole('link', { name: 'Docs' })

    const footer = page.locator('footer')
    this.discordLinkFooter = footer.getByRole('link', { name: 'Discord' })
    this.instagramLinkFooter = footer.getByRole('link', { name: 'Instagram' })
    this.linkedinLinkFooter = footer.getByRole('link', { name: 'LinkedIn' })
    this.linktreeLinkFooter = footer.getByRole('link', { name: 'Linktree' })
    this.figmaLinkFooter = footer.getByRole('link', { name: 'Figma' })
    this.githubLinkFooter = footer.getByRole('link', { name: 'GitHub' })
    this.emailLinkFooter = footer.getByRole('link', { name: 'Email' })
    this.docsLinkFooter = footer.getByRole('link', { name: 'Docs' })

    this.aboutLink = page.getByRole('link', { name: 'About' })
    this.eventsLink = page.getByRole('link', { name: 'Events' })
    this.sponsorsLink = page.getByRole('link', { name: 'Sponsors' }).first()
    this.faqLink = page.getByRole('link', { name: 'FAQ' })
  }

  async goto() {
    await this.page
      .goto('http://localhost:3000')
  }
}
