import type { CollectionConfig } from "payload";
import { navAccordions } from "@/db/collections/navAccordions";

export const Hackathons: CollectionConfig = {
  slug: "hackathons",
  admin: {
    useAsTitle: "year",
    group: navAccordions.events,
  },
  fields: [
    {
      type: "row",
      admin: { position: "sidebar" },
      fields: [
    {
      name: "name",
      type: "text",
      required: true,
      defaultValue: () => "cuHacking 6",
    },
    {
      name: "year",
      type: "number",
      required: true,
      unique: true,
      defaultValue: () => 2025,
    },
        ],
      },
    {
      name: "location",
      type: "text",
      defaultValue: () => "Carleton University, Richcraft Hall",
      admin: { position: "sidebar" },
    },
    {
      type: "row",
      admin: { position: "sidebar" },
      fields: [
    {
      name: "start",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
          displayFormat: "h:mm a, EEEE, do MMMM, yyyy",
          minDate: new Date(),
        },
      },
      defaultValue: () => new Date(2025, 2, 15, -4, 0, 0),
    },
    {
      name: "end",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
          displayFormat: "h:mm a, EEEE, do MMMM, yyyy",
          minDate: new Date(),
        },
      },
      defaultValue: () => new Date(2025, 2, 17, -4, 0, 0),
    },
        ]
    },
    {
      label: "Sponsors",
      type: "collapsible",
      admin: {
        // initCollapsed: true,
        position: 'sidebar'
      },
      fields: [
        { name: "tera", type: "relationship", relationTo: "brands" },
        { name: "mega", type: "relationship", relationTo: "brands" },
        { name: "kilo", type: "relationship", relationTo: "brands" },
        { name: "centi", type: "relationship", relationTo: "brands" },
        { name: "mili", type: "relationship", relationTo: "brands" },
      ],
    },
    {
      name: "groups",
      label: "User Groups",
      type: "join",
      collection: "groups",
      on: "event",
    },
    // {
    //   name: "groups",
    //   label: "User Groups",
    //   type: "blocks",
    //   blocks: [
    //     {
    //       slug: "group",
    //       fields: [
    //         { name: "name", type: "text" },
    //         { name: "symbol", type: "upload", relationTo: "media" },
    //       ],
    //     },
    //   ],
    // },
    {
      name: "organizerTeams",
      type: "join",
      collection: "organizerTeams",
      on: "event",
    },
    // {
    //   name: "organizerTeams",
    //   type: "blocks",
    //   blocks: [
    //     {
    //       slug: "organizerTeam",
    //       fields: [
    //         { name: "name", type: "text" },
    //         { name: "symbol", type: "upload", relationTo: "media" },
    //       ],
    //     },
    //   ],
    // },
    { name: "schedule", type: "group", fields: [] },
    {
      name: "organizers",
      type: "join",
      collection: "users",
      on: "organizerTeam",
    },
    {
      name: "judges",
      type: "join",
      collection: "users",
      on: "group",
    },
    {
      name: "mentors",
      type: "join",
      collection: "users",
      on: "group",
    },
    {
      name: "hackers",
      type: "join",
      collection: "users",
      on: "group",
    },
    {
      name: "volunteers",
      type: "join",
      collection: "users",
      on: "group",
    },
  ],
};

export async function seedHackathons(payload: any) {
  try {
    console.log("🚀 Seeding Hackathons...");

    // const groupsData = [
    //   { name: "Hacker", imageAlt: "cuHacking 2025 Symbol Yellow" },
    //   { name: "Mentor", imageAlt: "cuHacking 2025 Symbol Blue" },
    //   { name: "Sponsor", imageAlt: "cuHacking 2025 Symbol Pink" },
    //   { name: "Judge", imageAlt: "cuHacking 2025 Symbol White" },
    //   { name: "Organizer", imageAlt: "cuHacking 2025 Symbol Green" },
    // ];

    // const groupsWithSymbols = await Promise.all(
    //   groupsData.map(async (group) => {
    //     const existingMedia = await payload.find({
    //       collection: "media",
    //       where: { alt: { equals: group.imageAlt } },
    //       pagination: false,
    //     });

    //     return {
    //       blockType: "group",
    //       blockName: group.name,
    //       name: group.name,
    //       symbol:
    //         existingMedia.docs.length > 0 ? existingMedia.docs[0].id : null,
    //     };
    //   }),
    // );

    const teraSponsorResult = await payload.find({
      collection: "brands",
        where: { name: { equals: 'QNX' } },
        pagination: false,
    })

    const teraSponsor = teraSponsorResult.docs[0] || null;

    await payload.create({
      collection: "hackathons",
      data: {
        year: 2025,
        name: "cuHacking 6",
        location: "Carleton University, Richcraft Hall",
        start: new Date(2025, 2, 15, -4, 0, 0),
        end: new Date(2025, 2, 17, -4, 0, 0),

        sponsors: {
          tera: teraSponsor ? teraSponsor.id : null,
          mega: null,
          kilo: null,
          centi: null,
        },

        // groups: groupsWithSymbols,

        organizers: [],
        schedule: {},
        judges: [],
        mentors: [],
        hackers: [],
        volunteers: [],
      },
    });

    console.log(
      "✅ Hackathon seed data successfully inserted with groups & images!",
    );
  } catch (error) {
    console.error("❌ Error seeding Hackathon data:", error);
  }
}
