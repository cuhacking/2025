import { endsWith, Ensure } from '@serenity-js/assertions'
import { actorCalled, Duration, Wait } from '@serenity-js/core'
import { By, Click, Enter, isVisible, Page, PageElement } from '@serenity-js/web'

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
    Click.on(PageElement.located(By.cssContainingText('button', 'LOG IN'))),
    Wait.upTo(Duration.ofSeconds(10))
      .until(PageElement.located(By.css('#username')), isVisible()),
    Enter.theValue('mfarabi619@gmail.com')
      .into(PageElement.located(By.css('#username'))),
    Enter.theValue('MumFarabi123.')
      .into(PageElement.located(By.css('#password'))),
    Click.on(PageElement.located(By.cssContainingText('button', 'Sign in'))),
    Wait.until(Page.current().url().href, endsWith('/dashboard')),
    Ensure.that(Page.current().url().href, endsWith('/dashboard')),
  )
}
