/* eslint-disable node/prefer-global/process */
import type { Block, GlobalConfig} from 'payload'

export const Header: Block = {
  slug: 'Header',
  imageURL: '',
  imageAltText: 'A nice thumbnail',
  fields: [
    {
      name: 'link',
      type: 'text',
      required: true,
    },
  ],
}

const SOCIAL_MEDIA_DOMAINS = [
  'behance.net',
  'figma.com',
  'discord.com',
  'github.com',
  'instagram.com',
  'linkedin.com',
  'linktr.ee',
] as const

export const Constants: GlobalConfig = {
  slug: 'constants',
  // access: {
  //   read: () => true,
  //   update: ({ req }) => req.user?.roles?.some(role => role.admin === true || role.name === 'owner'),
  // },
  versions: {
    drafts: true
  },
  admin: {
    livePreview: {
url: async ({ req }) => {
const tabIndex = (
    await req.payload.find({
      collection: 'payload-preferences',
      where: { key: { equals: 'global-constants' } },
    })
  )?.docs?.[0]?.value?.fields?.["_index-0"]?.tabIndex ?? 0;

const isDev = process.env.NODE_ENV === 'development';
return tabIndex === 0
  ? (isDev ? process.env.CUHACKING_2025_PORTAL_LOCAL_URL : process.env.CUHACKING_2025_PORTAL_PUBLIC_URL)
  : (isDev ? process.env.CUHACKING_2025_WEBSITE_LOCAL_URL : process.env.CUHACKING_2025_WEBSITE_PUBLIC_URL);
},
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 320,
          height: 568,
        },
      ],
    },
  hooks: {
    afterChange: [],
  },
  },
  fields: [
    // {
    //   name: 'header',
    //   type: 'blocks',
    //   blocks: [
    //     Header,
    //   ],
    // },
    {
      type: 'tabs',
      tabs: [
        {
          name: "portal",
          label: "🌀 Portal",
          description: "Hackathon Management Application.",
          fields: [
{
  name: 'dashboard',
  type: 'group',
  label: 'Dashboard',
  fields: [
    {
      name: 'cards',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
      ],
      defaultValue: [
        { title: 'Welcome' },
        { title: 'Hackathon Countdown' },
        { title: 'Money Raised' },
        { title: 'Registrations' },
        { title: 'Sponsors - Coming Soon!!' },
        { title: 'Schedule - Coming Soon!!' },
        { title: 'Challenges - Coming Soon!!' },
        { title: 'More Features!! Maybe you will add it!' },
        { title: 'Star our GitHub' },
      ],
    },
  ],
},
           {
             name: 'login',
             type: 'text',
             label: 'Login'
           },
           {
             name: 'terms',
             type: 'group',
             label: 'Terms & Conditions',
             fields: [
               {
name: 'title',
                 type: 'text',
                 label: 'Title',
                 defaultValue: 'Legalities'
               },
               {
                 name: 'description',
               type: 'text',
label: 'Description',
                 defaultValue: 'YO! Before we get into it, read these please.'
               },
               {
                 name: 'accordion',
                 type: 'array',
                 fields: [
                  {
                    name: 'title',
                    type: 'text',
                   label: 'Title'
                  },
                   {
                    name: 'text',
                    type: 'text',
                    label: 'Text'
                  },
                   {
                    name: 'checkbox',
                    type: 'checkbox',
                  },
                   {
                    name: 'checkboxLabel',
                    type: 'text'
                  }
                 ],
                 defaultValue: [
 {
      title: 'MLH Code of Conduct',
      text: 'TL;DR. Be respectful. Harassment and abuse are never tolerated. If you are in a situation that makes you uncomfortable at '
            + 'an MLH Member Event, if the event itself creates an unsafe or inappropriate environment, or if interacting with an MLH '
            + 'representative or event organizer makes you uncomfortable, please report it using the procedures included in this document.\n\n'
            + 'Major League Hacking (MLH) stands for inclusivity. We believe that every single person has the right to hack in a safe and '
            + 'welcoming environment.',
      checkbox: false,
      checkboxLabel: 'I have read MLH Code of Conduct *'
    },
    {
      title: 'MLH Terms & Conditions',
      text: '',
      checkbox: false,
      checkboxLabel: 'I have read MLH Terms & Conditions'
    },
    {
      title: 'MLH Privacy Policy',
      text: '',
      checkbox: false,
      checkboxLabel: 'I have read MLH Privacy Policy'
    },
    {
      title: 'cuHacking Terms & Conditions',
      text: '',
      checkbox: false,
      checkboxLabel: 'I have read cuHacking Terms & Conditions'
    }
                 ]
               }
             ]
           },
           {
             name: 'profile',
             type: 'text',
             label: 'Profile'
           },
           {
             name: 'registration',
             type: 'text',
             label: 'Registration'
           },
          ]
        },
        {
          name: 'website',
          label: '📢 Website',
          description: 'Promotional site for the hackathon.',
          fields: [
            {
              name: 'header',
              type: 'group',
              label: 'Header',
              fields: [
                {
                  name: 'logo',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Logo',
                },
                {
                  name: 'links',
                  type: 'array',
                  label: 'Links',
                  fields: [
                    {
                      name: 'text',
                      type: 'text',
                      label: 'Text',
                    },
                    {
                      name: 'link',
                      type: 'text',
                      label: 'Link',
                    },
                  ],
                  defaultValue: () => [
                    { text: 'About', link: '#about' },
                    { text: 'Events', link: '#events' },
                    { text: 'Sponsors', link: '#sponsors' },
                    { text: 'FAQ', link: '#faq' },
                  ],
                },
              ],
            },
            {
              name: 'hero',
              type: 'text',
              label: 'Hero',
              defaultValue: () => 'JOIN US',
            },
            {
              name: 'about',
              type: 'text',
              label: 'About',
              defaultValue: () => 'OUR MISSION',
            },
            {
              name: 'events',
              type: 'text',
              label: 'Events',
              defaultValue: () => 'EVENTS',
            },
            {
              name: 'sponsors',
              type: 'text',
              label: 'Sponsors',
              defaultValue: () => 'SPONSORSHIP',
            },
            {
              name: 'faq',
              type: 'array',
              label: 'FAQ',
              fields: [
                {
                  name: 'question',
                  type: 'text',
                },
                {
                  name: 'answers',
                  type: 'array',
                  fields: [
                    {
                      name: 'bullet',
                      type: 'text',
                    },
                  ],
                },
              ],
              defaultValue: () => [
                {
                  question: 'what is cuHacking?',
                  answers: [
                    {
                      bullet: 'cuHacking is a 36 hour hackathon.',
                    },
                    {
                      bullet: 'Running from March 14th to 16th 2025 @ Carleton University, you will be able to work on a project, attend workshops, career fairs and meet like-minded people.',
                    },
                  ],
                },
                {
                  question: 'who can attend?',
                  answers: [
                    {
                      bullet: 'Available to all university/college students.',
                    },
                  ],
                },
                {
                  question: 'how much does it cost?',
                  answers: [
                    {
                      bullet: 'cuHacking is a whopping $0 for all participants.',
                    },
                  ],
                },
                {
                  question: 'can I work in a team?',
                  answers: [
                    {
                      bullet: 'Yes, teams of up to 4 are allowed to work together.',
                    },
                  ],
                },
                {
                  question: 'I have more questions, where should I go?',
                  answers: [
                    {
                      bullet: 'Hit us up on Discord, Instagram, or Email us.',
                    },
                  ],
                },
              ],
            },
            {
              name: 'footer',
              type: 'array',
              label: 'Footer',
              fields:[
                {
                  name: 'logo',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Logo'
                },
                {
                  name: 'links',
                  type: 'array',
                  label: 'Links',
                  fields: [
                    {
                      name: 'text',
                      type: 'text',
                      label: 'Text',
                    },
                    {
                      name: 'link',
                      type: 'text',
                      label: 'Link',
                    },
                  ],
                  defaultValue: () => [
                  ],
                },
              ]
            }
          ],
        },
        {
          name: 'settings',
          label: '⚙ Settings',
          description: 'General configuration for your brand.',
          fields: [
            {
              name: 'brand',
              type: 'text',
              defaultValue: async ({ req }) => {
              // const res = await req.payload.find({
              //   collection: 'brands',
              //   where: { name: { equals: 'cuHacking' } },
              //   select: { name: true },
              // })

                // return res?.docs[0].name || ''
                return 'cuHacking'
              },
            },
            {
              name: 'year',
              type: 'number',
              defaultValue: 2025,
            },
// {
//       name: 'roles',
//       type: 'relationship',
//       relationTo: 'roles',
//       hasMany: true,
//       required: true,
//     },
            // {
            //   name: 'Links',
            //   type: 'relationship',
            //   relationTo: 'brands',
            //   hasMany: true,
            //   defaultValue: async ({ req }) => {
            //     const brands = await req.payload.find({
            //       collection: 'brands',
            //       where: {
            //         domain: {
            //           in: SOCIAL_MEDIA_DOMAINS,
            //         },
            //       },
            //     })

            //     return brands?.docs?.map(brand => brand.id) || []
            //   },
            // },
          ],
        },
      ],
    },
  ],
}
