import type { FormsLayout } from '../src/pom'

export async function Logistics(formLayout: FormsLayout) {
  await formLayout.checkNoContractsVendorRadioButton()
  await formLayout.checkNoContractsLiabilityRadioButton()
  await formLayout.checkNoContractsInsuranceRentalRadioButton()
  await formLayout.checkNoContractsInsuranceCertificateRadioButton()
  await formLayout.checkYesRightsImplicationsRadioButton()
  await formLayout.checkNoRightsRisksRadioButton()
}
