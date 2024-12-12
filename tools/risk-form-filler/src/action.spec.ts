import { test } from '@playwright/test'
import { Config } from './data/config.data'
import { Form, FormType } from './pom'

test('Fill out In-Person Form', async ({ page }) => {
  const form = new Form(FormType.InPerson)

  const primaryOrganizer = form.getSection('primaryOrganizer')
  const secondaryOrganizer = form.getSection('secondaryOrganizer')
  const generalEvent = form.getSection('event')
  const riskManagement = form.getSection('riskManagement')
  const emergencyPreparedness = form.getSection('emergencyPreparedness')
  const safetyRiskAssessment = form.getSection('safetyRiskAssessment')
  const contractsInsurance = form.getSection('contractsInsurance')
  const travel = form.getSection('travel')
  const outOfProvinceEvents = form.getSection('outOfProvinceEvents')
  const maintenanceServices = form.getSection('maintenanceServices')
  const humanRights = form.getSection('humanRights')

  // Navigate to form
  const url = `${Config.LINK.BASE}/${Config.LINK.IN_PERSON}`
  await page.goto(url)

  // Fill Primary Organizer Section
  await page.locator(`[name=${primaryOrganizer.firstName.name}]`).fill(Config.testData.primaryOrganizer.firstName)
  await page.locator(`[name=${primaryOrganizer.lastName.name}]`).fill(Config.testData.primaryOrganizer.lastName)
  await page.locator(`[name=${primaryOrganizer.carletonId.name}]`).fill(Config.testData.primaryOrganizer.carletonId)
  await page.locator(`[name=${primaryOrganizer.position.name}]`).fill(Config.testData.primaryOrganizer.position)
  await page.locator(`[name=${primaryOrganizer.role.name}][value=${Config.testData.primaryOrganizer.role}]`).click()
  await page.locator(`[name=${primaryOrganizer.email.name}]`).fill(Config.testData.primaryOrganizer.email)
  await page.locator(`[name=${primaryOrganizer.emailConfirm.name}]`).fill(Config.testData.primaryOrganizer.emailConfirm)
  await page.locator(`[name=${primaryOrganizer.phone.name}]`).fill(Config.testData.primaryOrganizer.phone)

  // Fill Secondary Organizer Section
  await page.locator(`[name=${secondaryOrganizer.firstName.name}]`).fill(Config.testData.secondaryOrganizer.firstName)
  await page.locator(`[name=${secondaryOrganizer.lastName.name}]`).fill(Config.testData.secondaryOrganizer.lastName)
  await page.locator(`[name=${secondaryOrganizer.carletonId.name}]`).fill(Config.testData.secondaryOrganizer.carletonId)
  await page.locator(`[name=${secondaryOrganizer.position.name}]`).fill(Config.testData.secondaryOrganizer.position)
  await page.locator(`[name=${secondaryOrganizer.role.name}][value=${Config.testData.secondaryOrganizer.role}]`).click()
  await page.locator(`[name=${secondaryOrganizer.email.name}]`).fill(Config.testData.secondaryOrganizer.email)
  await page.locator(`[name=${secondaryOrganizer.phone.name}]`).fill(Config.testData.secondaryOrganizer.phone)

  // General Event Information Section
  await page.locator(`[name=${generalEvent.eventTitle.name}]`).fill(Config.testData.generalEvent.eventTitle)
  await page.locator(`[name=${generalEvent.eventDate.name}]`).fill(Config.testData.generalEvent.eventDate)
  await page.locator(`[name=${generalEvent.eventStartTime.name}]`).fill(Config.testData.generalEvent.eventStartTime)
  await page.locator(`[name=${generalEvent.eventEndTime.name}]`).fill(Config.testData.generalEvent.eventEndTime)
  await page.locator(`[name=${generalEvent.eventDescription.name}]`).fill(Config.testData.generalEvent.eventDescription)
  await page.locator(`[name=${generalEvent.eventLocation.name}]`).fill(Config.testData.generalEvent.eventLocation)
  await page.locator(`[name=${generalEvent.eventLocationReserved.name}][value=${Config.testData.generalEvent.eventLocationReserved}]`).click()
  await page.locator(`[name=${generalEvent.eventParticipantsNumber.name}]`).fill(Config.testData.generalEvent.eventParticipantsNumber)

  for (const audience of Config.testData.generalEvent.eventAudience) {
    await page.getByLabel(audience).check()
  }

  await page.locator(`[name=${generalEvent.eventFood.name}][value=${Config.testData.generalEvent.eventFood}]`).check()
  if (Config.testData.generalEvent.eventFood === 'Yes') {
    await page.locator(`[name=${generalEvent.eventFoodDetail.name}]`).fill(Config.testData.generalEvent.eventFoodDetail)
  }
  await page.locator(`[name=${generalEvent.eventHealthInsurance.name}][value=${Config.testData.generalEvent.eventHealthInsurance}]`).check()
  await page.locator(`[name=${generalEvent.eventPhotoID.name}][value=${Config.testData.generalEvent.eventPhotoID}]`).check()
  await page.locator(`[name=${generalEvent.eventMinors.name}][value=${Config.testData.generalEvent.eventMinors}]`).check()
  await page.locator(`[name=${generalEvent.eventVIP.name}][value=${Config.testData.generalEvent.eventVIP}]`).check()

  // Risk Management Section
  await page.locator(`[name=${riskManagement.alcohol.name}][value=${Config.testData.riskManagement.alcohol}]`).check()
  const alcoholSubfields = riskManagement.alcohol.subfields
  if (alcoholSubfields) {
    await page.locator(`[name=${alcoholSubfields.smartServe.name}][value=${Config.testData.riskManagement.smartServe}]`).check()
    await page.locator(`[name=${alcoholSubfields.entranceTicket.name}][value=${Config.testData.riskManagement.entranceTicket}]`).check()
    await page.locator(`[name=${alcoholSubfields.food.name}][value=${Config.testData.riskManagement.food}]`).check()
    const volunteers = alcoholSubfields.volunteers.subfields
    if (volunteers) {
      await page.locator(`[name=${alcoholSubfields.volunteers.name}][value=Yes]`).check()
      await page.locator(`[id=${volunteers.volunteer1.name}]`).fill(Config.testData.riskManagement.volunteers.volunteer1)
      await page.locator(`[id=${volunteers.volunteer2.name}]`).fill(Config.testData.riskManagement.volunteers.volunteer2)
      await page.locator(`[id=${volunteers.volunteer3.name}]`).fill(Config.testData.riskManagement.volunteers.volunteer3)
    }
    await page.locator(`[name=${alcoholSubfields.campusSafety.name}][value=${Config.testData.riskManagement.campusSafety}]`).check()
    await page.locator(`[name=${alcoholSubfields.privateSecurity.name}][value=${Config.testData.riskManagement.privateSecurity}]`).check()
  }

  // Emergency Preparedness Section
  await page.locator(`[name=${emergencyPreparedness.firstAid.name}][value=${Config.testData.emergencyPreparedness.firstAid}]`).check()
  await page.locator(`[name=${emergencyPreparedness.hospitalAwareness.name}][value=${Config.testData.emergencyPreparedness.hospitalAwareness}]`).check()
  await page.locator(`[name=${emergencyPreparedness.evacuationPlan.name}][value=${Config.testData.emergencyPreparedness.evacuationPlan}]`).check()
  await page.locator(`[name=${emergencyPreparedness.openFlames.name}][value=${Config.testData.emergencyPreparedness.openFlames}]`).check()

  // Safety Risk Assessment Section
  await page.locator(`[name=${safetyRiskAssessment.crowdControl.name}][value=${Config.testData.safetyRiskAssessment.crowdControl}]`).check()
  await page.locator(`[name=${safetyRiskAssessment.crowdControl.subfields.crowdControlDetails.name}]`).fill(Config.testData.safetyRiskAssessment.crowdControlDetails)
  await page.locator(`[name=${safetyRiskAssessment.specialCircumstances.name}]`).fill(Config.testData.safetyRiskAssessment.specialCircumstances)
  await page.locator(`[name=${safetyRiskAssessment.additionalRisks.name}]`).fill(Config.testData.safetyRiskAssessment.additionalRisks)

  // Contracts and Insurance Section
  await page.locator(`[name=${contractsInsurance.vendorContracts.name}][value=${Config.testData.contractsInsurance.vendorContracts}]`).check()
  await page.locator(`[name=${contractsInsurance.liabilityInsurance.name}][value=${Config.testData.contractsInsurance.liabilityInsurance}]`).check()
  await page.locator(`[name=${contractsInsurance.insuranceInRental.name}][value="${Config.testData.contractsInsurance.insuranceInRental}"]`).check()
  await page.locator(`[name=${contractsInsurance.insuranceCertificate.name}][value="${Config.testData.contractsInsurance.insuranceCertificate}"]`).check()

  await page.locator(`[name=${travel.transportationRequired.name}][value=${Config.testData.travel.transportationRequired}]`).check()

  const travelSubfields = travel.transportationRequired.subfields
  if (travelSubfields) {
    await page.locator(`[name=${travelSubfields.groupTransportation.name}][value=${Config.testData.travel.groupTransportation}]`).check()

    await page.locator(`[name=${travelSubfields.rentingVehicles.name}][value=${Config.testData.travel.rentingVehicles}]`).check()

    const rentingVehiclesSubfields = travelSubfields.rentingVehicles.subfields
    if (rentingVehiclesSubfields) {
      await page.locator(`[name=${rentingVehiclesSubfields.insurance.name}][value=${Config.testData.travel.insurance}]`).check()

      if (Config.testData.travel.rentingVehicles === 'Yes') {
        const rentalDetails = rentingVehiclesSubfields.rentalDetails.subfields
        if (rentalDetails) {
          await page.locator(`[name=${rentalDetails.companyName.name}]`).fill(Config.testData.travel.rentalDetails.companyName)
          await page.locator(`[name=${rentalDetails.companyAddress.name}]`).fill(Config.testData.travel.rentalDetails.companyAddress)
          await page.locator(`[name=${rentalDetails.companyPhone.name}]`).fill(Config.testData.travel.rentalDetails.companyPhone)
          await page.locator(`[name=${rentalDetails.additionalInfo.name}]`).fill(Config.testData.travel.rentalDetails.additionalInfo)
        }
      }
    }

    await page.locator(`[name=${travelSubfields.personalVehicles.name}][value=${Config.testData.travel.personalVehicles}]`).check()

    await page.locator(`[name=${travelSubfields.timesCommunicated.name}][value=${Config.testData.travel.timesCommunicated}]`).check()

    await page.locator(`[name=${travelSubfields.contingencyPlan.name}][value=${Config.testData.travel.contingencyPlan}]`).check()

    const contingencyPlanSubfields = travelSubfields.contingencyPlan.subfields
    if (contingencyPlanSubfields && Config.testData.travel.contingencyPlan === 'Yes') {
      await page.locator(`[name=${contingencyPlanSubfields.contingencyDetails.name}]`).fill(Config.testData.travel.contingencyDetails)
    }

    await page.locator(`[name=${travelSubfields.alcoholOnboard.name}][value=${Config.testData.travel.alcoholOnboard}]`).check()

    await page.locator(`[name=${travelSubfields.intoxicatedIndividuals.name}][value=${Config.testData.travel.intoxicatedIndividuals}]`).check()

    // const intoxicatedIndividualsSubfields = travelSubfields.intoxicatedIndividuals.subfields
    // if (intoxicatedIndividualsSubfields) {
    //   await page
    //     .locator(`[name=${intoxicatedIndividualsSubfields.wellbeingMeasures.name}]`)
    //     .fill(Config.testData.travel.intoxicatedIndividuals)
    // }
  }

  // Out of Province Events Section
  await page.locator(`[name=${outOfProvinceEvents.outOfProvince.name}][value=${Config.testData.outOfProvinceEvents.outOfProvince}]`).check()

  const outOfProvinceSubfields = outOfProvinceEvents.outOfProvince.subfields
  if (outOfProvinceSubfields && Config.testData.outOfProvinceEvents.outOfProvince === 'Yes') {
    await page.locator(`[name=${outOfProvinceSubfields.healthCoverage.name}][value=${Config.testData.outOfProvinceEvents.healthCoverage}]`).check()
    await page.locator(`[name=${outOfProvinceSubfields.documentsAdvised.name}][value=${Config.testData.outOfProvinceEvents.documentsAdvised}]`).check()
  }

  // Maintenance Services Section
  await page.locator(`[name=${maintenanceServices.garbageProvision.name}][value=${Config.testData.maintenanceServices.garbageProvision}]`).check()
  await page.locator(`[name=${maintenanceServices.cleanupCrew.name}][value=${Config.testData.maintenanceServices.cleanupCrew}]`).check()

  const cleanupCrewSubfields = maintenanceServices.cleanupCrew.subfields
  if (cleanupCrewSubfields && Config.testData.maintenanceServices.cleanupCrew === 'Yes') {
    await page.locator(`[name=${cleanupCrewSubfields.cleanupDetails.name}]`).fill(Config.testData.maintenanceServices.cleanupDetails)
  }

  await page.locator(`[name=${maintenanceServices.overnightSetup.name}][value=${Config.testData.maintenanceServices.overnightSetup}]`).check()

  // Human Rights Section
  await page.locator(`[name=${humanRights.rightsImplications.name}][value=${Config.testData.humanRights.rightsImplications}]`).check()
  await page.locator(`[name=${humanRights.rightsRisks.name}][value=${Config.testData.humanRights.rightsRisks}]`).check()

  const rightsRisksSubfields = humanRights.rightsRisks.subfields
  if (rightsRisksSubfields && Config.testData.humanRights.rightsRisks === 'Yes') {
    // await page.locator(`[name=${rightsRisksSubfields.otherRisks.name}]`).fill(Config.testData.humanRights.otherRisks)
  }
})

test('Fill out Hybrid Form', async ({ page }) => {
  const form = new Form(FormType.Hybrid)

  const primaryOrganizer = form.getSection('primaryOrganizer')
  const secondaryOrganizer = form.getSection('secondaryOrganizer')
  const generalEvent = form.getSection('event')
  const contractsInsurance = form.getSection('contractsInsurance')
  const humanRights = form.getSection('humanRights')

  // Navigate to form
  const url = `${Config.LINK.BASE}/${Config.LINK.HYBRID}`
  await page.goto(url)

  // Fill Primary Organizer Section
  await page.locator(`[name=${primaryOrganizer.firstName.name}]`).fill(Config.testData.primaryOrganizer.firstName)
  await page.locator(`[name=${primaryOrganizer.lastName.name}]`).fill(Config.testData.primaryOrganizer.lastName)
  await page.locator(`[name=${primaryOrganizer.carletonId.name}]`).fill(Config.testData.primaryOrganizer.carletonId)
  await page.locator(`[name=${primaryOrganizer.position.name}]`).fill(Config.testData.primaryOrganizer.position)
  await page.locator(`[name=${primaryOrganizer.role.name}][value=${Config.testData.primaryOrganizer.role}]`).click()
  await page.locator(`[name=${primaryOrganizer.email.name}]`).fill(Config.testData.primaryOrganizer.email)
  await page.locator(`[name=${primaryOrganizer.emailConfirm.name}]`).fill(Config.testData.primaryOrganizer.emailConfirm)
  await page.locator(`[name=${primaryOrganizer.phone.name}]`).fill(Config.testData.primaryOrganizer.phone)

  // Fill Secondary Organizer Section
  await page.locator(`[name=${secondaryOrganizer.firstName.name}]`).fill(Config.testData.secondaryOrganizer.firstName)
  await page.locator(`[name=${secondaryOrganizer.lastName.name}]`).fill(Config.testData.secondaryOrganizer.lastName)
  await page.locator(`[name=${secondaryOrganizer.carletonId.name}]`).fill(Config.testData.secondaryOrganizer.carletonId)
  await page.locator(`[name=${secondaryOrganizer.position.name}]`).fill(Config.testData.secondaryOrganizer.position)
  await page.locator(`[name=${secondaryOrganizer.role.name}][value=${Config.testData.secondaryOrganizer.role}]`).click()
  await page.locator(`[name=${secondaryOrganizer.email.name}]`).fill(Config.testData.secondaryOrganizer.email)
  await page.locator(`[name=${secondaryOrganizer.phone.name}]`).fill(Config.testData.secondaryOrganizer.phone)

  // General Event Information Section
  await page.locator(`[name=${generalEvent.eventTitle.name}]`).fill(Config.testData.generalEvent.eventTitle)
  await page.locator(`[name=${generalEvent.eventDate.name}]`).fill(Config.testData.generalEvent.eventDate)
  await page.locator(`[name=${generalEvent.eventStartTime.name}]`).fill(Config.testData.generalEvent.eventStartTime)
  await page.locator(`[name=${generalEvent.eventEndTime.name}]`).fill(Config.testData.generalEvent.eventEndTime)
  await page.locator(`[name=${generalEvent.eventDescription.name}]`).fill(Config.testData.generalEvent.eventDescription)

  // Contracts and Insurance Section
  await page.locator(`[name=${contractsInsurance.vendorContracts.name}][value=${Config.testData.contractsInsurance.vendorContracts}]`).check()
  await page.locator(`[name=${contractsInsurance.liabilityInsurance.name}][value=${Config.testData.contractsInsurance.liabilityInsurance}]`).check()
  await page.locator(`[name=${contractsInsurance.insuranceInRental.name}][value="${Config.testData.contractsInsurance.insuranceInRental}"]`).check()
  await page.locator(`[name=${contractsInsurance.insuranceCertificate.name}][value="${Config.testData.contractsInsurance.insuranceCertificate}"]`).check()

  // Human Rights Section
  await page.locator(`[name=${humanRights.rightsImplications.name}][value=${Config.testData.humanRights.rightsImplications}]`).check()
  await page.locator(`[name=${humanRights.rightsRisks.name}][value=${Config.testData.humanRights.rightsRisks}]`).check()
})

test('Fill out Online Form', async ({ page }) => {
  const form = new Form(FormType.Online)

  const primaryOrganizer = form.getSection('primaryOrganizer')
  const secondaryOrganizer = form.getSection('secondaryOrganizer')
  const generalEvent = form.getSection('event')
  const onlineInformation = form.getSection('onlineInformation')
  const contractsInsurance = form.getSection('contractsInsurance')
  const humanRights = form.getSection('humanRights')

  // Navigate to form
  const url = `${Config.LINK.BASE}/${Config.LINK.ONLINE}`
  await page.goto(url)

  // Fill Primary Organizer Section
  await page.locator(`[name=${primaryOrganizer.firstName.name}]`).fill(Config.testData.primaryOrganizer.firstName)
  await page.locator(`[name=${primaryOrganizer.lastName.name}]`).fill(Config.testData.primaryOrganizer.lastName)
  await page.locator(`[name=${primaryOrganizer.carletonId.name}]`).fill(Config.testData.primaryOrganizer.carletonId)
  await page.locator(`[name=${primaryOrganizer.position.name}]`).fill(Config.testData.primaryOrganizer.position)
  await page.locator(`[name=${primaryOrganizer.role.name}][value=${Config.testData.primaryOrganizer.role}]`).click()
  await page.locator(`[name=${primaryOrganizer.email.name}]`).fill(Config.testData.primaryOrganizer.email)
  await page.locator(`[name=${primaryOrganizer.emailConfirm.name}]`).fill(Config.testData.primaryOrganizer.emailConfirm)
  await page.locator(`[name=${primaryOrganizer.phone.name}]`).fill(Config.testData.primaryOrganizer.phone)

  // Fill Secondary Organizer Section
  await page.locator(`[name=${secondaryOrganizer.firstName.name}]`).fill(Config.testData.secondaryOrganizer.firstName)
  await page.locator(`[name=${secondaryOrganizer.lastName.name}]`).fill(Config.testData.secondaryOrganizer.lastName)
  await page.locator(`[name=${secondaryOrganizer.carletonId.name}]`).fill(Config.testData.secondaryOrganizer.carletonId)
  await page.locator(`[name=${secondaryOrganizer.position.name}]`).fill(Config.testData.secondaryOrganizer.position)
  await page.locator(`[name=${secondaryOrganizer.role.name}][value=${Config.testData.secondaryOrganizer.role}]`).click()
  await page.locator(`[name=${secondaryOrganizer.email.name}]`).fill(Config.testData.secondaryOrganizer.email)
  await page.locator(`[name=${secondaryOrganizer.phone.name}]`).fill(Config.testData.secondaryOrganizer.phone)

  // General Event Information Section
  await page.locator(`[name=${generalEvent.eventTitle.name}]`).fill(Config.testData.generalEvent.eventTitle)
  await page.locator(`[name=${generalEvent.eventDate.name}]`).fill(Config.testData.generalEvent.eventDate)
  await page.locator(`[name=${generalEvent.eventStartTime.name}]`).fill(Config.testData.generalEvent.eventStartTime)
  await page.locator(`[name=${generalEvent.eventEndTime.name}]`).fill(Config.testData.generalEvent.eventEndTime)
  await page.locator(`[name=${generalEvent.eventDescription.name}]`).fill(Config.testData.generalEvent.eventDescription)
  // await page.locator(`[name=${generalEvent.eventLocation.name}]`).fill(Config.testData.generalEvent.eventLocation)
  // await page.locator(`[name=${generalEvent.eventLocationReserved.name}][value=${Config.testData.generalEvent.eventLocationReserved}]`).click()
  // await page.locator(`[name=${generalEvent.eventParticipantsNumber.name}]`).fill(Config.testData.generalEvent.eventParticipantsNumber)

  // Fill Online Information Section
  await page.locator(`[name=${onlineInformation.onlinePlatform.name}]`).fill(Config.testData.onlineInformation.onlinePlatform)
  await page.locator(`[name=${onlineInformation.onlineLocation.name}]`).fill(Config.testData.onlineInformation.onlineLocation)
  await page.locator(`[name=${onlineInformation.onlinePeople.name}]`).fill(Config.testData.onlineInformation.onlinePeople)
  await page.locator(`[name=${onlineInformation.onlineOriginAttendance.name}]`).fill(Config.testData.onlineInformation.onlineOriginAttendance)

  // Contracts and Insurance Section
  await page.locator(`[name=${contractsInsurance.vendorContracts.name}][value=${Config.testData.contractsInsurance.vendorContracts}]`).check()
  await page.locator(`[name=${contractsInsurance.liabilityInsurance.name}][value=${Config.testData.contractsInsurance.liabilityInsurance}]`).check()
  await page.locator(`[name=${contractsInsurance.insuranceInRental.name}][value="${Config.testData.contractsInsurance.insuranceInRental}"]`).check()
  await page.locator(`[name=${contractsInsurance.insuranceCertificate.name}][value="${Config.testData.contractsInsurance.insuranceCertificate}"]`).check()

  // Human Rights Section
  await page.locator(`[name=${humanRights.rightsImplications.name}][value=${Config.testData.humanRights.rightsImplications}]`).check()
  await page.locator(`[name=${humanRights.rightsRisks.name}][value=${Config.testData.humanRights.rightsRisks}]`).check()
})
