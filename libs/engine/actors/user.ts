import { userFlowMachine } from '@/engine/machines/user'
import { createBrowserInspector } from '@statelyai/inspect'
import { createActor } from 'xstate'

// https://stately.ai/docs/inspector
const { inspect } = createBrowserInspector()

export const userFlowActor = createActor(userFlowMachine, { inspect })
userFlowActor.start()
