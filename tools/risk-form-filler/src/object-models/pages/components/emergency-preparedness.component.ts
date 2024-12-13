import type { Page } from '@playwright/test'
import { Field } from './field.component'

export class EmergencyPreparedness {
  static create(): Record<string, Field<any>> {
    return {
      firstAid: new Field(
        'emergency_firstaid',
        'string',
        'Are volunteers trained and certified in either First-Aid/CPR?',
        true,
        ['No', 'Yes'],
        undefined,
        undefined,
        undefined,
        {
          volunteerNames: new Field('emergency_names', 'string', 'List the names of the volunteers and their training credentials', false, undefined, 200),
        },
      ),
      hospitalAwareness: new Field(
        'emergency_hospital',
        'string',
        'Do organizers/volunteers know the location of the nearest hospital and how to summon emergency services if required?',
        true,
        ['No', 'Yes'],
      ),
      evacuationPlan: new Field(
        'emergency_evac',
        'string',
        'Have organizers established a designated meeting place outside of the venue in the event of a required evacuation?',
        true,
        ['No', 'Yes'],
      ),
      openFlames: new Field(
        'emergency_flames',
        'string',
        'Are there any open flames or dust-producing activities as part of this event?',
        true,
        ['No', 'Yes'],
      ),
    }
  }

  static async fill(page: Page, data: any): Promise<void> {
    if (!page.url().includes('online')) {
      await page.locator(`[name=emergency_firstaid][value=${data.firstAid}]`).check()
      if (data.volunteerNames)
        await page.locator(`[name=emergency_names]`).fill(data.volunteerNames)
      await page.locator(`[name=emergency_hospital][value=${data.hospitalAwareness}]`).check()
      await page.locator(`[name=emergency_evac][value=${data.evacuationPlan}]`).check()
      await page.locator(`[name=emergency_flames][value=${data.openFlames}]`).check()
    }
  }
}
