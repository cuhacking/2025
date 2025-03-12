/* eslint-disable node/prefer-global/process */
import { endsWith, Ensure } from '@serenity-js/assertions'
import { actorCalled, Duration, Wait } from '@serenity-js/core'
import { By, Click, Enter, isVisible, Page, PageElement } from '@serenity-js/web'

import { LOGIN } from '../questions'

// These need to be your LinkedIn Credentials
const EMAIL_ADDRESS = process.env.LOCAL_DEV_EMAIL_ADDRESS
const PASSWORD = process.env.LOCAL_DEV_PASSWORD

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
    Click.on(PageElement.located(By.cssContainingText('button', 'LOG IN'))),
    Wait.upTo(Duration.ofSeconds(10))
      .until(PageElement.located(By.css('#username')), isVisible()),
    Enter.theValue(EMAIL_ADDRESS)
      .into(PageElement.located(By.css('#username'))),
    Enter.theValue(PASSWORD)
      .into(PageElement.located(By.css('#password'))),
    Click.on(PageElement.located(By.cssContainingText('button', 'Sign in'))),
    Wait.until(Page.current().url().href, endsWith('/dashboard')),
    Ensure.that(Page.current().url().href, endsWith('/dashboard')),
  )
}
