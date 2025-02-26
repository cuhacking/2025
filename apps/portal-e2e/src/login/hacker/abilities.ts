import { endsWith, Ensure } from '@serenity-js/assertions'
import { actorCalled, Duration, Wait } from '@serenity-js/core'

import { Click, Page } from '@serenity-js/web'
import { LOGIN } from '../questions'

export async function loginNoTerms() {
  await actorCalled('Hacker').attemptsTo(
    Click.on(LOGIN),

    Wait.for(Duration.ofSeconds(1)),
    Ensure.that(Page.current().url().href, endsWith('/terms')),
  )
}

export async function loginWithTerms() {
  await actorCalled('Hacker').attemptsTo(
    Click.on(LOGIN),

    Wait.for(Duration.ofSeconds(1)),
    Ensure.that(Page.current().url().href, endsWith('/profile')),
  )
}

export async function loginWithProfile() {
  await actorCalled('Hacker').attemptsTo(
    Click.on(LOGIN),

    Wait.for(Duration.ofSeconds(1)),
    Ensure.that(Page.current().url().href, endsWith('/dashboard')),
  )
}
