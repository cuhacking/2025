import type { Page } from '@playwright/test'

export class Organizer {
  static async fill(page: Page, organizerData: any): Promise<void> {
    const prefix = organizerData.emailConfirm ? 'primary' : 'secondary'

    await page.locator(`[name=${prefix}_first_name]`).fill(organizerData.firstName)
    await page.locator(`[name=${prefix}_last_name]`).fill(organizerData.lastName)
    await page.locator(`[name=${prefix}_carleton_id]`).fill(organizerData.carletonId)
    await page.locator(`[name=${prefix}_position]`).fill(organizerData.position)
    await page.locator(`[name=${prefix}_role][value="${organizerData.role}"]`).click()
    await page.locator(`[name=${prefix}_email]`).fill(organizerData.email)
    if (organizerData.emailConfirm) {
      await page.locator(`[name=${prefix}_email_confirm]`).fill(organizerData.emailConfirm)
    }
    await page.locator(`[name=${prefix}_phone]`).fill(organizerData.phone)
  }
}
