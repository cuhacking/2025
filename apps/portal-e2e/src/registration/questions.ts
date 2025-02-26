import { button, textArea } from '@cuhacking/shared/test/questions'

export const multiSelect = {
  CHALLENGE_INTEREST: {
    button: button.withAriaLabel('challengeInterest trigger'),
    options: {
      cybersecurity: button.withText('Cybersecurity'),
      hardware: button.withText('Hardware'),
    },
  },
  HERE_ABOUT_US: {
    button: button.withAriaLabel('discoverySource trigger'),
    options: {
      linkedin: button.withText('LinkedIn'),
      reddit: button.withText('Reddit'),
    },
  },
  DESIRED_WORKSHOP: {
    button: button.withAriaLabel(`desiredWorkshops trigger`),
    options: {
      machineLearning: button.withText('Machine Learning Basics'),
    },
  },

}

export const textAreas = {
  firstTimeHacker: textArea.withName('adviceForFirstTimers'),
}

export const SUBMIT = button.withText('REGISTER')

export const select = {
  QNX: {
    button: button.withAriaLabel('How familiar are you with QNX? trigger'),
    options: {
      neverHeard: button.withText('Never heard of it'),
      heardOf: button.withText('I\'ve heard of QNX but never used it'),
    },
  },
}
