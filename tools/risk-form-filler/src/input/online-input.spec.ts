import type { ScheduleOnlineParams } from './schedule-online-params'
import { test as base, expect } from '@playwright/test'
import { getUserConfirmation } from '../../helpers/get-user-confirmation'
import { scheduleOnline } from '../online'
import { FormsLayout } from '../pom'

const test = base.extend<{ formLayout: FormsLayout }>({
  formLayout: async ({ page }, use) => {
    const docsLayoutPage = new FormsLayout(page)
    await docsLayoutPage.goto()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(docsLayoutPage)
  },
})

test.describe(`Online Form Submission`, {
  tag: '@smoke',
}, () => {
  test(`should run sucessfully`, async ({ formLayout }) => {
    const params: ScheduleOnlineParams = {
      primaryOrganizer: {
        firstName: 'Raef',
        lastName: 'Sarofiem',
        studentID: 111101111,
        email: 'raefsarofiem@cmail.carleton.ca',
        phone: 'RAEF_PHONE_NUMBER',
      },
      secondaryOrganizer: {
        firstName: 'Ajaan',
        lastName: 'Nalliah',
        studentID: 111101112,
        email: 'ajaannalliah@cmail.carleton.ca',
        phone: 'AJAAN_PHONE_NUMBER',
      },
      eventDetails: {
        title: 'cuHacking Event Title',
        date: '2024/11/23',
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        description: 'cuHacking Event Description',
        expectedAttendees: 100,
      },
      onlineInformation: {
        platform: 'Discord',
        topics: 'cuHacking Tech Stack',
        location: 'Ottawa',
        numberOfOrganizers: 5,
        organizersAttendingOnline: 3,
      },
      speakerAndResources: {
        topics: 'Technology Trends',
        speakers: 'Raef Sarofiem, Ajaan Nalliah',
        speakerSites: 'https://cuhacking.ca/',
        additionalRemarks: 'None',
      },
    }

    const output = `
    ===================== Event Details =====================
    Primary Organizer's First Name:   ${params.primaryOrganizer.firstName} 
    Primary Organizer's Last Name:    ${params.primaryOrganizer.lastName} 
    Primary Organizer's Student ID:   ${params.primaryOrganizer.studentID} 
    Primary Organizer's Email:        ${params.primaryOrganizer.email} 
    Primary Organizer's Phone:        ${params.primaryOrganizer.phone} 

    Secondary Organizer's First Name: ${params.secondaryOrganizer.firstName} 
    Secondary Organizer's Last Name:  ${params.secondaryOrganizer.lastName} 
    Secondary Organizer's Student ID: ${params.secondaryOrganizer.studentID} 
    Secondary Organizer's Email:      ${params.secondaryOrganizer.email} 
    Secondary Organizer's Phone:      ${params.secondaryOrganizer.phone} 

    Event Title:                      ${params.eventDetails.title} 
    Event Date:                       ${params.eventDetails.date} 
    Event Start Time:                 ${params.eventDetails.startTime} 
    Event End Time:                   ${params.eventDetails.endTime} 
    Event Description:                ${params.eventDetails.description} 
    Expected Attendees:               ${params.eventDetails.expectedAttendees}

    Event Platform:                   ${params.onlineInformation.platform}
    Online Event Topics:              ${params.onlineInformation.topics}
    Online Event Location:            ${params.onlineInformation.location}
    Number of Organizers:             ${params.onlineInformation.numberOfOrganizers}
    Number of Organizers Attending:   ${params.onlineInformation.organizersAttendingOnline}

    Speaker Topics:                   ${params.speakerAndResources.topics} 
    Speakers List:                    ${params.speakerAndResources.speakers} 
    Speaker Sites:                    ${params.speakerAndResources.speakerSites} 
    Additional Remarks:               ${params.speakerAndResources.additionalRemarks} 
    =========================================================

    `

    // eslint-disable-next-line no-console
    console.log(output)

    const isConfirmed = await getUserConfirmation(
      'Is this information correct? Otherwise change the input file... (yes/y to proceed): ',
    )

    if (isConfirmed) {
      try {
        await scheduleOnline(params, formLayout)
        // eslint-disable-next-line no-console
        console.log('Form filled successfully!')
        expect(true).toBeTruthy()
      }
      catch (error) {
        console.error(`Error filling the form: ${error.message}`)
        throw error
      }
    }
    else {
      // eslint-disable-next-line no-console
      console.log('Operation cancelled.')
      expect(false).toBeTruthy()
    }
  })
})
