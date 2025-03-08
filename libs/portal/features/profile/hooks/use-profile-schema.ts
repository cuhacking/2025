import type { UserDetails } from '@cuhacking/portal/types/user'
import { YearStandings } from '@cuhacking/portal/types/year-standings'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export function useProfileSchema(
  user: Partial<UserDetails>,
  isStudent: boolean,
) {
  const profileSchema = z.object({
    firstName: z
      .string()
      .max(100)
      .refine((value: string) => value !== null && value !== undefined, {
        message: 'Required',
      })
      .refine(value => /^[a-z ]+$/i.test(value), {
        message: 'First name should contain only alphabets',
      }),
    lastName: z
      .string()
      .max(100)
      .refine(value => /^[\p{L}\p{M}' -]+$/u.test(value), {
        message: 'Last name should contain only alphabets',
      }),
    middleName: z.string().max(100).optional().nullable(),
    email: z.string().email().max(100),
    preferredDisplayName: z
      .string()
      .max(100)
      .refine(value => /^[\p{L}\p{M}' -]+$/u.test(value), {
        message: 'Display name should contain only alphabets',
      }),
    gender: z.string(),
    age: z.number().int().refine(value => value >= 18, { message: 'Must be 18 years or older to participate in cuHacking events' }).refine(value => value <= 120, { message: 'Invalid age' }),
    resumeLink: z.string().max(100).url().refine(
      link =>
        /^(?:https:\/\/)?drive\.google\.com\/(?:file\/d\/|open\?id=)[\w-]+/.test(
          link,
        ),
      {
        message: 'Invalid Google Drive link.',
      },
    ),
    yearStanding: z.nativeEnum(YearStandings)
      .optional()
      .refine(
        value => !isStudent || (isStudent && value !== undefined),
        { message: 'Required' },
      )
      .nullable(),
    expectedGraduationDate: z
      .date()
      .optional()
      .refine(value => !isStudent || (isStudent && value), {
        message: 'Required',
      })
      .refine(value => value == null || value >= new Date('2025-01-01'), {
        message: 'Graduation date must be after January 1, 2025',
      })
      .refine(value => value == null || value <= new Date('2035-12-31'), {
        message: 'Graduation date must be before December 31, 2035',
      })
      .nullable(),
    degree: z
      .string()
      .optional()
      .refine(value => !isStudent || (isStudent && value), {
        message: 'Required',
      })
      .nullable(),
    institution: z
      .string()
      .optional()
      .refine(value => !isStudent || (isStudent && value), {
        message: 'Required',
      })
      .nullable(),
    fieldOfStudy: z
      .string()
      .optional()
      .refine(value => !isStudent || (isStudent && value), {
        message: 'Required',
      })
      .nullable(),
    phoneNumber: z
      .string()
      .refine(value => /^\+?[1-9]\d{1,14}$/.test(value), {
        message: 'Invalid phone number format',
      }),
    dietaryRestrictions: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .optional(),
    allergies: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .optional(),
    emergencyContactFullName: z
      .string()
      .max(100)
      .refine(value => /^[\p{L}\p{M}' -]+$/u.test(value), {
        message: 'Emergency contact first name should contain only alphabets',
      }),
    emergencyContactEmail: z
      .string()
      .max(100)
      .email({ message: 'Invalid email' }),
    emergencyContactPhoneNumber: z
      .string()
      .max(100)
      .refine(value => /^\+?[1-9]\d{1,14}$/.test(value), {
        message: 'Invalid emergency contact phone number',
      }),
    emergencyContactRelationship: z
      .string()
      .max(100)
      .refine((value: string) => value !== '', { message: 'Required' }),
    website: z.string().max(100).optional().refine((link) => {
      if (!link)
        return true
      try {
        const url = new URL(link)
        return url.protocol === 'https:'
      }
      catch {
        return false
      }
    }, {
      message: 'Invalid URL',
    }),
  })

  const profile = useForm<UserDetails>({
    resolver: zodResolver(profileSchema),
    defaultValues: user,
    mode: 'onBlur',
  })
  return {
    profile,
    profileSchema,
    isDirty: profile.formState.isDirty,
    isValid: profile.formState.isValid,
  }
}
