import type { Locator, Page } from '@playwright/test'

export class FormsLayout {
  // Page object
  readonly page: Page

  // Buttons
  readonly onlineButton: Locator
  readonly inPersonButton: Locator
  readonly hybridButton: Locator
  readonly submitButton: Locator

  // ONLINE FORM
  readonly expectedOnlineAttendeesTextBox: Locator
  readonly registrationRadioButton: Locator
  readonly specialConcernsOnlineTextBox: Locator

  // IN-PERSON + HYBRID FORM
  readonly eventLocationTextBox: Locator
  readonly eventLocationRadioButton: Locator
  readonly expectedAttendeesTextBox: Locator
  readonly foodRadioButton: Locator
  readonly healthInsuranceRadioButton: Locator
  readonly photoIdRadioButton: Locator
  readonly alcoholRadioButton: Locator
  readonly transportationRadioButton: Locator
  readonly outOfProvinceRadioButton: Locator
  readonly garbageRadioButton: Locator
  readonly cleanupRadioButton: Locator
  readonly cleanupTextBox: Locator
  readonly overnightRadioButton: Locator
  readonly rightsTextBox: Locator

  // HYBRID FORM
  readonly hybridRegistrationRadioButton: Locator

  // HELPER FUNCTIONS - RISK MANAGEMENT
  readonly speakersRadioButton: Locator
  readonly speakersTopicsTextBox: Locator
  readonly speakersFullNamesTextBox: Locator
  readonly speakersWebsiteUrlTextBox: Locator

  // HELPER FUNCTIONS - CONTACTS
  readonly primaryFirstNameTextBox: Locator
  readonly primaryLastNameTextBox: Locator
  readonly primaryCarletonIdTextBox: Locator
  readonly primaryOrganizationTextBox: Locator
  readonly primaryStatusRadioButton: Locator
  readonly primaryEmailTextBox: Locator
  readonly primaryConfirmEmailTextBox: Locator
  readonly primaryPhoneTextBox: Locator
  readonly secondaryFirstNameTextBox: Locator
  readonly secondaryLastNameTextBox: Locator
  readonly secondaryCarletonIdTextBox: Locator
  readonly secondaryOrganizationTextBox: Locator
  readonly secondaryStatusRadioButton: Locator
  readonly secondaryEmailTextBox: Locator
  readonly secondaryPhoneTextBox: Locator

  // HELPER FUNCTIONS - EVENT DETAILS
  readonly eventTitleTextBox: Locator
  readonly eventDateTextBox: Locator
  readonly eventStartTimeTextBox: Locator
  readonly eventEndTimeTextBox: Locator
  readonly eventDescriptionTextBox: Locator
  readonly carletonStudentsRadioButton: Locator
  readonly staffFacultyRadioButton: Locator
  readonly alumniRadioButton: Locator
  readonly minorsRadioButton: Locator
  readonly vipRadioButton: Locator

  // HELPER FUNCTIONS - EMERGENCY RESPONSE
  readonly emergencyFirstAidRadioButton: Locator
  readonly emergencyHospitalRadioButton: Locator
  readonly emergencyEvacRadioButton: Locator
  readonly emergencyFlamesRadioButton: Locator
  readonly emergencyCrowdControlRadioButton: Locator
  readonly emergencySafetyConcernsTextBox: Locator
  readonly emergencySafetyRisksTextBox: Locator

  // HELPER FUNCTIONS - LOGISTICS
  readonly logisticsContractsVendorRadioButton: Locator
  readonly logisticsContractsLiabilityRadioButton: Locator
  readonly logisticsContractsInsuranceRentalRadioButton: Locator
  readonly logisticsContractsInsuranceCertificateRadioButton: Locator
  readonly logisticsRightsImplicationsRadioButton: Locator
  readonly logisticsRightsRisksRadioButton: Locator

  // HELPER FUNCTIONS - ONLINE INFORMATION
  readonly onlinePlatformTextBox: Locator
  readonly onlineTopicsTextBox: Locator
  readonly onlineLocationTextBox: Locator
  readonly onlineOrganizersTextBox: Locator
  readonly onlineOrganizersAttendenceFromOriginTextBox: Locator

  constructor(page: Page) {
    this.page = page

    // Buttons
    this.onlineButton = page.getByRole('link', { name: 'Online' })
    this.inPersonButton = page.getByRole('link', { name: 'In-Person' })
    this.hybridButton = page.getByRole('link', { name: 'Hybrid' })
    this.submitButton = page.getByRole('button', { name: 'Submit' })

    // online form
    this.expectedOnlineAttendeesTextBox = page.getByLabel('Number of expected online')
    this.registrationRadioButton = page.locator('input[name="event_tix"]').nth(3)
    this.specialConcernsOnlineTextBox = page.getByLabel('Are there any other special')

    // in-person + hybrid form
    this.eventLocationTextBox = page.getByLabel('Event LocationIf on campus,')
    this.eventLocationRadioButton = page.locator('input[name="event_location_res"]').nth(1)
    this.expectedAttendeesTextBox = page.getByLabel('Number of expected')
    this.foodRadioButton = page.locator('input[name="event_food"]').first()
    this.healthInsuranceRadioButton = page.locator('input[name="event_health_insurance"]').first()
    this.photoIdRadioButton = page.locator('input[name="event_photo_id"]').first()
    this.alcoholRadioButton = page.locator('input[name="risk_alcohol"]').first()
    this.transportationRadioButton = page.locator('input[name="travel_transportation"]').first()
    this.outOfProvinceRadioButton = page.locator('input[name="out_of_province"]').first()
    this.garbageRadioButton = page.locator('input[name="fmp_garbage"]').first()
    this.cleanupRadioButton = page.locator('input[name="fmp_cleanup"]').nth(1)
    this.cleanupTextBox = page.getByLabel('Please provide details as to')
    this.overnightRadioButton = page.locator('input[name="fmp_overnight"]').first()
    this.rightsTextBox = page.locator('#rights_other')

    // hybrid form
    this.hybridRegistrationRadioButton = page.locator('input[name="event_tix"]').nth(1)

    // helper functions - risk management
    this.speakersRadioButton = page.locator('fieldset').filter({ hasText: 'Will there be any speaker(s)' }).getByLabel('Yes', { exact: true })
    this.speakersTopicsTextBox = page.getByLabel('What topics will the speaker(')
    this.speakersFullNamesTextBox = page.getByLabel('Please provide full name(s)')
    this.speakersWebsiteUrlTextBox = page.getByLabel('Does the speaker have a')

    // helper functions - contacts
    this.primaryFirstNameTextBox = page.locator('#primary_first_name')
    this.primaryLastNameTextBox = page.locator('#primary_last_name')
    this.primaryCarletonIdTextBox = page.locator('#primary_carleton_id')
    this.primaryOrganizationTextBox = page.getByLabel('What is the name of the')
    this.primaryStatusRadioButton = page.locator('fieldset').filter({ hasText: 'First Name Last Name Carleton University ID What is the name of the' }).getByLabel('Student')
    this.primaryEmailTextBox = page.locator('#primary_email')
    this.primaryConfirmEmailTextBox = page.getByLabel('Confirm Email')
    this.primaryPhoneTextBox = page.locator('#primary_phone')
    this.secondaryFirstNameTextBox = page.locator('#secondary_first_name')
    this.secondaryLastNameTextBox = page.locator('#secondary_last_name')
    this.secondaryCarletonIdTextBox = page.locator('#secondary_carleton_id')
    this.secondaryOrganizationTextBox = page.getByLabel('Position within organization')
    this.secondaryStatusRadioButton = page.locator('fieldset').filter({ hasText: 'First Name Last Name Carleton University ID Position within organization Role' }).getByLabel('Student')
    this.secondaryEmailTextBox = page.locator('#secondary_email')
    this.secondaryPhoneTextBox = page.locator('#secondary_phone')

    // helper functions - event details
    this.eventTitleTextBox = page.getByLabel('Event Title:')
    this.eventDateTextBox = page.getByLabel('Event Date:')
    this.eventStartTimeTextBox = page.getByLabel('Event Start Time:')
    this.eventEndTimeTextBox = page.getByLabel('Event End Time:')
    this.eventDescriptionTextBox = page.getByLabel('Description of the')
    this.carletonStudentsRadioButton = page.getByLabel('Carleton University Students')
    this.staffFacultyRadioButton = page.getByLabel('Staff and Faculty')
    this.alumniRadioButton = page.getByLabel('Alumni')
    this.minorsRadioButton = page.locator('input[name="event_minors"]').first()
    this.vipRadioButton = page.locator('input[name="event_vip"]').first()

    // helper functions - emergency response
    this.emergencyFirstAidRadioButton = page.locator('input[name="emergency_firstaid"]').first()
    this.emergencyHospitalRadioButton = page.locator('input[name="emergency_hospital"]').nth(1)
    this.emergencyEvacRadioButton = page.locator('input[name="emergency_evac"]').first()
    this.emergencyFlamesRadioButton = page.locator('input[name="emergency_flames"]').first()
    this.emergencyCrowdControlRadioButton = page.locator('fieldset').filter({ hasText: 'Will crowd control measures' }).getByLabel('No')
    this.emergencySafetyConcernsTextBox = page.getByLabel('Are there any other special')
    this.emergencySafetyRisksTextBox = page.locator('#safety_risk')

    // helper functions - logistics
    this.logisticsContractsVendorRadioButton = page.locator('input[name="contracts_vendor"]').first()
    this.logisticsContractsLiabilityRadioButton = page.locator('input[name="contracts_liability"]').first()
    this.logisticsContractsInsuranceRentalRadioButton = page.locator('input[name="contracts_insurance_rental"]').first()
    this.logisticsContractsInsuranceCertificateRadioButton = page.locator('input[name="contracts_insurance_certificate"]').first()
    this.logisticsRightsImplicationsRadioButton = page.locator('input[name="rights_implications"]').nth(1)
    this.logisticsRightsRisksRadioButton = page.locator('input[name="rights_risks"]').first()

    // helper functions - online information
    this.onlinePlatformTextBox = page.getByLabel('What platform will be used')
    this.onlineTopicsTextBox = page.getByLabel('What topic will be discussed/')
    this.onlineLocationTextBox = page.getByLabel('What is the location where')
    this.onlineOrganizersTextBox = page.getByLabel('How many people will be')
    this.onlineOrganizersAttendenceFromOriginTextBox = page.getByLabel('How many people will attend')
  }

  // goto
  async goto() {
    await this.page.goto('https://stuapps.carleton.ca/sarms/event-risk')
  }

  async fillContacts(formLayout: FormsLayout, PRIMARY_FIRST_NAME: string, PRIMARY_LAST_NAME: string, PRIMARY_CARLETON_ID: string, PRIMARY_EMAIL: string, PRIMARY_PHONE: string, SECONDARY_FIRST_NAME: string, SECONDARY_LAST_NAME: string, SECONDARY_CARLETON_ID: string, SECONDARY_EMAIL: string, SECONDARY_PHONE: string) {
    await formLayout.primaryFirstNameTextBox.fill(PRIMARY_FIRST_NAME)
    await formLayout.primaryLastNameTextBox.fill(PRIMARY_LAST_NAME)
    await formLayout.primaryCarletonIdTextBox.fill(PRIMARY_CARLETON_ID)
    await formLayout.primaryOrganizationTextBox.fill('cuHacking')
    await formLayout.primaryStatusRadioButton.check()
    await formLayout.primaryEmailTextBox.fill(PRIMARY_EMAIL)
    await formLayout.primaryConfirmEmailTextBox.fill(PRIMARY_EMAIL)
    await formLayout.primaryPhoneTextBox.fill(PRIMARY_PHONE)

    await formLayout.secondaryFirstNameTextBox.fill(SECONDARY_FIRST_NAME)
    await formLayout.secondaryLastNameTextBox.fill(SECONDARY_LAST_NAME)
    await formLayout.secondaryCarletonIdTextBox.fill(SECONDARY_CARLETON_ID)
    await formLayout.secondaryOrganizationTextBox.fill('Community Engagement')
    await formLayout.secondaryStatusRadioButton.check()
    await formLayout.secondaryEmailTextBox.fill(SECONDARY_EMAIL)
    await formLayout.secondaryPhoneTextBox.fill(SECONDARY_PHONE)
  }

  async fillEmergencyResponse(formLayout: FormsLayout, EMERGENCY_SAFETY_CONCERNS: string, EMERGENCY_SAFETY_RISKS: string) {
    await formLayout.emergencyFirstAidRadioButton.check()
    await formLayout.emergencyHospitalRadioButton.check()
    await formLayout.emergencyEvacRadioButton.check()
    await formLayout.emergencyFlamesRadioButton.check()
    await formLayout.emergencyCrowdControlRadioButton.check()
    await formLayout.emergencySafetyConcernsTextBox.fill(EMERGENCY_SAFETY_CONCERNS)
    await formLayout.emergencySafetyRisksTextBox.fill(EMERGENCY_SAFETY_RISKS)
  }

  async fillEventDetails(formLayout: FormsLayout, EVENT_TITLE: string, EVENT_DATE: string, EVENT_START_TIME: string, EVENT_END_TIME: string, EVENT_DESCRIPTION: string, EVENT_EXPECTED_ATTENDEES: string) {
    await formLayout.eventTitleTextBox.fill(EVENT_TITLE)
    await formLayout.eventDateTextBox.fill(EVENT_DATE) // date in yyyy/mm/dd format
    await formLayout.eventStartTimeTextBox.fill(EVENT_START_TIME) // time in HH:MM AM/PM format
    await formLayout.eventEndTimeTextBox.fill(EVENT_END_TIME) // time in HH:MM AM/PM format
    await formLayout.eventDescriptionTextBox.fill(EVENT_DESCRIPTION)
    await formLayout.expectedAttendeesTextBox.fill(EVENT_EXPECTED_ATTENDEES)
    await formLayout.carletonStudentsRadioButton.check()
    await formLayout.staffFacultyRadioButton.check()
    await formLayout.alumniRadioButton.check()
    await formLayout.minorsRadioButton.check()
    await formLayout.vipRadioButton.check()
  }

  async fillLogistics(formLayout: FormsLayout) {
    await formLayout.logisticsContractsVendorRadioButton.check()
    await formLayout.logisticsContractsLiabilityRadioButton.check()
    await formLayout.logisticsContractsInsuranceRentalRadioButton.check()
    await formLayout.logisticsContractsInsuranceCertificateRadioButton.check()
    await formLayout.logisticsRightsImplicationsRadioButton.check()
    await formLayout.logisticsRightsRisksRadioButton.check()
  }

  async fillOnlineInformation(formLayout: FormsLayout, ONLINE_PLATFORM: string, ONLINE_TOPICS: string, ONLINE_LOCATION: string, ONLINE_ORGANIZERS: string, ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN: string) {
    await formLayout.onlinePlatformTextBox.fill(ONLINE_PLATFORM)
    await formLayout.onlineTopicsTextBox.fill(ONLINE_TOPICS)
    await formLayout.onlineLocationTextBox.fill(ONLINE_LOCATION)
    await formLayout.onlineOrganizersTextBox.fill(ONLINE_ORGANIZERS)
    await formLayout.onlineOrganizersAttendenceFromOriginTextBox.fill(ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN)
  }

  async fillRiskManagement(formLayout: FormsLayout, RISK_SPEAKER_TOPICS: string, RISK_SPEAKER_FULL_NAMES: string, RISK_SPEAKER_WEBSITE_URL: string) {
    await formLayout.speakersRadioButton.check()
    await formLayout.speakersTopicsTextBox.fill(RISK_SPEAKER_TOPICS)
    await formLayout.speakersFullNamesTextBox.fill(RISK_SPEAKER_FULL_NAMES)
    await formLayout.speakersWebsiteUrlTextBox.fill(RISK_SPEAKER_WEBSITE_URL)
  }
}
