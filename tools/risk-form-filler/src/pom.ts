import {
  ContractsInsurance,
  EmergencyPreparedness,
  Event,
  HumanRights,
  MaintenanceServices,
  Organizer,
  OutOfProvinceEvents,
  RiskManagement,
  SafetyRiskAssessment,
  Travel,
} from './object-models/sections'

export enum FormType {
  InPerson = 'InPerson',
  Hybrid = 'Hybrid',
  Online = 'Online',
}

export class Form {
  readonly formType: FormType
  readonly sections: Record<string, any>

  constructor(formType: FormType) {
    this.formType = formType
    this.sections = this.createSections()
  }

  // Dynamically create sections based on form type
  private createSections(): Record<string, any> {
    const organizerSections = {
      primaryOrganizer: Organizer.create('primary', true),
      secondaryOrganizer: Organizer.create('secondary', false),
    }

    const sharedSections = {
      event: Event.create(),
      riskManagement: RiskManagement.create(),
    }

    switch (this.formType) {
      case FormType.InPerson:
        return {
          ...organizerSections,
          ...sharedSections,
          emergencyPreparedness: EmergencyPreparedness.create(),
          safetyRiskAssessment: SafetyRiskAssessment.create(),
          contractsInsurance: ContractsInsurance.create(),
          travel: Travel.create(),
          outOfProvinceEvents: OutOfProvinceEvents.create(),
          maintenanceServices: MaintenanceServices.create(),
          humanRights: HumanRights.create(),
        }
      case FormType.Hybrid:
        return {
          ...organizerSections,
          ...sharedSections,
          emergencyPreparedness: EmergencyPreparedness.create(),
          safetyRiskAssessment: SafetyRiskAssessment.create(),
          contractsInsurance: ContractsInsurance.create(),
          travel: Travel.create(),
          outOfProvinceEvents: OutOfProvinceEvents.create(),
        }
      case FormType.Online:
        return {
          ...organizerSections,
          ...sharedSections,
          contractsInsurance: ContractsInsurance.create(),
        }
      default:
        throw new Error('Unknown form type')
    }
  }

  getSection(sectionName: string): any {
    return this.sections[sectionName]
  }
}
