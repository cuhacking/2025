import type { Page } from '@playwright/test'
import { Field } from './field.component'

export class Event {
  static create(): Record<string, Field<any>> {
    return {
      eventTitle: new Field('event_title', 'string', 'Event Title', true, undefined, 120),
      eventDate: new Field('event_date', 'string', 'Event Date', true, undefined, undefined, undefined, 'date'),
      eventStartTime: new Field('event_start_time', 'string', 'Event Start Time', true),
      eventEndTime: new Field('event_end_time', 'string', 'Event End Time', true),
      eventDescription: new Field('event_description', 'string', 'Description of the Event', false, undefined, undefined, 4),
      eventLocation: new Field('event_location', 'string', 'Event Location', true, undefined, 200),
      eventLocationReserved: new Field('event_location_res', 'string', 'Has this location been reserved?', true, ['No', 'Yes']),
      eventParticipantsNumber: new Field('event_participants_number', 'string', 'Number of expected participants?', true, undefined, 200),
      eventAudience: new Field('event_audience', 'array', 'Who is this event open to:', false, [
        'Carleton University Students',
        'Staff and Faculty',
        'Alumni',
        'General Public',
      ]),
      eventFood: new Field('event_food', 'string', 'Will there be food at the event?', true, ['No', 'Yes']),
      eventFoodDetail: new Field('event_food_detail', 'string', 'If Yes, please provide detail.', false, undefined, 200),
      eventHealthInsurance: new Field('event_health_insurance', 'string', 'Will attendees be required to bring their health card?', true, ['No', 'Yes']),
      eventPhotoID: new Field('event_photo_id', 'string', 'Will attendees be required to bring government issued photo identification?', true, ['No', 'Yes']),
      eventMinors: new Field('event_minors', 'string', 'Will there be any minors attending this event?', true, ['No', 'Yes']),
      eventVIP: new Field('event_vip', 'string', 'Have you invited a Dignitary/VIP to attend this event?', true, ['No', 'Yes']),
    }
  }

  static async fill(page: Page, data: any): Promise<void> {
    await page.locator(`[name=event_title]`).fill(data.eventTitle)
    await page.locator(`[name=event_date]`).fill(data.eventDate)
    await page.locator(`[name=event_start_time]`).fill(data.eventStartTime)
    await page.locator(`[name=event_end_time]`).fill(data.eventEndTime)
    await page.locator(`[name=event_description]`).fill(data.eventDescription)
    for (const audience of data.eventAudience) {
      await page.locator(`[name="event_audience[]"][value="${audience}"]`).check()
    }
    await page
      .locator(`[name=event_participants_number]`)
      .fill(data.eventParticipantsNumber)
    await page.locator(`[name=event_minors][value=${data.eventMinors}]`).check()
    await page.locator(`[name=event_vip][value=${data.eventVIP}]`).check()

    if (!page.url().includes('in-person')) {
      await page.locator(`[name=event_tix][value=${data.eventTix}]`).first().check()
    }

    if (!page.url().includes('online')) {
      await page.locator(`[name=event_location]`).fill(data.eventLocation)
      await page
        .locator(`[name=event_location_res][value=${data.eventLocationReserved}]`)
        .click()

      await page.locator(`[name=event_food][value=${data.eventFood}]`).check()
      if (data.eventFood === 'Yes') {
        await page.locator(`[name=event_food_detail]`).fill(data.eventFoodDetail)
      }

      await page.locator(`[name=event_health_insurance][value=${data.eventHealthInsurance}]`).check()
      await page.locator(`[name=event_photo_id][value=${data.eventPhotoID}]`).check()
    }
  }
}
