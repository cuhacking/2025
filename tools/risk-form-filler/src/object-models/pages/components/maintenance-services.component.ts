import type { Page } from '@playwright/test'
import { Field } from './field.component'

export class MaintenanceServices {
  static create(): Record<string, Field<any>> {
    return {
      garbageProvision: new Field(
        'fmp_garbage',
        'string',
        'Has Facilities Management and Planning been contacted regarding the provision of garbage containers and cleaning staff to clean-up during/after the event?',
        true,
        ['No', 'Yes'],
      ),
      cleanupCrew: new Field(
        'fmp_cleanup',
        'string',
        'Will volunteers or other clean-up crew(s) be designated to return facilities to condition found prior to commencement of the event?',
        true,
        ['No', 'Yes'],
        undefined,
        undefined,
        undefined,
        {
          cleanupDetails: new Field(
            'fmp_cleanup_details',
            'string',
            'Please provide details as to who will be providing the clean-up services and what clean-up will be performed?',
            false,
            undefined,
            200,
          ),
        },
      ),
      overnightSetup: new Field(
        'fmp_overnight',
        'string',
        'Will your event setup remain overnight? If yes, have you contracted security or understand that the university does not assume responsibility for loss or damage?',
        true,
        ['No', 'Yes'],
      ),
    }
  }

  static async fill(page: Page, data: any): Promise<void> {
    if (!page.url().includes('online')) {
      await page.locator(`[name=fmp_garbage][value=${data.garbageProvision}]`).check()
      await page.locator(`[name=fmp_cleanup][value=${data.cleanupCrew}]`).check()

      if (data.cleanupCrew === 'Yes') {
        await page.locator(`[name=fmp_cleanup_details]`).fill(data.cleanupDetails || '')
      }

      await page.locator(`[name=fmp_overnight][value=${data.overnightSetup}]`).check()
    }
  }
}
