// https://github.com/shefing/payload-tools/tree/main/packages/authorization
/* eslint-disable node/prefer-global/process */

import type { User } from '@/db/payload-types'
import type { AccessArgs, CollectionConfig } from 'payload'
import { adminGroups } from '../adminGroups'

type IsAuthenticated = (args: AccessArgs<User>) => boolean

export const authenticated: IsAuthenticated = ({ req }) => Boolean(req.user)

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
    livePreview: {
      url: `${process.env.CUHACKING_2025_PORTAL_LOCAL_URL}/profile`,
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 320,
          height: 568,
        },
      ],
    },
    group: adminGroups.featured,
    useAsTitle: 'displayName',
    defaultColumns: [
      'displayName',
      // "firstName",
      // "lastName",
      'pronouns',
      'email',
      'updatedAt',
      'createdAt',
      'id',
    ],
    pagination: {
      defaultLimit: 50,
      limits: [10, 20, 50],
    },
  },
  fields: [
    {
      type: 'collapsible',
      label: ({ data }) => data?.title || 'Personal Information',
      fields: [
        { name: 'firstName', type: 'text', label: 'First Name' },
        { name: 'middleName', type: 'text', label: 'Middle Name' },
        { name: 'lastName', type: 'text', label: 'Last Name' },
        { name: 'displayName', type: 'text', label: 'Display Name' },
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
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          label: 'Avatar',
        },
      ],
    },
    {
      type: 'collapsible',
      label: ({ data }) => data?.title || 'Brand & Socials',
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
        { name: 'website', type: 'text', label: 'Personal Website' },
      ],
    },
    {
      type: 'collapsible',
      label: ({ data }) => data?.title || 'Restrictions',
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
      label: ({ data }) => data?.title || 'Event Preferences',
      type: 'collapsible',
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
          label: 'Emergency Contact',
          type: 'collapsible',
          fields: [
            { name: 'emergencyContactFullName', type: 'text', label: 'Emergency Contact Full Name' },
            { name: 'emergencyContactCellPhone', type: 'text', label: 'Emergency Contact Cell Phone Number' },
            { name: 'emergencyContactEmailAddress', type: 'email', label: 'Emergency Contact Email Address' },
          ],
        },
      ],
    },
  ],
  timestamps: true,
}
