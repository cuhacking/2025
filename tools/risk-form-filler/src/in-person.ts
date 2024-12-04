import type { ScheduleInPersonParams } from './input/schedule-in-person-params'
import type { InPersonFormLayout } from './pom'

export async function scheduleInPerson(params: ScheduleInPersonParams, formLayout: InPersonFormLayout) {
  await formLayout.goto()
  await formLayout.inPersonButton.click()

  await formLayout.fillContacts(formLayout, params.primaryOrganizer.firstName, params.primaryOrganizer.lastName, params.primaryOrganizer.studentID.toString(), params.primaryOrganizer.email, params.primaryOrganizer.phone, params.secondaryOrganizer.firstName, params.secondaryOrganizer.lastName, params.secondaryOrganizer.studentID.toString(), params.secondaryOrganizer.email, params.secondaryOrganizer.phone)

  await formLayout.eventLocationTextBox.fill(params.eventDetails.location)
  await formLayout.eventLocationRadioButton.check()
  await formLayout.expectedAttendeesTextBox.fill(params.eventDetails.expectedAttendees.toString())
  await formLayout.foodRadioButton.check()
  await formLayout.healthInsuranceRadioButton.check()
  await formLayout.photoIdRadioButton.check()

  await formLayout.fillEventDetails(formLayout, params.eventDetails.title, params.eventDetails.date, params.eventDetails.startTime, params.eventDetails.endTime, params.eventDetails.description, params.eventDetails.expectedAttendees.toString())

  await formLayout.alcoholRadioButton.check()

  await formLayout.fillRiskManagement(formLayout, params.riskManagement.speakerTopics, params.riskManagement.speakers, params.riskManagement.speakerSites)
  await formLayout.fillEmergencyResponse(formLayout, params.riskManagement.specialCircumstances, params.riskManagement.risks)

  await formLayout.transportationRadioButton.check()
  await formLayout.outOfProvinceRadioButton.check()
  await formLayout.garbageRadioButton.check()
  await formLayout.cleanupRadioButton.check()
  await formLayout.cleanupTextBox.fill(params.riskManagement.cleanUpCrew)
  await formLayout.overnightRadioButton.check()

  await formLayout.fillLogistics(formLayout)

  await formLayout.rightsTextBox.fill(params.riskManagement.additionalRemarks)
}
