export interface ScheduleHybridParams {
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
    expectedAttendees: number
  }

  onlineInformation: {
    platform: string
    topics: string
    location: string
    numberOfOrganizers: number
    organizersAttendingOnline: number
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
