import type { Page } from '@playwright/test'
import { Field } from './field.component'

export class SafetyRiskAssessment {
  static create(): Record<string, Field<any>> {
    return {
      crowdControl: new Field(
        'safety_crowd',
        'string',
        'Will crowd control measures be put in place?',
        true,
        ['No', 'Yes'],
        undefined,
        undefined,
        undefined,
        {
          crowdControlDetails: new Field(
            'safety_crowd_detail',
            'string',
            'Please provide details regarding measures to control occupant capacity at the venue',
            false,
            undefined,
            undefined,
            4,
          ),
        },
      ),
      specialCircumstances: new Field(
        'safety_special',
        'string',
        'Are there any other special circumstances related to the event that would give concern for safety or security of attendees?',
        false,
        undefined,
        undefined,
        4,
      ),
      additionalRisks: new Field(
        'safety_risk',
        'string',
        'Are there any other risks that the group/organizer feels that attendees would be exposed to by participating in this event? Please provide full details',
        false,
        undefined,
        undefined,
        4,
      ),
    }
  }

  static async fill(page: Page, data: any): Promise<void> {
    if (!page.url().includes('online')) {
      await page.locator(`[name=safety_crowd][value=${data.crowdControl}]`).check()
      if (data.crowdControlDetails)
        await page.locator(`[name=safety_crowd_detail]`).fill(data.crowdControlDetails)
      await page.locator(`[name=safety_special]`).fill(data.specialCircumstances || '')
      await page.locator(`[name=safety_risk]`).fill(data.additionalRisks || '')
    }
  }
}
