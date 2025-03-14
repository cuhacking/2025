/* eslint-disable node/prefer-global/process */
import type { GlobalConfig } from "payload";

export const Website: GlobalConfig = {
  slug: "2025",
  access: {
    read: () => true,
    // update: ({ req }) => req.user?.roles?.some(role => role.admin === true || role.name === 'owner'),
  },
  versions: {
    drafts: true,
  },
  admin: {
    livePreview: {
      url: process.env.NODE_ENV === "development" ? process.env.CUHACKING_2025_WEBSITE_LOCAL_URL : process.env.CUHACKING_2025_WEBSITE_PUBLIC_URL,
      breakpoints: [
        {label: "Mobile", name: "mobile", width: 320, height: 568},
      ],
    },
    hooks: {
      afterChange: [],
    },
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "website",
          label: "📢 Website",
          description: "Promotional site for the hackathon.",
          fields: [
            {
              type: "tabs",
              tabs: [
                {
                  name: "header", label: "Header",
                  fields: [
                    {
                        name: "logo", type: "upload", relationTo: "media", label: "Logo",
                        defaultValue: async ({ req }) => {
                          const media = await req.payload.find({
                            collection: "media",
                            where: {
                              filename: { equals: "cuHacking_2025_primary_logo.svg" }
                            }
                          });

                          return media?.docs?.[0]?.id || null;
                        }
                      },
                    {
                      name: "links",
                      type: "array",
                      label: "Links",
                      fields: [
                        {name: "name", type: "text", label: "Text"},
                        {name: "link", type: "text", label: "Link"},
                      ],
                      defaultValue: () => [
                        { name: "ABOUT", link: "/#about" },
                        { name: "EVENTS", link: "/#events" },
                        { name: "SPONSORS", link: "/#sponsors" },
                        { name: "FAQ", link: "/#faq" },
                      ],
                    },
                  ],
                },
                {
                  label: "Join Us",
                  fields: [
                    {name: 'title', type: "text", defaultValue: () => "JOIN US"},
                    {name: "organization", type: "text", defaultValue: () => "cuHacking"},
                    {name: "callToAction", type: "text", defaultValue: () => "In the meantime, check out some cool stuff :)"},
                    {name: "date", type: "text", defaultValue: () => "Mar 14th - 16th"},
                    {name: "buttonText", type: "text", defaultValue: () => "!! REGISTER NOW !!"},
                    {name: "link", type: "text", defaultValue: () => "https://docs.google.com/forms/d/e/1FAIpQLSde1T0yRwTilt5vt69LpbfwQp9af64MFT3--DrDMC2WbyHSOQ/viewform"
                    }
                  ],
                },
                {
                  label: "Our Mission",
                  fields: [
                    {name: "about", type: "text", defaultValue: () =>
                      "OUR MISSION"},
                  ],
                },
                {label: "Events", fields: [
                    {name: "events", type: "text", defaultValue: () => "EVENTS",},
                  ],
                },
                {
                  label: "Sponsors",
                  fields: [
                    {name: "sponsors", type: "text", defaultValue: () => "SPONSORSHIP"},
                  ],
                },
                {
                  label: "FAQ",
                  fields: [
                    {
                      name: "faq",
                      type: "array",
                      label: "FAQ",
                      fields: [
                        {name: "question", type: "text",},
                        {name: "answers", type: "array",
                          fields: [
                            {name: "bullet", type: "text",},
                          ],
                        },
                      ],
                      defaultValue: () => [
                        {
                          question: "what is cuHacking?",
                          answers: [
                            {bullet: "cuHacking is a 36 hour hackathon."},
                            {bullet: "Running from March 14th to 16th 2025 @ Carleton University, you will be able to work on a project, attend workshops, career fairs and meet like-minded people."},
                          ],
                        },
                        {
                          question: "who can attend?",
                          answers: [
                            {bullet: "Available to all university/college students."},
                          ],
                        },
                        {
                          question: "how much does it cost?",
                          answers: [
                            {bullet: "cuHacking is a whopping $0 for all participants."},
                          ],
                        },
                        {
                          question: "can I work in a team?",
                          answers: [
                            {bullet: "Yes, teams of up to 4 are allowed to work together."},
                          ],
                        },
                        {
                          question: "I have more questions, where should I go?",
                          answers: [
                            {bullet: "Hit us up on Discord, Instagram, or Email us."},
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "Footer",
                  fields: [
                    {
                      name: "footer",
                      type: "array",
                      fields: [
                        {name: "logo", type: "upload", relationTo: "media", label: "Logo",},
                        {name: "links", type: "array",
                          label: "Links",
                          fields: [
                            {name: "text", type: "text", label: "Text",},
                            {name: "link", type: "text", label: "Link",},
                          ],
                          defaultValue: () => [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "💅 Assets",
          description: "Digital artwork & Logos.",
          fields: [],
        },
      ],
    },
  ],
};

// export async const seedPlatforms ={
//  // [
//  //   {
//  // "website":{
//  //  logoAlt: "cuhacking-symbol-green"
//  // },
//  //   }
//  // ]
// }
