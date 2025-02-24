/* eslint-disable node/prefer-global/process */
/* eslint-disable ts/no-use-before-define */
/* eslint-disable no-console */
import type { CollectionConfig, Payload } from 'payload'

export const Emails: CollectionConfig = {
  slug: 'emails',
  access: {
    read: () => true,
  },
  admin: {
    livePreview: {
      url: `${process.env.CUHACKING_2025_EMAIL_TEMPLATES_SITE_LOCAL_URL}/preview/cuhacking/registered-for-hackathon`,
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 320,
          height: 568,
        },
      ],
    },
    group: 'Collections',
    defaultColumns: [
      'title',
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'body',
      type: 'group',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'buttonText',
          type: 'text',
          required: true,
        },
        {
          name: 'buttonLink',
          type: 'text',
          required: true,
        },
        {
          name: 'footer',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

export async function seedEmails(payload: Payload) {
  try {
    await Promise.all(
      emailSeedData.map(async (email) => {
        await payload.create({
          collection: 'emails',
          data: {
            title: email.title,
            body: {
              text: email.body.text,
              buttonText: email.body.buttonText,
              buttonLink: email.body.buttonLink,
              footer: email.body.footer,
            },
          },
        })
      }),
    )
    console.log('Email seed data successfully inserted!')
  }
  catch (error) {
    console.error('Error seeding email data:', error)
  }
}

export const emailSeedData = [
  {
    title: 'Thank you for registering Hasith!',
    body: {
      text: 'Your submission has been received. Looking forward to seeing you on March 14th!',
      buttonText: 'RSVP',
      buttonLink: 'https://portal.cuhacking.ca/',
      footer: 'See you there!',
    },
  },
  {
    title: 'Welcome to the Community!',
    body: {
      text: 'We’re excited to have you on board. Stay tuned for updates and events!',
      buttonText: 'Join Discord',
      buttonLink: 'https://discord.gg/example',
      footer: 'Connect with the community!',
    },
  },
  {
    title: 'Your Weekly Update',
    body: {
      text: 'Here’s what’s happening this week at CUHacking.',
      buttonText: 'Read More',
      buttonLink: 'https://cuhacking.ca/blog',
      footer: 'Check out the latest news!',
    },
  },
  {
    title: 'Reminder: Hackathon Starts Soon!',
    body: {
      text: 'The hackathon kicks off in just 3 days. Make sure you’re prepared!',
      buttonText: 'Event Details',
      buttonLink: 'https://cuhacking.ca/hackathon',
      footer: 'See the schedule here.',
    },
  },
  {
    title: 'Thank You for Attending!',
    body: {
      text: 'We hope you had a great time at our event. Your feedback is valuable to us.',
      buttonText: 'Give Feedback',
      buttonLink: 'https://forms.example.com/feedback',
      footer: 'Help us improve!',
    },
  },
  {
    title: 'Exclusive Offer for cuHacking Members!',
    body: {
      text: 'As a valued member, we’re giving you early access to our upcoming event!',
      buttonText: 'Claim Your Spot',
      buttonLink: 'https://cuhacking.ca/exclusive',
      footer: 'Limited spots available!',
    },
  },
]
