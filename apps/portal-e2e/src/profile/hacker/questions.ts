import { button, input } from '@cuhacking/shared/test/questions'

export const buttons = {
  UPDATE: button.withText('UPDATE PROFILE'),
  SAVE: button.withText('CREATE PROFILE'),
}

export const accordions = {
  PERSONAL: button.withAriaLabel('Personal'),
  EDUCATION: button.withAriaLabel('Education'),
  RESTRICTIONS: button.withAriaLabel('Restrictions'),
  CONTACT: button.withAriaLabel('Contact'),
  SOCIAL_MEDIA: button.withAriaLabel('Social Media'),
  EMERGENCY_CONTACT: button.withAriaLabel('Emergency Contact'),
}

export const labels = {
  DISCORD: button.withText('Discord'),
  LINKEDIN: button.withText('LinkedIn'),
  INSTAGRAM: button.withText('Instagram'),
  BEHANCE: button.withText('Behance'),
}

export const inputs = {
  FIRST_NAME: input.withLabel('First Name'),
  MIDDLE_NAME: input.withLabel('Middle Name'),
  LAST_NAME: input.withLabel('Last Name'),
  PREFERRED_DISPLAY_NAME: input.withLabel('Preferred Display Name'),
  AGE: input.withLabel('Age'),
  WEBSITE: input.withLabel('Website'),
  PHONE_NUMBER: input.withLabel('Phone Number'),
  YEAR_STANDING: input.withLabel('Year Standing'),
  DIETARY: input.withLabel('Dietary'),
  ALLERGIES: input.withLabel('Allergies'),
  EMERGENCY_FULL_NAME: input.withLabel('Full Name'),
  EMERGENCY_PHONE_NUMBER: input.withLabel('Phone Number'),
  EMERGENCY_EMAIL: input.withLabel('Email'),
  RESUME: input.withLabel('Resume'),
}

export const radioGroup = {
  YEAR_STANDINGS: {
    '1': input.withLabel('1'),
    '2': input.withLabel('2'),
    '3': input.withLabel('3'),
    '4': input.withLabel('4'),
    '5': input.withLabel('5'),
    '6+': input.withLabel('6+'),
  },
}

export const multiSelect = {
  DIETARY_RESTRICTIONS: {
    button: button.withAriaLabel('Dietary Restrictions trigger'),
    options: {
      vegetarian: button.withText('Vegetarian'),
      glutenFree: button.withText('Gluten-Free'),
      dairyFree: button.withText('Dairy-Free'),
    },
  },
  ALLERGIES: {
    button: button.withAriaLabel('Allergies trigger'),
    options: {
      peanuts: button.withText('Peanuts'),
      treeNuts: button.withText('Tree Nuts'),
      dairy: button.withText('Dairy'),
      eggs: button.withText('Eggs'),
      soy: button.withText('Soy'),
      gluten: button.withText('Gluten'),
      shellfish: button.withText('Shellfish'),
      fish: button.withText('Fish'),
      sesame: button.withText('Sesame'),
    },
  },
}

export const select = {
  GENDER: {
    button: button.withAriaLabel('Gender trigger'),
    options: {
      male: button.withText('Male'),
      female: button.withText('Female'),
      nonBinary: button.withText('Non-Binary'),
    },
  },
  DEGREE: {
    button: button.withAriaLabel('Degree trigger'),
    options: {
      lessThanSecondaryHighSchool: button.withText('Secondary / High School'),
      undergraduateUniversity2Year: button.withText('College'),
      undergraduateUniversity3Year: button.withText('Graduate University'),
    },
  },
  INSTITUTION: {
    button: button.withAriaLabel('Institution trigger'),
    options: {
      memorialUniversityOfNewfoundland: button.withText('Memorial University of Newfoundland'),
      universityOfPrinceEdwardIsland: button.withText('University of Prince Edward Island'),
      acadiaUniversity: button.withText('Acadia University'),
      acadiaDivinityCollege: button.withText('Acadia Divinity College'),
      atlanticSchoolOfTheology: button.withText('Atlantic School of Theology'),
      capeBretonUniversity: button.withText('Cape Breton University'),
      dalhousieUniversity: button.withText('Dalhousie University'),
      universityOfScienceAndTechnology: button.withText('University of Science and Technology'),
    },
  },
  FIELD_OF_STUDY: {
    button: button.withAriaLabel('Field of Study trigger'),
    options: {
      computerScienceOrSoftwareEngineering: button.withText('Computer science, computer engineering, or software engineering'),
      anotherEngineeringDiscipline: button.withText('Another engineering discipline (such as civil, electrical, mechanical, etc.)'),
      informationSystems: button.withText('Information systems, information technology, or system administration'),
      naturalScience: button.withText('A natural science (such as biology, chemistry, physics, etc.)'),
    },
  },
  EMERGENCY_RELATIONSHIP: {
    button: button.withAriaLabel('Relationship trigger'),
    options: {
      parent: button.withText('Parent'),
      spouse: button.withText('Spouse'),
      sibling: button.withText('Sibling'),
      child: button.withText('Child'),
      guardian: button.withText('Guardian'),
      grandparent: button.withText('Grandparent'),
      auntUncle: button.withText('Aunt/Uncle'),
      cousin: button.withText('Cousin'),
    },
  },

}

export const checkbox = {
  EDUCATION: button.withRole('checkbox'),
}

export const date = {
  MONTH: {
    button: button.withText('Month'),
    options: {
      january: button.withText('January'),
      february: button.withText('February'),
      march: button.withText('March'),
      april: button.withText('April'),
      may: button.withText('May'),
      june: button.withText('June'),
      july: button.withText('July'),
      august: button.withText('August'),
      september: button.withText('September'),
      october: button.withText('October'),
      november: button.withText('November'),
      december: button.withText('December'),
    },
  },
  YEAR: {
    button: button.withText('Year'),
    options: {
      2025: button.withText('2025'),
      2026: button.withText('2026'),
      2027: button.withText('2027'),
      2028: button.withText('2028'),
      2029: button.withText('2029'),
      2030: button.withText('2030'),
      2031: button.withText('2031'),
      2032: button.withText('2032'),
      2033: button.withText('2033'),
      2034: button.withText('2034'),
      2035: button.withText('2035'),
    },
  },
}
