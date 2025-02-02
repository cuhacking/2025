import { button, input, label } from '../questions'

export const buttons = {
  SUBMIT: button.withText('SUBMIT'),
  SAVE: button.withText('SAVE'),
}

export const labels = {
  DISCORD: label.withText('Discord'),
  LINKEDIN: label.withText('LinkedIn'),
  INSTAGRAM: label.withText('Instagram'),
  BEHANCE: label.withText('Behance'),
}

export const inputs = {
  FIRST_NAME: input.withLabel('First Name'),
  MIDDLE_NAME: input.withLabel('Middle Name'),
  LAST_NAME: input.withLabel('Last Name'),
  PREFERRED_DISPLAY_NAME: input.withLabel('Preferred Display Name'),
  DEGREE: input.withLabel('Degree'),
  INSTITUTION: input.withLabel('Institution'),
  FIELD_OF_STUDY: input.withLabel('Field of Study'),
  YEAR_STANDING: input.withLabel('Year Standing'),
  EXPECTED_GRADUATION: input.withLabel('Expected Graduation'),
  DIETARY: input.withLabel('Dietary'),
  ALLERGIES: input.withLabel('Allergies'),
  PHONE_NUMBER: input.withLabel('Phone Number'),
  WEBSITE: input.withLabel('Website'),
  EMERGENCY_FIRST_NAME: input.withLabel('Emergency First Name'),
  EMERGENCY_LAST_NAME: input.withLabel('Emergency Last Name'),
  EMERGENCY_RELATIONSHIP: input.withLabel('Relationship'),
  EMERGENCY_PHONE_NUMBER: input.withLabel('Phone Number'),
  EMERGENCY_EMAIL: input.withLabel('Email'),
}

export const select = {
  T_SHIRT: {
    'XS': button.withText('XS'),
    'S': button.withText('S'),
    'M': button.withText('M'),
    'L': button.withText('L'),
    'LG': button.withText('LG'),
    'XL': button.withText('XL'),
    '2XL': button.withText('2XL'),
    '3XL': button.withText('3XL'),
  },
  GENDER: input.withLabel('Gender'),
  ETHNIC_BACKGROUND: input.withLabel('Ethnic Background'),
  RESUME: input.withLabel('Resume'),
}

export const checkBox = {
  PUBLIC_PROFILE: button.withText('Public Profile'),
  PUBLIC_RESUME: button.withText('Public Resume'),
  CODE_OF_CONDUCT: button.withText('I have read and agree to the MLH Code of Conduct'),
  TERMS_AND_CONDITIONS: button.withText('I agree with the MLH Terms and Conditions'),
  AUTHORIZE_SHARE_WITH_MLH: button.withText('I authorize you to share my information with MLH'),
}
