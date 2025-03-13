import type { CollectionConfig, Payload } from "payload";
import { navAccordions } from "@/db/collections/navAccordions";

export const Challenges: CollectionConfig = {
  slug: "challenges",
  access: {
    read: ()=>true,
  },
  admin: {
    group: navAccordions.categories,
  },
  fields: [
    {name: "title", type: "text"},
    {name: "pathTitle", type: "text"},
    {name: "symbol", type: "upload", relationTo: "media"},
        {
      name: 'challengeBlock',
      type: 'blocks',
      blocks: [
        {
          slug: "info",
          fields: [
            {name: "title", type:"text", defaultValue: "getDetails()"},
            {
              name: "bullets", 
              type: "array", 
              fields: [
                {
                  name: "point", 
                  type: "text"
                },
              ]
            }
          ]
        },
        {
          slug: "resources",
          fields: [
            {name: "title", type:"text", defaultValue: "getResources()"},
            {
              name: "buttons", 
              type: "array", 
              fields: [
                {
                  name: "title", 
                  type: "text"
                },
                {
                  name: "link", 
                  type: "text"
                },
              ]
            }
          ]
        },
      ],
    },
  ],
};

export async function seedChallenges(payload: Payload, req: any) {
  payload.logger.info("📸 Uploading challenges & inserting prizes...");
  await Promise.all(
    [
      {
        pathTitle: 'E:qnx@cuhacking.exe',
        symbol: { alt: "QNX Logo" },
        title: 'Best use of QNX (Software)'
      },
      {
        pathTitle: 'E:gadget@cuhacking.exe',
        symbol: { alt: "Gadget Logo" },
        title: 'Best use of Gadget'
      },
      {
        pathTitle: 'E:impact-carleton@cuhacking.exe',
        symbol: { alt: "Gadget Logo" },
        title: 'Most Impact'
      },
      {
        pathTitle: 'E:general@cuhacking.exe',
        symbol: { alt: "Gadget Logo" },
        title: 'Best general hack'
      },
    ].map(async (challenge) => {
      try {
        const existingMedia = await payload.find({
          collection: "media",
          where: { alt: { equals: challenge.symbol.alt } },
          pagination: false,
        });

        const selectedImage =
          existingMedia.docs.length > 0 ? existingMedia.docs[0].id : null;

        await payload.create({
          collection: "challenges",
          data: {
            pathTitle: challenge.pathTitle,
            symbol: selectedImage,
            title: challenge.title
          },
        });
        payload.logger.info(`✅ Inserted challenge: ${challenge.title}`);
      }
      catch (error) {
        console.error(`❌ Error creating challenge "${challenge.title}":`, error);
      }
      }),
  );
}

