// Encapsulate all field properties
export class Field<T> {
  constructor(
    public name: string,
    public type: T,
    public label: string,
    public required: boolean,
    public options?: string[],
    public maxLength?: number,
    public rows?: number,
    public format?: string,
    public subfields?: Record<string, Field<any>>,
    public matchField?: string,
  ) {
  }
}

// Organizer
export class Organizer {
  static create(prefix: string, isPrimary: boolean): Record<string, Field<any>> {
    return {
      firstName: new Field(`${prefix}_first_name`, 'string', 'First Name', isPrimary, undefined, 60),
      lastName: new Field(`${prefix}_last_name`, 'string', 'Last Name', isPrimary, undefined, 60),
      carletonId: new Field(`${prefix}_carleton_id`, 'number', 'Carleton University ID', false),
      position: new Field(
        `${prefix}_position`,
        'string',
        isPrimary
          ? 'What is the name of the organization, club, or society that is hosting this event?'
          : 'Position within organization',
        isPrimary,
        undefined,
        60,
      ),
      role: new Field(`${prefix}_role`, 'radio', 'Role', isPrimary, ['Student', 'Professional Staff', 'Faculty', 'Other']),
      email: new Field(`${prefix}_email`, 'string', 'Email', isPrimary, undefined, undefined, undefined, 'email'),
      emailConfirm: isPrimary
        ? new Field(
          `${prefix}_email_confirm`,
          'string',
          'Confirm Email',
          true,
          undefined,
          undefined,
          undefined,
          'email',
          undefined,
          `${prefix}_email`,
        )
        : undefined,
      phone: new Field(`${prefix}_phone`, 'string', 'Phone Number', isPrimary),
    }
  }
}

// General Event Information
export class Event {
  static create(): Record<string, Field<any>> {
    return {
      eventTitle: new Field('event_title', 'string', 'Event Title', true, undefined, 120),
      eventDate: new Field('event_date', 'string', 'Event Date', true, undefined, undefined, undefined, 'date'),
      eventStartTime: new Field('event_start_time', 'string', 'Event Start Time', true),
      eventEndTime: new Field('event_end_time', 'string', 'Event End Time', true),
      eventDescription: new Field('event_description', 'string', 'Description of the Event', false, undefined, undefined, 4),
      eventLocation: new Field('event_location', 'string', 'Event Location', true, undefined, 200),
      eventLocationReserved: new Field('event_location_res', 'string', 'Has this location been reserved?', true, ['No', 'Yes']),
      eventParticipantsNumber: new Field('event_participants_number', 'string', 'Number of expected participants?', true, undefined, 200),
      eventAudience: new Field('event_audience', 'array', 'Who is this event open to:', false, [
        'Carleton University Students',
        'Staff and Faculty',
        'Alumni',
        'General Public',
      ]),
      eventFood: new Field('event_food', 'string', 'Will there be food at the event?', true, ['No', 'Yes']),
      eventFoodDetail: new Field('event_food_detail', 'string', 'If Yes, please provide detail.', false, undefined, 200),
      eventHealthInsurance: new Field('event_health_insurance', 'string', 'Will attendees be required to bring their health card?', true, ['No', 'Yes']),
      eventPhotoID: new Field('event_photo_id', 'string', 'Will attendees be required to bring government issued photo identification?', true, ['No', 'Yes']),
      eventMinors: new Field('event_minors', 'string', 'Will there be any minors attending this event?', true, ['No', 'Yes']),
      eventVIP: new Field('event_vip', 'string', 'Have you invited a Dignitary/VIP to attend this event?', true, ['No', 'Yes']),
    }
  }
}

// Risk Management
export class RiskManagement {
  static create(): Record<string, Field<any>> {
    return {
      alcohol: new Field(
        'risk_alcohol',
        'string',
        'Will your event include the service or presence of alcohol?',
        true,
        ['No', 'Yes'],
        undefined,
        undefined,
        undefined,
        {
          smartServe: new Field(
            'risk_alcohol_smartserve',
            'string',
            'Will alcohol be served by an individual with Smart Serve training?',
            true,
            ['No', 'Yes'],
          ),
          entranceTicket: new Field(
            'risk_alcohol_entrance_ticket',
            'string',
            'Will there be an entrance ticket cost that includes alcohol?',
            true,
            ['No', 'Yes'],
          ),
          food: new Field(
            'risk_alcohol_food',
            'string',
            'Will food be provided at the event?',
            true,
            ['No', 'Yes'],
          ),
          volunteers: new Field(
            'risk_alcohol_volunteers',
            'string',
            'Will there be at least three volunteers designated to monitor attendees not consuming alcohol?',
            true,
            ['No', 'Yes'],
            undefined,
            undefined,
            undefined,
            {
              volunteer1: new Field('risk_alcohol_volunteers_names_1', 'string', 'Volunteer’s name 1', false),
              volunteer2: new Field('risk_alcohol_volunteers_names_2', 'string', 'Volunteer’s name 2', false),
              volunteer3: new Field('risk_alcohol_volunteers_names_3', 'string', 'Volunteer’s name 3', false),
            },
          ),
          campusSafety: new Field(
            'risk_alcohol_safety',
            'string',
            'Have you made arrangements for Campus Safety Services to be present?',
            true,
            ['No', 'Yes'],
          ),
          privateSecurity: new Field(
            'risk_alcohol_security',
            'string',
            'Will there be hired private security at this event (if off-campus)?',
            true,
            ['No', 'Yes', 'Not Applicable'],
          ),
        },
      ),
      speaker: new Field(
        'risk_speaker',
        'string',
        'Will there be any speaker(s) presenting as part of the event?',
        true,
        ['No', 'Yes'],
        undefined,
        undefined,
        undefined,
        {
          topics: new Field('risk_speaker_topics', 'string', 'What topics will the speaker(s) be presenting?', false, undefined, 200),
          names: new Field('risk_speaker_names', 'string', 'Please provide full name(s) of speaker(s)', false, undefined, 200),
          website: new Field('risk_speaker_site', 'string', 'Does the speaker have a website or is there a website for the organization?', false, undefined, 200),
        },
      ),
    }
  }
}

// Emergency Preparedness
export class EmergencyPreparedness {
  static create(): Record<string, Field<any>> {
    return {
      firstAid: new Field(
        'emergency_firstaid',
        'string',
        'Are volunteers trained and certified in either First-Aid/CPR?',
        true,
        ['No', 'Yes'],
        undefined,
        undefined,
        undefined,
        {
          volunteerNames: new Field('emergency_names', 'string', 'List the names of the volunteers and their training credentials', false, undefined, 200),
        },
      ),
      hospitalAwareness: new Field(
        'emergency_hospital',
        'string',
        'Do organizers/volunteers know the location of the nearest hospital and how to summon emergency services if required?',
        true,
        ['No', 'Yes'],
      ),
      evacuationPlan: new Field(
        'emergency_evac',
        'string',
        'Have organizers established a designated meeting place outside of the venue in the event of a required evacuation?',
        true,
        ['No', 'Yes'],
      ),
      openFlames: new Field(
        'emergency_flames',
        'string',
        'Are there any open flames or dust-producing activities as part of this event?',
        true,
        ['No', 'Yes'],
      ),
    }
  }
}

// Safety Risk Assessment
export class SafetyRiskAssessment {
  static create(): Record<string, Field<any>> {
    return {
      crowdControl: new Field(
        'safety_crowd',
        'string',
        'Will crowd control measures be put in place?',
        true,
        ['No', 'Yes'],
        undefined,
        undefined,
        undefined,
        {
          crowdControlDetails: new Field(
            'safety_crowd_detail',
            'string',
            'Please provide details regarding measures to control occupant capacity at the venue',
            false,
            undefined,
            undefined,
            4,
          ),
        },
      ),
      specialCircumstances: new Field(
        'safety_special',
        'string',
        'Are there any other special circumstances related to the event that would give concern for safety or security of attendees?',
        false,
        undefined,
        undefined,
        4,
      ),
      additionalRisks: new Field(
        'safety_risk',
        'string',
        'Are there any other risks that the group/organizer feels that attendees would be exposed to by participating in this event? Please provide full details',
        false,
        undefined,
        undefined,
        4,
      ),
    }
  }
}

// Contracts and Insurance
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
}

// Travel
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
}

// Out of Province Events
export class OutOfProvinceEvents {
  static create(): Record<string, Field<any>> {
    return {
      outOfProvince: new Field(
        'out_of_province',
        'string',
        'Will any portion of your event take place outside of the province of Ontario or outside of Canada?',
        true,
        ['No', 'Yes'],
        undefined,
        undefined,
        undefined,
        {
          healthCoverage: new Field(
            'out_of_province_health',
            'string',
            'Does every attendee have adequate out of province health coverage?',
            true,
            ['No', 'Yes'],
          ),
          documentsAdvised: new Field(
            'out_of_province_documents',
            'string',
            'Has each attendee been advised of the required documents and health requirements needed to leave the province or country?',
            true,
            ['No', 'Yes'],
          ),
        },
      ),
    }
  }
}

// Maintenance Services
export class MaintenanceServices {
  static create(): Record<string, Field<any>> {
    return {
      garbageProvision: new Field(
        'fmp_garbage',
        'string',
        'Has Facilities Management and Planning been contacted regarding the provision of garbage containers and cleaning staff to clean-up during/after the event?',
        true,
        ['No', 'Yes'],
      ),
      cleanupCrew: new Field(
        'fmp_cleanup',
        'string',
        'Will volunteers or other clean-up crew(s) be designated to return facilities to condition found prior to commencement of the event?',
        true,
        ['No', 'Yes'],
        {
          cleanupDetails: new Field(
            'fmp_cleanup_details',
            'string',
            'Please provide details as to who will be providing the clean-up services and what clean-up will be performed?',
            false,
            undefined,
            200,
          ),
        },
      ),
      overnightSetup: new Field(
        'fmp_overnight',
        'string',
        'Will your event setup remain overnight? If yes, have you contracted security or understand that the university does not assume responsibility for loss or damage?',
        true,
        ['No', 'Yes'],
      ),
    }
  }
}

// Human Rights
export class HumanRights {
  static create(): Record<string, Field<any>> {
    return {
      rightsImplications: new Field(
        'rights_implications',
        'string',
        'Have the group/organizers considered the human rights implications of the event - is it inclusive and respectful of racial and cultural diversity, gender, sexual orientation, gender identity, and disability?',
        true,
        ['No', 'Yes'],
      ),
      rightsRisks: new Field(
        'rights_risks',
        'string',
        'Are there any potential risks to the emotional, psychological, and/or social health and wellbeing of the event participants?',
        true,
        ['No', 'Yes'],
      ),
      otherRisks: new Field(
        'rights_other',
        'string',
        'Are there any other risks that the group/organizer feels that attendees would be exposed to by participating in this event? Please provide full details.',
        false,
        undefined,
        undefined,
        4,
      ),
    }
  }
}
// FIXME: This section is incomplete
// needs to add online event attendance
export class OnlineInformation {
  static create(): Record<string, Field<any>> {
    return {
      onlinePlatform: new Field(
        'online_platform',
        'string',
        'What platform will be used for the broadcast of the event? (i.e.: Zoom, Microsoft Teams, etc.)',
        false,
        ['Zoom', 'Google Meet', 'Microsoft Teams', 'Discord', 'Other'],
        50,
      ),
      onlineTopic: new Field(
        'online_topic',
        'string',
        'What topic will be discussed/presented or activities that will be broadcast?',
        false,
        undefined,
        200,
      ),
      onlineLocation: new Field(
        'online_location',
        'string',
        'What is the location where the broadcast will originate?',
        false,
        undefined,
        200,
      ),
      onlinePeople: new Field(
        'online_production_count',
        'string',
        'How many people will be involved in the production of the event?',
        false,
        undefined,
        4,
      ),
      onlineOriginAttendance: new Field(
        'online_location_count',
        'string',
        'How many people will attend the location where the production of the online event originates?',
        false,
        undefined,
        200,
      ),
    }
  }
}

// Instantiate as needed:
const primaryOrganizer = Organizer.create('primary', true)
const secondaryOrganizer = Organizer.create('secondary', false)
const event = Event.create()
const riskManagement = RiskManagement.create()
const emergencyPreparedness = EmergencyPreparedness.create()
const safetyRiskAssessment = SafetyRiskAssessment.create()
const contractsInsurance = ContractsInsurance.create()
const travel = Travel.create()
const outOfProvinceEvents = OutOfProvinceEvents.create()
const maintenanceServices = MaintenanceServices.create()
const humanRights = HumanRights.create()
const onlineInformation = OnlineInformation.create()

export {
  contractsInsurance,
  emergencyPreparedness,
  event,
  humanRights,
  maintenanceServices,
  onlineInformation,
  outOfProvinceEvents,
  primaryOrganizer,
  riskManagement,
  safetyRiskAssessment,
  secondaryOrganizer,
  travel,
}
