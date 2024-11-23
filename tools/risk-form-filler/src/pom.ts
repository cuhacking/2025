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

  // Buttons
  async clickOnlineButton() {
    await this.onlineButton.click()
  }

  async clickInPersonButton() {
    await this.inPersonButton.click()
  }

  async clickHybridButton() {
    await this.hybridButton.click()
  }

  async clickSubmitButton() {
    await this.submitButton.click()
  }

  // ONLINE FORM
  async fillExpectedOnlineAttendeesTextBox(attendees: string) {
    await this.expectedOnlineAttendeesTextBox.fill(attendees)
  }

  async checkYesRegistrationRadioButton() {
    await this.registrationRadioButton.check()
  }

  async fillSpecialConcernsOnlineTextBox(concerns: string) {
    await this.specialConcernsOnlineTextBox.fill(concerns)
  }

  // IN-PERSON + HYBRID FORM
  async fillEventLocationTextBox(location: string) {
    await this.eventLocationTextBox.fill(location)
  }

  async checkYesEventLocationRadioButton() {
    await this.eventLocationRadioButton.check()
  }

  async fillExpectedAttendeesTextBox(attendees: string) {
    await this.expectedAttendeesTextBox.fill(attendees)
  }

  async checkNoFoodRadioButton() {
    await this.foodRadioButton.check()
  }

  async checkNoHealthInsuranceRadioButton() {
    await this.healthInsuranceRadioButton.check()
  }

  async checkNoPhotoIdRadioButton() {
    await this.photoIdRadioButton.check()
  }

  async checkNoAlcoholRadioButton() {
    await this.alcoholRadioButton.check()
  }

  async checkNoTransportationRadioButton() {
    await this.transportationRadioButton.check()
  }

  async checkNoOutOfProvinceRadioButton() {
    await this.outOfProvinceRadioButton.check()
  }

  async checkNoGarbageRadioButton() {
    await this.garbageRadioButton.check()
  }

  async checkYesCleanupRadioButton() {
    await this.cleanupRadioButton.check()
  }

  async fillCleanupTextBox(cleanup: string) {
    await this.cleanupTextBox.fill(cleanup)
  }

  async checkNoOvernightRadioButton() {
    await this.overnightRadioButton.check()
  }

  async fillRightsTextBox(rights: string) {
    await this.rightsTextBox.fill(rights)
  }

  // HYBRID FORM
  async checkYesHybridRegistrationRadioButton() {
    await this.hybridRegistrationRadioButton.check()
  }

  // HELPER FUNCTIONS - RISK MANAGEMENT
  async checkYesSpeakersRadioButton() {
    await this.speakersRadioButton.check()
  }

  async fillSpeakersTopicsTextBox(topics: string) {
    await this.speakersTopicsTextBox.fill(topics)
  }

  async fillSpeakersFullNamesTextBox(names: string) {
    await this.speakersFullNamesTextBox.fill(names)
  }

  async fillSpeakersWebsiteUrlTextBox(url: string) {
    await this.speakersWebsiteUrlTextBox.fill(url)
  }

  // HELPER FUNCTIONS - CONTACTS
  async fillPrimaryFirstNameTextBox(firstName: string) {
    await this.primaryFirstNameTextBox.fill(firstName)
  }

  async fillPrimaryLastNameTextBox(lastName: string) {
    await this.primaryLastNameTextBox.fill(lastName)
  }

  async fillPrimaryCarletonIdTextBox(id: string) {
    await this.primaryCarletonIdTextBox.fill(id)
  }

  async fillPrimaryOrganizationTextBox(organization: string) {
    await this.primaryOrganizationTextBox.fill(organization)
  }

  async checkPrimaryStatusRadioButton() {
    await this.primaryStatusRadioButton.check()
  }

  async fillPrimaryEmailTextBox(email: string) {
    await this.primaryEmailTextBox.fill(email)
  }

  async fillPrimaryConfirmEmailTextBox(email: string) {
    await this.primaryConfirmEmailTextBox.fill(email)
  }

  async fillPrimaryPhoneTextBox(phone: string) {
    await this.primaryPhoneTextBox.fill(phone)
  }

  async fillSecondaryFirstNameTextBox(firstName: string) {
    await this.secondaryFirstNameTextBox.fill(firstName)
  }

  async fillSecondaryLastNameTextBox(lastName: string) {
    await this.secondaryLastNameTextBox.fill(lastName)
  }

  async fillSecondaryCarletonIdTextBox(id: string) {
    await this.secondaryCarletonIdTextBox.fill(id)
  }

  async fillSecondaryOrganizationTextBox(organization: string) {
    await this.secondaryOrganizationTextBox.fill(organization)
  }

  async checkSecondaryStatusRadioButton() {
    await this.secondaryStatusRadioButton.check()
  }

  async fillSecondaryEmailTextBox(email: string) {
    await this.secondaryEmailTextBox.fill(email)
  }

  async fillSecondaryPhoneTextBox(phone: string) {
    await this.secondaryPhoneTextBox.fill(phone)
  }

  // HELPER FUNCTIONS - EVENT DETAILS
  async fillEventTitleTextBox(title: string) {
    await this.eventTitleTextBox.fill(title)
  }

  async fillEventDateTextBox(date: string) {
    await this.eventDateTextBox.fill(date)
  }

  async fillEventStartTimeTextBox(time: string) {
    await this.eventStartTimeTextBox.fill(time)
  }

  async fillEventEndTimeTextBox(time: string) {
    await this.eventEndTimeTextBox.fill(time)
  }

  async fillEventDescriptionTextBox(description: string) {
    await this.eventDescriptionTextBox.fill(description)
  }

  async checkYesCarletonStudentsRadioButton() {
    await this.carletonStudentsRadioButton.check()
  }

  async checkYesStaffFacultyRadioButton() {
    await this.staffFacultyRadioButton.check()
  }

  async checkYesAlumniRadioButton() {
    await this.alumniRadioButton.check()
  }

  async checkNoMinorsRadioButton() {
    await this.minorsRadioButton.check()
  }

  async checkNoVipRadioButton() {
    await this.vipRadioButton.check()
  }

  // HELPER FUNCTIONS - EMERGENCY RESPONSE
  async checkNoEmergencyFirstAidRadioButton() {
    await this.emergencyFirstAidRadioButton.check()
  }

  async checkYesEmergencyHospitalRadioButton() {
    await this.emergencyHospitalRadioButton.check()
  }

  async checkNoEmergencyEvacRadioButton() {
    await this.emergencyEvacRadioButton.check()
  }

  async checkNoEmergencyFlamesRadioButton() {
    await this.emergencyFlamesRadioButton.check()
  }

  async checkNoEmergencyCrowdControlRadioButton() {
    await this.emergencyCrowdControlRadioButton.check()
  }

  async fillEmergencySafetyConcernsTextBox(concerns: string) {
    await this.emergencySafetyConcernsTextBox.fill(concerns)
  }

  async fillEmergencySafetyRisksTextBox(risks: string) {
    await this.emergencySafetyRisksTextBox.fill(risks)
  }

  // HELPER FUNCTIONS - LOGISTICS
  async checkNoContractsVendorRadioButton() {
    await this.logisticsContractsVendorRadioButton.check()
  }

  async checkNoContractsLiabilityRadioButton() {
    await this.logisticsContractsLiabilityRadioButton.check()
  }

  async checkNoContractsInsuranceRentalRadioButton() {
    await this.logisticsContractsInsuranceRentalRadioButton.check()
  }

  async checkNoContractsInsuranceCertificateRadioButton() {
    await this.logisticsContractsInsuranceCertificateRadioButton.check()
  }

  async checkYesRightsImplicationsRadioButton() {
    await this.logisticsRightsImplicationsRadioButton.check()
  }

  async checkNoRightsRisksRadioButton() {
    await this.logisticsRightsRisksRadioButton.check()
  }

  // HELPER FUNCTIONS - ONLINE INFORMATION
  async fillOnlinePlatformTextBox(platform: string) {
    await this.onlinePlatformTextBox.fill(platform)
  }

  async fillOnlineTopicsTextBox(topics: string) {
    await this.onlineTopicsTextBox.fill(topics)
  }

  async fillOnlineLocationTextBox(location: string) {
    await this.onlineLocationTextBox.fill(location)
  }

  async fillOnlineOrganizersTextBox(organizers: string) {
    await this.onlineOrganizersTextBox.fill(organizers)
  }

  async fillOnlineOrganizersAttendenceFromOriginTextBox(attendees: string) {
    await this.onlineOrganizersAttendenceFromOriginTextBox.fill(attendees)
  }
}
