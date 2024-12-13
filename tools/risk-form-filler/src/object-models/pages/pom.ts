import type { Page } from '@playwright/test'
import { ContractsInsurance } from './components/contracts-insurance.component'
import { EmergencyPreparedness } from './components/emergency-preparedness.component'
import { Event } from './components/event.component'
import { HumanRights } from './components/human-rights.component'
import { MaintenanceServices } from './components/maintenance-services.component'
import { OnlineInformation } from './components/online-information.component'
import { Organizer } from './components/organizer.component'
import { OutOfProvinceEvents } from './components/out-of-province-events.component'
import { RiskManagement } from './components/risk-management.component'
import { SafetyRiskAssessment } from './components/safety-risk-assessment.component'
import { Travel } from './components/travel.component'

export class Form {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url)
  }

  async fill(Config): Promise<void> {
    await Organizer.fill(this.page, Config.ORGANIZERS.PRIMARY)
    await Organizer.fill(this.page, Config.ORGANIZERS.SECONDARY)
    await Event.fill(this.page, Config.generalEvent)
    await RiskManagement.fill(this.page, Config.riskManagement)
    await OnlineInformation.fill(this.page, Config.onlineInformation)
    await ContractsInsurance.fill(this.page, Config.contractsInsurance)
    await EmergencyPreparedness.fill(this.page, Config.emergencyPreparedness)
    await SafetyRiskAssessment.fill(this.page, Config.safetyRiskAssessment)
    await Travel.fill(this.page, Config.travel)
    await OutOfProvinceEvents.fill(this.page, Config.outOfProvinceEvents)
    await MaintenanceServices.fill(this.page, Config.maintenanceServices)
    await HumanRights.fill(this.page, Config.humanRights)
  }
}
