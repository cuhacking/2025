import { Ensure, equals } from '@serenity-js/assertions'
import { Task } from '@serenity-js/core'
import { describe, it } from '@serenity-js/playwright-test'
import { Navigate, Page } from '@serenity-js/web'

// Existing test scaffold for context
export function startLoggedOut() {
  return Task.where('#actor starts logged out', Navigate.to('/'), Ensure.that(
    Page.current().title().describedAs('app title'),
    equals('Dashboard - cuHacking Portal'),
  ))
}

// ==================== Hacker Tests ====================
describe('Hacker', () => {
  it('should be able to logout', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerLogout(),
    )
  })

  it('should be able to see the schedule of a year-round event', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerViewYearRoundEventSchedule(),
    )
  })

  it('should be able to create profile when all fields validly filled in', async ({ actor }) => {
    await actor.attemptsTo(
      // organizerCreateProfile()
    )
  })

  it('should not be able to create profile when required fields are missing', async ({ actor }) => {
    await actor.attemptsTo(
      // organizerCreateProfileWithMissingFields()
    )
  })

  it('should be able to see the schedule of a hackathon event', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerViewHackathonEventSchedule(),
    )
  })

  it('should be able to see the schedule of a hackathon', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerViewHackathonEventSchedule(),
    )
  })

  it('should not be able to edit the year-round event', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerEditYearRoundEvent(),
    )
  })

  it('should not be able to edit a hackathon event', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerEditYearRoundEvent(),
    )
  })

  it('should not be able to edit hackathon details', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerEditYearRoundEvent(),
    )
  })

  // HACKER FOOD QUESTIONS
  // Will finalize this when we know the food situation
  // it('should be able to see when food is served', async ({ actor }) => {
  //   await actor.attemptsTo(
  //     // hackerSeeFoodSchedule(),
  //   )
  // })

  // it('should be shown the food served for them during the hackathon if they have dietary restrictions', async ({ actor }) => {
  //   await actor.attemptsTo(
  //     // hackerDietaryRestrictionsFoodServed(),
  //   )
  // })

  // it('should know what food will be served ahead of time', async ({ actor }) => {
  //   await actor.attemptsTo(
  //     // hackerViewFoodMenuAhead(),
  //   )
  // })

  it('should have control over who can see their profile', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerControlProfileVisibility(),
    )
  })

  it('should have control over who can see their resume', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerControlResumeVisibility(),
    )
  })

  it('should understand that registering for the hackathon makes their resume public to the organizer', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerResumePublicOnRegistration(),
    )
  })
  it('should be able to filter year-round events by event type (workshop/network event/career fair)', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerFilterYearRoundEventsByType(),
    )
  })

  it('should be able to filter year-round events by sponsor that is host', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerFilterYearRoundEventsByHost(),
    )
  })

  it('should be able to filter hackathon events by sponsor that is hosting', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerFilterHackathonEventsByHost(),
    )
  })

  it('should be able to search by name for year-round events', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerSearchYearRoundEventsByName(),
    )
  })

  it('should know the max registrants for an event', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerKnowMaxRegistrants(),
    )
  })

  it('should know the current number of registrations for an event', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerKnowCurrentRegistrations(),
    )
  })

  it('should be able to join the waitlist for an event once registration is full', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerJoinWaitlistWhenFull(),
    )
  })

  it('should be able to create profile when all fields validly filled in', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerCreateProfile()
    )
  })
})

describe('Mentor', () => {
  it('should be able to logout', async ({ actor }) => {
    await actor.attemptsTo(
      // mentorLogout(),
    )
  })

  it('should be able to see the schedule of a year-round event', async ({ actor }) => {
    await actor.attemptsTo(
      // mentorViewYearRoundEventSchedule(),
    )
  })

  it('should be able to create profile when all fields validly filled in', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerCreateProfile()
    )
  })

  it('should be able to see the schedule of a hackathon event', async ({ actor }) => {
    await actor.attemptsTo(
      // mentorViewHackathonEventSchedule(),
    )
  })

  it('should be able to see the schedule of a hackathon', async ({ actor }) => {
    await actor.attemptsTo(
      // mentorViewHackathonEventSchedule(),
    )
  })

  it('should not be able to edit the year-round event', async ({ actor }) => {
    await actor.attemptsTo(
      // mentorEditYearRoundEvent(),
    )
  })

  it('should not be able to edit a hackathon event', async ({ actor }) => {
    await actor.attemptsTo(
      // mentorEditHackathonEvent(),
    )
  })

  it('should not be able to edit hackathon details', async ({ actor }) => {
    await actor.attemptsTo(
      // mentorEditHackathonDetails(),
    )
  })

  it('should be able to see when food is served', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerSeeFoodSchedule(),
    )
  })

  it('should be shown the food served for them during the hackathon if they have dietary restrictions', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerDietaryRestrictionsFoodServed(),
    )
  })

  it('should know what food will be served ahead of time', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerViewFoodMenuAhead(),
    )
  })

  it('should have control over who can see their profile', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerControlProfileVisibility(),
    )
  })

  it('should have control over who can see their resume', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerControlResumeVisibility(),
    )
  })

  it('should understand that registering for the hackathon makes their resume public to the organizer', async ({ actor }) => {
    await actor.attemptsTo(
      // hackerResumePublicOnRegistration(),
    )
  })
})

describe('Volunteer', () => {
  it('should be able to logout', async ({ actor }) => {
    await actor.attemptsTo(
      // volunteerLogout(),
    )
  })

  it('should be able to see the schedule of a year-round event', async ({ actor }) => {
    await actor.attemptsTo(
      // volunteerViewYearRoundEventSchedule(),
    )
  })

  it('should be able to create profile when all fields validly filled in', async ({ actor }) => {
    await actor.attemptsTo(
      // mentorCreateProfile()
    )
  })

  it('should not be able to create profile when required fields are missing', async ({ actor }) => {
    await actor.attemptsTo(
      // mentorCreateProfileWithMissingFields()
    )
  })

  it('should be able to see the schedule of a hackathon event', async ({ actor }) => {
    await actor.attemptsTo(
      // volunteerViewHackathonEventSchedule(),
    )
  })

  it('should be able to see the schedule of a hackathon', async ({ actor }) => {
    await actor.attemptsTo(
      // volunteerViewHackathonEventSchedule(),
    )
  })

  it('should not be able to edit the year-round event', async ({ actor }) => {
    await actor.attemptsTo(
      // volunteerEditYearRoundEvent(),
    )
  })

  it('should not be able to edit a hackathon event', async ({ actor }) => {
    await actor.attemptsTo(
      // volunteerEditHackathonEvent(),
    )
  })

  it('should not be able to edit hackathon details', async ({ actor }) => {
    await actor.attemptsTo(
      // volunteerEditHackathonDetails(),
    )
  })
})

// ==================== Sponsor Tests ====================
describe('Sponsor', () => {
  it('should be able to login', async ({ actor }) => {
    await actor.attemptsTo(
      // sponsorLogin(),
    )
  })

  it('should be able to logout', async ({ actor }) => {
    await actor.attemptsTo(
      // sponsorLogout(),
    )
  })

  describe('when not an organizer', () => {
    it('should be able to see all year round events', async ({ actor }) => {
      await actor.attemptsTo(
        // sponsorViewAllYearRoundEvents(),
      )
    })

    it('should be able to create profile when all fields validly filled in', async ({ actor }) => {
      await actor.attemptsTo(
      // sponsorCreateProfile()
      )
    })

    it('should not be able to create profile when required fields are missing', async ({ actor }) => {
      await actor.attemptsTo(
      // sponsorCreateProfileWithMissingFields()
      )
    })

    it('should not be able to see a year round event participants if they are not a host of the event', async ({ actor }) => {
      await actor.attemptsTo(
        // sponsorViewParticipantsIfNotHost(),
      )
    })

    it('should be able to see the participants of an event if they are a host of the event', async ({ actor }) => {
      await actor.attemptsTo(
        // sponsorViewParticipantsAsHost(),
      )
    })
  })

  describe('when an organizer', () => {
    it('should be able to see the participants of an event', async ({ actor }) => {
      await actor.attemptsTo(
        // sponsorOrganizerViewParticipants(),
      )
    })

    it('should be able to edit a year round event', async ({ actor }) => {
      await actor.attemptsTo(
        // sponsorOrganizerEditYearRoundEvent(),
      )
    })
  })

  it('should be able to edit the schedule of a year-round event that they are hosting', async ({ actor }) => {
    await actor.attemptsTo(
      // sponsorEditEventScheduleAsHost(),
    )
  })

  it('should be able to see when a schedule change they make causes a conflict with another hackathon event', async ({ actor }) => {
    await actor.attemptsTo(
      // sponsorViewScheduleConflictNotification(),
    )
  })

  it('should be able to change the time of their workshop during the hackathon if no time conflicts', async ({ actor }) => {
    await actor.attemptsTo(
      // sponsorChangeWorkshopTime(),
    )
  })

  it('should not be able to change the time of their workshop during the hackathon if it causes a conflict', async ({ actor }) => {
    await actor.attemptsTo(
      // sponsorChangeWorkshopTimeConflict(),
    )
  })
  it('should be able to filter year-round events by event type (workshop/network event/career fair)', async ({ actor }) => {
    await actor.attemptsTo(
      // sponsorFilterYearRoundEventsByType(),
    )
  })

  it('should be able to filter year-round events by sponsor that is host', async ({ actor }) => {
    await actor.attemptsTo(
      // sponsorFilterYearRoundEventsByHost(),
    )
  })

  it('should be able to filter hackathon events by sponsor that is hosting', async ({ actor }) => {
    await actor.attemptsTo(
      // sponsorFilterHackathonEventsByHost(),
    )
  })

  it('should be able to search by name for year-round events', async ({ actor }) => {
    await actor.attemptsTo(
      // sponsorSearchYearRoundEventsByName(),
    )
  })

  it('should have a list view of year-round event participants', async ({ actor }) => {
    await actor.attemptsTo(
      // sponsorListViewYearRoundParticipants(),
    )
  })
})

// ==================== Organizer Tests ====================
describe('Organizer', () => {
  it('should be able to login', async ({ actor }) => {
    await actor.attemptsTo(
      // organizerLogin(),
    )
  })

  it('should be able to logout', async ({ actor }) => {
    await actor.attemptsTo(
      // organizerLogout(),
    )
  })

  it('should be able to create profile when all fields validly filled in', async ({ actor }) => {
    await actor.attemptsTo(
      // organizerCreateProfile()
    )
  })

  it('should not be able to create profile when required fields are missing', async ({ actor }) => {
    await actor.attemptsTo(
      // organizerCreateProfileWithMissingFields()
    )
  })

  it('should be able to edit a year round event', async ({ actor }) => {
    await actor.attemptsTo(
      // organizerEditYearRoundEvent(),
    )
  })

  it('should be able to see the profiles of all participants for a year-round event', async ({ actor }) => {
    await actor.attemptsTo(
      // organizerViewParticipantProfiles(),
    )
  })

  it('should be able to edit the schedule of a year-round event', async ({ actor }) => {
    await actor.attemptsTo(
      // organizerEditEventSchedule(),
    )
  })
  it('should be able to filter year-round events by event type (workshop/network event/career fair)', async ({ actor }) => {
    await actor.attemptsTo(
      // organizerFilterYearRoundEventsByType(),
    )
  })

  it('should be able to filter year-round events by sponsor that is host', async ({ actor }) => {
    await actor.attemptsTo(
      // organizerFilterYearRoundEventsByHost(),
    )
  })

  it('should be able to filter hackathon events by sponsor that is hosting', async ({ actor }) => {
    await actor.attemptsTo(
      // organizerFilterHackathonEventsByHost(),
    )
  })

  it('should be able to search by name for year-round events', async ({ actor }) => {
    await actor.attemptsTo(
      // organizerSearchYearRoundEventsByName(),
    )
  })

  it('should have a list view of year-round event participants', async ({ actor }) => {
    await actor.attemptsTo(
      // organizerListViewYearRoundParticipants(),
    )
  })
})
