import { createMachine } from 'xstate'

export const userFlowMachine = createMachine({
  id: 'userFlow',
  initial: 'unauthenticated',
  states: {
    unauthenticated: {
      on: {
        LOGIN_SUCCESS: 'legal',
      },
    },
    legal: {
      on: {
        AGREE_TO_TERMS: 'profile_incomplete',
      },
    },
    profile_incomplete: {
      on: {
        COMPLETE_PROFILE: 'dashboard',
        LOGOUT: 'unauthenticated',
      },
    },
    dashboard: {
      on: {
        REGISTER_FOR_HACKATHON: 'registered',
      },
    },
    registered: {
      type: 'final',
    },
  },
})
