export interface ScheduleInPersonParams {
  primaryOrganizer: {
    firstName: string
    lastName: string
    studentID: number
    email: string
    phone: string
  }

  secondaryOrganizer: {
    firstName: string
    lastName: string
    studentID: number
    email: string
    phone: string
  }

  eventDetails: {
    title: string
    date: string // Format: 'YYYY/MM/DD'
    startTime: string // Format: 'HH:MM AM/PM'
    endTime: string // Format: 'HH:MM AM/PM'
    description: string
    location: string
    expectedAttendees: string
  }

  riskManagement: {
    speakerTopics: string
    speakers: string
    speakerSites: string
    specialCircumstances: string
    risks: string
    cleanUpCrew: string
    additionalRemarks: string
  }
}
