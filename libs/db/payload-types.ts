/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    organization: Organization;
    sponsor: Sponsor;
    teams: Team;
    brands: Brand;
    media: Media;
    emails: Email;
    roles: Role;
    'base-event': BaseEvent;
    'application-form': ApplicationForm;
    'general-event': GeneralEvent;
    'user-to-event': UserToEvent;
    'sponsor-to-event': SponsorToEvent;
    'host-to-event': HostToEvent;
    challengePrize: ChallengePrize;
    users: User;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {
    'general-event': {
      'eventMembers.participants': 'user-to-event';
      'eventMembers.mentors': 'user-to-event';
      'eventMembers.sponsorRepresentatives': 'user-to-event';
      'eventMembers.judges': 'user-to-event';
      'eventMembers.volunteer': 'user-to-event';
      'organizations.sponsor': 'sponsor-to-event';
      'organizations.host': 'host-to-event';
    };
  };
  collectionsSelect: {
    organization: OrganizationSelect<false> | OrganizationSelect<true>;
    sponsor: SponsorSelect<false> | SponsorSelect<true>;
    teams: TeamsSelect<false> | TeamsSelect<true>;
    brands: BrandsSelect<false> | BrandsSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    emails: EmailsSelect<false> | EmailsSelect<true>;
    roles: RolesSelect<false> | RolesSelect<true>;
    'base-event': BaseEventSelect<false> | BaseEventSelect<true>;
    'application-form': ApplicationFormSelect<false> | ApplicationFormSelect<true>;
    'general-event': GeneralEventSelect<false> | GeneralEventSelect<true>;
    'user-to-event': UserToEventSelect<false> | UserToEventSelect<true>;
    'sponsor-to-event': SponsorToEventSelect<false> | SponsorToEventSelect<true>;
    'host-to-event': HostToEventSelect<false> | HostToEventSelect<true>;
    challengePrize: ChallengePrizeSelect<false> | ChallengePrizeSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    constants: Constant;
  };
  globalsSelect: {
    constants: ConstantsSelect<false> | ConstantsSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "organization".
 */
export interface Organization {
  id: number;
  name: string;
  type: 'sponsor' | 'cusaClub' | 'university';
  description: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sponsor".
 */
export interface Sponsor {
  id: number;
  baseOrganization?: (number | null) | Organization;
  formattedTitle: string;
  logo?: (number | null) | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "teams".
 */
export interface Team {
  id: number;
  name?: string | null;
  avatar?: (number | null) | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "brands".
 */
export interface Brand {
  id: number;
  name: string;
  description?: string | null;
  domain?: string | null;
  links?:
    | {
        name?: string | null;
        link?: string | null;
        id?: string | null;
      }[]
    | null;
  email?: string | null;
  phone?: number | null;
  location?: string | null;
  symbol?: (number | null) | Media;
  wordmark?: (number | null) | Media;
  github?: string | null;
  linkedin?: string | null;
  instagram?: string | null;
  discord?: string | null;
  behance?: string | null;
  figma?: string | null;
  linktree?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "emails".
 */
export interface Email {
  id: number;
  title: string;
  body: {
    text: string;
    buttonText: string;
    buttonLink: string;
    footer: string;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "roles".
 */
export interface Role {
  id: number;
  name: string;
  access: string;
  admin?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "base-event".
 */
export interface BaseEvent {
  id: number;
  title: string;
  description?: string | null;
  building?: ('rb' | 'pa' | 'nn') | null;
  room?: string | null;
  dateTime: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "application-form".
 */
export interface ApplicationForm {
  id: number;
  name: string;
  event: number | BaseEvent;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "general-event".
 */
export interface GeneralEvent {
  id: number;
  formattedTitle?: string | null;
  /**
   * Create a base event to store general information of the event
   */
  generalInformation?: (number | null) | BaseEvent;
  type?: ('workshop' | 'networking' | 'social' | 'food' | 'other') | null;
  /**
   * Do not modify or create unless necessary.
   */
  registrationLink?: string | null;
  /**
   * Leave blank if no attendee limit
   */
  attendeeLimit?: number | null;
  eventMembers?: {
    participants?: {
      docs?: (number | UserToEvent)[] | null;
      hasNextPage?: boolean | null;
    } | null;
    mentors?: {
      docs?: (number | UserToEvent)[] | null;
      hasNextPage?: boolean | null;
    } | null;
    sponsorRepresentatives?: {
      docs?: (number | UserToEvent)[] | null;
      hasNextPage?: boolean | null;
    } | null;
    judges?: {
      docs?: (number | UserToEvent)[] | null;
      hasNextPage?: boolean | null;
    } | null;
    volunteer?: {
      docs?: (number | UserToEvent)[] | null;
      hasNextPage?: boolean | null;
    } | null;
  };
  organizations?: {
    sponsor?: {
      docs?: (number | SponsorToEvent)[] | null;
      hasNextPage?: boolean | null;
    } | null;
    host?: {
      docs?: (number | HostToEvent)[] | null;
      hasNextPage?: boolean | null;
    } | null;
  };
  /**
   * Should be automated in the future. Create GCal event and then add link.
   */
  calendarLinks?: {
    participant?: string | null;
    mentor?: string | null;
    sponsor?: string | null;
    judge?: string | null;
    volunteer?: string | null;
  };
  /**
   * What should each each group bring to the event
   */
  prerequisites?: {
    /**
     * What should a participant bring to the event
     */
    participant?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    /**
     * What should a mentor bring to the event
     */
    mentor?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    /**
     * What should a mentor bring to the event
     */
    sponsor?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    /**
     * What should a judge bring to the event
     */
    judge?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    /**
     * What should a volunteer bring to the event
     */
    volunteer?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
  };
  schedule?: (number | BaseEvent)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "user-to-event".
 */
export interface UserToEvent {
  id: number;
  user: number | User;
  event: number | BaseEvent;
  role: number | Role;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  roles?: ('admin' | 'user')[] | null;
  displayName?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  pronouns?: ('he/him' | 'she/her' | 'they/them' | 'other') | null;
  avatar?: (number | null) | Media;
  dietaryRestrictions?:
    | (
        | 'vegetarian'
        | 'vegan'
        | 'halal'
        | 'kosher'
        | 'pescatarian'
        | 'dairy-free'
        | 'gluten-free'
        | 'shellfish-free'
        | 'nut-free'
        | 'keto'
        | 'low-lactose'
        | 'low-carb'
        | 'paleo'
        | 'high-protein'
        | 'raw-vegan'
        | 'whole30'
        | 'fasting'
        | 'other'
      )[]
    | null;
  allergies?:
    | (
        | 'peanuts'
        | 'tree-nuts'
        | 'dairy'
        | 'gluten'
        | 'shellfish'
        | 'fish'
        | 'soy'
        | 'eggs'
        | 'red-meat'
        | 'corn'
        | 'sulfites'
        | 'fruits'
        | 'vegetables'
        | 'caffeine'
        | 'honey'
        | 'other'
      )[]
    | null;
  tshirtSize?: ('xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl') | null;
  emergencyContactFullName?: string | null;
  emergencyContactCell?: string | null;
  emergencyContactEmailAddress?: string | null;
  website?: string | null;
  behance?: string | null;
  linkedinVanity?: string | null;
  linkedinId?: string | null;
  linkedinEmailVerified?: boolean | null;
  linkedinLocale?: string | null;
  githubUrl?: string | null;
  githubEmail?: string | null;
  githubId?: string | null;
  githubAvatarUrl?: string | null;
  githubType?: string | null;
  githubHtmlUrl?: string | null;
  githubName?: string | null;
  githubBlog?: string | null;
  githubLocation?: string | null;
  githubHireable?: string | null;
  githubPublicRepos?: string | null;
  githubLinkedin?: string | null;
  githubInstagram?: string | null;
  discordUsername?: string | null;
  discordGlobalName?: string | null;
  discordVerified?: boolean | null;
  discordDiscriminator?: string | null;
  discordLocale?: string | null;
  discordId?: string | null;
  googleEmail?: string | null;
  googleEmailVerified?: boolean | null;
  linkedinSub?: string | null;
  githubSub?: string | null;
  discordSub?: string | null;
  googleSub?: string | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sponsor-to-event".
 */
export interface SponsorToEvent {
  id: number;
  formattedTitle?: string | null;
  event: number | BaseEvent;
  sponsor: number | Sponsor;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "host-to-event".
 */
export interface HostToEvent {
  id: number;
  formattedTitle?: string | null;
  event: number | BaseEvent;
  host: number | Organization;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "challengePrize".
 */
export interface ChallengePrize {
  id: number;
  formattedTitle?: string | null;
  prizeForPosition?:
    | {
        position?: number | null;
        /**
         * In CAD, if prize is not money, estimate the cost the prize
         */
        prizeMoney?: number | null;
        /**
         * Typically use this for physical prizes (ex. MetaQuest for 1st place)
         */
        otherPrize?: string | null;
        /**
         * If extra detail is necessary
         */
        description?: string | null;
        id?: string | null;
      }[]
    | null;
  /**
   * Prizes that are not part of the central challenge (ex. A raffle prize)
   */
  miscellaneousPrizes?:
    | {
        name?: string | null;
        description?: string | null;
        /**
         * In CAD, if prize is not money, estimate the cost the prize
         */
        prizeMoney?: number | null;
        /**
         * Typically use this for physical prizes (ex. MetaQuest for 1st place)
         */
        otherPrize?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'organization';
        value: number | Organization;
      } | null)
    | ({
        relationTo: 'sponsor';
        value: number | Sponsor;
      } | null)
    | ({
        relationTo: 'teams';
        value: number | Team;
      } | null)
    | ({
        relationTo: 'brands';
        value: number | Brand;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'emails';
        value: number | Email;
      } | null)
    | ({
        relationTo: 'roles';
        value: number | Role;
      } | null)
    | ({
        relationTo: 'base-event';
        value: number | BaseEvent;
      } | null)
    | ({
        relationTo: 'application-form';
        value: number | ApplicationForm;
      } | null)
    | ({
        relationTo: 'general-event';
        value: number | GeneralEvent;
      } | null)
    | ({
        relationTo: 'user-to-event';
        value: number | UserToEvent;
      } | null)
    | ({
        relationTo: 'sponsor-to-event';
        value: number | SponsorToEvent;
      } | null)
    | ({
        relationTo: 'host-to-event';
        value: number | HostToEvent;
      } | null)
    | ({
        relationTo: 'challengePrize';
        value: number | ChallengePrize;
      } | null)
    | ({
        relationTo: 'users';
        value: number | User;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "organization_select".
 */
export interface OrganizationSelect<T extends boolean = true> {
  name?: T;
  type?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sponsor_select".
 */
export interface SponsorSelect<T extends boolean = true> {
  baseOrganization?: T;
  formattedTitle?: T;
  logo?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "teams_select".
 */
export interface TeamsSelect<T extends boolean = true> {
  name?: T;
  avatar?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "brands_select".
 */
export interface BrandsSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  domain?: T;
  links?:
    | T
    | {
        name?: T;
        link?: T;
        id?: T;
      };
  email?: T;
  phone?: T;
  location?: T;
  symbol?: T;
  wordmark?: T;
  github?: T;
  linkedin?: T;
  instagram?: T;
  discord?: T;
  behance?: T;
  figma?: T;
  linktree?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "emails_select".
 */
export interface EmailsSelect<T extends boolean = true> {
  title?: T;
  body?:
    | T
    | {
        text?: T;
        buttonText?: T;
        buttonLink?: T;
        footer?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "roles_select".
 */
export interface RolesSelect<T extends boolean = true> {
  name?: T;
  access?: T;
  admin?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "base-event_select".
 */
export interface BaseEventSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  building?: T;
  room?: T;
  dateTime?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "application-form_select".
 */
export interface ApplicationFormSelect<T extends boolean = true> {
  name?: T;
  event?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "general-event_select".
 */
export interface GeneralEventSelect<T extends boolean = true> {
  formattedTitle?: T;
  generalInformation?: T;
  type?: T;
  registrationLink?: T;
  attendeeLimit?: T;
  eventMembers?:
    | T
    | {
        participants?: T;
        mentors?: T;
        sponsorRepresentatives?: T;
        judges?: T;
        volunteer?: T;
      };
  organizations?:
    | T
    | {
        sponsor?: T;
        host?: T;
      };
  calendarLinks?:
    | T
    | {
        participant?: T;
        mentor?: T;
        sponsor?: T;
        judge?: T;
        volunteer?: T;
      };
  prerequisites?:
    | T
    | {
        participant?: T;
        mentor?: T;
        sponsor?: T;
        judge?: T;
        volunteer?: T;
      };
  schedule?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "user-to-event_select".
 */
export interface UserToEventSelect<T extends boolean = true> {
  user?: T;
  event?: T;
  role?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sponsor-to-event_select".
 */
export interface SponsorToEventSelect<T extends boolean = true> {
  formattedTitle?: T;
  event?: T;
  sponsor?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "host-to-event_select".
 */
export interface HostToEventSelect<T extends boolean = true> {
  formattedTitle?: T;
  event?: T;
  host?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "challengePrize_select".
 */
export interface ChallengePrizeSelect<T extends boolean = true> {
  formattedTitle?: T;
  prizeForPosition?:
    | T
    | {
        position?: T;
        prizeMoney?: T;
        otherPrize?: T;
        description?: T;
        id?: T;
      };
  miscellaneousPrizes?:
    | T
    | {
        name?: T;
        description?: T;
        prizeMoney?: T;
        otherPrize?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  roles?: T;
  displayName?: T;
  firstName?: T;
  middleName?: T;
  lastName?: T;
  pronouns?: T;
  avatar?: T;
  dietaryRestrictions?: T;
  allergies?: T;
  tshirtSize?: T;
  emergencyContactFullName?: T;
  emergencyContactCell?: T;
  emergencyContactEmailAddress?: T;
  website?: T;
  behance?: T;
  linkedinVanity?: T;
  linkedinId?: T;
  linkedinEmailVerified?: T;
  linkedinLocale?: T;
  githubUrl?: T;
  githubEmail?: T;
  githubId?: T;
  githubAvatarUrl?: T;
  githubType?: T;
  githubHtmlUrl?: T;
  githubName?: T;
  githubBlog?: T;
  githubLocation?: T;
  githubHireable?: T;
  githubPublicRepos?: T;
  githubLinkedin?: T;
  githubInstagram?: T;
  discordUsername?: T;
  discordGlobalName?: T;
  discordVerified?: T;
  discordDiscriminator?: T;
  discordLocale?: T;
  discordId?: T;
  googleEmail?: T;
  googleEmailVerified?: T;
  linkedinSub?: T;
  githubSub?: T;
  discordSub?: T;
  googleSub?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "constants".
 */
export interface Constant {
  id: number;
  portal?: {
    dashboard?: {
      cards?:
        | {
            title?: string | null;
            id?: string | null;
          }[]
        | null;
    };
    login?: string | null;
    terms?: {
      title?: string | null;
      description?: string | null;
      accordion?:
        | {
            title?: string | null;
            text?: string | null;
            checkbox?: boolean | null;
            checkboxLabel?: string | null;
            id?: string | null;
          }[]
        | null;
    };
    profile?: string | null;
    registration?: string | null;
  };
  website?: {
    header?: {
      logo?: (number | null) | Media;
      links?:
        | {
            text?: string | null;
            link?: string | null;
            id?: string | null;
          }[]
        | null;
    };
    hero?: string | null;
    about?: string | null;
    events?: string | null;
    sponsors?: string | null;
    faq?:
      | {
          question?: string | null;
          answers?:
            | {
                bullet?: string | null;
                id?: string | null;
              }[]
            | null;
          id?: string | null;
        }[]
      | null;
    footer?:
      | {
          logo?: (number | null) | Media;
          links?:
            | {
                text?: string | null;
                link?: string | null;
                id?: string | null;
              }[]
            | null;
          id?: string | null;
        }[]
      | null;
  };
  settings?: {
    brand?: string | null;
    year?: number | null;
  };
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "constants_select".
 */
export interface ConstantsSelect<T extends boolean = true> {
  portal?:
    | T
    | {
        dashboard?:
          | T
          | {
              cards?:
                | T
                | {
                    title?: T;
                    id?: T;
                  };
            };
        login?: T;
        terms?:
          | T
          | {
              title?: T;
              description?: T;
              accordion?:
                | T
                | {
                    title?: T;
                    text?: T;
                    checkbox?: T;
                    checkboxLabel?: T;
                    id?: T;
                  };
            };
        profile?: T;
        registration?: T;
      };
  website?:
    | T
    | {
        header?:
          | T
          | {
              logo?: T;
              links?:
                | T
                | {
                    text?: T;
                    link?: T;
                    id?: T;
                  };
            };
        hero?: T;
        about?: T;
        events?: T;
        sponsors?: T;
        faq?:
          | T
          | {
              question?: T;
              answers?:
                | T
                | {
                    bullet?: T;
                    id?: T;
                  };
              id?: T;
            };
        footer?:
          | T
          | {
              logo?: T;
              links?:
                | T
                | {
                    text?: T;
                    link?: T;
                    id?: T;
                  };
              id?: T;
            };
      };
  settings?:
    | T
    | {
        brand?: T;
        year?: T;
      };
  _status?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}