import type { Page } from '@playwright/test'
import { Field } from './field.component'

export class ContractsInsurance {
  static create(): Record<string, Field<any>> {
    return {
      vendorContracts: new Field(
        'contracts_vendor',
        'string',
        'As part of organizing this event, are you required to sign contracts with vendors/suppliers?',
        true,
        ['No', 'Yes'],
        undefined,
        undefined,
        undefined,
        {
          liabilityClauses: new Field(
            'contracts_vendor_clauses',
            'string',
            'Please identify any clauses which hold your group/organization or Carleton University legally liable:',
            false,
            undefined,
            undefined,
            4,
          ),
        },
      ),
      liabilityInsurance: new Field(
        'contracts_liability',
        'string',
        'Does your group or organization carry two million general liability insurance coverage?',
        true,
        ['No', 'Yes'],
      ),
      insuranceInRental: new Field(
        'contracts_insurance_rental',
        'string',
        'Is the required insurance coverage included in rental fees?',
        true,
        ['No', 'Yes', 'Not Applicable'],
      ),
      insuranceCertificate: new Field(
        'contracts_insurance_certificate',
        'string',
        'Has a certificate of insurance been obtained?',
        true,
        ['No', 'Yes', 'Not Applicable'],
      ),
    }
  }

  static async fill(page: Page, data: any): Promise<void> {
    await page.locator(`[name=contracts_vendor][value=${data.vendorContracts}]`).check()
    if (data.vendorContracts === 'Yes') {
      await page.locator(`[name=contracts_vendor_clauses]`).fill(data.liabilityClauses || '')
    }
    await page.locator(`[name=contracts_liability][value=${data.liabilityInsurance}]`).check()
    await page.locator(`[name=contracts_insurance_rental][value="${data.insuranceInRental}"]`).check()
    await page.locator(`[name=contracts_insurance_certificate][value="${data.insuranceCertificate}"]`).check()
  }
}
