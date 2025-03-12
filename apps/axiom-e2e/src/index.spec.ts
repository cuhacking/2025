import { Ensure, equals } from '@serenity-js/assertions'
import { Task } from '@serenity-js/core'
import { describe, it } from '@serenity-js/playwright-test'
import { Navigate, Page } from '@serenity-js/web'

export function startLoggedOut() {
  return Task.where('#actor starts logged out', Navigate.to('/'), Ensure.that(
    Page.current().title().describedAs('Login -cuHacking 2025'),
    equals('Dashboard - cuHacking Portal'),
  ))
}

describe('When a Hacker', () => {
  describe('navigates to axiom', () => {
    it('they should be re-directed to portal', async ({ actor }) => {
      await actor.attemptsTo(
        Navigate.to('/'),
      )
    })
  })

  describe('navigates to portal', () => {
    it('they should see the login screen', async ({ actor }) => {
      await actor.attemptsTo(
        Navigate.to('portal.cuhacking.ca'),
      )
    })
  })

  it('should be able to log in with LinkedIn', async ({ actor }) => {
    await actor.attemptsTo(
    )
  })

  it.skip('should be able to log in with GitHub', async ({ actor }) => {
    await actor.attemptsTo(
    )
  })

  it('should see an account created if one doesn\'t already exist', async ({ actor }) => {
    await actor.attemptsTo(

    )
  })

  it('should see account details filled in for LinkedIn', async ({ actor }) => {
    await actor.attemptsTo(
    )
  })

  it('should be able to logout', async ({ actor }) => {
    await actor.attemptsTo(
    )
  })
})

// it.skip('should be able to log in with Discord', async ({ actor }) => {
//   await actor.attemptsTo(
//   )
// })

// it.skip('should see account details filled in for GitHub', async ({ actor }) => {
//   await actor.attemptsTo(
//   )
// })

// it('should be able to log in with Google', async ({ actor }) => {
//   await actor.attemptsTo(
//   )
// })

// it('should see account details filled in for Google', async ({ actor }) => {
//   await actor.attemptsTo(
//   )
// })
