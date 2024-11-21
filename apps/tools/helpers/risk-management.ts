import type { FormsLayout } from '../src/pom'

export async function RiskManagement(formLayout: FormsLayout, RISK_SPEAKER_TOPICS: string, RISK_SPEAKER_FULL_NAMES: string, RISK_SPEAKER_WEBSITE_URL: string) {
  await formLayout.checkYesSpeakersRadioButton()
  await formLayout.speakersTopicsTextBox.fill(RISK_SPEAKER_TOPICS)
  await formLayout.speakersFullNamesTextBox.fill(RISK_SPEAKER_FULL_NAMES)
  await formLayout.speakersWebsiteUrlTextBox.fill(RISK_SPEAKER_WEBSITE_URL)
}
