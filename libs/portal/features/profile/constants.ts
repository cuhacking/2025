import { tShirtSizes } from '@cuhacking/portal/types/tShirt'

function toCamelCase(sentence: string) {
  return sentence
    .replace(/[^a-z0-9 ]/gi, '') // Remove non-alphanumeric characters
    .split(' ')
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join('')
}
const ALL_SCHOOLS = [
  'Memorial University of Newfoundland',
  'University of Prince Edward Island',
  'Acadia University',
  'Acadia Divinity College',
  'Atlantic School of Theology',
  'Cape Breton University',
  'Dalhousie University',
  'University of King\'s College',
  'Mount Saint Vincent University',
  'Nova Scotia College of Art and Design University (NSCAD)',
  'Université Sainte-Anne',
  'St. Francis Xavier University',
  'Saint Mary\'s University',
  'Mount Allison University',
  'University of New Brunswick',
  'Université de Moncton (parent)',
  'St. Thomas University',
  'Bishop\'s University',
  'McGill University',
  'Université de Montréal',
  'Polytechnique Montréal',
  'École des hautes études commerciales',
  'Université Laval',
  'Université de Sherbrooke',
  'Concordia University',
  'Université du Québec à Chicoutimi',
  'Université du Québec à Montréal',
  'Université du Québec en Abitibi-Témiscamingue',
  'Université du Québec à Trois-Rivières',
  'Université du Québec en Outaouais',
  'Université du Québec, École nationale d\'administration publique (ENAP)',
  'Université du Québec, Institut national de la recherche scientifique',
  'Université du Québec à Rimouski',
  'Université du Québec, École de technologie supérieure',
  'Université du Québec, Télé-université du Québec (TÉLUQ)',
  'Brock University',
  'Concordia Lutheran Theological Seminary',
  'Carleton University',
  'Dominican University College/Collège Universitaire Dominicain',
  'University of Guelph',
  'Lakehead University',
  'Laurentian University of Sudbury/Université Laurentienne de Sudbury',
  'McMaster University',
  'Nipissing University',
  'University of Ottawa',
  'Saint-Paul University/Université Saint-Paul',
  'Queen\'s University',
  'Ryerson University',
  'University of Toronto',
  'St. Augustine\'s Seminary',
  'University of St. Michael\'s College',
  'University of Trinity College',
  'Victoria University',
  'Knox College',
  'Wycliffe College',
  'Regis College',
  'Trent University',
  'University of Waterloo',
  'St. Jerome\'s University',
  'Renison University College',
  'Conrad Grebel University College',
  'University of Western Ontario',
  'Brescia University College',
  'Huron University College',
  'King\'s College',
  'Wilfred Laurier University',
  'University of Windsor',
  'York University',
  'Ontario College of Art and Design',
  'University of Ontario Institute of Technology',
  'Algoma University College',
  'University of Sudbury',
  'Université de Hearst',
  'Huntington University',
  'Thorneloe University',
  'Brandon University',
  'Canadian Mennonite University',
  'University of Manitoba',
  'Université de Saint-Boniface',
  'University of Winnipeg',
  'University of Regina',
  'Campion College',
  'Luther College',
  'University of Saskatchewan ',
  'College of Emmanuel and St. Chad',
  'Lutheran Theological Seminary',
  'St. Andrew\'s College',
  'St. Thomas More College',
  'Horizon College & Seminary',
  'University of Alberta',
  'Athabasca University',
  'University of Calgary',
  'Burman University',
  'Concordia University of Edmonton',
  'University of Lethbridge',
  'The King\'s University College',
  'Ambrose University',
  'Grant MacEwan University',
  'Mount Royal University',
  'University of British Columbia',
  'University of Northern British Columbia',
  'Royal Roads University',
  'Simon Fraser University',
  'University of Victoria',
  'Thompson Rivers University',
  'Capilano University',
  'Vancouver Island University',
  'Emily Carr University of Art and Design',
  'Kwantlen Polytechnic University',
  'University of the Fraser Valley',
  'Yukon University',
  'Other',
]

const SCHOOLS = ALL_SCHOOLS.map(school => ({
  label: school,
  value: toCamelCase(school),
}))

export const RELATIONSHIPS = [
  { label: 'Parent', value: 'parent' },
  { label: 'Spouse', value: 'spouse' },
  { label: 'Sibling', value: 'sibling' },
  { label: 'Child', value: 'child' },
  { label: 'Guardian', value: 'guardian' },
  { label: 'Grandparent', value: 'grandparent' },
  { label: 'Aunt/Uncle', value: 'auntUncle' },
  { label: 'Cousin', value: 'cousin' },
  { label: 'Friend', value: 'friend' },
  { label: 'Neighbor', value: 'neighbor' },
  { label: 'Colleague', value: 'colleague' },
  { label: 'Doctor', value: 'doctor' },
  { label: 'Caregiver', value: 'caregiver' },
  { label: 'Legal Representative', value: 'legalRepresentative' },
  { label: 'Other', value: 'other' },
]
export const GENDER_CONSTANTS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'non-binary', label: 'Non-Binary' },
  { value: 'transgender', label: 'Transgender' },
  { value: 'genderfluid', label: 'Genderfluid' },
  { value: 'agender', label: 'Agender' },
  { value: 'two-spirit', label: 'Two-Spirit' },
  { value: 'other', label: 'Other' },
  { value: 'prefer-not-to-say', label: 'Prefer not to say' },
]

export const EDUCATION_CONSTANTS = {
  LEVEL_OF_STUDY: [
    { value: 'lessThanSecondary', label: 'Less than Secondary / High School' },
    { value: 'secondary', label: 'Secondary / High School' },
    {
      value: 'undergraduate2Year',
      label: 'Undergraduate University (2 year - community college or similar)',
    },
    {
      value: 'undergraduate3PlusYear',
      label: 'Undergraduate University (3+ year)',
    },
    {
      value: 'graduate',
      label: 'Graduate University (Masters, Professional, Doctoral, etc)',
    },
    { value: 'codeSchool', label: 'Code School / Bootcamp' },
    {
      value: 'vocationalTrade',
      label: 'Other Vocational / Trade Program or Apprenticeship',
    },
    { value: 'postDoctorate', label: 'Post Doctorate' },
    { value: 'other', label: 'Other' },
    { value: 'notStudent', label: 'I’m not currently a student' },
    { value: 'preferNotToAnswer', label: 'Prefer not to answer' },
  ],
  FIELD_OF_STUDY: [
    {
      value: 'computerScience',
      label: 'Computer science, computer engineering, or software engineering',
    },
    {
      value: 'anotherEngineering',
      label:
        'Another engineering discipline (such as civil, electrical, mechanical, etc.)',
    },
    {
      value: 'informationSystems',
      label:
        'Information systems, information technology, or system administration',
    },
    {
      value: 'naturalScience',
      label: 'A natural science (such as biology, chemistry, physics, etc.)',
    },
    { value: 'mathematicsStatistics', label: 'Mathematics or statistics' },
    { value: 'webDevelopment', label: 'Web development or web design' },
    {
      value: 'business',
      label:
        'Business discipline (such as accounting, finance, marketing, etc.)',
    },
    {
      value: 'humanities',
      label:
        'Humanities discipline (such as literature, history, philosophy, etc.)',
    },
    {
      value: 'socialScience',
      label:
        'Social science (such as anthropology, psychology, political science, etc.)',
    },
    {
      value: 'fineArts',
      label:
        'Fine arts or performing arts (such as graphic design, music, studio art, etc.)',
    },
    {
      value: 'healthScience',
      label: 'Health science (such as nursing, pharmacy, radiology, etc.)',
    },
    { value: 'other', label: 'Other (please specify)' },
    { value: 'undecided', label: 'Undecided / No Declared Major' },
    {
      value: 'noMajors',
      label: 'My school does not offer majors / primary areas of study',
    },
    { value: 'preferNotToAnswer', label: 'Prefer not to answer' },
  ],
  SCHOOLS,
}

export const RESTRICTIONS = {
  DIETARY: [
    { label: 'Vegetarian', value: 'vegetarian' },
    { label: 'Vegan', value: 'vegan' },
    { label: 'Gluten-Free', value: 'gluten_free' },
    { label: 'Dairy-Free', value: 'dairy_free' },
    { label: 'Nut-Free', value: 'nut_free' },
    { label: 'Halal', value: 'halal' },
    { label: 'Kosher', value: 'kosher' },
    { label: 'Pescatarian', value: 'pescatarian' },
    { label: 'Keto', value: 'keto' },
    { label: 'Paleo', value: 'paleo' },
    { label: 'Low-Carb', value: 'low_carb' },
    { label: 'Low-Sodium', value: 'low_sodium' },
    { label: 'Other', value: 'other' },
  ],

  ALLERGIES: [
    { label: 'Peanuts', value: 'peanuts' },
    { label: 'Tree Nuts', value: 'tree_nuts' },
    { label: 'Dairy', value: 'dairy' },
    { label: 'Eggs', value: 'eggs' },
    { label: 'Soy', value: 'soy' },
    { label: 'Gluten', value: 'gluten' },
    { label: 'Shellfish', value: 'shellfish' },
    { label: 'Fish', value: 'fish' },
    { label: 'Sesame', value: 'sesame' },
    { label: 'Wheat', value: 'wheat' },
    { label: 'Mustard', value: 'mustard' },
    { label: 'Sulfites', value: 'sulfites' },
    { label: 'Corn', value: 'corn' },
    { label: 'Latex', value: 'latex' },
    { label: 'Other', value: 'other' },
  ],

}

export const TSHIRT_SIZES = Object.keys(tShirtSizes).map(key => ({
  value: key.toLowerCase(),
  label: tShirtSizes[key as keyof typeof tShirtSizes],
}))

export const AUTH_LINK = {
  DISCORD: 'https://discord.com',
  BEHANCE: 'https://behance.com',
  INSTAGRAM: 'https://instagram.com',
}
