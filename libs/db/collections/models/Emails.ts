/* eslint-disable node/prefer-global/process */
/* eslint-disable ts/no-use-before-define */
/* eslint-disable no-console */
import type { CollectionConfig, Payload } from 'payload'
import { navAccordions } from '@/db/collections/navAccordions'

export const Emails: CollectionConfig = {
  slug: 'emails',
  access: {
    read: () => true,
  },
  admin: {
    group: navAccordions.communication,
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
          type: 'textarea',
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
          name: 'secondButtonText',
          type: 'text',
          required: false,
        },
        {
          name: 'secondButtonLink',
          type: 'text',
          required: false,
        },
        {
          name: 'events',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: false,
            },
            {
              name: 'text',
              type: 'textarea',
              required: false,
            },
            {
              name: 'buttonText',
              type: 'text',
              required: false,
            },
          ],
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
              secondButtonText: email.body.secondButtonText || null,
              secondButtonLink: email.body.secondButtonLink || null,
              events: email.body.events || [],
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


// WIP - NOT FINISHED YET
// export const emailSeedData = [
//   {
//     title: 'Thank you for registering Hasith!',
//     body: {
//       text: 'Your submission has been received. Looking forward to seeing you on March 14th!\n\nDetails ...\n📍 Richcraft Hall (1125 Colonel By Dr, Carleton University)\n⌛ March 14-16 (Check-in from 5pm - 9pm)',
//       buttonText: 'RSVP',
//       buttonLink: 'https://portal.cuhacking.ca/',
//       secondButtonText: 'ADD TO CALENDAR',
//       secondButtonLink: 'https://calendar.google.com/calendar/event?action=TEMPLATE',
//       events: [
//         {
//           title: 'Upcoming events...',
//         },
//         {
//           title: 'Intro to QNX',
//           text: 'Learn about QNX with 3 awesome speakers + meet some interns. Make sure you bring your laptop.',
//           buttonText: 'REGISTER',
//         }
//       ],
//       footer: 'See you there!',
//     },
//   },
//   {
//     title: 'Welcome to the Community!',
//     body: {
//       text: `We're excited to have you on board. Stay tuned for updates and events!\n\n🎉 Join our Discord server to connect with other hackers\n💻 Check out our workshops\n🏆 Get ready for the upcoming hackathon`,
//       buttonText: 'JOIN DISCORD',
//       buttonLink: 'https://discord.gg/VnbWdAe8kA',
//       secondButtonText: 'EXPLORE WORKSHOPS',
//       secondButtonLink: 'https://cuhacking.ca/workshops',
//       events: [
//         {
//           title: 'Upcoming events...',
//         },
//         {
//           title: 'Networking Mixer',
//           text: 'Meet industry professionals and fellow hackers',
//           buttonText: 'RSVP',
//         }
//       ],
//       footer: 'Connect with the community!',
//     },
//   },
//   {
//     title: 'Your Weekly Update',
//     body: {
//       text: `Here's what's happening this week at cuHacking.\n\n🚀 New workshops announced\n🎙️ Guest speakers from QNX and Fullscript\n🧩 Practice hackathon challenges`,
//       buttonText: 'READ MORE',
//       buttonLink: 'https://cuhacking.ca/blog',
//       secondButtonText: 'VIEW SCHEDULE',
//       secondButtonLink: 'https://cuhacking.ca/schedule',
//       events: [
//         {
//           title: 'Upcoming events...',
//         },
//         {
//           title: 'Workshop: Intro to React',
//           text: 'Learn the basics of React with our experienced mentors',
//           buttonText: 'REGISTER',
//         },
//         {
//           title: 'Tech Talk: Cybersecurity Basics',
//           text: 'Join CSE for an introduction to cybersecurity principles',
//           buttonText: 'REGISTER',
//         }
//       ],
//       footer: 'Check out the latest news!',
//     },
//   },
//   {
//     title: 'Reminder: Hackathon Starts Soon!',
//     body: {
//       text: `The hackathon kicks off in just 3 days. Make sure you're prepared!\n\nWhat to bring?\n🪪 Government ID\n💻 Your laptop + charger\n🛏️ Sleeping bags\n🪥 Personal hygiene (plz bring deodorant, plz ...)\n🥤 Reusable water bottle\n🤪 A positive attitude!`,
//       buttonText: 'EVENT DETAILS',
//       buttonLink: 'https://cuhacking.ca/hackathon',
//       secondButtonText: 'JOIN DISCORD',
//       secondButtonLink: 'https://discord.gg/VnbWdAe8kA',
//       events: [
//         {
//           title: 'Pre-Hackathon Workshop',
//           text: 'Get a head start with our pre-hackathon workshop',
//           buttonText: 'JOIN NOW',
//         }
//       ],
//       footer: 'See the schedule here.',
//     },
//   },
//   {
//     title: 'Thank You for Attending!',
//     body: {
//       text: 'We hope you had a great time at our event. Your feedback is valuable to us.\n\n🏆 Congratulations to all winners!\n📸 Check out event photos\n🗓️ Stay tuned for our next hackathon',
//       buttonText: 'GIVE FEEDBACK',
//       buttonLink: 'https://forms.example.com/feedback',
//       secondButtonText: 'VIEW PHOTOS',
//       secondButtonLink: 'https://cuhacking.ca/gallery',
//       events: [
//         {
//           title: 'Upcoming events...',
//         },
//         {
//           title: 'Project Showcase',
//           text: 'Present your hackathon project to industry professionals',
//           buttonText: 'REGISTER',
//         }
//       ],
//       footer: 'Help us improve!',
//     },
//   },
//   {
//     title: 'Exclusive Offer for cuHacking Members!',
//     body: {
//       text: `As a valued member, we're giving you early access to our upcoming event!\n\n🎁 Special perks for cuHacking members\n🔥 Limited spots available\n🚀 Exclusive networking opportunities`,
//       buttonText: 'CLAIM YOUR SPOT',
//       buttonLink: 'https://cuhacking.ca/exclusive',
//       secondButtonText: 'LEARN MORE',
//       secondButtonLink: 'https://cuhacking.ca/membership-benefits',
//       events: [
//       ],
//       footer: 'Limited spots available!',
//     },
//   },
// ]
