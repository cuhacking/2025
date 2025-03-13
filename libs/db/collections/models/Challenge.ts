import { navAccordions } from "@/db/collections/navAccordions";
import type { CollectionConfig } from "payload";

export const Challenges: CollectionConfig = {
  slug: "challenges",
  admin: {
    useAsTitle: "title",
    group: navAccordions.categories,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "judging",
      type: "relationship",
      relationTo: "criteria",
      required: true,
    },
    {
      name: "event",
      type: "relationship",
      relationTo: "events",
      required: true,
    },
    {
      name: "sponsor",
      type: "relationship",
      relationTo: "brands",
      admin: {
        description:
          "Who is hosting this challenge? Leave blank if event only has one host.",
      },
      hasMany: true,
      required: false,
    },
    {
      name: "prize",
      type: "relationship",
      relationTo: "challengePrize",
      required: true,
    },
  ],
};

export const ChallengePrize: CollectionConfig = {
  slug: "challengePrize",
  admin: {
    group: navAccordions.categories,
  },
  fields: [
    {
      name: "formattedTitle",
      admin: {
        hidden: true,
      },
      type: "text",
    },
    {
      name: "prizeForPosition",
      type: "array",
      fields: [
        {
          name: "position",
          type: "number",
        },
        {
          name: "prizeMoney",
          type: "number",
          admin: {
            description:
              "In CAD, if prize is not money, estimate the cost the prize",
          },
        },
        {
          name: "otherPrize",
          type: "text",
          admin: {
            description:
              "Typically use this for physical prizes (ex. MetaQuest for 1st place)",
          },
        },
        {
          name: "description",
          type: "textarea",
          admin: {
            description: "If extra detail is necessary",
          },
        },
      ],
    },
    {
      name: "miscellaneousPrizes",
      admin: {
        description:
          "Prizes that are not part of the central challenge (ex. A raffle prize)",
      },
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "description",
          type: "textarea",
        },
        {
          name: "prizeMoney",
          type: "number",
          admin: {
            description:
              "In CAD, if prize is not money, estimate the cost the prize",
          },
        },
        {
          name: "otherPrize",
          type: "text",
          admin: {
            description:
              "Typically use this for physical prizes (ex. MetaQuest for 1st place)",
          },
        },
      ],
    },
  ],
};

const challengesData = [
  {
    host: "QNX",
    challenges: [
      {
        title: "Best use of QNX (Software)",
        details: [
          'Create a project using QNX OS 8.0 that drives some hardware components.',
          'Note: for cameras, only very specific camera units are supported. '
        ],
        prompts: [
          'Can you make something that moves?',
          'Can you prototype a hardware solution to a real-world problem?',
          'Can you create an entertaining game or physical challenge?'
        ],
        prizes: [
          {
            1: '1 000 000 in unicorn points',
            2: '500 000 in unicorn points'
          }
        ]
      },
      {
        title: "Best use of QNX (Hardware)",
        details: [
          "Create a project using QNX OS 8.0 that drives some hardware components."
        ],
        prompts: [
          "Can you make something that moves?",
          "Can you prototype a hardware solution to a real-world problem?",
          "Can you create an entertaining game or physical challenge?"
        ],
        prizes: [
          {
            1: "$1000 in Amazon Canada Gift Cards + QNX Swag Box",
            2: "$250 in Amazon Canada Gift Cards",
            3:"All entrants: Keep your teams Raspberry Pi 4B kit!",
          },
        ]
      },      
    ]
  },
  {
    host:"All external judges",
    challenges: [
      {
        title: "Best overall project (1st, 2nd, and 3rd place)",
        details: [

        ],
        prizes: [
          {
            1: "EPOMAKER Keyboard + Smiski",
            2: "Air Fryer + NordVPN",
            3: "Wireless Charger"
          }
        ]
      }
    ]
  },
  {
    host: "MLH",
    challenges: [
      {
        title: "Best Use of Gemini API",
        details: [
          "Confirmed by MLH Coach - Emily"
        ],
        description: "More details available at: https://hack.mlh.io/cuhacking-31/prizes",
        prizes: [
          {
            1: "Assorted Prizes"
          }
        ]
      },
      {
        title: "Best Use of Auth0",
        details: [
          "Confirmed by MLH Coach - Emily"
        ],
        description: "More details available at: https://hack.mlh.io/cuhacking-31/prizes",
        prizes: [
          {
            1: "Wireless Headphones"
          }
        ]
      },
      {
        title: "Best AI Application Built with Cloudflare",
        details: [
          "Confirmed by MLH Coach - Emily"
        ],
        description: "More details available at: https://hack.mlh.io/cuhacking-31/prizes",
        prizes: [
          {
            1: "Arduino Kit"
          }
        ]
      },
      {
        title: "Best Domain Name from GoDaddy Registry",
        details: [
          "Confirmed by MLH Coach - Emily"
        ],
        description: "More details available at: https://hack.mlh.io/cuhacking-31/prizes",
        prizes: [
          {
            1: "Digital Gift Card"
          }
        ]
      }
    ]
  },  
  {
    host: "Gadget",
    challenges: [
      {
        title: "Best use of Gadget",
        details: [
          "Leverage Gadget's new AI-assisted app development capabilities to build and launch a full-stack web app in two days.",
          "Your app must be built entirely on Gadget’s 'Web app' template, include a frontend, backend, and database, solve a real problem, look and feel great, and be fully hosted live on the internet.",
          "Ensure you complete your submission by filling out the required feedback form."
        ],
        prompts: [
          "Build a full-stack web app using Gadget.",
          "Showcase how AI-assisted development can enhance your project."
        ],
        prizes: [
          {
            1: "$1000 first prize winner",
            2: "$100 for most new bugs reported",
            3: "$100 for best new feature suggested"
          }
        ]
      }
    ]
  },  
  {
    host: "cuHacking",
    challenges: [
      {
        title: "Best overall hack",
        details: [],
        prompts: [],
        prizes: [
          "Shhhhh, secret 🤫"
        ]
      },
      {
        title: "Most Outrageous Hack/Turn Brainrot into brain nourishment",
        details: [],
        prompts: [],
        prizes: []
      },
      {
        title: "Boopbot Fan Art",
        details: [
          "Contest for creating fan art of 'Boopbot,' using participants' imagination."
        ],
        description: "Looking to hone in on your artistic skills? Create fan art of our very own Boopbot! What is a Boopbot? Use your own imagination. This will be judged by you guys—submit your work to the <<CHANNEL>> channel!",
        prizes: [
          {
            1: "Merry Dairy gift card + recipe book"
          }
        ]
      },
      {
        title: "Marketing Challenge",
        details: [
          "Get participants to make TikToks/content, and the person with the most views or engagement gets a prize."
        ],
        prizes: [
          {
            1: "$50 Amazon Gift Card"
          }
        ]
      },
      {
        title: "Best uOttawa x Carleton x Algonquin collaboration",
        details: [],
        prompts: [],
        prizes: []
      }
    ]
  },  
  
  {
    host: "Wolfram",
    challenges: [
      {
        title: "Top 5 teams",
        details: [

        ],
        prompts: [

        ],
      }
    ]
  },
  {
    host: "",
    challenges: [
      {
      title: "Best First Time Hack",
      details: [

      ],
      prompts: [

      ],
      prizes: [

      ]
      }
    ]
  },
]
