import { endsWith, Ensure, not } from '@serenity-js/assertions'
import { actorCalled, Duration, Wait } from '@serenity-js/core'
import { Click, Enter, isEnabled, Page } from '@serenity-js/web'
import { multiSelect, select, SUBMIT, textAreas } from '../questions'

export async function registerForHackathon() {
  const words = `I would tell a first time hacker that they should be freeeeeee!
Like that one song about being free.
I\'m trying to get to 50 words right now haha. So how was your day?`
  await actorCalled('Hacker').attemptsTo(
    Wait.for(Duration.ofSeconds(1)),
    Click.on(select.QNX.button),
    Click.on(select.QNX.options.neverHeard),

    Click.on(multiSelect.HERE_ABOUT_US.button),
    Click.on(multiSelect.HERE_ABOUT_US.options.reddit),
    Click.on(multiSelect.HERE_ABOUT_US.button),

    Click.on(multiSelect.CHALLENGE_INTEREST.button),
    Click.on(multiSelect.CHALLENGE_INTEREST.options.cybersecurity),
    Click.on(multiSelect.CHALLENGE_INTEREST.button),

    Click.on(multiSelect.DESIRED_WORKSHOP.button),
    Click.on(multiSelect.DESIRED_WORKSHOP.options.machineLearning),
    Click.on(multiSelect.DESIRED_WORKSHOP.button),

    Enter.theValue(words).into(textAreas.firstTimeHacker),
    Click.on(SUBMIT),
    Wait.for(Duration.ofSeconds(1)),
    Ensure.that(Page.current().url().href, endsWith('/dashboard')),
  )
}

export async function registerForHackathonMissingFields() {
  const words = `I would tell a first time hacker that they should be freeeeeee!
Like that one song about being free.
I\'m trying to get to 50 words right now haha. So how was your day?`
  await actorCalled('Hacker').attemptsTo(
    Wait.for(Duration.ofSeconds(1)),
    Click.on(select.QNX.button),
    Click.on(select.QNX.options.neverHeard),

    Click.on(multiSelect.HERE_ABOUT_US.button),
    Click.on(multiSelect.HERE_ABOUT_US.options.reddit),
    Click.on(multiSelect.HERE_ABOUT_US.button),

    Click.on(multiSelect.CHALLENGE_INTEREST.button),
    Click.on(multiSelect.CHALLENGE_INTEREST.options.cybersecurity),
    Click.on(multiSelect.CHALLENGE_INTEREST.button),

    Enter.theValue(words).into(textAreas.firstTimeHacker),
    Ensure.that(SUBMIT, not(isEnabled())),
  )
}
