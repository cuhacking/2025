import type { CollectionConfig } from 'payload'
import { isAdmin } from '@cuhacking/db/access/isAdmin'

export const User: CollectionConfig = {
  slug: 'user',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    update: isAdmin,
    create: () => true,
    delete: () => true,
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
      name: 'roles',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Organizer', value: 'organizer' },
        { label: 'General Member', value: 'generalMember' },
        { label: 'Super Admin', value: 'superAdmin' },
        { label: 'Volunteer', value: 'volunteer' },
        { label: 'Mentor', value: 'mentor' },
        { label: 'Judge', value: 'judge' },
        { label: 'Sponsor Representative', value: 'sponsorRepresentative' },
      ],
      required: true,
    },
    // Clothing and Health Info
    {
      name: 'tShirtSize',
      type: 'select',
      options: [
        { label: 'XS', value: 'xs' },
        { label: 'S', value: 's' },
        { label: 'M', value: 'm' },
        { label: 'L', value: 'l' },
        { label: 'XL', value: 'xl' },
        { label: 'XXL', value: 'xxl' },
      ],
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
    // Explanation: Didn't noramlize b/c it'd overengineer the portal to do so, we just need to collect this info, not create any profiles
    {
      name: 'emergencyContact',
      type: 'group',
      fields: [
        { name: 'firstName', type: 'text', required: true },
        { name: 'middleName', type: 'text' },
        { name: 'lastName', type: 'text', required: true },
        { name: 'email', type: 'email', required: true },
        { name: 'phoneNumber', type: 'text', required: true },
        { name: 'relationship', type: 'text', required: true },
      ],
    },
    {
      name: 'organizations',
      type: 'join',
      on: 'user',
      collection: 'user-to-organization',
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

export const Student: CollectionConfig = {
  slug: 'student',
  admin: {
    useAsTitle: 'formattedTitle',
  },
  fields: [
    {
      name: 'formattedTitle',
      type: 'text',
      admin: {
        hidden: true,
      },
      hooks: {
        beforeChange: [
          async ({ data, req }) => {
            const { user } = data as any

            const userObj = user
              ? await req.payload.findByID({ collection: 'user', id: user })
              : null

            const userEmail = userObj?.email || 'Unknown User'

            return userEmail
          },
        ],
      },
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'user',
    },
    {
      name: 'school',
      type: 'select',
      options: [
        { label: 'Carleton', value: 'carleton' },
        { label: 'uOttawa', value: 'uOttawa' },
        { label: 'Other', value: 'other' },
      ],
      required: false,
    },
    {
      name: 'levelOfStudy',
      type: 'select',
      options: [
        { label: 'Undergraduate', value: 'undergraduate' },
        { label: 'Graduate', value: 'graduate' },
        { label: 'PhD', value: 'phd' },
      ],
      required: false,
    },
    {
      name: 'major',
      type: 'text',
      required: false,
    },
    {
      name: 'yearStanding',
      type: 'select',
      options: [
        { label: 'First Year', value: 'firstYear' },
        { label: 'Second Year', value: 'secondYear' },
        { label: 'Third Year', value: 'thirdYear' },
        { label: 'Fourth Year', value: 'fourthYear' },
        { label: 'Fifth Year', value: 'fifthYear' },
        { label: 'Graduate', value: 'graduate' },
      ],
      required: false,
    },
    {
      name: 'resume',
      type: 'text',
      required: false,
      label: 'Resume (Google Drive Link)',
    },
  ],
}
