import type { Block } from "payload";

export const TeamBlock: Block = {
  slug: "teamBlock",
  fields: [
    {
      name: "team",
      type: "select",
      required: true,
      options: [
        { label: "Advisors", value: "advisors" },
        { label: "Co-Leads", value: "coleads" },
        { label: "Community Engagement", value: "community-engagement" },
        { label: "Marketing", value: "marketing" },
        { label: "Logistics", value: "logistics" },
        { label: "Hacker Experience", value: "hacker-experience" },
        { label: "Sponsorship", value: "sponsorship" },
        { label: "Design", value: "design" },
        { label: "Development", value: "development" },
      ],
    },
    {
      name: "members",
      type: "relationship",
      relationTo: 'users'
    },
  ],
};

