import { navAccordions } from "@/db/collections/navAccordions";
import type { CollectionConfig, Payload } from "payload";

export const Challenges: CollectionConfig = {
  slug: "challenges",
  access: {
    read: ()=>true,
  },
  admin: {
    group: navAccordions.categories,
  },
  fields: [
    {name: "pathTitle", type: "text"},
    {name: "title", type: "text"},
    {name: "sponsor", type: "relationship", relationTo: "brands"},
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
                  type: "text",
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
        pathTitle: "E:qnx-software@cuhacking.exe",
        title: "Best use of QNX - Software",
        sponsor: "QNX",
        challengeBlock: [
          {
            blockName: "QNX Details",
            blockType: "info",
            title: "getDetails()",
            bullets: [
              {
                point:
                  "Create a software project running on QNX that can run on a virtual target or Raspberry Pi. Projects should be in a public repo QNX can link to and promote at gitlab.com/qnx/projects."
              }
            ]
          },
          {
            blockName: "QNX infos",
            blockType: "info",
            title: "getPrompts()",
            bullets: [
              {
                point:
                  "Can you create a wizard/utility to ease the process of setting up a QNX Raspberry Pi target? (keyboard layout, Wi-Fi, display resolution, time, etc.)"
              },
              { point: "Can you port a Linux utility or library to QNX?" },
              {
                point:
                  "Can you create an interesting prototype dashboard for industrial control or automation?"
              },
              {
                point:
                  "Can you create a game or some other engaging activity running on QNX?"
              }
            ]
          },
          {
            blockName: "QNX Prizes",
            blockType: "getprizes",
            title: "getPrizes()",
            bullets: [
              { point: "Winner: $1000 in Amazon Canada Gift Cards + QNX Swag Box" },
              { point: "Runner-up: $250 in Amazon Canada Gift Cards" },
              { point: "Repo featured at gitlab.com/qnx/projects" },
              { point: "All entrants: Keep your team’s Raspberry Pi 4B kit" }
            ]
          }
        ]
      },
      {
        pathTitle: "E:qnx-hardware@cuhacking.exe",
        title: "Best use of QNX - Hardware",
        sponsor: "QNX",
        challengeBlock: [
          {
            blockName: "QNX Hardware Details",
            blockType: "info",
            title: "getDetails()",
            bullets: [
              {
                point:
                  "Create a project using QNX OS 8.0 that drives some hardware components. Note: for cameras, only very specific camera units are supported."
              }
            ]
          },
          {
            blockName: "QNX Hardware infos",
            blockType: "info",
            title: "getPrompts()",
            bullets: [
              {
                point:
                  "Can you make something that moves? Can you prototype a hardware solution to a real-world problem? Can you create an entertaining game or physical challenge?"
              }
            ]
          },
          {
            blockName: "QNX Hardware Prizes",
            blockType: "getprizes",
            title: "getPrizes()",
            bullets: [
              { point: "Winner: $1000 in Amazon Canada Gift Cards + QNX Swag Box" },
              { point: "Runner-up: $250 in Amazon Canada Gift Cards" },
              { point: "Repo featured at gitlab.com/qnx/projects" },
              { point: "All entrants: Keep your team’s Raspberry Pi 4B kit" }
            ]
          }
        ]
      },
      {
        pathTitle: "E:overall@cuhacking.exe",
        title: "Best overall project (1st, 2nd, and 3rd place)",
        sponsor: "cuHacking",
        challengeBlock: [
          {
            blockName: "Overall Project Details",
            blockType: "info",
            title: "getDetails()",
            bullets: [
              {
                point:
                  "The 3 best overall projects that show off the best creativity, innovation, impact, pitch and completeness!"
              }
            ]
          },
          {
            blockName: "Overall Project infos",
            blockType: "info",
            title: "getPrompts()",
            bullets: [] // No infos provided
          },
          {
            blockName: "Overall Project Prizes",
            blockType: "info",
            title: "getPrizes()",
            bullets: [
              { point: "1st: EPOMAKER Keyboard + Smiski" },
              { point: "2nd: Air Fryer + NordVPN" },
              { point: "3rd: Wireless Charger" }
            ]
          }
        ]
      },
      {
        pathTitle: "E:wolfram-award@cuhacking.exe",
        title: "Wolfram Award - Top 5 teams",
        sponsor: "Wolfram",
        challengeBlock: [
          {
            blockName: "Wolfram Award Details",
            blockType: "info",
            title: "getDetails()",
            bullets: [
              {
                point:
                  "The 5 best overall projects that show off the best creativity, innovation, impact, pitch and completeness! (Top 3 win this on top of the overall prize)"
              }
            ]
          },
          {
            blockName: "Wolfram Award infos",
            blockType: "info",
            title: "getPrompts()",
            bullets: [] // No infos provided
          },
          {
            blockName: "Wolfram Award Prizes",
            blockType: "getprizes",
            title: "getPrizes()",
            bullets: [
              {
                point:
                  "Wolfram Award (Includes Wolfram|One free 1 year subscription)"
              }
            ]
          }
        ]
      },
      {
        pathTitle: "E:hardware-hack@cuhacking.exe",
        title: "Best Hardware Hack",
        sponsor: "QNX",
        challengeBlock: [
          {
            blockName: "Hardware Hack Details",
            blockType: "info",
            title: "getDetails()",
            bullets: [
              {
                point:
                  "Have a lot of boards and hardware lying around? Create a project that uses and shows off your ability to use hardware, and integrating it with software."
              }
            ]
          },
          {
            blockName: "Hardware Hack infos",
            blockType: "info",
            title: "getPrompts()",
            bullets: [] // No infos provided
          },
          {
            blockName: "Hardware Hack Prizes",
            blockType: "getprizes",
            title: "getPrizes()",
            bullets: [{ point: "Lego Botanicals" }]
          }
        ]
      },
      {
        pathTitle: "E:gadget@cuhacking.exe",
        title: "Gadget Challenge",
        sponsor: "Gadget",
        challengeBlock: [
          {
            blockName: "Gadget Challenge Details",
            blockType: "info",
            title: "getDetails()",
            bullets: [
              { point: "Create a project using Gadget technology. (Details: File here)" }
            ]
          },
          {
            blockName: "Gadget Challenge infos",
            blockType: "info",
            title: "getPrompts()",
            bullets: [] // No infos provided
          },
          {
            blockName: "Gadget Challenge Prizes",
            blockType: "info",
            title: "getPrizes()",
            bullets: [] // No prize info provided
          }
        ]
      },
      {
        pathTitle: "E:impact-carleton@cuhacking.exe",
        title: "Carleton Impact Challenge",
        sponsor: "cuHacking",
        challengeBlock: [
          {
            blockName: "Impact Challenge Details",
            blockType: "info",
            title: "getDetails()",
            bullets: [{ point: "@Impact Challenge" }]
          },
          {
            blockName: "Impact Challenge infos",
            blockType: "info",
            title: "getPrompts()",
            bullets: [] // No infos provided
          },
          {
            blockName: "Impact Challenge Prizes",
            blockType: "info",
            title: "getPrizes()",
            bullets: [{ point: "Rocketbook Mini" }]
          }
        ]
      },
      {
        pathTitle: "E:figma@cuhacking.exe",
        title: "Best use of Figma",
        sponsor: "cuHacking",
        challengeBlock: [
          {
            blockName: "Figma Challenge Details",
            blockType: "info",
            title: "getDetails()",
            bullets: [
              {
                point:
                  "Interested in designing beautiful UI and pages for projects rather than the development side? Create a UI for a project on FIGMA showing off your UI design skills!"
              }
            ]
          },
          {
            blockName: "Figma Challenge infos",
            blockType: "info",
            title: "getPrompts()",
            bullets: [] // No infos provided
          },
          {
            blockName: "Figma Challenge Prizes",
            blockType: "info",
            title: "getPrizes()",
            bullets: [{ point: "Huion Drawing tablet" }]
          }
        ]
      },
      {
        pathTitle: "E:boopbot@cuhacking.exe",
        title: "Boopbot fan art",
        sponsor: "cuHacking",
        challengeBlock: [
          {
            blockName: "Boopbot Fan Art Details",
            blockType: "info",
            title: "getDetails()",
            bullets: [
              {
                point:
                  "Looking to hone your artistic skills? Create fan art of our very own boopbot! Use your imagination to define what a boopbot is."
              }
            ]
          },
          {
            blockName: "Boopbot Fan Art infos",
            blockType: "info",
            title: "getPrompts()",
            bullets: [] // No infos provided
          },
          {
            blockName: "Boopbot Fan Art Prizes",
            blockType: "info",
            title: "getPrizes()",
            bullets: [{ point: "Merry Dairy giftcard + recipe book" }]
          }
        ]
      },
      {
        pathTitle: "E:marketing@cuhacking.exe",
        title: "Marketing challenge",
        sponsor: "cuHacking",
        challengeBlock: [
          {
            blockName: "Marketing Challenge Details",
            blockType: "info",
            title: "getDetails()",
            bullets: [
              {
                point:
                  "Get participants to make TikToks/content—the person with the most views or engagement wins a prize. Record your hackathon experiences (videos and/or photos) and submit them at the designated channel."
              }
            ]
          },
          {
            blockName: "Marketing Challenge infos",
            blockType: "info",
            title: "getPrompts()",
            bullets: [] // No infos provided
          },
          {
            blockName: "Marketing Challenge Prizes",
            blockType: "info",
            title: "getPrizes()",
            bullets: [{ point: "$50 Amazon Gift Card" }]
          }
        ]
      },
      {
        pathTitle: "E:gemini-api@cuhacking.exe",
        title: "Best Use of Gemini API",
        sponsor: "MLH",
        challengeBlock: [
          {
            blockName: "Gemini API Details",
            blockType: "info",
            title: "getDetails()",
            bullets: [{ point: "MLH challenge." }]
          },
          {
            blockName: "Gemini API infos",
            blockType: "info",
            title: "getPrompts()",
            bullets: [] // No infos provided
          },
          {
            blockName: "Gemini API Prizes",
            blockType: "getprizes",
            title: "getPrizes()",
            bullets: [{ point: "Assorted Prizes" }]
          }
        ]
      },
      {
        pathTitle: "E:auth0@cuhacking.exe",
        title: "Best Use of Auth0",
        sponsor: "MLH",
        challengeBlock: [
          {
            blockName: "Auth0 Challenge Details",
            blockType: "info",
            title: "getDetails()",
            bullets: [{ point: "MLH challenge." }]
          },
          {
            blockName: "Auth0 Challenge infos",
            blockType: "infos",
            title: "getPrompts()",
            bullets: [] // No infos provided
          },
          {
            blockName: "Auth0 Challenge Prizes",
            blockType: "info",
            title: "getPrizes()",
            bullets: [{ point: "Wireless Headphones" }]
          }
        ]
      },
      {
        pathTitle: "E:cloudflare-ai@cuhacking.exe",
        title: "Best AI Application Built with Cloudflare",
        sponsor: "MLH",
        challengeBlock: [
          {
            blockName: "Cloudflare AI Details",
            blockType: "info",
            title: "getDetails()",
            bullets: [{ point: "MLH challenge." }]
          },
          {
            blockName: "Cloudflare AI infos",
            blockType: "infos",
            title: "getPrompts()",
            bullets: [] // No infos provided
          },
          {
            blockName: "Cloudflare AI Prizes",
            blockType: "info",
            title: "getPrizes()",
            bullets: [{ point: "Arduino Kit" }]
          }
        ]
      },
      {
        pathTitle: "E:domain-name@cuhacking.exe",
        title: "Best Domain Name from GoDaddy Registry",
        sponsor: "MLH",
        challengeBlock: [
          {
            blockName: "Domain Name Details",
            blockType: "info",
            title: "getDetails()",
            bullets: [{ point: "MLH challenge." }]
          },
          {
            blockName: "Domain Name infos",
            blockType: "info",
            title: "getPrompts()",
            bullets: [] // No infos provided
          },
          {
            blockName: "Domain Name Prizes",
            blockType: "info",
            title: "getPrizes()",
            bullets: [{ point: "Digital Gift Card" }]
          }
        ]
      },
      {
        pathTitle: "E:peoples-choice@cuhacking.exe",
        title: "People’s choice - Best overall project",
        sponsor: "cuHacking",
        challengeBlock: [
          {
            blockName: "People's Choice Details",
            blockType: "info",
            title: "getDetails()",
            bullets: [
              {
                point:
                  "The project that grabbed the hearts of the people as voted on Devpost after submission."
              }
            ]
          },
          {
            blockName: "People's Choice infos",
            blockType: "info",
            title: "getPrompts()",
            bullets: [] // No infos provided
          },
          {
            blockName: "People's Choice Prizes",
            blockType: "info",
            title: "getPrizes()",
            bullets: [{ point: "Charger Bot" }]
          }
        ]
      },
      {
        pathTitle: "E:outrageous-hack@cuhacking.exe",
        title: "Most Outrageous Hack/Turn Brainrot into brain nourishment",
        sponsor: "cuHacking",
        challengeBlock: [
          {
            blockName: "Outrageous Hack Details",
            blockType: "info",
            title: "getDetails()",
            bullets: [
              {
                point:
                  "Make a project that combines creativity and usefulness with shear unadulterated brainrot."
              }
            ]
          },
          {
            blockName: "Outrageous Hack infos",
            blockType: "info",
            title: "getPrompts()",
            bullets: [] // No infos provided
          },
          {
            blockName: "Outrageous Hack Prizes",
            blockType: "info",
            title: "getPrizes()",
            bullets: [{ point: "Banana Plushie" }]
          }
        ]
      },
      {
        pathTitle: "E:school-crossover@cuhacking.exe",
        title: "Best School Crossover",
        sponsor: "cuHacking",
        challengeBlock: [
          {
            blockName: "School Crossover Details",
            blockType: "info",
            title: "getDetails()",
            bullets: [
              {
                point:
                  "Teamwork makes the dream work! Submit a project with a team of students enrolled in at least two different schools."
              }
            ]
          },
          {
            blockName: "School Crossover infos",
            blockType: "info",
            title: "getPrompts()",
            bullets: [] // No infos provided
          },
          {
            blockName: "School Crossover Prizes",
            blockType: "getprizes",
            title: "getPrizes()",
            bullets: [{ point: "Friendship Necklaces" }]
          }
        ]
      },
      {
        pathTitle: "E:first-time-hack@cuhacking.exe",
        title: "Best First Time Hack",
        sponsor: "cuHacking",
        challengeBlock: [
          {
            blockName: "First Time Hack Details",
            blockType: "info",
            title: "getDetails()",
            bullets: [
              {
                point:
                  "A team of rookies? Don’t stress, we have a category for you. Eligible teams must ALL be first time hackers."
              }
            ]
          },
          {
            blockName: "First Time Hack infos",
            blockType: "info",
            title: "getPrompts()",
            bullets: [] // No infos provided
          },
          {
            blockName: "First Time Hack Prizes",
            blockType: "info",
            title: "getPrizes()",
            bullets: [{ point: "Blanket Hoodie" }]
          }
        ]
      }
    
      

        
    ].map(async (challenge) => {
      try {
        const existingSponsor = await payload.find({
          collection: "brands",
          where: { name: { equals: challenge.sponsor } },
          pagination: false,
        });

        const selectedSponsor =
          existingSponsor.docs.length > 0 ? existingSponsor.docs[0].id : null;

        await payload.create({
          collection: "challenges",
          data: {
            pathTitle: challenge.pathTitle,
            sponsor: selectedSponsor,
            title: challenge.title,
            challengeBlock: challenge.challengeBlock
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

