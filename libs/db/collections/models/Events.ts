import { navAccordions } from '@/db/collections/navAccordions';
import { getOrUploadMedia } from '@/db/seed';
import type { CollectionConfig, Payload } from 'payload';

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    group: navAccordions.events,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      type: "row",
      fields: [
        {
          name: "location",
          type: "text",
          defaultValue: () => "Carleton University, Richcraft Hall",
        },
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
      ],
    },
    {
      name: 'hosts',
      type: 'relationship',
      relationTo: 'brands',
      hasMany: true
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: '🔊 Ceremony', value: 'ceremony' },
        { label: '💻 Workshop', value: 'workshop' },
        { label: '🥂 Networking', value: 'networking' },
        { label: '🎉 Social', value: 'social' },
        { label: '💡 Hackathon', value: 'hackathon' },  
        { label: '😂 Fun', value: 'fun' },
        { label: '🥑 Food', value: 'food' },
        { label: '🤹 Other', value: 'other' },
        
      ],
      hasMany: true
    },
    {
      name: 'registrationForm',
      type: 'relationship',
      relationTo: 'forms'
    },
        {
          name: 'images',
          type: 'array',
      admin: {
        position: 'sidebar'
      },
          fields: [
            {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
            }
          ]
        },
  ],
};

export async function seedEvents(payload: Payload, req: any) {
  payload.logger.info("🥂 Seeding events data...");

  try {
    await Promise.all(
      [
        {
          title: "Sponsor Check-in and Set up",
          description: "Set up and check in for the hackathon.",
          location: "RB Atrium",
          start: new Date(2025, 2, 14, 20, 0),
          end: new Date(2025, 2, 14, 21, 0),
          type: ["hackathon"],
          images: [{}],
        },
        {
          title: "Photo booth",
          description: "Enjoy a fun photo booth experience.",
          location: "RB Atrium",
          start: new Date(2025, 2, 14, 23, 30),
          end: new Date(2025, 2, 14, 2, 0),
          type: ["fun"],
          images: [{}],
        },        
        {
          title: "Help Desk",
          description: "Visit the help desk for any assistance during the event.",
          location: "RB Atrium",
          start: new Date(2025, 2, 14, 24, 0),
          end: new Date(2025, 2, 16, 3, 0),
          type: ["hackathon"],
          images: [{}],
        },
        {
          title: "Check-in",
          description: "Register your attendance at the main entrance.",
          location: "RB Main Entrance",
          start: new Date(2025, 2, 14, 21, 0),
          end: new Date(2025, 2, 15, 2, 0),
          type: ["hackathon"],
          images: [{}],
        },
        {
          title: "Career Fair",
          description: "Explore career opportunities with our sponsors.",
          location: "RB Atrium",
          start: new Date(2025, 2, 14, 16, 0),
          end: new Date(2025, 2, 14, 21, 0),
          type: ["hackathon"],
          images: [{}],
        },
        {
          title: "FullScript Wellness Room",
          description: "Relax and refresh in the FullScript Wellness Room.",
          location: "RB 3228",
          start: new Date(2025, 2, 14, 23, 30),
          end: new Date(2025, 2, 16, 18, 30),
          type: ["fun", "food"],
          images: [{}],
        },
        {
          title: "Opening Ceremony",
          description: "Kick off the event with the opening ceremony.",
          location: "RB 2200 Seminar Room",
          start: new Date(2025, 2, 14, 22, 0),
          end: new Date(2025, 2, 14, 23, 30),
          type: ["ceremony"],
          images: [{}],
        },
        {
          title: "QNX Rep Room",
          description: "Join the session with QNX representatives about real‑time operating systems.",
          location: "SC 103",
          start: new Date(2025, 2, 14, 22, 30),
          end: new Date(2025, 2, 16, 21, 0),
          type: ["hackathon"],
          images: [{}],
        },
        {
          title: "Photo booth (2nd)",
          description: "Another opportunity to enjoy the photo booth.",
          location: "RB Atrium",
          start: new Date(2025, 2, 14, 21, 30),
          end: new Date(2025, 2, 14, 22, 0),
          type: ["fun"],
          images: [{}],
        },
        {
          title: "Iftaar / Muslim Fast Break",
          description: "Take a break for Iftaar and a Muslim fast break.",
          location: "RB Student Lounge Corridor, Floor 2",
          start: new Date(2025, 2, 14, 23),
          end: new Date(2025, 2, 14, 23, 30),
          type: ["food"],
          images: [{}],
        },
        {
          title: "Team Formation",
          description: "Collaborate with fellow participants to form teams.",
          location: "RB 2200 Seminar Room",
          start: new Date(2025, 2, 14, 23, 30),
          end: new Date(2025, 2, 14, 24, 30),
          type: ["hackathon"],
          images: [{}],
        },
        {
          title: "Dinner",
          description: "Enjoy dinner provided by our sponsors.",
          location: "RB Student Lounge Corridor, Floor 2",
          start: new Date(2025, 2, 14, 24, 0),
          end: new Date(2025, 2, 15, 2, 30),
          type: ["food"],
          images: [{}],
        },
        {
          title: "Hacking",
          description: "Hack and build projects during the hackathon.",
          location: "Hackathon Area",
          start: new Date(2025, 2, 14, 24, 0),
          end: new Date(2025, 2, 16, 13, 30),
          type: ["hackathon"],
          images: [{}],
        },
        {   
          title: "QNX Hardware  Hacking Space",
          description: "Participate in QNX hardware` ch`eckout and workshop sessions.",
          location: "RB 1201",
          start: new Date(2025, 2, 14, 21, 0),
          end: new Date(2025, 2, 16, 20, 30),
          type: ["workshop"],
          images: [{}],
        },
        {   
          title: "QNX Hardware Checkout, Workshop, and Help Drop-ins",
          description: "Take out your hardware",
          location: "RB 1201",
          start: new Date(2025, 2, 15, 1, 0),
          end: new Date(2025, 2, 15, 2, 30),
          type: ["workshop"],
          images: [{}],
        },
        {
          title: "Fullscript Help Desk",
          description: "Get support from the Fullscript Help Desk.",
          location: "mentor booth",
          start: new Date(2025, 2, 15, 22, 0),
          end: new Date(2025, 2, 15, 24, 0),
          type: ["workshop"],
          images: [{}],
        },
        {
          title: "Workshop Mentor Booths",
          description: "Meet mentors at the workshop booths.",
          location: "RB 1201",
          start: new Date(2025, 2, 14, 19, 0),
          end: new Date(2025, 2, 15, -4, 0),
          type: ["workshop"],
          images: [{}],
        },
        {
          title: "Gadget Workshop",
          description: "Learn about the latest gadgets in this workshop.",
          location: "RB 1201",
          start: new Date(2025, 2, 14, 3,0),
          end: new Date(2025, 2, 14, 4, 0),
          type: ["workshop"],
          images: [{}],
        },
        {
          title: "SESA: First Hackathon Tips",
          description: "Get tips on making the most of your first hackathon.",
          location: "RB 1200",
          start: new Date(2025, 2, 15, 1, 30, 0),
          end: new Date(2025, 2, 15, 2, 0),
          type: ["workshop"],
          images: [{}],
        },
        {
          title: "Movie Night",
          description: "Relax with a movie night to unwind from the hackathon hustle.",
          location: "RB 2200 Seminar Room",
          start: new Date(2025, 2, 15, 6, 0),
          end: new Date(2025, 2, 15, 8, 0),
          type: ["fun"],
          images: [{}],
        },
        {
          title: "Snacks",
          description: "Grab some snacks during the event.",
          location: "RB Student Lounge Corridor, Floor 2",
          start: new Date(2025, 2, 15, 4, 0),
          end: new Date(2025, 2, 15, 9, 0),          
          type: ["food"],
          images: [{}],
        },
        {
          title: "Game Room",
          description: "Enjoy a session in the game room.",
          location: "RB 3112",
          start: new Date(2025, 2, 15, 4, 30),
          end: new Date(2025, 2, 15, 13, 30),
          type: ["fun"],
          images: [{}],
        },
        {
          title: "Origami",
          description: "Participate in an origami session.",
          location: "RB 3220",
          start: new Date(2025, 2, 15, 12, 0),
          end: new Date(2025, 2, 15, 13, 0),
          type: ["fun"],
          images: [{}],
        },
        {
          title: "Figma 101 Workshop",
          description: "Learn Figma basics in this workshop.",
          location: "RB 1201",
          start: new Date(2025, 2, 15, 14, 0),
          end: new Date(2025, 2, 15, 15, 0),
          type: ["workshop"],
          images: [{}],
        },
        {
          title: "Spicy Ramen Challenge",
          description: "Take on the spicy ramen challenge.",
          location: "RB 3220",
          start: new Date(2025, 2, 15, 3, 0),
          end: new Date(2025, 2, 16, 4, 0),
          type: ["fun"],
          images: [{}],
        },
        {
          title: "Breakfast 1",
          description: "Start your day with a hearty breakfast.",
          location: "RB Student Lounge Corridor, Floor 2",
          start: new Date(2025, 2, 15, 11, 0),
          end: new Date(2025, 2, 15, 15, 0),
          type: ["food"],
          images: [{}],
        },
        {
          title: "CSE Workshop",
          description: "Attend the CSE workshop session.",
          location: "RB 1200",
          start: new Date(2025, 2, 15, 14, 0),
          end: new Date(2025, 2, 15, 15, 30),
          type: ["workshop"],
          images: [{}],
        },
        {
          title: "Redbull Cans & Gaming Station",
          description: "Enjoy Redbull and gaming at our station.",
          location: "RB Atrium",
          start: new Date(2025, 2, 15, 15, 0),
          end: new Date(2025, 2, 15, 21, 0),
          type: ["hackathon"],
          images: [{}],
        },
        {
          title: "Career Fair (2nd)",
          description: "Explore career opportunities with our sponsors.",
          location: "RB Atrium",
          start: new Date(2025, 2, 15, 16, 0),
          end: new Date(2025, 2, 15, 21, 0),
          type: ["hackathon"],
          images: [{}],
        },
        {
          title: "SESA Resume & Linkedin Roast",
          description: "Improve your resume and LinkedIn profile with expert advice.",
          location: "RB 2200 Seminar Room",
          start: new Date(2025, 2, 15, 16, 0),
          end: new Date(2025, 2, 15, 17, 0),
          type: ["workshop", "fun", "other"],
          images: [{}],
        },
        {
          title: "Lunch",
          description: "Enjoy a delicious lunch break.",
          location: "RB Student Lounge Corridor, Floor 2",
          start: new Date(2025, 2, 15, 17, 0),
          end: new Date(2025, 2, 15, 19, 0),
          type: ["food"],
          images: [{}],
        },
        {
          title: "Intro to Cybersecurity Workshop",
          description: "Learn the basics of cybersecurity.",
          location: "RB 1201",
          start: new Date(2025, 2, 15, 17, 0),
          end: new Date(2025, 2, 15, 19, 0),
          type: ["workshop"],
          images: [{}],
        },
        {
          title: "Introduction to AI APIs",
          description: "An introduction to using AI APIs.",
          location: "RB 1200",
          start: new Date(2025, 2, 15, 16, 0),
          end: new Date(2025, 2, 15, 17, 0),
          type: ["workshop"],
          images: [{}],
        },
        {
          title: "Intro to Robotics Workshop",
          description: "Get started with robotics in this workshop.",
          location: "RB 1200",
          start: new Date(2025, 2, 15, 21, 0),
          end: new Date(2025, 2, 15, 23, 0),
          type: ["workshop"],
          images: [{}],
        },
        {
          title: "Dinner",
          description: "Enjoy a hearty dinner.",
          location: "RB Student Lounge Corridor, Floor 2",
          start: new Date(2025, 2, 15, 22, 0),
          end: new Date(2025, 2, 15, 24, 30),
          type: ["food"],
          images: [{}],
        },
        {
          title: "Iftaar / Muslim Fast Break (2nd)",
          description: "Take a break for Iftaar.",
          location: "RB Student Lounge Corridor, Floor 2",
          start: new Date(2025, 2, 15, 23, 30),
          end: new Date(2025, 2, 15, 24, 30),
          type: ["food"],
          images: [{}],
        },
        {
          title: "How to Pitch Your Project Workshop",
          description: "Learn how to effectively pitch your project.",
          location: "RB 1200",
          start: new Date(2025, 2, 15, 1, 0),
          end: new Date(2025, 2, 15, 2, 0),
          type: ["workshop"],
          images: [{}],
        },
        {
          title: "Game Room (2nd)",
          description: "Another session in the game room.",
          location: "RB 3112",
          start: new Date(2025, 2, 16, 4, 0),
          end: new Date(2025, 2, 16, 13, 0),
          type: ["fun"],
          images: [{}],
        },
        {
          title: "Snacks (2nd)",
          description: "Grab some snacks.",
          location: "RB Student Lounge Corridor, Floor 2",
          start: new Date(2025, 2, 16, 12, 0),
          end: new Date(2025, 2, 16, 17, 0),
          type: ["food"],
          images: [{}],
        },
        {
          title: "Karaoke",
          description: "Sing your heart out in our karaoke session.",
          location: "RB 2200 Seminar Room",
          start: new Date(2025, 2, 16, 4, 0),
          end: new Date(2025, 2, 16, 3, 0),
          type: ["fun"],
          images: [{}],
        },
        {
          title: "Breakfast 2",
          description: "Enjoy a second breakfast.",
          location: "RB Student Lounge Corridor, Floor 2",
          start: new Date(2025, 2, 16, 11, 0),
          end: new Date(2025, 2, 16, 15, 0),
          type: ["food"],
          images: [{}],
        },
        {
          title: "Judging",
          description: "Judging of hackathon projects.",
          location: "Hackathon RB (Main Stage?)",
          start: new Date(2025, 2, 16, 16, 0),
          end: new Date(2025, 2, 16, 17, 45),
          type: ["hackathon"],
          images: [{}],
        },
        {
          title: "Lunch (2nd)",
          description: "Enjoy a post-judging lunch.",
          location: "RB Student Lounge Corridor, Floor 2",
          start: new Date(2025, 2, 16, 17, 0),
          end: new Date(2025, 2, 16, 19, 0),
          type: ["food"],
          images: [{}],
        },
        {
          title: "Closing Ceremony",
          description: "Celebrate the end of the hackathon with awards.",
          location: "RB 2200 Seminar Room",
          start: new Date(2025, 2, 16, 19, 0),
          end: new Date(2025, 2, 16, 20, 0),
          type: ["ceremony"],
          images: [{}],
        },
        {
          title: "MLH Github Copilot Workshop",
          description: "Learn about MLH Github Copilot in this workshop.",
          location: "TBD",
          start: new Date(2025, 2, 15, 13, 0),
          end: new Date(2025, 2, 15, 14, 0),
          type: ["workshop"],
          images: [{}],
        },
      ].map(async (event) => {
        const mediaIds = await Promise.all(
          event.images.map(async (image, index) => {
            return (
              await getOrUploadMedia(
                payload,
                req,
                image.image,
                `${event.title.toLowerCase().replace(/\s+/g, "-")}-image-${index}.png`,
                `${event.title} Image`,
              )
            )?.id;
          })
        );

        await payload.create({
          collection: "events",
          data: {
            images: mediaIds
              .filter(Boolean)
              .map((id) => ({ id, image: { id } })),
            title: event.title,
            description: event.description,
            location: event.location,
            start: event.start,
            end: event.end,
            type: event.type,
          },
        });

        payload.logger.info(`✅ Inserted event: ${event.title}`);
      })
    );

    payload.logger.info("✅ All event seed data successfully inserted!");
  } catch (error) {
    payload.logger.error(
      `❌ Error seeding event data: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}
