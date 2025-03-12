import { actorCalled, Task } from '@serenity-js/core'
import { beforeEach, describe, it } from '@serenity-js/playwright-test'
import { BrowseTheWeb, Navigate } from '@serenity-js/web'
import { loginNoTerms, loginWithProfile } from './abilities'

export function startLoggedOut() {
  return Task.where(
    '#actor starts logged out',
    Navigate.to('/login'),
  )
}

describe('when the hacker', async () => {
  beforeEach(async ({ actor }) => {
    await actorCalled('Hacker')
      .whoCan(BrowseTheWeb.as(actor))
      .attemptsTo(startLoggedOut(),
      )
  })
  describe('is logged out', async () => {
    describe('has not agreed to terms', async () => {
      it('should be able to login and go to terms page', async () => {
        await loginNoTerms()
      })
    })

    describe('has agreed to terms', async () => {
      it('should be able to login and go to terms page', async () => {
        // await loginWithTerms()
      })
    })

    describe('has a profile', async () => {
      it('should be able to login and go to dashboard', async () => {
        await loginWithProfile()
      })
    })
  })
})
