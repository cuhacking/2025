import type { ClientEvent } from '../types.js'
// import process from 'node:process'

export const Event: ClientEvent = {
  name: 'errorManager',
  customEvent: true,
  run: (): void => {
    // process.on('unhandledRejection', (error: Error) => {
    //   console.log(error)
    // })
    // process.on('uncaughtException', (error: Error) => {
    //   console.log(error)
    // })
  },
} // Error Handler to avoid the bot from crashing on error.
