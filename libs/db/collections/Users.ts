import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Basic Info
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'middleName',
      type: 'text',
      required: false,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'phoneNumber',
      type: 'text',
      required: true,
      unique: true,
    },

    // Role Info
    {
      name: 'role',
      type: 'select',
      options: ['organizer', 'volunteer', 'mentor', 'judge', 'sponsor-representative'],
      required: true,
    },

    // Clothing and Health Info
    {
      name: 'tShirtSize',
      type: 'select',
      options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      required: true,
    },
    {
      name: 'dietaryRestrictions',
      type: 'text',
      required: false,
    },
    {
      name: 'allergies',
      type: 'text',
      required: false,
    },

    // Social Links
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        { name: 'linkedin', type: 'text', required: false },
        { name: 'website', type: 'text', required: false },
        { name: 'instagram', type: 'text', required: false },
      ],
    },

    // Emergency Contact
    // {
    //   name: 'emergencyContact',
    //   type: 'group',
    //   fields: [
    //     { name: 'firstName', type: 'text', required: true },
    //     { name: 'middleName', type: 'text' },
    //     { name: 'lastName', type: 'text', required: true },
    //     { name: 'email', type: 'email', required: true },
    //     { name: 'phoneNumber', type: 'text', required: true },
    //     { name: 'relationship', type: 'text', required: true },
    //   ],
    // },

    // Academic Info (For Students)
    {
      name: 'academicInfo',
      type: 'group',
      fields: [
        { name: 'school', type: 'select', options: ['Carleton', 'uOttawa', 'Other'], required: false },
        { name: 'levelOfStudy', type: 'select', options: ['Undergraduate', 'Graduate', 'PhD'], required: false },
        { name: 'major', type: 'text', required: false },
        { name: 'yearStanding', type: 'select', options: ['First Year', 'Second Year', 'Third Year', 'Fourth Year', 'Fifth Year', 'Graduate'], required: false },
        { name: 'resume', type: 'text', required: false, label: 'Resume (Google Drive Link)' },
      ],
    },

    {
      name: 'organization',
      type: 'relationship',
      relationTo: 'organizations',
      required: false,
    },

    // Visibility Settings
    {
      name: 'visibilitySettings',
      type: 'group',
      fields: [
        {
          name: 'visibleToOrganizers',
          type: 'checkbox',
          label: 'Visible to Organizers',
          required: false,
        },
        {
          name: 'visibleToVolunteers',
          type: 'checkbox',
          label: 'Visible to Volunteers',
          required: false,
        },
        {
          name: 'visibleToMentors',
          type: 'checkbox',
          label: 'Visible to Mentors',
          required: false,
        },
        {
          name: 'visibleToJudges',
          type: 'checkbox',
          label: 'Visible to Judges',
          required: false,
        },
        {
          name: 'visibleToSponsorReps',
          type: 'checkbox',
          label: 'Visible to Sponsor Representatives',
          required: false,
        },
      ],
    },
  ],
}
