import type { Page } from '@playwright/test'
import { Field } from './field.component'

export class RiskManagement {
  static create(): Record<string, Field<any>> {
    return {
      alcohol: new Field(
        'risk_alcohol',
        'string',
        'Will your event include the service or presence of alcohol?',
        true,
        ['No', 'Yes'],
        undefined,
        undefined,
        undefined,
        {
          smartServe: new Field(
            'risk_alcohol_smartserve',
            'string',
            'Will alcohol be served by an individual with Smart Serve training?',
            true,
            ['No', 'Yes'],
          ),
          entranceTicket: new Field(
            'risk_alcohol_entrance_ticket',
            'string',
            'Will there be an entrance ticket cost that includes alcohol?',
            true,
            ['No', 'Yes'],
          ),
          food: new Field(
            'risk_alcohol_food',
            'string',
            'Will food be provided at the event?',
            true,
            ['No', 'Yes'],
          ),
          volunteers: new Field(
            'risk_alcohol_volunteers',
            'string',
            'Will there be at least three volunteers designated to monitor attendees not consuming alcohol?',
            true,
            ['No', 'Yes'],
            undefined,
            undefined,
            undefined,
            {
              volunteer1: new Field('risk_alcohol_volunteers_names_1', 'string', 'Volunteer’s name 1', false),
              volunteer2: new Field('risk_alcohol_volunteers_names_2', 'string', 'Volunteer’s name 2', false),
              volunteer3: new Field('risk_alcohol_volunteers_names_3', 'string', 'Volunteer’s name 3', false),
            },
          ),
          campusSafety: new Field(
            'risk_alcohol_safety',
            'string',
            'Have you made arrangements for Campus Safety Services to be present?',
            true,
            ['No', 'Yes'],
          ),
          privateSecurity: new Field(
            'risk_alcohol_security',
            'string',
            'Will there be hired private security at this event (if off-campus)?',
            true,
            ['No', 'Yes', 'Not Applicable'],
          ),
        },
      ),
      speaker: new Field(
        'risk_speaker',
        'string',
        'Will there be any speaker(s) presenting as part of the event?',
        true,
        ['No', 'Yes'],
        undefined,
        undefined,
        undefined,
        {
          topics: new Field('risk_speaker_topics', 'string', 'What topics will the speaker(s) be presenting?', false, undefined, 200),
          names: new Field('risk_speaker_names', 'string', 'Please provide full name(s) of speaker(s)', false, undefined, 200),
          website: new Field('risk_speaker_site', 'string', 'Does the speaker have a website or is there a website for the organization?', false, undefined, 200),
        },
      ),
    }
  }

  static async fill(page: Page, data: any): Promise<void> {
    await page.locator(`[name=risk_speaker][value=${data.speaker}]`).check()

    if (data.speaker === 'Yes') {
      await page.locator(`[name=risk_speaker_topics]`).fill(data.topics || '')
      await page.locator(`[name=risk_speaker_names]`).fill(data.names || '')
      await page.locator(`[name=risk_speaker_site]`).fill(data.website || '')
    }

    if (!page.url().includes('online')) {
      await page.locator(`[name=risk_alcohol][value=${data.alcohol}]`).check()

      if (data.alcohol === 'Yes') {
        await page.locator(`[name=risk_alcohol_smartserve][value=${data.smartServe}]`).check()
        await page.locator(`[name=risk_alcohol_entrance_ticket][value=${data.entranceTicket}]`).check()
        await page.locator(`[name=risk_alcohol_food][value=${data.food}]`).check()

        if (data.volunteers.volunteer1 || data.volunteers.volunteer2 || data.volunteers.volunteer3) {
          await page.locator(`[name=risk_alcohol_volunteers][value=Yes]`).check()
          if (data.volunteers.volunteer1)
            await page.locator(`[id=risk_alcohol_volunteers_names_1]`).fill(data.volunteers.volunteer1)
          if (data.volunteers.volunteer2)
            await page.locator(`[id=risk_alcohol_volunteers_names_2]`).fill(data.volunteers.volunteer2)
          if (data.volunteers.volunteer3)
            await page.locator(`[id=risk_alcohol_volunteers_names_3]`).fill(data.volunteers.volunteer3)
        }

        await page.locator(`[name=risk_alcohol_safety][value=${data.campusSafety}]`).check()
        await page.locator(`[name=risk_alcohol_security][value=${data.privateSecurity}]`).check()
      }
    }
  }
}
