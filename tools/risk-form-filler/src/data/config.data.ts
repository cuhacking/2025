export const Config = {
  LINK: {
    BASE: 'https://sarms.carleton.ca/event-risk',
    IN_PERSON: 'in-person',
    HYBRID: 'hybrid',
    ONLINE: 'online',
  },

  ORGANIZERS: {
    PRIMARY: {
      firstName: 'Raef',
      lastName: 'Sarofiem',
      carletonId: '101682872',
      position: 'Community Engagement Lead',
      role:
        'Student',
      // 'Professional Staff',
      // 'Faculty',
      // 'Other',
      email: 'raefsarofiem@cmail.carleton.ca',
      emailConfirm: 'raefsarofiem@cmail.carleton.ca',
      phone: '123-456-7890',
    },
    SECONDARY: {
      firstName: 'Ajaan',
      lastName: 'Nalliah',
      carletonId: '101151873',
      position: 'Community Engagement',
      role: 'Student',
      // 'Professional Staff',
      // 'Faculty',
      // 'Other',
      email: 'ajaannalliah@cmail.carleton.ca',
      phone: '123-456-7891',
    },
  },

  generalEvent: {
    eventTitle: 'cuHacking Weekly General Meeting',
    eventDate: '2024-12-15',
    eventStartTime: '18:00',
    eventEndTime: '23:00',
    eventDescription: 'cuHacking Weekly General Meeting',
    eventLocation: 'NN 374',
    eventLocationReserved: 'Yes',
    eventParticipantsNumber: '20',
    eventAudience: [
      'Carleton University Students',
      'Staff and Faculty',
      'Alumni',
      // 'General Public',
    ],
    eventTix: 'No',
    eventFood: 'Yes',
    eventFoodDetail: 'None',
    eventHealthInsurance: 'No',
    eventPhotoID: 'No',
    eventMinors: 'No',
    eventVIP: 'No',
  },

  riskManagement: {
    alcohol: 'Yes',
    smartServe: 'Yes',
    entranceTicket: 'No',
    food: 'Yes',
    volunteers: {
      volunteer1: 'Alice',
      volunteer2: 'Bob',
      volunteer3: 'Charlie',
    },
    campusSafety: 'Yes',
    privateSecurity: 'No',
    speaker: 'Yes',
    topics: 'cuHacking',
    names: 'Raef Sarofiem',
    website: 'https://cuhacking.ca/',
  },

  emergencyPreparedness: {
    firstAid: 'Yes',
    volunteerNames: 'Alice Rumsfeld, ...',
    hospitalAwareness: 'Yes',
    evacuationPlan: 'Yes',
    openFlames: 'No',
  },

  safetyRiskAssessment: {
    crowdControl: 'Yes',
    crowdControlDetails: 'Monitors will control entrance/exit points.',
    specialCircumstances: 'No',
    additionalRisks: 'No',
  },

  contractsInsurance: {
    vendorContracts: 'No',
    liabilityInsurance: 'Yes',
    insuranceInRental: 'Not Applicable',
    insuranceCertificate: 'Yes',
  },

  travel: {
    transportationRequired: 'Yes',
    groupTransportation: 'No',
    rentingVehicles: 'Yes',
    insurance: 'Yes',
    rentalDetails: {
      companyName: 'Rent-A-Van Inc.',
      companyAddress: '123 Main St, Ottawa, ON',
      companyPhone: '123-456-7892',
      additionalInfo: 'Insurance is fully covered in the rental fee.',
    },
    personalVehicles: 'No',
    timesCommunicated: 'Yes',
    contingencyPlan: 'Yes',
    contingencyDetails: 'Plan includes backup transportation via taxis.',
    alcoholOnboard: 'No',
    intoxicatedIndividuals: 'No',
  },

  outOfProvinceEvents: {
    outOfProvince: 'Yes',
    healthCoverage: 'Yes',
    documentsAdvised: 'Yes',
  },

  maintenanceServices: {
    garbageProvision: 'Yes',
    cleanupCrew: 'Yes',
    cleanupDetails: 'Volunteer group will clean up after the event.',
    overnightSetup: 'No',
  },

  humanRights: {
    rightsImplications: 'Yes',
    rightsRisks: 'No',
    otherRisks: 'None identified.',
  },

  onlineInformation: {
    onlinePlatform: 'Zoom',
    onlineTopic: 'cuHacking Weekly General Meeting',
    onlineLocation: 'NN 374',
    onlinePeople: '10',
    onlineOriginAttendance: '5',
  },
}
