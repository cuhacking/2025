import { chromium } from '@playwright/test'

import { FormsLayout } from './pom'

export async function scheduleHybrid(PRIMARY_FIRST_NAME: string, PRIMARY_LAST_NAME: string, PRIMARY_CARLETON_ID: string, PRIMARY_EMAIL: string, PRIMARY_PHONE: string, SECONDARY_FIRST_NAME: string, SECONDARY_LAST_NAME: string, SECONDARY_CARLETON_ID: string, SECONDARY_EMAIL: string, SECONDARY_PHONE: string, EVENT_TITLE: string, EVENT_DATE: string, EVENT_START_TIME: string, EVENT_END_TIME: string, EVENT_DESCRIPTION: string, EVENT_LOCATION: string, EVENT_EXPECTED_ATTENDEES: string, ONLINE_PLATFORM: string, ONLINE_TOPICS: string, ONLINE_LOCATION: string, ONLINE_ORGANIZERS: string, ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN: string, RISK_SPEAKER_TOPICS: string, RISK_SPEAKER_FULL_NAMES: string, RISK_SPEAKER_WEBSITE_URL: string, EMERGENCY_SAFETY_CONCERNS: string, EMERGENCY_SAFETY_RISKS: string, LOGISTICS_CLEANUP_PEOPLE: string, LOGISTICS_SAFETY_CONCENRS: string) {
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()
  const formLayout = new FormsLayout(page)

  await formLayout.goto()
  await formLayout.hybridButton.click()

  await formLayout.fillContacts(formLayout, PRIMARY_FIRST_NAME, PRIMARY_LAST_NAME, PRIMARY_CARLETON_ID, PRIMARY_EMAIL, PRIMARY_PHONE, SECONDARY_FIRST_NAME, SECONDARY_LAST_NAME, SECONDARY_CARLETON_ID, SECONDARY_EMAIL, SECONDARY_PHONE)

  await formLayout.eventLocationTextBox.fill(EVENT_LOCATION)
  await formLayout.eventLocationRadioButton.check()
  await formLayout.expectedAttendeesTextBox.fill(EVENT_EXPECTED_ATTENDEES)
  await formLayout.hybridRegistrationRadioButton.check()
  await formLayout.foodRadioButton.check()
  await formLayout.healthInsuranceRadioButton.check()
  await formLayout.photoIdRadioButton.check()

  await formLayout.fillEventDetails(formLayout, EVENT_TITLE, EVENT_DATE, EVENT_START_TIME, EVENT_END_TIME, EVENT_DESCRIPTION, EVENT_EXPECTED_ATTENDEES)
  await formLayout.fillOnlineInformation(formLayout, ONLINE_PLATFORM, ONLINE_TOPICS, ONLINE_LOCATION, ONLINE_ORGANIZERS, ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN)

  await formLayout.alcoholRadioButton.check()

  await formLayout.fillRiskManagement(formLayout, RISK_SPEAKER_TOPICS, RISK_SPEAKER_FULL_NAMES, RISK_SPEAKER_WEBSITE_URL)
  await formLayout.fillEmergencyResponse(formLayout, EMERGENCY_SAFETY_CONCERNS, EMERGENCY_SAFETY_RISKS)

  await formLayout.transportationRadioButton.check()
  await formLayout.outOfProvinceRadioButton.check()
  await formLayout.garbageRadioButton.check()
  await formLayout.cleanupRadioButton.check()
  await formLayout.cleanupTextBox.fill(LOGISTICS_CLEANUP_PEOPLE)
  await formLayout.overnightRadioButton.check()

  await formLayout.fillLogistics(formLayout)

  await formLayout.rightsTextBox.fill(LOGISTICS_SAFETY_CONCENRS)
}
