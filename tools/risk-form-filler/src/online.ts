import type { ScheduleOnlineParams } from './input/schedule-online-params'

import type { FormsLayout } from './pom'

export async function scheduleOnline(params: ScheduleOnlineParams, formLayout: FormsLayout) {
  await formLayout.goto()
  await formLayout.fillContactPage(formLayout, params.name, params.email, params.subject, params.message)
  await formLayout.submitButton.click()
}
