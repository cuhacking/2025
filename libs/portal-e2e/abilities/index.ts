/* eslint-disable node/prefer-global/process */
import { matches } from '@serenity-js/assertions'
import { Duration, Task, Wait } from '@serenity-js/core'
import { By, Click, Enter, isVisible, Navigate, Page, PageElement } from '@serenity-js/web'

const EMAIL_ADDRESS = process.env.LOCAL_DEV_EMAIL_ADDRESS || ''
const PASSWORD = process.env.LOCAL_DEV_PASSWORD || ''

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
    Wait.until(Page.current().url().href, matches(/\/(dashboard|terms|profile|registration)$/)),
  )
}

