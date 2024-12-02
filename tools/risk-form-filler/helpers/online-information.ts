import type { FormsLayout } from '../src/pom'

export async function OnlineInformation(formLayout: FormsLayout, ONLINE_PLATFORM: string, ONLINE_TOPICS: string, ONLINE_LOCATION: string, ONLINE_ORGANIZERS: string, ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN: string) {
  await formLayout.fillOnlinePlatformTextBox(ONLINE_PLATFORM)
  await formLayout.fillOnlineTopicsTextBox(ONLINE_TOPICS)
  await formLayout.fillOnlineLocationTextBox(ONLINE_LOCATION)
  await formLayout.fillOnlineOrganizersTextBox(ONLINE_ORGANIZERS)
  await formLayout.fillOnlineOrganizersAttendenceFromOriginTextBox(ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN)
}
