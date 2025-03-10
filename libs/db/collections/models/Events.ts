import type { CollectionConfig, Payload } from 'payload';
import { navAccordions } from '@/db/collections/navAccordions';
import { getOrUploadMedia } from '@/db/seed';

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
        { label: '💻 Workshop', value: 'workshop' },
        { label: '🥂 Networking', value: 'networking' },
        { label: '🎉 Social', value: 'social' },
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
          title: "Opening Ceremony",
          description: "Kickstart the hackathon with an introduction to the event, sponsors, and keynotes.",
          location: "Carleton University, Richcraft Hall",
          start: new Date(2025, 2, 15, 9, 0),
          end: new Date(2025, 2, 15, 10, 0),
          type: ["other"],
          images: [
            { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/2826/8360/879-1__51603.1644937292.jpg?c=2" }
          ],
        },
        {
          title: "Intro to QNX",
          description: "Join our workshop held by QNX representatives to learn about their real-time operating systems.",
          location: "Carleton University, TB 210",
          start: new Date(2025, 2, 15, 11, 0),
          end: new Date(2025, 2, 15, 12, 30),
          type: ["workshop"],
          images: [
            { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/2826/8360/879-1__51603.1644937292.jpg?c=2" }
          ],
        },
        {
          title: "Lunch Break",
          description: "Recharge with a variety of food options provided by our sponsors.",
          location: "Carleton University, Hackathon Lounge",
          start: new Date(2025, 2, 15, 12, 30),
          end: new Date(2025, 2, 15, 13, 30),
          type: ["food"],
          images: [
            { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/2826/8360/879-1__51603.1644937292.jpg?c=2" }
          ],
        },
        {
          title: "Computer Vision Workshop",
          description: "Learn how to use computer vision in real-world applications.",
          location: "Carleton University, TB 210",
          start: new Date(2025, 2, 15, 14, 0),
          end: new Date(2025, 2, 15, 15, 30),
          type: ["workshop"],
          images: [
            { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/2826/8360/879-1__51603.1644937292.jpg?c=2" }
          ],
        },
        {
          title: "AI/ML for Beginners",
          description: "An introductory session on machine learning concepts and applications.",
          location: "Carleton University, Room B312",
          start: new Date(2025, 2, 15, 16, 0),
          end: new Date(2025, 2, 15, 17, 30),
          type: ["workshop"],
          images: [
            { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/2826/8360/879-1__51603.1644937292.jpg?c=2" }
          ],
        },
        {
          title: "Networking Session",
          description: "Connect with industry professionals, sponsors, and fellow hackers.",
          location: "Carleton University, Innovation Hub",
          start: new Date(2025, 2, 15, 18, 0),
          end: new Date(2025, 2, 15, 19, 0),
          type: ["networking"],
          images: [
            { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/2826/8360/879-1__51603.1644937292.jpg?c=2" }
          ],
        },
        {
          title: "Midnight Pizza Party",
          description: "Take a break, enjoy some pizza, and meet fellow hackers.",
          location: "Carleton University, Hackathon Lounge",
          start: new Date(2025, 2, 16, 0, 0),
          end: new Date(2025, 2, 16, 1, 0),
          type: ["food", "social"],
          images: [
            { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/2826/8360/879-1__51603.1644937292.jpg?c=2" }
          ],
        },
        {
          title: "Cybersecurity 101",
          description: "Learn the basics of cybersecurity and ethical hacking.",
          location: "Carleton University, Room C202",
          start: new Date(2025, 2, 16, 10, 0),
          end: new Date(2025, 2, 16, 11, 30),
          type: ["workshop"],
          images: [
            { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/2826/8360/879-1__51603.1644937292.jpg?c=2" }
          ],
        },
        {
          title: "Brunch & Brainstorming",
          description: "Grab brunch and refine your hackathon project with mentors.",
          location: "Carleton University, Mentor Lounge",
          start: new Date(2025, 2, 16, 11, 30),
          end: new Date(2025, 2, 16, 13, 0),
          type: ["food", "networking"],
          images: [
            { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/2826/8360/879-1__51603.1644937292.jpg?c=2" }
          ],
        },
        {
          title: "Game Night 🎮",
          description: "Relax and take a break from hacking with some fun games.",
          location: "Carleton University, Social Lounge",
          start: new Date(2025, 2, 16, 20, 0),
          end: new Date(2025, 2, 16, 22, 0),
          type: ["social"],
          images: [
            { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/2826/8360/879-1__51603.1644937292.jpg?c=2" }
          ],
        },
        {
          title: "Closing Ceremony & Awards",
          description: "Celebrate the amazing projects and winners of the hackathon!",
          location: "Carleton University, Richcraft Hall",
          start: new Date(2025, 2, 17, 16, 0),
          end: new Date(2025, 2, 17, 17, 30),
          type: ["other"],
          images: [
            { image: "https://cdn11.bigcommerce.com/s-am5zt8xfow/images/stencil/1280x1280/products/2826/8360/879-1__51603.1644937292.jpg?c=2" }
          ],
        }
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
