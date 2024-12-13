import type { Page } from '@playwright/test'
import { Field } from './field.component'

export class Travel {
  static create(): Record<string, Field<any>> {
    return {
      transportationRequired: new Field(
        'travel_transportation',
        'string',
        'Is transportation involved or required for this event?',
        true,
        ['No', 'Yes'],
        undefined,
        undefined,
        undefined,
        {
          groupTransportation: new Field(
            'travel_transportation_group',
            'string',
            'Are you arranging any form of group transportation for this event?',
            true,
            ['No', 'Yes'],
          ),
          rentingVehicles: new Field(
            'travel_transportation_rent',
            'string',
            'Are you or any group members renting cars/vans/buses for transportation to/from this event?',
            true,
            ['No', 'Yes'],
            undefined,
            undefined,
            undefined,
            {
              insurance: new Field(
                'travel_transportation_insurance',
                'string',
                'Has the required insurance coverage been obtained/is included in the rental fees?',
                true,
                ['No', 'Yes'],
              ),
              rentalDetails: new Field(
                'travel_transportation_details',
                'object',
                'Details for Rental/Bus Service company',
                false,
                undefined,
                undefined,
                undefined,
                undefined,
                {
                  companyName: new Field(
                    'travel_transportation_company_name',
                    'string',
                    'Company Name',
                    true,
                    undefined,
                    200,
                  ),
                  companyAddress: new Field(
                    'travel_transportation_company_address',
                    'string',
                    'Company Address',
                    true,
                    undefined,
                    200,
                  ),
                  companyPhone: new Field(
                    'travel_transportation_company_phone',
                    'string',
                    'Telephone Number',
                    true,
                    undefined,
                    200,
                  ),
                  additionalInfo: new Field(
                    'travel_transportation_company_additional',
                    'string',
                    'Additional Information',
                    false,
                    undefined,
                    200,
                  ),
                },
              ),
            },
          ),
          personalVehicles: new Field(
            'travel_transportation_personal',
            'string',
            'Are you or any group members driving personal vehicles to transport attendees?',
            true,
            ['No', 'Yes'],
          ),
          timesCommunicated: new Field(
            'travel_transportation_times',
            'string',
            'Have arrival and departure times been communicated to all attendees?',
            true,
            ['No', 'Yes'],
          ),
          contingencyPlan: new Field(
            'travel_transportation_contingency',
            'string',
            'Do you have a contingency plan for persons missing return transportation?',
            true,
            ['No', 'Yes', 'Not Applicable'],
            undefined,
            undefined,
            undefined,
            {
              contingencyDetails: new Field(
                'travel_transportation_contingency_detail',
                'string',
                'Please outline the contingency plan in place',
                false,
                undefined,
                undefined,
                4,
              ),
            },
          ),
          alcoholOnboard: new Field(
            'travel_transportation_alcohol',
            'string',
            'Will alcoholic beverages be permitted on-board during transportation?',
            true,
            ['No', 'Yes'],
          ),
          intoxicatedIndividuals: new Field(
            'travel_transportation_lit',
            'string',
            'Will intoxicated individuals be permitted to board any vehicle for the purposes of going or returning to the event?',
            true,
            ['No', 'Yes'],
            undefined,
            undefined,
            undefined,
            {
              wellbeingMeasures: new Field(
                'travel_transportation_lit_wellbeing',
                'string',
                'What measures are in place for their wellbeing?',
                false,
                undefined,
                200,
              ),
            },
          ),
        },
      ),
    }
  }

  static async fill(page: Page, data: any): Promise<void> {
    if (!page.url().includes('online')) {
      await page.locator(`[name=travel_transportation][value=${data.transportationRequired}]`).check()

      if (data.transportationRequired === 'Yes') {
        await page.locator(`[name=travel_transportation_group][value=${data.groupTransportation}]`).check()
        await page.locator(`[name=travel_transportation_rent][value=${data.rentingVehicles}]`).check()

        if (data.rentingVehicles === 'Yes') {
          const rentalDetails = data.rentalDetails

          if (rentalDetails) {
            await page.locator(`[name=travel_transportation_company_name]`).fill(rentalDetails.companyName)
            await page.locator(`[name=travel_transportation_company_address]`).fill(rentalDetails.companyAddress)
            await page.locator(`[name=travel_transportation_company_phone]`).fill(rentalDetails.companyPhone)
            await page.locator(`[name=travel_transportation_company_additional]`).fill(rentalDetails.additionalInfo || '')
          }

          await page.locator(`[name=travel_transportation_insurance][value=${data.insurance}]`).check()
        }

        await page.locator(`[name=travel_transportation_personal][value=${data.personalVehicles}]`).check()
        await page.locator(`[name=travel_transportation_times][value=${data.timesCommunicated}]`).check()
        await page.locator(`[name=travel_transportation_contingency][value=${data.contingencyPlan}]`).check()

        if (data.contingencyPlan === 'Yes') {
          await page.locator(`[name=travel_transportation_contingency_detail]`).fill(data.contingencyDetails || '')
        }

        await page.locator(`[name=travel_transportation_alcohol][value=${data.alcoholOnboard}]`).check()
        await page.locator(`[name=travel_transportation_lit][value=${data.intoxicatedIndividuals}]`).check()

        if (data.intoxicatedIndividuals === 'Yes') {
          const wellbeingMeasures = data.wellbeingMeasures
          if (wellbeingMeasures) {
            await page.locator(`[name=travel_transportation_lit_wellbeing]`).fill(wellbeingMeasures)
          }
        }
      }
    }
  }
}
