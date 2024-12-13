import type { Page } from '@playwright/test'
import { Field } from './field.component'

export class HumanRights {
  static create(): Record<string, Field<any>> {
    return {
      rightsImplications: new Field(
        'rights_implications',
        'string',
        'Have the group/organizers considered the human rights implications of the event - is it inclusive and respectful of racial and cultural diversity, gender, sexual orientation, gender identity, and disability?',
        true,
        ['No', 'Yes'],
      ),
      rightsRisks: new Field(
        'rights_risks',
        'string',
        'Are there any potential risks to the emotional, psychological, and/or social health and wellbeing of the event participants?',
        true,
        ['No', 'Yes'],
      ),
      otherRisks: new Field(
        'rights_other',
        'string',
        'Are there any other risks that the group/organizer feels that attendees would be exposed to by participating in this event? Please provide full details.',
        false,
        undefined,
        undefined,
        4,
      ),
    }
  }

  static async fill(page: Page, data: any): Promise<void> {
    await page.locator(`[name=rights_implications][value=${data.rightsImplications}]`).check()
    await page.locator(`[name=rights_risks][value=${data.rightsRisks}]`).check()
    await page.locator(`[name=rights_other]`).fill(data.otherRisks || '')
  }
}
