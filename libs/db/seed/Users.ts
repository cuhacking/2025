export const userData = [
  {
    email: 'admin@example.com',
    password: 'securepassword',
    personalInfo: {
      firstName: 'Alice',
      middleName: 'Marie',
      lastName: 'Johnson',
      preferredName: 'Ali',
      pronouns: 'she/her',
    },
    mediaUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    brandSocials: {
      brandRelation: null,
      linkedIn: 'https://linkedin.com/in/alicejohnson',
      discord: 'Alice#1234',
      github: 'https://github.com/alicejohnson',
      behance: 'https://behance.net/alicejohnson',
      website: 'https://alice.dev',
    },
    restrictions: {
      dietaryRestrictions: ['vegetarian'],
      allergies: ['peanuts'],
    },
    eventPreferences: {
      tshirtSize: 'm',
      emergencyContact: {
        name: 'Bob Johnson',
        preferredName: 'Bob',
        phone: '123-456-7890',
        email: 'bob@example.com',
      },
    },
  },
  {
    email: 'john@example.com',
    password: 'anothersecurepassword',
    personalInfo: {
      firstName: 'John',
      middleName: 'Edward',
      lastName: 'Doe',
      preferredName: 'Johnny',
      pronouns: 'he/him',
    },
    mediaUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    brandSocials: {
      brandRelation: null,
      linkedIn: 'https://linkedin.com/in/johndoe',
      discord: 'Johnny#5678',
      github: 'https://github.com/johndoe',
      behance: '',
      website: 'https://johndoe.dev',
    },
    restrictions: {
      dietaryRestrictions: ['vegan'],
      allergies: ['none'],
    },
    eventPreferences: {
      tshirtSize: 'l',
      emergencyContact: {
        name: 'Jane Doe',
        preferredName: 'Jane',
        phone: '987-654-3210',
        email: 'jane@example.com',
      },
    },
  },
]
