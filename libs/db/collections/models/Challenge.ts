import type { CollectionConfig } from "payload";
import { navAccordions } from "@/db/collections/navAccordions";
import {
  isOrganizer,
} from "@/db/access";

export const Challenges: CollectionConfig = {
  slug: "challenges",
  access: {
    read:  () => true,
    create: isOrganizer,
    update: isOrganizer,
    delete: isOrganizer,
  },
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
          "Create a project using QNX OS 8.0 that drives some hardware components.",
          "Note: for cameras, only very specific camera units are supported. ",
        ],
        prompts: [
          "Can you make something that moves?",
          "Can you prototype a hardware solution to a real-world problem?",
          "Can you create an entertaining game or physical challenge?",
        ],
        prizes: [
          {
            1: "1 000 000 in unicorn points",
            2: "500 000 in unicorn points",
          },
        ],
      },
    ],
  },
  {
    host: "Gadget",
    challenges: [
      {
        title: "Best use of Gadget",
        details: ["Full stack challenge", "Build a project using Gadget"],
      },
    ],
  },
  {
    host: "cuHacking",
    challenges: [
      {
        title: "Best overall hack",
        details: [],
        prompts: [],
        prizes: ["Shhhhh, secret 🤫"],
      },
      {
        title: "Most Outrageous Hack/Turn Brainrot into brain nourishment",
        details: [],
        prompts: [],
        prizes: [],
      },
    ],
  },
  {
    host: "Wolfram",
    challenges: [
      {
        title: "Top 5 teams",
        details: [],
        prompts: [],
      },
    ],
  },
  {
    host: "",
    challenges: [
      {
        title: "Best First Time Hack",
        details: [],
        prompts: [],
        prizes: [],
      },
    ],
  },
  {
    host: "cuHacking",
    challenges: [
      {
        title: "Best uOttawa x Carleton x Algonquin collaboration",
        prompts: [],
        prizes: [],
        details: [],
      },
    ],
  },
];
