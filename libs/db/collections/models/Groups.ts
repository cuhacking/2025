import type { CollectionConfig, Payload } from "payload";
import { navAccordions } from "@/db/collections/navAccordions";

export const Groups: CollectionConfig = {
  slug: "groups",
  access: {
    admin: () => true,
  },
  admin: {
    group: navAccordions.featured,
    defaultColumns: ["name", "symbol", "event", "users", "updatedAt", "createdAt", "id"],
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "symbol",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "event",
      type: "relationship",
      relationTo: "hackathons",
    },
    {
      name: "users",
      type: "join",
      collection: "users",
      on: "group",
    },
  ],
};

export async function seedGroups(payload, req) {
  payload.logger.info("Seeding Groups...");

  await Promise.all(
    [
      { name: "Hacker", imageAlt: "cuHacking 2025 Symbol Yellow" },
      { name: "Mentor", imageAlt: "cuHacking 2025 Symbol Blue" },
      { name: "Sponsor", imageAlt: "cuHacking 2025 Symbol Pink" },
      { name: "Judge", imageAlt: "cuHacking 2025 Symbol White" },
      { name: "Organizer", imageAlt: "cuHacking 2025 Symbol Green" },
    ].map(async (group) => {
      try {
        const existingMedia = await payload.find({
          collection: "media",
          where: { alt: { equals: group.imageAlt } },
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
          collection: "groups",
          data: {
            name: group.name,
            symbol: selectedImage,
            event: hackathon ? hackathon.id : null,
          },
        });

        payload.logger.info(`✅ Created Group: ${group.name}`);
      } catch (error) {
        console.error(`❌ Error creating group "${group.name}":`, error);
      }
    }),
  );

  payload.logger.info("✅ All Groups Seeded!");
}
