import type { tShirtSizes } from './tShirt'

export interface User {
  profileStatus: UserProfileStatus
  details: Partial<UserDetails>
}

export interface UserDetails {
  firstName: string
  lastName: string
  avatar: string
  preferredDisplayName: string
  email: string
  tShirtSize: tShirtSizes
  age: number
  isStudent: boolean
  yearStanding?: number
  expectedGraduationDate?: Date
  degree?: string
  institution?: string
  fieldOfStudy?: string
  phoneNumber: string
  emergencyContactFirstName: string
  emergencyContactLastName: string
  emergencyContactPhoneNumber: string
  emergencyContactRelationship: string
  middleName?: string
  gender: string
  ethnicBackground?: string
  dietaryRestrictions?: { label: string, value: string }[]
  allergies?: { label: string, value: string }[]
  discordHandle?: string
  githubHandle?: string
  instagramHandle?: string
  behanceHandle?: string
  website?: string
  isPublicProfile?: boolean
  isPublicResume?: boolean
}

export enum UserProfileStatus {
  complete = 'complete',
  notComplete = 'not_complete',
}
export enum UserHackathonApplicationStatus {
  complete = 'complete',
  notComplete = 'not_complete',
  pending = 'pending',
}
