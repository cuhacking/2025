import type { Page } from '@playwright/test'
import { Field } from './field.component'

export class OutOfProvinceEvents {
  static create(): Record<string, Field<any>> {
    return {
      outOfProvince: new Field(
        'out_of_province',
        'string',
        'Will any portion of your event take place outside of the province of Ontario or outside of Canada?',
        true,
        ['No', 'Yes'],
        undefined,
        undefined,
        undefined,
        {
          healthCoverage: new Field(
            'out_of_province_health',
            'string',
            'Does every attendee have adequate out of province health coverage?',
            true,
            ['No', 'Yes'],
          ),
          documentsAdvised: new Field(
            'out_of_province_documents',
            'string',
            'Has each attendee been advised of the required documents and health requirements needed to leave the province or country?',
            true,
            ['No', 'Yes'],
          ),
        },
      ),
    }
  }

  static async fill(page: Page, data: any): Promise<void> {
    if (!page.url().includes('online')) {
      await page.locator(`[name=out_of_province][value=${data.outOfProvince}]`).check()

      if (data.outOfProvince === 'Yes') {
        await page
          .locator(`[name=out_of_province_health][value=${data.healthCoverage}]`)
          .check()
        await page
          .locator(`[name=out_of_province_documents][value=${data.documentsAdvised}]`)
          .check()
      }
    }
  }
}
