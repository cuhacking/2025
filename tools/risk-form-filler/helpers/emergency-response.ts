import type { FormsLayout } from '../src/pom'

export async function EmergencyResponse(formLayout: FormsLayout, EMERGENCY_SAFETY_CONCERNS: string, EMERGENCY_SAFETY_RISKS: string) {
  await formLayout.checkNoEmergencyFirstAidRadioButton()
  await formLayout.checkYesEmergencyHospitalRadioButton()
  await formLayout.checkNoEmergencyEvacRadioButton()
  await formLayout.checkNoEmergencyFlamesRadioButton()
  await formLayout.checkNoEmergencyCrowdControlRadioButton()
  await formLayout.fillEmergencySafetyConcernsTextBox(EMERGENCY_SAFETY_CONCERNS)
  await formLayout.fillEmergencySafetyRisksTextBox(EMERGENCY_SAFETY_RISKS)
}
