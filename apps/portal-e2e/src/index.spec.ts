import { endsWith, Ensure, equals, matches } from '@serenity-js/assertions'
import { Duration, Task, Wait } from '@serenity-js/core'
import { describe, it } from '@serenity-js/playwright-test'
import { By, Click, Enter, isVisible, Navigate, Page, PageElement, Press } from '@serenity-js/web'

// These need to be your LinkedIn Credentials
const EMAIL_ADDRESS = process.env.LOCAL_DEV_EMAIL_ADDRESS
const PASSWORD = process.env.LOCAL_DEV_PASSWORD

export function startLoggedOut() {
  return Task.where('#actor starts logged out', Navigate.to('/'), Ensure.that(
    Page.current().title().describedAs('app title'),
    equals('cuHacking 2025 Portal'),
  ))
}

export function startLoggedIn() {
  return Task.where(
    '#actor starts logged in',
    Navigate.to('/'),
    Click.on(PageElement.located(By.cssContainingText('button', 'LOG IN'))),
    Wait.upTo(Duration.ofSeconds(10))
      .until(PageElement.located(By.css('#username')), isVisible()),
    Enter.theValue(EMAIL_ADDRESS)
      .into(PageElement.located(By.css('#username'))),
    Enter.theValue(PASSWORD)
      .into(PageElement.located(By.css('#password'))),
    Click.on(PageElement.located(By.cssContainingText('button', 'Sign in'))),
    Wait.until(Page.current().url().href, matches(/\/(dashboard|terms|profile)$/)),
  )
}

// ==================== Hacker Tests ====================
describe('A Hacker', () => {
  it('should be able to login', async ({ actor }) => {
    await actor.attemptsTo(
      startLoggedOut(),
      Click.on(PageElement.located(By.cssContainingText('button', 'LOG IN'))),
      Wait.upTo(Duration.ofSeconds(10))
        .until(PageElement.located(By.css('#username')), isVisible()),
      Enter.theValue(EMAIL_ADDRESS)
        .into(PageElement.located(By.css('#username'))),
      Enter.theValue(PASSWORD)
        .into(PageElement.located(By.css('#password'))),
      Click.on(PageElement.located(By.cssContainingText('button', 'Sign in'))),
      Wait.until(Page.current().url().href, endsWith('/dashboard')),
    )
  })

  it('should be able to complete terms and conditions', async ({ actor }) => {
    await actor.attemptsTo(
      startLoggedIn(),
      Click.on(PageElement.located(By.cssContainingText('button', 'MLH CODE OF CONDUCT'))),
      Press.the('Tab'),
      Press.the('End'),
      Wait.until(PageElement.located(By.css('button[role="checkbox"]')), isVisible()),
      Click.on(
        PageElement.located(
          By.css('button[role="checkbox"][aria-checked="false"]'),
        ),
      ),
      Click.on(PageElement.located(By.cssContainingText('button', 'MLH Terms & Conditions'))),
      Press.the('Tab'),
      Press.the('End'),
      Wait.until(PageElement.located(By.css('button[role="checkbox"]')), isVisible()),
      Click.on(
        PageElement.located(
          By.css('button[role="checkbox"][aria-checked="false"]'),
        ),
      ),
      Click.on(PageElement.located(By.cssContainingText('button', 'MLH Privacy Policy'))),
      Press.the('Tab'),
      Press.the('End'),
      Wait.until(PageElement.located(By.css('button[role="checkbox"]')), isVisible()),
      Click.on(
        PageElement.located(
          By.css('button[role="checkbox"][aria-checked="false"]'),
        ),
      ),
      Click.on(PageElement.located(By.cssContainingText('button', 'cuHacking Terms & Conditions'))),
      Press.the('Tab'),
      Press.the('End'),
      Wait.until(PageElement.located(By.css('button[role="checkbox"]')), isVisible()),
      Click.on(
        PageElement.located(
          By.css('button[role="checkbox"][aria-checked="false"]'),
        ),
      ),
      Wait.until(PageElement.located(By.css('button[role="checkbox"]')), isVisible()),
      Click.on(
        PageElement.located(
          By.css('button[role="checkbox"][aria-checked="false"]'),
        ),
      ),
      Click.on(PageElement.located(By.cssContainingText('span', 'LET\'S CREATE YOUR PROFILE'))),
      Wait.until(Page.current().url().href, endsWith('/profile')),
    )
  })

  it('should be able to logout', async ({ actor }) => {
    await actor.attemptsTo(
      startLoggedIn(),
      Click.on(PageElement.located(By.css('[aria-label="Logout"]'))),
      Wait.upTo(Duration.ofSeconds(10))
        .until(Page.current().url().href, endsWith('/login')),
    )
  })
})

//   it('should be able to see the schedule of a year-round event', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerViewYearRoundEventSchedule(),
//     )
//   })

//   it('should be able to create profile when all fields validly filled in', async ({ actor }) => {
//     await actor.attemptsTo(
//       // organizerCreateProfile()
//     )
//   })

//   it('should not be able to create profile when required fields are missing', async ({ actor }) => {
//     await actor.attemptsTo(
//       // organizerCreateProfileWithMissingFields()
//     )
//   })

//   it('should be able to see the schedule of a hackathon event', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerViewHackathonEventSchedule(),
//     )
//   })

//   it('should be able to see the schedule of a hackathon', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerViewHackathonEventSchedule(),
//     )
//   })

//   it('should not be able to edit the year-round event', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerEditYearRoundEvent(),
//     )
//   })

//   it('should not be able to edit a hackathon event', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerEditYearRoundEvent(),
//     )
//   })

//   it('should not be able to edit hackathon details', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerEditYearRoundEvent(),
//     )
//   })

//   // HACKER FOOD QUESTIONS
//   // Will finalize this when we know the food situation
//   // it('should be able to see when food is served', async ({ actor }) => {
//   //   await actor.attemptsTo(
//   //     // hackerSeeFoodSchedule(),
//   //   )
//   // })

//   // it('should be shown the food served for them during the hackathon if they have dietary restrictions', async ({ actor }) => {
//   //   await actor.attemptsTo(
//   //     // hackerDietaryRestrictionsFoodServed(),
//   //   )
//   // })

//   // it('should know what food will be served ahead of time', async ({ actor }) => {
//   //   await actor.attemptsTo(
//   //     // hackerViewFoodMenuAhead(),
//   //   )
//   // })

//   it('should have control over who can see their profile', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerControlProfileVisibility(),
//     )
//   })

//   it('should have control over who can see their resume', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerControlResumeVisibility(),
//     )
//   })

//   it('should understand that registering for the hackathon makes their resume public to the organizer', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerResumePublicOnRegistration(),
//     )
//   })
//   it('should be able to filter year-round events by event type (workshop/network event/career fair)', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerFilterYearRoundEventsByType(),
//     )
//   })

//   it('should be able to filter year-round events by sponsor that is host', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerFilterYearRoundEventsByHost(),
//     )
//   })

//   it('should be able to filter hackathon events by sponsor that is hosting', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerFilterHackathonEventsByHost(),
//     )
//   })

//   it('should be able to search by name for year-round events', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerSearchYearRoundEventsByName(),
//     )
//   })

//   it('should know the max registrants for an event', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerKnowMaxRegistrants(),
//     )
//   })

//   it('should know the current number of registrations for an event', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerKnowCurrentRegistrations(),
//     )
//   })

//   it('should be able to join the waitlist for an event once registration is full', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerJoinWaitlistWhenFull(),
//     )
//   })

//   it('should be able to create profile when all fields validly filled in', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerCreateProfile()
//     )
//   })
// })

// describe('Mentor', () => {
//   it('should be able to logout', async ({ actor }) => {
//     await actor.attemptsTo(
//       // mentorLogout(),
//     )
//   })

//   it('should be able to see the schedule of a year-round event', async ({ actor }) => {
//     await actor.attemptsTo(
//       // mentorViewYearRoundEventSchedule(),
//     )
//   })

//   it('should be able to create profile when all fields validly filled in', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerCreateProfile()
//     )
//   })

//   it('should be able to see the schedule of a hackathon event', async ({ actor }) => {
//     await actor.attemptsTo(
//       // mentorViewHackathonEventSchedule(),
//     )
//   })

//   it('should be able to see the schedule of a hackathon', async ({ actor }) => {
//     await actor.attemptsTo(
//       // mentorViewHackathonEventSchedule(),
//     )
//   })

//   it('should not be able to edit the year-round event', async ({ actor }) => {
//     await actor.attemptsTo(
//       // mentorEditYearRoundEvent(),
//     )
//   })

//   it('should not be able to edit a hackathon event', async ({ actor }) => {
//     await actor.attemptsTo(
//       // mentorEditHackathonEvent(),
//     )
//   })

//   it('should not be able to edit hackathon details', async ({ actor }) => {
//     await actor.attemptsTo(
//       // mentorEditHackathonDetails(),
//     )
//   })

//   it('should be able to see when food is served', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerSeeFoodSchedule(),
//     )
//   })

//   it('should be shown the food served for them during the hackathon if they have dietary restrictions', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerDietaryRestrictionsFoodServed(),
//     )
//   })

//   it('should know what food will be served ahead of time', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerViewFoodMenuAhead(),
//     )
//   })

//   it('should have control over who can see their profile', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerControlProfileVisibility(),
//     )
//   })

//   it('should have control over who can see their resume', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerControlResumeVisibility(),
//     )
//   })

//   it('should understand that registering for the hackathon makes their resume public to the organizer', async ({ actor }) => {
//     await actor.attemptsTo(
//       // hackerResumePublicOnRegistration(),
//     )
//   })
// })

// describe('Volunteer', () => {
//   it('should be able to logout', async ({ actor }) => {
//     await actor.attemptsTo(
//       // volunteerLogout(),
//     )
//   })

//   it('should be able to see the schedule of a year-round event', async ({ actor }) => {
//     await actor.attemptsTo(
//       // volunteerViewYearRoundEventSchedule(),
//     )
//   })

//   it('should be able to create profile when all fields validly filled in', async ({ actor }) => {
//     await actor.attemptsTo(
//       // mentorCreateProfile()
//     )
//   })

//   it('should not be able to create profile when required fields are missing', async ({ actor }) => {
//     await actor.attemptsTo(
//       // mentorCreateProfileWithMissingFields()
//     )
//   })

//   it('should be able to see the schedule of a hackathon event', async ({ actor }) => {
//     await actor.attemptsTo(
//       // volunteerViewHackathonEventSchedule(),
//     )
//   })

//   it('should be able to see the schedule of a hackathon', async ({ actor }) => {
//     await actor.attemptsTo(
//       // volunteerViewHackathonEventSchedule(),
//     )
//   })

//   it('should not be able to edit the year-round event', async ({ actor }) => {
//     await actor.attemptsTo(
//       // volunteerEditYearRoundEvent(),
//     )
//   })

//   it('should not be able to edit a hackathon event', async ({ actor }) => {
//     await actor.attemptsTo(
//       // volunteerEditHackathonEvent(),
//     )
//   })

//   it('should not be able to edit hackathon details', async ({ actor }) => {
//     await actor.attemptsTo(
//       // volunteerEditHackathonDetails(),
//     )
//   })
// })

// // ==================== Sponsor Tests ====================
// describe('Sponsor', () => {
//   it('should be able to login', async ({ actor }) => {
//     await actor.attemptsTo(
//       // sponsorLogin(),
//     )
//   })

//   it('should be able to logout', async ({ actor }) => {
//     await actor.attemptsTo(
//       // sponsorLogout(),
//     )
//   })

//   describe('when not an organizer', () => {
//     it('should be able to see all year round events', async ({ actor }) => {
//       await actor.attemptsTo(
//         // sponsorViewAllYearRoundEvents(),
//       )
//     })

//     it('should be able to create profile when all fields validly filled in', async ({ actor }) => {
//       await actor.attemptsTo(
//       // sponsorCreateProfile()
//       )
//     })

//     it('should not be able to create profile when required fields are missing', async ({ actor }) => {
//       await actor.attemptsTo(
//       // sponsorCreateProfileWithMissingFields()
//       )
//     })

//     it('should not be able to see a year round event participants if they are not a host of the event', async ({ actor }) => {
//       await actor.attemptsTo(
//         // sponsorViewParticipantsIfNotHost(),
//       )
//     })

//     it('should be able to see the participants of an event if they are a host of the event', async ({ actor }) => {
//       await actor.attemptsTo(
//         // sponsorViewParticipantsAsHost(),
//       )
//     })
//   })

//   describe('when an organizer', () => {
//     it('should be able to see the participants of an event', async ({ actor }) => {
//       await actor.attemptsTo(
//         // sponsorOrganizerViewParticipants(),
//       )
//     })

//     it('should be able to edit a year round event', async ({ actor }) => {
//       await actor.attemptsTo(
//         // sponsorOrganizerEditYearRoundEvent(),
//       )
//     })
//   })

//   it('should be able to edit the schedule of a year-round event that they are hosting', async ({ actor }) => {
//     await actor.attemptsTo(
//       // sponsorEditEventScheduleAsHost(),
//     )
//   })

//   it('should be able to see when a schedule change they make causes a conflict with another hackathon event', async ({ actor }) => {
//     await actor.attemptsTo(
//       // sponsorViewScheduleConflictNotification(),
//     )
//   })

//   it('should be able to change the time of their workshop during the hackathon if no time conflicts', async ({ actor }) => {
//     await actor.attemptsTo(
//       // sponsorChangeWorkshopTime(),
//     )
//   })

//   it('should not be able to change the time of their workshop during the hackathon if it causes a conflict', async ({ actor }) => {
//     await actor.attemptsTo(
//       // sponsorChangeWorkshopTimeConflict(),
//     )
//   })
//   it('should be able to filter year-round events by event type (workshop/network event/career fair)', async ({ actor }) => {
//     await actor.attemptsTo(
//       // sponsorFilterYearRoundEventsByType(),
//     )
//   })

//   it('should be able to filter year-round events by sponsor that is host', async ({ actor }) => {
//     await actor.attemptsTo(
//       // sponsorFilterYearRoundEventsByHost(),
//     )
//   })

//   it('should be able to filter hackathon events by sponsor that is hosting', async ({ actor }) => {
//     await actor.attemptsTo(
//       // sponsorFilterHackathonEventsByHost(),
//     )
//   })

//   it('should be able to search by name for year-round events', async ({ actor }) => {
//     await actor.attemptsTo(
//       // sponsorSearchYearRoundEventsByName(),
//     )
//   })

//   it('should have a list view of year-round event participants', async ({ actor }) => {
//     await actor.attemptsTo(
//       // sponsorListViewYearRoundParticipants(),
//     )
//   })
// })

// // ==================== Organizer Tests ====================
// describe('Organizer', () => {
//   it('should be able to login', async ({ actor }) => {
//     await actor.attemptsTo(
//       // organizerLogin(),
//     )
//   })

//   it('should be able to logout', async ({ actor }) => {
//     await actor.attemptsTo(
//       // organizerLogout(),
//     )
//   })

//   it('should be able to create profile when all fields validly filled in', async ({ actor }) => {
//     await actor.attemptsTo(
//       // organizerCreateProfile()
//     )
//   })

//   it('should not be able to create profile when required fields are missing', async ({ actor }) => {
//     await actor.attemptsTo(
//       // organizerCreateProfileWithMissingFields()
//     )
//   })

//   it('should be able to edit a year round event', async ({ actor }) => {
//     await actor.attemptsTo(
//       // organizerEditYearRoundEvent(),
//     )
//   })

//   it('should be able to see the profiles of all participants for a year-round event', async ({ actor }) => {
//     await actor.attemptsTo(
//       // organizerViewParticipantProfiles(),
//     )
//   })

//   it('should be able to edit the schedule of a year-round event', async ({ actor }) => {
//     await actor.attemptsTo(
//       // organizerEditEventSchedule(),
//     )
//   })
//   it('should be able to filter year-round events by event type (workshop/network event/career fair)', async ({ actor }) => {
//     await actor.attemptsTo(
//       // organizerFilterYearRoundEventsByType(),
//     )
//   })

//   it('should be able to filter year-round events by sponsor that is host', async ({ actor }) => {
//     await actor.attemptsTo(
//       // organizerFilterYearRoundEventsByHost(),
//     )
//   })

//   it('should be able to filter hackathon events by sponsor that is hosting', async ({ actor }) => {
//     await actor.attemptsTo(
//       // organizerFilterHackathonEventsByHost(),
//     )
//   })

//   it('should be able to search by name for year-round events', async ({ actor }) => {
//     await actor.attemptsTo(
//       // organizerSearchYearRoundEventsByName(),
//     )
//   })

//   it('should have a list view of year-round event participants', async ({ actor }) => {
//     await actor.attemptsTo(
//       // organizerListViewYearRoundParticipants(),
//     )
//   })
// })
