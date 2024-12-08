import type { Locator, Page } from '@playwright/test'

export class FormsLayout {
  // Page object
  readonly page: Page

  // textboxes
  readonly nameTextBox: Locator
  readonly emailTextBox: Locator
  readonly subjectTextBox: Locator
  readonly messageTextBox: Locator

  // buttons
  readonly submitButton: Locator

  constructor(page: Page) {
    this.page = page

    this.nameTextBox = page.getByPlaceholder('Your Name')
    this.emailTextBox = page.getByPlaceholder('Your Email')
    this.subjectTextBox = page.getByPlaceholder('Subject')
    this.messageTextBox = page.getByPlaceholder('Your Message')

    this.submitButton = page.getByRole('button', { name: 'Send Message' })
  }

  // goto
  async goto() {
    await this.page.goto('http://localhost:3000/#contactpage')
  }

  async fillContactPage(formLayout: FormsLayout, NAME: string, EMAIL: string, SUBJECT: string, MESSAGE: string) {
    await formLayout.nameTextBox.fill(NAME)
    await formLayout.emailTextBox.fill(EMAIL)
    await formLayout.subjectTextBox.fill(SUBJECT)
    await formLayout.messageTextBox.fill(MESSAGE)
  }
}
