import type { CollectionConfig } from 'payload';
import process from 'node:process';
import { navAccordions } from '@/db/collections/navAccordions';

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
      name: 'building',
      type: 'select',
      options: [
        { label: 'RB', value: 'rb' },
        { label: 'PA', value: 'pa' },
        { label: 'NN', value: 'nn' },
      ],
    },
    {
      name: 'room',
      type: 'text',
    },
    {
      name: 'dateTime',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Workshop', value: 'workshop' },
        { label: 'Networking', value: 'networking' },
        { label: 'Social', value: 'social' },
        { label: 'Food', value: 'food' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'registrationLink',
      type: 'text',
      hooks: {
        beforeChange: [
          ({ data }) => {
            if (data?.id) {
              const baseUrl =
                process.env.NODE_ENV === 'production'
                  ? process.env.CUAHCKING_2025_PORTAL_PUBLIC_URL
                  : process.env.CUHACKING_2025_PORTAL_LOCAL_URL;
              return `${baseUrl}/events/${data.id}/register`;
            }
            return '';
          },
        ],
      },
      admin: {
        description: 'Do not modify or create unless necessary.',
      },
    },
    {
      name: 'attendeeLimit',
      type: 'number',
      admin: {
        description: 'Leave blank if no attendee limit',
      },
    },
    {
      name: 'generalInformation',
      type: 'relationship',
      relationTo: 'events',
      admin: {
        description: 'Select a base event to store general information of the event',
      },
    },
    {
      name: 'formattedTitle',
      type: 'text',
      admin: {
        hidden: true,
      },
      hooks: {
        beforeChange: [
          async ({ data, req }) => {
            if (!data) return 'Error occurred, try again';

            if (data.generalInformation) {
              const eventObj = await req.payload.findByID({
                collection: 'events',
                id: data.generalInformation,
              });

              return eventObj?.title || 'Unknown Event';
            }

            return data.title || 'Untitled Event';
          },
        ],
      },
    },
    {
      name: 'calendarLinks',
      type: 'group',
      admin: {
        description: 'Should be automated in the future. Create GCal event and then add link.',
      },
      fields: [
        { name: 'participant', type: 'text' },
        { name: 'mentor', type: 'text' },
        { name: 'sponsor', type: 'text' },
        { name: 'judge', type: 'text' },
        { name: 'volunteer', type: 'text' },
      ],
    },
    {
      name: 'prerequisites',
      admin: {
        description: 'What should each group bring to the event',
      },
      type: 'group',
      fields: [
        {
          name: 'participant',
          type: 'richText',
          admin: {
            description: 'What should a participant bring to the event',
          },
        },
        {
          name: 'mentor',
          type: 'richText',
          admin: {
            description: 'What should a mentor bring to the event',
          },
        },
        {
          name: 'sponsor',
          type: 'richText',
          admin: {
            description: 'What should a sponsor bring to the event',
          },
        },
        {
          name: 'judge',
          type: 'richText',
          admin: {
            description: 'What should a judge bring to the event',
          },
        },
        {
          name: 'volunteer',
          type: 'richText',
          admin: {
            description: 'What should a volunteer bring to the event',
          },
        },
      ],
    },
  ],
};
