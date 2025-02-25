import type { YearStandings } from './year-standings'

export interface User {
  profileStatus: UserProfileStatus
  details: Partial<UserDetails>
}

export interface UserDetails {
  firstName: string
  lastName: string
  avatar?: string
  preferredDisplayName: string
  email: string
  age: number
  yearStanding?: YearStandings
  expectedGraduationDate?: Date
  degree?: string
  institution?: string
  fieldOfStudy?: string
  phoneNumber: string
  emergencyContactFullName: string
  emergencyContactEmail: string
  emergencyContactPhoneNumber: string
  emergencyContactRelationship: string
  middleName?: string
  gender: string
  dietaryRestrictions?: { label: string, value: string }[]
  allergies?: { label: string, value: string }[]
  discordHandle?: string
  githubHandle?: string
  instagramHandle?: string
  behanceHandle?: string
  website?: string
  resumeLink: string
  // isPublicProfile?: boolean
  // isPublicResume?: boolean
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
