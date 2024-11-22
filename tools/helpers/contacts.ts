import type { FormsLayout } from '../src/pom'

export async function Contacts(formLayout: FormsLayout, PRIMARY_FIRST_NAME: string, PRIMARY_LAST_NAME: string, PRIMARY_CARLETON_ID: string, PRIMARY_EMAIL: string, PRIMARY_PHONE: string, SECONDARY_FIRST_NAME: string, SECONDARY_LAST_NAME: string, SECONDARY_CARLETON_ID: string, SECONDARY_EMAIL: string, SECONDARY_PHONE: string) {
  await formLayout.fillPrimaryFirstNameTextBox(PRIMARY_FIRST_NAME)
  await formLayout.fillPrimaryLastNameTextBox(PRIMARY_LAST_NAME)
  await formLayout.fillPrimaryCarletonIdTextBox(PRIMARY_CARLETON_ID)
  await formLayout.fillPrimaryOrganizationTextBox('cuHacking')
  await formLayout.checkPrimaryStatusRadioButton()
  await formLayout.fillPrimaryEmailTextBox(PRIMARY_EMAIL)
  await formLayout.fillPrimaryConfirmEmailTextBox(PRIMARY_EMAIL)
  await formLayout.fillPrimaryPhoneTextBox(PRIMARY_PHONE)

  await formLayout.fillSecondaryFirstNameTextBox(SECONDARY_FIRST_NAME)
  await formLayout.fillSecondaryLastNameTextBox(SECONDARY_LAST_NAME)
  await formLayout.fillSecondaryCarletonIdTextBox(SECONDARY_CARLETON_ID)
  await formLayout.fillSecondaryOrganizationTextBox('Community Engagement')
  await formLayout.checkSecondaryStatusRadioButton()
  await formLayout.fillSecondaryEmailTextBox(SECONDARY_EMAIL)
  await formLayout.fillSecondaryPhoneTextBox(SECONDARY_PHONE)
}
