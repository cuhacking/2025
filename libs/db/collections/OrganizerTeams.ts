import type { CollectionConfig, Payload } from "payload";
import { navAccordions } from "@/db/collections/navAccordions";

import {
  anyone,
  isSelf,
  isOrganizer,
  isSuperAdmin,
} from "@/db/access";

export const OrganizerTeams: CollectionConfig = {
  slug: "organizerTeams",
  admin: {
    group: navAccordions.featured,
    defaultColumns: ["name", "symbol", "users", "event", "updatedAt", "createdAt", "id"],
    useAsTitle: "name",
  },
  access: {
    read:  anyone,
    create: isSuperAdmin,
    update: isSelf || isOrganizer || isSuperAdmin,
    delete: isSuperAdmin,
  },
  fields: [
    {name: "name", type: "text", admin: {position: 'sidebar'}},
    {name: "symbol", type: "upload", relationTo: "media", admin: {position: 'sidebar'}},
    {name: "event", type: "relationship", relationTo: "hackathons",  admin: {position: 'sidebar'}},
    {name: "users", type: "join", collection: "users", on: "organizerTeam"},
  ],
};

export async function seedOrganizerTeams(payload) {
  payload.logger.info("Seeding Organizer Teams...");

  await Promise.all(
    [
      { name: "Co-Leads", symbol: { alt: "cuHacking 2025 Symbol Pink" }},
      { name: "Advisors", symbol: { alt: "cuHacking 2025 Symbol White" }},
      { name: "Community Engagement", symbol: { alt: "cuHacking 2025 Symbol Blue" }},
      { name: "Hacker Experience", symbol: { alt: "cuHacking 2025 Symbol Purple" }},
      { name: "Sponsorship", symbol: { alt: "cuHacking 2025 Symbol Orange" } },
      { name: "Logistics", symbol: { alt: "cuHacking 2025 Symbol Yellow" } },
      { name: "Design", symbol: { alt: "cuHacking 2025 Symbol Green" } },
      { name: "Development", symbol: { alt: "cuHacking 2025 Symbol Red" } },
      { name: "Volunteer", symbol: { alt: "cuHacking 2025 Symbol Teal" } },
      { name: "Emeritus", symbol: { alt: "cuHacking 2025 Symbol Grayscale" } },
    ].map(async (team) => {
      try {
        const existingMedia = await payload.find({
          collection: "media",
          where: { alt: { equals: team.symbol.alt } },
          pagination: false,
        });

        const selectedImage =
          existingMedia.docs.length > 0 ? existingMedia.docs[0].id : null;

        const hackathonResult = await payload.find({
          collection: "hackathons",
          where: { year: { equals: 2025 } },
          pagination: false,
        });

        const hackathon = hackathonResult.docs[0] || null;

        await payload.create({
          collection: "organizerTeams",
          data: {
            name: team.name,
            event: hackathon ? hackathon.id : null,
            symbol: selectedImage,
          },
        });

        payload.logger.info(`✅ Created Organizer Team: ${team.name}`);
      } catch (error) {
        console.error(`❌ Error creating team "${team.name}":`, error);
      }
    }),
  );

  payload.logger.info("✅ All Organizer Teams Seeded!");
}
