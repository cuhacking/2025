import type { ScheduleOnlineParams } from './input/schedule-online-params'

import type { OnlineFormLayout } from './pom'

export async function scheduleOnline(params: ScheduleOnlineParams, formLayout: OnlineFormLayout) {
  await formLayout.goto()
  await formLayout.onlineButton.click()

  await formLayout.fillContacts(formLayout, params.primaryOrganizer.firstName, params.primaryOrganizer.lastName, params.primaryOrganizer.studentID.toString(), params.primaryOrganizer.email, params.primaryOrganizer.phone, params.secondaryOrganizer.firstName, params.secondaryOrganizer.lastName, params.secondaryOrganizer.studentID.toString(), params.secondaryOrganizer.email, params.secondaryOrganizer.phone)

  await formLayout.expectedOnlineAttendeesTextBox.fill(params.eventDetails.expectedAttendees.toString())
  await formLayout.registrationRadioButton.check()

  await formLayout.fillEventDetails(formLayout, params.eventDetails.title, params.eventDetails.date, params.eventDetails.startTime, params.eventDetails.endTime, params.eventDetails.description, params.eventDetails.expectedAttendees.toString())
  await formLayout.fillOnlineInformation(formLayout, params.onlineInformation.platform, params.onlineInformation.topics, params.onlineInformation.location, params.onlineInformation.numberOfOrganizers.toString(), params.onlineInformation.organizersAttendingOnline.toString())
  await formLayout.fillRiskManagement(formLayout, params.speakerAndResources.topics, params.speakerAndResources.speakers, params.speakerAndResources.speakerSites)
  await formLayout.fillLogistics(formLayout)

  await formLayout.specialConcernsOnlineTextBox.fill(params.speakerAndResources.additionalRemarks)
}
