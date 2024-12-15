import type { Page } from '@playwright/test'
import { Field } from './field.component'

export class OnlineInformation {
  static create(): Record<string, Field<any>> {
    return {
      onlinePlatform: new Field(
        'online_platform',
        'string',
        'What platform will be used for the broadcast of the event? (i.e.: Zoom, Microsoft Teams, etc.)',
        false,
        ['Zoom', 'Google Meet', 'Microsoft Teams', 'Discord', 'Other'],
        50,
      ),
      onlineTopic: new Field(
        'online_topic',
        'string',
        'What topic will be discussed/presented or activities that will be broadcast?',
        false,
        undefined,
        200,
      ),
      onlineLocation: new Field(
        'online_location',
        'string',
        'What is the location where the broadcast will originate?',
        false,
        undefined,
        200,
      ),
      onlinePeople: new Field(
        'online_production_count',
        'string',
        'How many people will be involved in the production of the event?',
        false,
        undefined,
        4,
      ),
      onlineOriginAttendance: new Field(
        'online_location_count',
        'string',
        'How many people will attend the location where the production of the online event originates?',
        false,
        undefined,
        200,
      ),
    }
  }

  static async fill(page: Page, data: any): Promise<void> {
    if (page.url().includes('online') || page.url().includes('hybrid')) {
      await page.locator(`[name=online_platform]`).fill(data.onlinePlatform || '')
      await page.locator(`[name=online_topic]`).fill(data.onlineTopic || '')
      await page.locator(`[name=online_location]`).fill(data.onlineLocation || '')
      await page.locator(`[name=online_production_count]`).fill(data.onlinePeople || '')
      await page.locator(`[name=online_location_count]`).fill(data.onlineOriginAttendance || '')
    }
  }
}
