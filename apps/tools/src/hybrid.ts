import { chromium } from 'playwright'

import { RiskManagement } from '../helpers/risk-management'
import { Contacts } from '../helpers/contacts'
import { EventDetails } from '../helpers/event-details'
import { EmergencyResponse } from '../helpers/emergency-response'
import { Logistics } from '../helpers/logistics'
import { OnlineInformation } from '../helpers/online-information'

import { FormsLayout } from './pom'

export async function scheduleHybrid(PRIMARY_FIRST_NAME: string, PRIMARY_LAST_NAME: string, PRIMARY_CARLETON_ID: string, PRIMARY_EMAIL: string, PRIMARY_PHONE: string, SECONDARY_FIRST_NAME: string, SECONDARY_LAST_NAME: string, SECONDARY_CARLETON_ID: string, SECONDARY_EMAIL: string, SECONDARY_PHONE: string, EVENT_TITLE: string, EVENT_DATE: string, EVENT_START_TIME: string, EVENT_END_TIME: string, EVENT_DESCRIPTION: string, EVENT_LOCATION: string, EVENT_EXPECTED_ATTENDEES: string, ONLINE_PLATFORM: string, ONLINE_TOPICS: string, ONLINE_LOCATION: string, ONLINE_ORGANIZERS: string, ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN: string, RISK_SPEAKER_TOPICS: string, RISK_SPEAKER_FULL_NAMES: string, RISK_SPEAKER_WEBSITE_URL: string, EMERGENCY_SAFETY_CONCERNS: string, EMERGENCY_SAFETY_RISKS: string, LOGISTICS_CLEANUP_PEOPLE: string, LOGISTICS_SAFETY_CONCENRS: string) {
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()
  const formLayout = new FormsLayout(page)

  await formLayout.goto()
  await formLayout.clickHybridButton()

  await Contacts(formLayout, PRIMARY_FIRST_NAME, PRIMARY_LAST_NAME, PRIMARY_CARLETON_ID, PRIMARY_EMAIL, PRIMARY_PHONE, SECONDARY_FIRST_NAME, SECONDARY_LAST_NAME, SECONDARY_CARLETON_ID, SECONDARY_EMAIL, SECONDARY_PHONE)

  await formLayout.fillEventLocationTextBox(EVENT_LOCATION)
  await formLayout.checkYesEventLocationRadioButton()
  await formLayout.fillExpectedAttendeesTextBox(EVENT_EXPECTED_ATTENDEES)
  await formLayout.checkYesHybridRegistrationRadioButton()
  await formLayout.checkNoFoodRadioButton()
  await formLayout.checkNoHealthInsuranceRadioButton()
  await formLayout.checkNoPhotoIdRadioButton()

  await EventDetails(formLayout, EVENT_TITLE, EVENT_DATE, EVENT_START_TIME, EVENT_END_TIME, EVENT_DESCRIPTION, EVENT_EXPECTED_ATTENDEES)
  await OnlineInformation(formLayout, ONLINE_PLATFORM, ONLINE_TOPICS, ONLINE_LOCATION, ONLINE_ORGANIZERS, ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN)

  await formLayout.checkNoAlcoholRadioButton()

  await RiskManagement(formLayout, RISK_SPEAKER_TOPICS, RISK_SPEAKER_FULL_NAMES, RISK_SPEAKER_WEBSITE_URL)
  await EmergencyResponse(formLayout, EMERGENCY_SAFETY_CONCERNS, EMERGENCY_SAFETY_RISKS)

  await formLayout.checkNoTransportationRadioButton()
  await formLayout.checkNoOutOfProvinceRadioButton()
  await formLayout.checkNoGarbageRadioButton()
  await formLayout.checkYesCleanupRadioButton()
  await formLayout.fillCleanupTextBox(LOGISTICS_CLEANUP_PEOPLE)
  await formLayout.checkNoOvernightRadioButton()

  await Logistics(formLayout)

  await formLayout.fillRightsTextBox(LOGISTICS_SAFETY_CONCENRS)

  // await formLayout.clickSubmitButton()
}
