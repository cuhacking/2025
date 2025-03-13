// import { startLoggedIn } from '@cuhacking/portal-e2e/abilities'
// import { actorCalled } from '@serenity-js/core'
// import { beforeEach, describe, it } from '@serenity-js/playwright-test'
// import { BrowseTheWeb, Navigate } from '@serenity-js/web'
// import { createInvalidProfile, createProfile, createProfileNoSchool } from './abilities'

// describe('when the hacker', () => {
//   beforeEach(async ({ actor }) => {
//     actorCalled('Hacker')
//       .whoCan(BrowseTheWeb.as(actor))
//       .attemptsTo(startLoggedIn(), Navigate.to('/profile'))
//   })

//   describe('is logged in', () => {
//     describe('has agreed to all terms and conditions', () => {
//       // ==============================
//       // ========= NO PROFILE =========
//       // ==============================
//       describe('has no profile', () => {
//         describe('is a student', () => {
//           it('should be able to create profile', async () => {
//             await createProfile()
//           })

//           it('should not be able to create profile when fields are invalid', async () => {
//             await createInvalidProfile()
//           })
//         })
//         describe('is not a student', () => {
//           it('should be able to create profile', async () => {
//             await createProfileNoSchool()
//           })
//         })
//       })
//     })
//   })
// })
