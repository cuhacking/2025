// import { actorCalled, Task } from '@serenity-js/core'
// import { beforeEach, describe, it } from '@serenity-js/playwright-test'
// import { BrowseTheWeb, Navigate } from '@serenity-js/web'
// import { registerForHackathon, registerForHackathonMissingFields } from './abilities'

// const EMAIL_ADDRESS = process.env.LOCAL_DEV_EMAIL_ADDRESS
// const PASSWORD = process.env.LOCAL_DEV_PASSWORD

// export function startLoggedInNoProfile() {
//   return Task.where(
//     '#actor starts logged out',
//     Navigate.to('/registration'),
//   )
// }

// describe('when the hacker', () => {
//   beforeEach(async ({ actor }) => {
//     await actorCalled('Hacker')
//       .whoCan(BrowseTheWeb.as(actor))
//       .attemptsTo(startLoggedInNoProfile())
//   })

//   describe('is logged in', () => {
//     describe('has profile', () => {
//       it('should be able to regsiter', async () => {
//         await registerForHackathon()
//       })

//       it('should not be able to regsiter with missing fields', async () => {
//         await registerForHackathonMissingFields()
//       })
//     })
//   })
// })
