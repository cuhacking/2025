import type { FormsLayout } from '../src/pom'

export async function EventDetails(formLayout: FormsLayout, EVENT_TITLE: string, EVENT_DATE: string, EVENT_START_TIME: string, EVENT_END_TIME: string, EVENT_DESCRIPTION: string, EVENT_EXPECTED_ATTENDEES: string) {
  await formLayout.fillEventTitleTextBox(EVENT_TITLE)
  await formLayout.fillEventDateTextBox(EVENT_DATE) // date in yyyy/mm/dd format
  await formLayout.fillEventStartTimeTextBox(EVENT_START_TIME) // time in HH:MM AM/PM format
  await formLayout.fillEventEndTimeTextBox(EVENT_END_TIME) // time in HH:MM AM/PM format
  await formLayout.fillEventDescriptionTextBox(EVENT_DESCRIPTION)
  await formLayout.fillExpectedAttendeesTextBox(EVENT_EXPECTED_ATTENDEES)
  await formLayout.checkYesCarletonStudentsRadioButton()
  await formLayout.checkYesStaffFacultyRadioButton()
  await formLayout.checkYesAlumniRadioButton()
  await formLayout.checkNoMinorsRadioButton()
  await formLayout.checkNoVipRadioButton()
}
