// https://github.com/shefing/payload-tools/tree/main/packages/authorization
import type { User } from '@/db/payload-types.ts'
import type { AccessArgs, CollectionConfig } from 'payload'

type isAuthenticated = (args: AccessArgs<User>) => boolean

export const authenticated: isAuthenticated = ({ req: { user } }) => {
  return Boolean(user)
}

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: [
      'personalInfo.firstName',
      'lastName',
      'preferredName',
      'email',
      'id',
      'updatedAt',
      'createdAt',
    ],
  },
  fields: [
    {
      name: 'personalInfo',
      type: 'group',
      label: 'Personal Information',
      fields: [
        { name: 'firstName', type: 'text', label: 'First Name' },
        { name: 'middleName', type: 'text', label: 'Middle Name' },
        { name: 'lastName', type: 'text', label: 'Last Name' },
        { name: 'preferredName', type: 'text', label: 'Preferred Name' },
        {
          name: 'pronouns',
          type: 'select',
          label: 'Pronouns',
          options: [
            { label: 'He/Him', value: 'he/him' },
            { label: 'She/Her', value: 'she/her' },
            { label: 'They/Them', value: 'they/them' },
            { label: 'Other', value: 'other' },
          ],
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Profile Picture',
        },
      ],
    },

    {
      name: 'brandSocials',
      type: 'group',
      label: 'Brand & Socials',
      fields: [
        {
          name: 'brandRelation',
          type: 'relationship',
          relationTo: 'brands',
          hasMany: false,
          label: 'Associated Brand',
          admin: {
            description:
              'This could be a company, university, or student club.',
          },
        },
        { name: 'linkedIn', type: 'text', label: 'LinkedIn' },
        { name: 'discord', type: 'text', label: 'Discord' },
        { name: 'github', type: 'text', label: 'GitHub' },
        { name: 'behance', type: 'text', label: 'Behance' },
        { name: 'website', type: 'text', label: 'Personal' },
      ],
    },
    {
      name: 'restrictions',
      type: 'group',
      label: 'Restrictions',
      fields: [
        {
          name: 'dietaryRestrictions',
          type: 'select',
          label: '🍽 Dietary Restrictions',
          options: [
            { label: '❌ None', value: 'none' },
            { label: '🥗 Vegetarian', value: 'vegetarian' },
            { label: '🌱 Vegan', value: 'vegan' },
            { label: '🕌 Halal', value: 'halal' },
            { label: '✡ Kosher', value: 'kosher' },
            { label: '🐟 Pescatarian', value: 'pescatarian' },
            { label: '🥛 Dairy-Free', value: 'dairy-free' },
            { label: '🌾 Gluten-Free', value: 'gluten-free' },
            { label: '🍤 Shellfish-Free', value: 'shellfish-free' },
            { label: '🥜 Nut-Free', value: 'nut-free' },
            { label: '🥩 Keto', value: 'keto' },
            { label: '🧀 Low-Lactose', value: 'low-lactose' },
            { label: '🍚 Low-Carb', value: 'low-carb' },
            { label: '🍖 Paleo', value: 'paleo' },
            { label: '⚡ High-Protein', value: 'high-protein' },
            { label: '🌿 Raw Vegan', value: 'raw-vegan' },
            { label: '🥒 Whole30', value: 'whole30' },
            { label: '🍵 Fasting', value: 'fasting' },
            { label: '❓ Other', value: 'other' },
          ],
          hasMany: true,
        },
        {
          name: 'allergies',
          type: 'select',
          label: '⚠ Allergies',
          options: [
            { label: '❌ None', value: 'none' },
            { label: '🥜 Peanuts', value: 'peanuts' },
            { label: '🌰 Tree Nuts', value: 'tree-nuts' },
            { label: '🥛 Dairy', value: 'dairy' },
            { label: '🌾 Gluten', value: 'gluten' },
            { label: '🍤 Shellfish', value: 'shellfish' },
            { label: '🐟 Fish', value: 'fish' },
            { label: '🍯 Soy', value: 'soy' },
            { label: '🍳 Eggs', value: 'eggs' },
            { label: '🥩 Red Meat', value: 'red-meat' },
            { label: '🌽 Corn', value: 'corn' },
            { label: '🥦 Sulfites', value: 'sulfites' },
            { label: '🍎 Fruits', value: 'fruits' },
            { label: '🥕 Vegetables', value: 'vegetables' },
            { label: '☕ Caffeine', value: 'caffeine' },
            { label: '🍯 Honey', value: 'honey' },
            { label: '❓ Other', value: 'other' },
          ],
          hasMany: true,
        },
      ],
    },
    {
      name: 'eventPreferences',
      type: 'group',
      label: 'Event Preferences',
      fields: [
        {
          name: 'tshirtSize',
          type: 'select',
          label: 'T-Shirt Size',
          options: [
            { label: 'XS', value: 'xs' },
            { label: 'S', value: 's' },
            { label: 'M', value: 'm' },
            { label: 'L', value: 'l' },
            { label: 'XL', value: 'xl' },
            { label: '2XL', value: '2xl' },
            { label: '3XL', value: '3xl' },
          ],
        },
        {
          name: 'emergencyContact',
          type: 'group',
          label: 'Emergency Contact',
          fields: [
            { name: 'name', type: 'text', label: 'Full Name' },
            { name: 'preferredName', type: 'text', label: 'Preferred Name' },
            { name: 'phone', type: 'text', label: 'Phone Number' },
            { name: 'email', type: 'text', label: 'Email Address' },
          ],
        },
      ],
    },
  ],
  timestamps: true,
}
