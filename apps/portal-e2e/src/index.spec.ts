import { Ensure, equals } from '@serenity-js/assertions'
import { Task } from '@serenity-js/core'
import { describe, it } from '@serenity-js/playwright-test'
import { Navigate, Page } from '@serenity-js/web'

export function startLoggedOut() {
  return Task.where(`#actor starts logged out`, Navigate.to('/'), Ensure.that(
    Page.current().title().describedAs('app title'),
    equals('Dashboard - cuHacking Portal'),
  ))
}

describe('when the user', () => {
  describe('is logged out', () => {
    // ========== LOGIN ===============
    // startLoggedOut()
    it('should only be able to log in', async ({ actor }) => {
      await actor.attemptsTo(
        // logIn(),
      )
    })
  })

  describe('is logged in', () => {
    // startLoggedIn()
    describe('doesn\'t have existing profile', () => {
      it ('should only be able to create profile', async ({ actor }) => {
      // startWithoutProfile()
        await actor.attemptsTo(
          // createProfile(),
        )
      })
    })

    // ========== PROFILE ===============
    describe('has a profile', () => {
      it('should only be able to edit profile', async ({ actor }) => {
        // startWithoutProfile()
        await actor.attemptsTo(

        )
      })

      // ========== Dashboard ===============

      it('should be able to delete profile', async ({ actor }) => {
        // startWithProfile()
        await actor.attemptsTo(
          // deleteProfile(),
        )
      })
    })

    it ('should be able to log out', async ({ actor }) => {
      await actor.attemptsTo(
        // logIn(),
      )
    })
  })
})
